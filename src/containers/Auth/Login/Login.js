import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from "../../../components/UI/Logo/Logo";
import "../AuthPage.scss";
import { useForm } from "react-hook-form";
import {
  FORGOT_PASSWORD_PAGE,
  HOME_PAGE,
  REGISTER_PAGE,
} from "../../../settings/constant";
import { useDispatch, useSelector } from "react-redux";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { login } from "../../../redux/slice/Auth/authSlice";
import { Alert, Space, message } from "antd";
import { getAllUser, getUser } from "../../../redux/slice/User/userSlice";
import { DataContext } from "../../../context/dataContext";
import { getNewFeed } from "../../../redux/slice/NewFeed/newFeedSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData, setUserData, setAllUserData } = useContext(DataContext);
  const [isAuth, setAuth] = useContext(AuthContext);

  const authError = useSelector((state) => state.auth.error);
  const authEmailError = useSelector((state) => state.auth.currentUser);
  const currentUser = useSelector((state) => state.auth.currentUser);

  const selectorCurrentUser = useSelector((state) => state.user?.currentUser);
  //const [isAuth, setAuth] = useContext(AuthContext);

  const checkRole = useSelector((state) => state.user.currentUser?.role);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    dispatch(
      login({
        email,
        password,
      })
    );

    dispatch(getUser());

    reset({
      email: "",
      password: "",
    });
  };

  const isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    // if (isLogin) {
    //   dispatch(getUser());
    //   const checkRole = userData?.role;
    //   if (checkRole === "USER") {
    //     navigate("/");
    //     dispatch(getUser());
    //     dispatch(getAllUser());
    //     dispatch(getNewFeed());
    //   } else {
    //     navigate("/admin-page");
    //     dispatch(getUser());
    //     dispatch(getAllUser());
    //   }
    // }

    if (isLogin) {
      dispatch(getUser());
      if (checkRole === "ADMIN") {
        navigate("/admin-page");
        setAuth(true);
        dispatch(getUser());
        dispatch(getAllUser());
      } else if (checkRole === "USER") {
        navigate("/");
        dispatch(getUser());
        dispatch(getAllUser());
        dispatch(getNewFeed());
      }
      // } else if (checkRole === "USER") {
      //   navigate("/");
      //   dispatch(getUser());
      //   dispatch(getAllUser());
      //   dispatch(getNewFeed());
      // }
    }
  });

  return (
    <div className="auth-page">
      <div className="title">
        <p className="subject mb-0">Welcome Back!</p>
        <p className="mb-0">Aplatform to connect with the social world. </p>
      </div>
      <div className="content">
        <form
          action="#"
          className="form-auth"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-item mb-1">
            <label for="email">
              <p className="mb-0">Email Address</p>
            </label>
            <div className="inputbox mb-1">
              <input
                type="email"
                className="content-input"
                placeholder="Email Address"
                name="email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    //   message: "invalid email address",
                  },
                })}
              />
              <i class="fa-thin fa-user-plus"></i>
            </div>
            {errors.email?.type === "required" && (
              <span className="err-msg">Email Address is required</span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="err-msg">Invalid Email Address</span>
            )}
          </div>
          <div className="input-item mb-1">
            <label for="password">
              <p className="mb-0">Your Password</p>
            </label>
            <div className="inputbox">
              <input
                type="password"
                className="content-input"
                placeholder="Password"
                name="password"
                {...register("password", { required: true })}
              />
              <i class="fa-light fa-lock"></i>
            </div>
            {errors.password?.type === "required" && (
              <span className="err-msg">Password is required</span>
            )}
          </div>
          <div className="item">
            <div className="remember">
              <input type="checkbox" class="" id="checkRemember" />
              <label className="mb-0" for="checkRemember">
                <p className="mb-0">Remember Me</p>
              </label>
            </div>
            <div className="forgot-password">
              <Link to={FORGOT_PASSWORD_PAGE}>
                <p className="mb-0">Forgot Password? </p>
              </Link>
            </div>
          </div>
          <div className="submit">
            <button type="primary" htmlType="submit" className="btn-submit">
              SIGN IN
            </button>
          </div>
          <div to className="link-to-page">
            <label>
              <p className="mb-0">Don't Have An Account?</p>
            </label>
            <Link to={REGISTER_PAGE}>
              <p className="mb-0">Register</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
