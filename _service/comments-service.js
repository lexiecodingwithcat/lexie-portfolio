import { db } from "@/_utils/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  Timestamp,
} from "firebase/firestore";

export async function getComments() {
  const comments = [];
  const q = query(collection(db, "messages"), orderBy("timestamp"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    comments.push({ id: doc.id, ...doc.data() });
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

// delete comment
export async function deleteComment(user, comment) {
  console.log("comment", comment);

  if (!user || !user.uid) {
    console.error("no user logged in");
    return;
  }
  if (user.uid !== comment.userId) {
    console.error("User does not have permission to delete this comment");
    return;
  }
  try {
    await deleteDoc(doc(db, "messages", comment.id));
  } catch (error) {
    console.error("Error removing document: ", error);
  }
}
