import { db } from "@/_utils/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";

export async function getComments() {
  const comments = [];
  const q = query(collection(db, "comments"), orderBy("timestamp"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    comments.push(doc.data());
  });
  return comments;
}

export async function addComment(comment) {
  await addDoc(collection(db, "comments"), {
    userId: user.uid,
    userName: user.displayName,
    message: message,
    timestamp: Timestamp.now(),
  });
}
