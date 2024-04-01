import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const getDocById = async (collectionName: string, id: string) => {
  if (!id) {
    console.log("нет id");
    return;
  }
  const q = query(collection(db, collectionName), where("id", "==", id));

  let querySnapshot = await getDocs(q);

  let doc = null;
  querySnapshot.forEach((document) => {
    doc = document.data();
  });

  return doc;
};
