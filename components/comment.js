"use client";
import { addComment } from "@/_service/comments-service";
import { useState } from "react";
import { useUserAuth } from "@/_utils/auth-context";
function Comment({ prevComments, handlePrevComments }) {
  const { user } = useUserAuth();
  const [comment, setComment] = useState("");

  async function addCommentHandler(e) {
    e.preventDefault();
    if (comment === "") {
      return;
    }
    handlePrevComments([
      ...prevComments,
      { comment, userName: user.displayName },
    ]);
    addComment(user, comment);
    setComment("");
  }

  return (
    <div className="mt-5 flex gap-3 rounded-full bg-white px-3 py-2">
      <input
        placeholder="Add a comment"
        className="px-4 rounded-full py-1 w-full  border border-[#808080] text-[#808080]"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="text-[#1e1e1e] bg-[#00FF9C] rounded-full px-3"
        onClick={(e) => addCommentHandler(e)}
      >
        Send
      </button>
    </div>
  );
}

export default Comment;
