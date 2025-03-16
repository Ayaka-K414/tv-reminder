import { signInAnonymously, signOut } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../../firebaseConfig";

// ゲストログインボタンクリック時の処理
export const guestLogin = async () => {
  try {
    await signInAnonymously(auth);
  } catch (error) {
    if (error instanceof FirebaseError) {
      alert(`${error.code}:${error.message}`);
    } else {
      alert(`FirebaseErrorで定義されている以外のエラーです：${error}`);
    }
  }
};

// ログアウトボタンクリック時の処理
export const logout = async (navigate: (path: string) => void) => {
  try {
    await signOut(auth);
    navigate("/login");
  } catch (error) {
    if (error instanceof FirebaseError) {
      alert(`${error.code}:${error.message}`);
    } else {
      alert(`FirebaseErrorで定義されている以外のエラーです：${error}`);
    }
  }
};