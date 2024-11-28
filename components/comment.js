function Comment() {
  function createComment() {
    alert("hello");
  }

  return (
    <div>
      <div>
        <avatar></avatar>
        <input placeholder="Add a comment"></input>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Comment;
