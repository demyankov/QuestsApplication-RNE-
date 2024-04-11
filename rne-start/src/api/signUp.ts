import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { setDocument } from "./setDoc";
import { User } from "../store";

export const signUp = async (email: string, password: string) => {
  //регистрируем пользователя

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { uid } = userCredential.user;
    console.log("uid ", uid);

    const userData: Omit<User, "isAuth"> = {
      id: uid,
      firstName: "",
      secondName: "",
      age: "",
      phone: "",
      email,
      avatar: "",
      location: "",
    };

    //Добавляем пользователя в базу данных
    setDocument("users", uid, userData);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  }
};
