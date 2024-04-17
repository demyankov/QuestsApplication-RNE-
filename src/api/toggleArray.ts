import {
  doc,
  DocumentData,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  setDoc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const toggleArray = async (
  collectionName: string,
  docName: string,
  element: string,
  isInclude: boolean,
  key: string = "id"
): Promise<DocumentData> => {
  if (!collectionName || !docName) {
    return;
  }

  let docRef = doc(db, collectionName, docName);

  // получаем документ и проверяем на существование документа для данного пользователя
  let querySnapshot = await getDoc(docRef);

  // если документ не существует, то создаем его
  if (!querySnapshot.exists()) {
    await setDoc(doc(db, collectionName, docName), {});
    docRef = doc(db, collectionName, docName);
  }

  // обновляем документ
  isInclude
    ? await updateDoc(docRef, {
        [key]: arrayRemove(element),
      })
    : await updateDoc(docRef, {
        [key]: arrayUnion(element),
      });
};
