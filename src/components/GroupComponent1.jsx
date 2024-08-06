import styled from "styled-components";
import PropTypes from "prop-types";

const B = styled.b`
  position: absolute;
  top: 4px;
  left: -8.2px;
  display: flex;
  width: 136.7px;
  font-weight: 700;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-mini);
    text-align: center;
    color: var(--color-linen-100);
    display: flex;
    width: 136.7px;
    height: auto;
  }
`;
const FrameChild = styled.img`
  position: absolute;
  top: 13px;
  left: 6.5px;
  width: 103px;
  height: 4px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 103px;
    height: 4px;
  }
`;
const Parent = styled.div`
  height: 26px;
  flex: 1;
  position: relative;
  border-radius: 13.02px;
  background-color: var(--color-deepskyblue-100);
  white-space: nowrap;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    flex: 1;
    height: 26px;
    border-radius: 13.02px;
    white-space: nowrap;
  }
`;
const KeywordsTitle = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-10xs) 0px var(--padding-7xs);
  box-sizing: border-box;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px var(--padding-10xs) 0px var(--padding-7xs);
    box-sizing: border-box;
  }
`;
const Div = styled.div`
  align-self: stretch;
  height: auto;
  position: relative;
  display: flex;
  width: auto;
  z-index: 1;
  &:hover {
    font-family: var(--font-inter);
    font-size: var(--font-size-52xl-6);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-38xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-24xl);
  }
`;
const Div1 = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  height: auto;
  z-index: 1;
  &:hover {
    font-family: var(--font-inter);
    font-size: var(--font-size-mini);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const WordLabels = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-base) 0px var(--padding-xs);
  box-sizing: border-box;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  font-size: var(--font-size-mini);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-base) 0px var(--padding-xs);
    box-sizing: border-box;
  }
`;
const Icons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-5xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const VisualsContent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32.15px;
  flex-shrink: 0;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: 32.15px;
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    flex-shrink: 0;
  }
`;
const VisualsContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-3xs-6);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-3xs-6);
    box-sizing: border-box;
  }
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 13.02px;
  background-color: var(--color-deepskyblue-100);
  width: 8.7px;
  height: 285.3px;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 8.7px;
    height: 285.3px;
    border-radius: 13.02px;
  }
`;
const KeyvisualsInner = styled.div`
  height: 384px;
  width: 8.7px;
  position: relative;
  border-radius: 13.02px;
  background-color: var(--color-silver);
  flex-shrink: 0;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-silver);
    display: flex;
    width: 8.7px;
    height: 384px;
    border-radius: 13.02px;
    flex-shrink: 0;
  }
`;
const Keyvisuals = styled.div`
  width: 99.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lgi-5);
  height: auto;
  transform: rotate(0deg);
  font-size: var(--font-size-52xl-6);
  color: var(--color-darkslategray-100);
  &:hover {
    display: flex;
    width: 99.8px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-lgi-5);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const KeywordsTitleParentRoot = styled.div`
  width: 139.9px;
  border-radius: 13.02px;
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-7xs) var(--padding-4xl-8);
  box-sizing: border-box;
  gap: var(--gap-xs-2);
  height: auto;
  text-align: center;
  font-size: var(--font-size-mini);
  color: var(--color-linen-100);
  font-family: var(--font-inter);
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 139.9px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-xs-2);
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 13.02px;
    padding: var(--padding-base) var(--padding-7xs) var(--padding-4xl-8);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const GroupComponent1 = ({ className = "" }) => {
  return (
    <KeywordsTitleParentRoot className={className}>
      <KeywordsTitle>
        <Parent>
          <B>추출 키워드</B>
          <FrameChild loading="lazy" alt="" src="/group-191.svg" />
        </Parent>
      </KeywordsTitle>
      <Keyvisuals>
        <VisualsContentWrapper>
          <VisualsContent>
            <Icons>
              <Div>❄️</Div>
              <WordLabels>
                <Div1>#겨울</Div1>
              </WordLabels>
            </Icons>
            <Icons>
              <Div>😎</Div>
              <WordLabels>
                <Div1>#시크</Div1>
              </WordLabels>
            </Icons>
            <Icons>
              <Div>🙋‍♂️</Div>
              <WordLabels>
                <Div1>#청년</Div1>
              </WordLabels>
            </Icons>
          </VisualsContent>
        </VisualsContentWrapper>
        <KeyvisualsInner>
          <FrameItem />
        </KeyvisualsInner>
      </Keyvisuals>
    </KeywordsTitleParentRoot>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
