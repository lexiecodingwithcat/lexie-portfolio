import Comment from "./comment";
function MyTestimonials() {
  const { user, googleSignIn, firebaseSignOut } = useUserAuth();
  const logIn = async function () {
    await googleSignIn();
  };
  const logOut = async function () {
    await firebaseSignOut();
  };
  return (
    <div>
      <div className="mt-10 text-lg">
        {user ? (
          <div>
            <div>
              <p>Welcome, {user.displayName}</p>
              <button
                className="rounded-lg px-3 py-2 font-semibold mr-2 bg-white bg-opacity-5 text-white"
                onClick={logOut}
              >
                Log out
              </button>
            </div>

            <Comment />
          </div>
        ) : (
          <p>
            <button
              className="rounded-lg px-3 py-2 font-semibold mr-2 bg-[#00FF9C] text-[#1e1e1e] "
              onClick={logIn}
            >
              Log in
            </button>
            to leave a testimonial
          </p>
        )}
      </div>
    </div>
  );
}

export default MyTestimonials;
