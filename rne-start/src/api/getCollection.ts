import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const getCollection = async (collectionName: string) => {
  if (!collectionName) {
    return;
  }
  const q = collection(db, collectionName);

  let querySnapshot = await getDocs(q);

  let col = [];
  querySnapshot.forEach((document) => {
    col.push(document.data());
  });

  return col;
};
