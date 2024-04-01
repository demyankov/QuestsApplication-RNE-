import { getDoc, doc, DocumentData } from "firebase/firestore";
import { db } from "../firebase";

export const getDocByName = async (
  collectionName: string,
  docName: string
): Promise<DocumentData> => {
  if (!collectionName || !docName) {
    return;
  }

  const docRef = doc(db, collectionName, docName);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
};
