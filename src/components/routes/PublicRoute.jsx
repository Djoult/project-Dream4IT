import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { isAuth } = useSelector(state => {
    return {
      isAuth: state.auth.token,
    };
  });

  const location = useLocation();
  return !isAuth ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;
