import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getUserInfoThunk } from "../store/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Loader from "../components/atoms/Loader";

const AuthLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", {
        replace: true,
        state: { authRequired: true, from: location.pathname },
      });
      return;
    }

    dispatch(getUserInfoThunk())
      .then(unwrapResult)
      .then(() => setIsCheckingAuth(false))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login", {
          replace: true,
          state: { authRequired: true, from: location.pathname },
        });
      });
  }, [dispatch, location.pathname, navigate]);

  if (isCheckingAuth) return <Loader />;

  return <Outlet />;
};

export default AuthLayout;
