import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

export const deleteDocumentById = async (
  collectionName: string,
  id: string
): Promise<void> => {
  if (!id || !collectionName) {
    return;
  }
  const q = query(collection(db, collectionName), where("id", "==", id));

  let querySnapshot = await getDocs(q);

  querySnapshot.forEach((document) => {
    deleteDoc(document.ref);
  });
};
