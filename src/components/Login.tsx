import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const user = useAuth();
  // 以下のuseFormはAuth.tsxに移設して認証機能としてまとめるべきでしょうか？
  const { handleSubmit, email, setEmail, password, setPassword } = useForm(
    (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    }
  );

  return (
    <>
      {/* ここではNavigateを使用しているが、MyPage.tsxではuseNavigateを使用しています。どちらかに揃えるべきでしょうか？ */}
      {user ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <h1>ログインページ</h1>
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
            <button>ログイン</button>
          </form>
        </>
      )}
    </>
  );
};
