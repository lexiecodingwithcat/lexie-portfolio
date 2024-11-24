import MyExperience from "./myExperience";
import MyEducation from "./myEducation";
function ResumeContent({ currentTab }) {
  return (
    <div className="w-2/3">
      {currentTab === "Experience" && <MyExperience />}
      {currentTab === "Education" && <MyEducation />}
    </div>
  );
}

export default ResumeContent;
