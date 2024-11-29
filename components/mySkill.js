import Image from "next/image";
import IconCube from "./iconCube";
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
      <div className="flex my-[25px] gap-10 flex-wrap">
        <IconCube imagePath="html.png" />
        <IconCube imagePath="css.png" />
        <IconCube imagePath="javascript.png" />
        <IconCube imagePath="react.png" />
        <IconCube imagePath="sql.png" />
        <IconCube imagePath="python.png" />
        <IconCube imagePath="java.png" />
        <IconCube imagePath="cSharp.png" />
      </div>
    </div>
  );
}

export default mySkill;
