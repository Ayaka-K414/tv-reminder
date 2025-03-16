import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // ユーザー情報を更新
    });
    return () => unsubscribe(); // クリーンアップ関数を返す
  }, []);
  return user;
};
