import PropTypes from "prop-types";

import {
  StartWrapper,
  // Ellipse,
  Ellipse1,
  Ellipse2,
  Ellipse3,
} from "./BackgroundLayout.styled";

const BackgroundLayout = ({ children }) => {
  return (
    <StartWrapper>
      {/* <Ellipse> */}
      <Ellipse1 />
      <Ellipse2 />
      <Ellipse3 />
      {/* </Ellipse> */}
      {children}
    </StartWrapper>
  );
};

BackgroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundLayout;
