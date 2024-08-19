const serverUrl = import.meta.env.VITE_SERVER_URL;
const API_BASE_URL = serverUrl + '/api';

export async function createPlayer(nickname, characterId, sessionId = null) {
  const url = sessionId
    ? `${API_BASE_URL}/players/guest/${sessionId}`
    : `${API_BASE_URL}/players/host`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nickname, characterId }),
  });

  if (!response.ok) {
    throw new Error('Failed to create player');
  }

  return response.json();
}

export async function updateGameSettings(sessionId, settings, token) {
  const response = await fetch(`${API_BASE_URL}/sessions/${sessionId}/settings`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(settings),
  });

  if (!response.ok) {
    throw new Error('Failed to update game settings');
  }

  return response.text();
}