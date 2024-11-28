import MyExperience from "./myExperience";
import MyEducation from "./myEducation";
import MySkill from "./mySkill";
function ResumeContent({ currentTab }) {
  return (
    <div className="w-[60%]">
      {currentTab === "Experience" && <MyExperience />}
      {currentTab === "Education" && <MyEducation />}
      {currentTab === "Skills" && <MySkill />}
    </div>
  );
}

export default ResumeContent;
