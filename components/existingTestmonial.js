function ExistingTestmonial({ comments }) {
  return (
    <div className=" mt-5 text-[#1e1e1e] flex flex-col gap-5">
      {comments.map((comment) => (
        <div
          className="px-5 py-5 border bg-white rounded-md"
          key={comment.timestamp}
        >
          <p>{comment.comment}</p>
          <p>from: {comment.userName}</p>
        </div>
      ))}
    </div>
  );
}

export default ExistingTestmonial;
