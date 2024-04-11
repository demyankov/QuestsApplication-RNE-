import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const setDocument = async (
  collectionName: string,
  uid: string,
  data: unknown
): Promise<void> => {
  if (!collectionName || !uid) {
    return;
  }

  const ref = doc(db, collectionName, uid);

  await setDoc(ref, data);
};
