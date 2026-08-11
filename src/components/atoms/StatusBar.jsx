import { useNavigate } from "react-router-dom";
import BackImg from "/GNB/Back.svg";

const StatusBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 z-50 w-full p-4 h-14">
      <button type="button" onClick={() => navigate(-1)} aria-label="뒤로가기">
        <img src={BackImg} alt="" />
      </button>
    </nav>
  );
};

export default StatusBar;
