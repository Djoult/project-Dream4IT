import PropTypes from "prop-types";
import { StyledLogoutBtn } from "../LogoutBtn/LogoutBtn";
import { useNavigate } from "react-router";
import { SectionHero, HeroTitle, HeroDescription } from "./Hero.styled";

const HeroSection = ({ title, description, children }) => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/add");
  };
  return (
    <SectionHero>
      {title && <HeroTitle>{title}</HeroTitle>}
      {description && <HeroDescription>{description}</HeroDescription>}
      <StyledLogoutBtn type="button" onClick={handleBtnClick}>
        Add recipe
      </StyledLogoutBtn>
      {children}
    </SectionHero>
  );
};

export default HeroSection;

HeroSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};
