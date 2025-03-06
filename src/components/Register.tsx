import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [user, setUser] = useState<User | null>(null); // 初期値を null にする

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // ユーザー情報を更新
    });
    return () => unsubscribe(); // クリーンアップ関数を返す
  }, []);

  // メールアドレス・パスワードフォーム送信時の処理
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      ).then((userCredential) => {
        alert(
          `登録完了!作成日時：${userCredential.user.metadata.creationTime}`
        );
      });
    } catch (error) {
      alert(`${error}`);
    }
  };

  // ゲストログインボタンクリック時の処理
  const onClickGuestLogin = async () => {
    const guestLogin = signInAnonymously(auth).catch((error) => {
      console.log(error);
    });
    await guestLogin;
  };

  return (
    <>
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
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
            <button>登録する</button>
          </form>
          <button
            onClick={() => {
              onClickGuestLogin();
            }}
          >
            ゲストログインはこちら
          </button>
        </>
      )}
    </>
  );
};
