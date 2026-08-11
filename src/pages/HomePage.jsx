import { Suspense } from "react";
import HomeTemplate from "../components/templates/HomeTemplate";
import { GeneralErrorBoundary } from "../components/atoms/GeneralErrorBoundary";
import { useNavigate } from "react-router-dom";
import Loader from "../components/atoms/Loader";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <GeneralErrorBoundary navigate={navigate}>
      <Suspense fallback={<Loader />}>
        <HomeTemplate />
      </Suspense>
    </GeneralErrorBoundary>
  );
};
