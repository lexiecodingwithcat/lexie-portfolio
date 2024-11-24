import MyExperience from "./myExperience";
function ResumeContent({ currentTab }) {
  return (
    <div className="w-2/3">
      {currentTab === "Experience" && <MyExperience />}
      other tabs
    </div>
  );
}

export default ResumeContent;
