import PropTypes from "prop-types";

import {
  StartWrapper,
  Ellipse1,
  Ellipse2,
  Ellipse3,
  // BackgroundImageWrapper,
} from "./BackgroundLayout.styled";

const BackgroundLayout = ({ children }) => {
  return (
    <StartWrapper>
      {/* <BackgroundImageWrapper /> */}
      <Ellipse1 />
      <Ellipse2 />
      <Ellipse3 />
      {children}
    </StartWrapper>
  );
};

BackgroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundLayout;
