"use client";

import { useUserAuth } from "@/app/_utils/auth-context";
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
    <div className="px-[20px]">
      <div>
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <p className="text-[#808080] mt-5">
          I thrive on debugging and solving complex problems, always seeking to
          apply best practices to deliver high-quality projects.
        </p>
      </div>
      <div className="mt-10 text-lg">
        {user ? (
          <div>
            <div className="flex justify-between items-center">
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
      {/* display exsiting testmonials */}
    </div>
  );
}

export default MyTestimonials;
