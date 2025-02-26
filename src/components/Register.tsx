import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export const Register = () => {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");

  const handoleSubmit = async (event: React.FormEvent) => {
    //React.FormEventはフォームイベントオブジェクトの型で、フォームイベントが発生すると生成され、イベントオブジェクトを使用してデフォルトのフォーム送信動作を防ぐことができる
    event.preventDefault(); //これがないと関数「handleSubmit」が実行されたときにブラウザがリロードされてしまう
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      alert(`${error}`);
    }
  };

  return (
    <>
      <h1>新規登録</h1>
      <form onSubmit={handoleSubmit}>
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
    </>
  );
};
