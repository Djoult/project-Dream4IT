import React from "react";
import { Link } from "react-router-dom";
import { logo } from '../../images/index';

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="logo" />
      <p>Drink Master</p>
      </div>
  );
};

export default Logo;


/* <Link to="#">Drink Master</Link> */