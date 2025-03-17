import { UserCredential } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useState } from "react";

type AuthFunction = (
  email: string,
  password: string
) => Promise<UserCredential>;

export const useForm = (authFunction: AuthFunction) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await authFunction(email, password).then((userCredential) => {
        alert(
          `登録完了!作成日時：${userCredential.user.metadata.creationTime}`
        );
      });
    } catch (error) {
      if (error instanceof FirebaseError) {
        alert(`${error.code}:${error.message}`);
      } else {
        alert(`FirebaseErrorで定義されている以外のエラーです：${error}`);
      }
    }
  };

  return {
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
  };
};
