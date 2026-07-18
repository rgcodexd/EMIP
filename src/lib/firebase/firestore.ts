import { db } from "./config";
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  query, 
  where 
} from "firebase/firestore";

export const getDocument = async (col: string, id: string) => {
  const docRef = doc(db, col, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const setDocument = async (col: string, id: string, data: any) => {
  const docRef = doc(db, col, id);
  await setDoc(docRef, data, { merge: true });
};
