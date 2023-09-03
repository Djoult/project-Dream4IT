import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { getCurrentUserThunk } from "../../redux/thunks";
import { setToken } from "../../api/auth";

const SharedLayout = () => {
  const { token } = useSelector((state) => {
    return {
      token: state.auth.token,
    };
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if(token) {
      setToken(token);
      dispatch(getCurrentUserThunk())
    }
  }, [])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
