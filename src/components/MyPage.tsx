import { useState, useEffect } from "react";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const MyPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // ユーザー情報を更新
    });

    return () => unsubscribe(); // クリーンアップ関数を返す
  }, []);

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      <h1>マイページ</h1>
      <p>{user?.email}</p>
      <button onClick={logout}>ログアウト</button>
    </>
  );
};
