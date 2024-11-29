import { getComments, deleteComment } from "@/_service/comments-service";
import { useUserAuth } from "@/_utils/auth-context";

function ExistingTestmonial({ comments, setComments }) {
  const { user } = useUserAuth();

  const handleDeleteComment = async (comment) => {
    console.log("delete comment:", comment.id);
    deleteComment(user, comment);
    // const updatedComments = await getComments();
    // setComments(updatedComments);
    setComments((prevComments) =>
      prevComments.filter((prevComment) => prevComment.id !== comment.id)
    );
  };

  return (
    <ul className=" mt-5 text-[#1e1e1e] flex flex-col gap-5">
      {comments.map((comment) => (
        <li
          className="px-5 py-5 border bg-white rounded-md relative"
          key={comment.id}
        >
          <div className="absolute top-0 right-2">
            {user != null && user.uid === comment.userId && (
              <button
                className="text-red-600 font-semibold"
                onClick={() => handleDeleteComment(comment)}
              >
                x
              </button>
            )}
          </div>
          <p>{comment.comment}</p>
          <p className="text-right">{comment.userName}</p>
        </li>
      ))}
    </ul>
  );
}

export default ExistingTestmonial;
