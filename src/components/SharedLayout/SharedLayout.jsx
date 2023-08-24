import { Outlet } from "react-router-dom";
import Socials from "../Socials/Socials";

const SharedLayout = () => {
  return (
    <>
      <header>Header Component</header>
      <Socials/>
      <Outlet />
      <footer>Footer Component</footer>
    </>
  );
};

export default SharedLayout;
