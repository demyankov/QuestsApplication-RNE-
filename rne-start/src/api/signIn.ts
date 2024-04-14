import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { getDocByName } from "./getDocByName";
import { User } from "../store";

export const signIn = async (
  email: string,
  password: string
): Promise<User> => {
  // Логинимся
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  // Получаем информацию о пользователе
  if (user.uid) {
    const userData = await getDocByName("users", user.uid);

    return userData as User;
  }
};
