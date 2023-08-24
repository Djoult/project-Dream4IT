import { Outlet } from "react-router-dom";
import Header from '../Header/Header'

const SharedLayout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <footer>Footer Component</footer>
    </>
  );
};

export default SharedLayout;
