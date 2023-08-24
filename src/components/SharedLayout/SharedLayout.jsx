import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>Header Component</header>
      <Outlet />
      <footer>Footer Component</footer>
    </>
  );
};

export default SharedLayout;
