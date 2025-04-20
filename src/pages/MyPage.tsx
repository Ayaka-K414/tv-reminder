import { useAuth } from "../hooks/useAuth";
import { Header } from "../components/Header";
import "../styles/_mypage.scss";

export const MyPage = () => {
  const user = useAuth();

  return (
    <>
      <Header />
      <div className="mypage-container">
        <h1>マイページ</h1>
        {user && user.email ? <p>{user.email}さん</p> : <p>ゲストさん</p>}
      </div>
    </>
  );
};
