import { Suspense } from "react";
import { GeneralErrorBoundary } from "../components/atoms/GeneralErrorBoundary";
import { useNavigate } from "react-router-dom";
import Loader from "../components/atoms/Loader";

import ReservationTemplate from "../components/templates/ReservationTemplate";
const ReservationPage = () => {
  const navigate = useNavigate();
  return (
    <GeneralErrorBoundary navigate={navigate}>
      <Suspense fallback={<Loader />}>
        <ReservationTemplate />
      </Suspense>
    </GeneralErrorBoundary>
  );
};
export default ReservationPage;
