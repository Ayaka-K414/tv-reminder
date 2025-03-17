import { logout } from "./Auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const MyPage = () => {
  const user = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h1>マイページ</h1>
      <p>{user?.email}</p>
      <button onClick={() => logout(navigate)}>ログアウト</button>
    </>
  );
};
