function Comment() {
  return (
    <div className="mt-5 flex gap-3 rounded-full bg-white px-3 py-2">
      <input
        placeholder="Add a comment"
        className="px-4 rounded-full py-1 w-full  border border-[#808080] text-[#808080] "
      />
      <button className="text-[#1e1e1e] bg-[#00FF9C] rounded-full px-3">
        Send
      </button>
    </div>
  );
}

export default Comment;
