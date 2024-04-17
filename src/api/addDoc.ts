import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

export const addDocument = async (
  collectionName: string,
  document: unknown
): Promise<void> => {
  if (!collectionName || !document) {
    return;
  }

  const docRef = collection(db, collectionName);
  await addDoc(docRef, document);
};
