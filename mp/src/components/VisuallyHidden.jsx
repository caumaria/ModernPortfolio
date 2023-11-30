import styled from "styled-components";
import PropTypes from "prop-types";

const VisuallyHiddenContainer = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const VisuallyHidden = ({ children }) => {
    return <VisuallyHiddenContainer>{children}</VisuallyHiddenContainer>;
};

VisuallyHidden.propTypes = {
    children: PropTypes.node.isRequired,
};

export default VisuallyHidden;


