
import { useSelector } from "react-redux";
import { useLocation, Navigate } from 'react-router-dom';

export function ProtectedRoute({ element, anonymous = false }) {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);

  const location = useLocation();
  const from = location.state?.from || '/';
  // Если разрешен неавторизованный доступ, а пользователь авторизован...
  if (anonymous && isLoggedIn) {
    //console.log("Только для неавторизованных");
    return <Navigate to={from} />;
  }

  // Если требуется авторизация, а пользователь не авторизован...
  if (!anonymous && !isLoggedIn) {
    // console.log("Нужна авторизация");
    console.log("location", location.pathname);

    // Если пользователь пришёл на логин автоматом со страницы логаута, то после логина он снова уедет на логаут, что некрасиво
    return (location.pathname === "/profile/logout") ?
    <Navigate to="/" state={{ from: location }} />
    :
    <Navigate to="/login" state={{ from: location }} />

  }

  return element;
}