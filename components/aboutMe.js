function AboutMe() {
  return (
    <div className="px-[20px]">
      <div>
        <h2 className="text-3xl font-semibold">About me</h2>
        <p className="text-[#808080] mt-5">
          Graduating with a diploma in Software Development from SAIT, I
          transitioned into tech after three years as an English instructor,
          where I discovered a passion for problem-solving and technology's
          potential to create impactful solutions. My experience as a frontend
          developer intern and in IT support has strengthened my skills in
          building user-centered designs and solving technical challenges.
        </p>
      </div>
      <div className="mt-10 text-lg">
        <p>
          <button className="rounded-lg px-3 py-2 font-semibold mr-2 bg-[#00FF9C] text-[#1e1e1e]">
            Sign in
          </button>
          to leave a comment
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
