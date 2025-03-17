import { Navigate } from "react-router-dom";
import { guestLogin } from "./Auth";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebaseConfig"

export const Register = () => {
  const user = useAuth();
  // 以下のuseFormはAuth.tsxに移設して認証機能としてまとめるべきでしょうか？
  const { handleSubmit, email, setEmail, password, setPassword } = useForm(
    (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }
  );

  return (
    <>
    {/* ここではNavigateを使用しているが、MyPage.tsxではuseNavigateを使用しています。どちらかに揃えるべきでしょうか？ */}
      {user ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <h1>新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button>登録する</button>
          </form>
          <button
            onClick={() => {
              guestLogin();
            }}
          >
            ゲストログインはこちら
          </button>
        </>
      )}
    </>
  );
};
