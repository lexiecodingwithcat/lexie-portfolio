import MyExperience from "./myExperience";
import MyEducation from "./myEducation";
import MySkill from "./mySkill";
import AboutMe from "./aboutMe";
function ResumeContent({ currentTab }) {
  return (
    <div className="w-[60%]">
      {currentTab === "Experience" && <MyExperience />}
      {currentTab === "Education" && <MyEducation />}
      {currentTab === "Skills" && <MySkill />}
      {currentTab === "About me" && <AboutMe />}
    </div>
  );
}

export default ResumeContent;
