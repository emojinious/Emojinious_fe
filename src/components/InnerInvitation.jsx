import styled from "styled-components";
import PropTypes from "prop-types";

const InnerInvitationChild = styled.img`
  height: 60px;
  width: 60px;
  position: relative;
  min-height: 60;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 60px;
    height: 60px;
    min-height: 60;
  }
`;
const B = styled.b`position: relative;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-linen-100);
  text-align: left;
  min-width: 105;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 2;
  &:hover {
  font-weight: 700;
  font-family: var(--font-inter);
  font-size: var(--font-size-xl);
  text-align: left;
  color: var(--color-linen-100);
  display: flex;
  width: auto;
  align-self: unset;
  height: auto;
  min-width: 105;
  }
  color: ${(p) => p.propColor}
  min-width: ${(p) => p.propMinWidth1}
`;
const NestedJerry = styled.button`cursor: pointer;
  border: none;
  padding: var(--padding-mid) var(--padding-24xl) var(--padding-sm) var(--padding-32xl);
  background-color: var(--color-tomato-200);
  flex: 1;
  border-radius: var(--br-xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  min-width: 105;
  white-space: nowrap;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
  background-color: var(--color-tomato-100);
  display: flex;
  flex: 1;
  height: auto;
  flex-direction: row;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  border-radius: var(--br-xs);
  padding: var(--padding-mid) var(--padding-24xl) var(--padding-sm) var(--padding-32xl);
  box-sizing: border-box;
  min-width: 105;
  white-space: nowrap;
  }
  &:active {
  background-color: var(--color-tomato-200);
  }
  background-color: ${(p) => p.propBackgroundColor}
  min-width: ${(p) => p.propMinWidth}
`;
const UnionIcon = styled.img`
  align-self: stretch;
  width: 120px;
  position: relative;
  max-height: 100%;
  min-height: 58;
  display: flex;
  height: auto;
  z-index: 1;
  &:hover {
    background-color: var(--color-tomato-300);
    display: flex;
    width: 120px;
    align-self: stretch;
    height: auto;
    min-height: 58;
  }
`;
const H = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: flex;
  width: auto;
  height: auto;
  z-index: 2;
  &:hover {
    font-family: var(--font-inter);
    font-size: var(--font-size-16xl);
    text-align: left;
    color: var(--color-gray-200);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-9xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
  }
`;
const FirstReaction = styled.div`
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  margin-left: -69px;
  &:hover {
    display: flex;
    width: 35px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const EmojiReaction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-15xl) 0px 0px;
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-82xs);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: row;
    gap: var(--gap-82xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-15xl) 0px 0px;
    box-sizing: border-box;
  }
`;
const JerryInvitation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  min-width: 211;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    gap: var(--gap-7xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 211;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const InnerInvitationRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-16xl);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-5xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const InnerInvitation = ({
  className = "",
  group174,
  propBackgroundColor,
  propMinWidth,
  propBackgroundColor1,
  prop,
  propColor,
  propMinWidth1,
  union,
  prop1,
}) => {
  return (
    <InnerInvitationRoot className={className}>
      <InnerInvitationChild loading="lazy" alt="" src={group174} />
      <JerryInvitation>
        <NestedJerry
          propBackgroundColor={propBackgroundColor}
          propMinWidth={propMinWidth}
        >
          <B propColor={propColor} propMinWidth1={propMinWidth1}>
            {prop}
          </B>
        </NestedJerry>
        <EmojiReaction>
          <UnionIcon loading="lazy" alt="" src={union} />
          <FirstReaction>
            <H>{prop1}</H>
          </FirstReaction>
        </EmojiReaction>
      </JerryInvitation>
    </InnerInvitationRoot>
  );
};

InnerInvitation.propTypes = {
  className: PropTypes.string,
  group174: PropTypes.string,
  prop: PropTypes.string,
  union: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default InnerInvitation;
