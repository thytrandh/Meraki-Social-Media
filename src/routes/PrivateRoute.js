import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { LOGIN_PAGE } from "../settings/constant";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const [isAuth, setAuth] = useContext(AuthContext);
  const currentUser = useSelector((state) => state.auth.currentUser?.token);

  const isLogin = localStorage.getItem("isLogin");

//   useEffect(() => {
//     // if(currentUser){
//     //    setAuth(true);
//     // }

//     if (localStorage.getItem("isLogin")) {
//       setAuth(true);
//     }
//   });

//   return isAuth ? children : <Navigate to={LOGIN_PAGE} />;
return isLogin ? children : <Navigate to={LOGIN_PAGE} />;
};

export default PrivateRoute;
