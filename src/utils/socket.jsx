import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
window.global = window;

let stompClient = null;

export function connectToSocket(token, playerId, sessionId, onConnectSuccess) {
  return new Promise((resolve, reject) => {
    const socket = new SockJS('http://yhcho.ddns.net:8081/ws');
    stompClient = Stomp.over(socket);

    const headers = {
      'Authorization': `Bearer ${token}`
    };

    stompClient.connect(headers, function(frame) {
      console.log('Connected: ' + frame);
      
      // 연결 확인 메시지 전송
      stompClient.send("/app/connect", {}, JSON.stringify({playerId: playerId, token: token}));

      stompClient.subscribe('/user/queue/connect-ack', function(message) {
        if (message.body === "Connected successfully") {
          console.log("Connection acknowledged by server");
          subscribeToGameTopics(sessionId);
          joinGame(sessionId);
          if (onConnectSuccess) {
            onConnectSuccess();
          }
          resolve(stompClient);
        } else {
          console.error("Connection failed");
          reject(new Error("Connection failed"));
        }
      });
    }, function(error) {
      console.error('STOMP connection error:', error);
      reject(error);
    });
  });
}

function subscribeToGameTopics(sessionId) {
  if (!stompClient) {
    console.error('STOMP client is not initialized');
    return;
  }
  stompClient.subscribe(`/topic/game/${sessionId}`, function(gameState) {
    console.log('Received game state:', JSON.parse(gameState.body));
  });
  stompClient.subscribe(`/topic/game/${sessionId}/chat`, function(chatMessage) {
    console.log('Received chat message:', JSON.parse(chatMessage.body));
  });
}

export function joinGame(sessionId) {
  if (!stompClient) {
    console.error('STOMP client is not initialized');
    return;
  }
  stompClient.send(`/app/game/${sessionId}/join`, {}, JSON.stringify({}));
}

export function sendChatMessage(sessionId, content) {
  if (!stompClient) {
    console.error('STOMP client is not initialized');
    return;
  }
  stompClient.send(`/app/game/${sessionId}/chat`, {}, JSON.stringify({ content }));
}

export function startGame(sessionId) {
  if (!stompClient) {
    console.error('STOMP client is not initialized');
    return;
  }
  stompClient.send(`/app/game/${sessionId}/start`, {}, JSON.stringify({}));
}

export function submitPrompt(sessionId, prompt) {
  if (!stompClient) {
    console.error('STOMP client is not initialized');
    return;
  }
  stompClient.send(`/app/game/${sessionId}/prompt`, {}, JSON.stringify({ prompt }));
}

export function submitGuess(sessionId, guess) {
  if (!stompClient) {
    console.error('STOMP client is not initialized');
    return;
  }
  stompClient.send(`/app/game/${sessionId}/guess`, {}, JSON.stringify({ guess }));
}

export function disconnect() {
  if (stompClient) {
    stompClient.disconnect();
    stompClient = null;
  }
}