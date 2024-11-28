import ThreeScene from "./threeDCube";
function mySkill() {
  return (
    <div className="px-[20px]">
      <div>
        <h2 className="text-3xl font-semibold">My skill</h2>
        <p className="text-[#808080] mt-5">
          I thrive on debugging and solving complex problems, always seeking to
          apply best practices to deliver high-quality projects.
        </p>
      </div>
      <div>
        <ThreeScene />
      </div>
    </div>
  );
}

export default mySkill;
