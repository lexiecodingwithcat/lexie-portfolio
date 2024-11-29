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
  const q = query(collection(db, "messages"), orderBy("timestamp"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    comments.push(doc.data());
  });
  return comments;
}

export async function addComment(user, comment) {
  const userId = user.uid;
  const userName = user.displayName;

  try {
    await addDoc(collection(db, "messages"), {
      userId,
      userName,
      comment,
      timestamp: Timestamp.now(),
    });
  } catch (error) {
    console.error("faild to add", error);
  }
}
