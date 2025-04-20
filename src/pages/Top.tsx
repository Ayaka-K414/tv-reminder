import { Register } from "../components/Register";
import { Login } from "../components/Login";
import main from "../assets/images/tv-reminder-mainvisual.png";

export const Top = () => {
  return (
    <div className="top_container">
      <div className="top_img_main">
        <img src={main} alt="mainvisual" />
      </div>
      <Register />
      <Login />
    </div>
  );
};
