import { Outlet, useNavigate } from "react-router-dom";
import StatusBar from "../components/atoms/StatusBar";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUserInfoThunk } from "../store/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import Loader from "../components/atoms/Loader";

const AuthLayoutWithStatusBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    dispatch(getUserInfoThunk())
      .then(unwrapResult)
      .then(() => setIsCheckingAuth(false))
      .catch(() => {
        navigate("/login");
      });
  }, [dispatch, navigate]);

  if (isCheckingAuth) return <Loader />;

  return (
    <>
      <StatusBar />
      <main className="my-14">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayoutWithStatusBar;
