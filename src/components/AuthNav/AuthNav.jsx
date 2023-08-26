import { StyledLink, NavList } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <div style={{ zIndex: 100 }}>
      <NavList>
        <li>
          <StyledLink to="/signup">Registration</StyledLink>
        </li>
        <li>
          <StyledLink to="/signin">Log In</StyledLink>
        </li>
      </NavList>
    </div>
  );
};

export default AuthNav;
