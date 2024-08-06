import styled from "styled-components";
import PropTypes from "prop-types";

const DivRoot = styled.div`
  width: 595px;
  height: 703px;
  position: relative;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  line-height: normal;
  letter-spacing: normal;
  display: flex;
  gap: var(--gap-0);
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 595px;
    height: 703px;
    gap: var(--gap-0);
    border-radius: var(--br-xs);
    line-height: normal;
    letter-spacing: normal;
  }
`;

const Frame1 = ({ className = "", onClose }) => {
  return <DivRoot className={className} />;
};

Frame1.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Frame1;