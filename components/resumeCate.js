import ResumeTab from "./resumeTab";
function ResumeCate({ changeActiveTab }) {
  const tabs = ["Experience", "Education", "Skills", "About me"];
  return (
    <div className="w-1/3">
      <ul className="text-xl font-medium flex flex-col justify-center items-center gap-5">
        {tabs.map((tab) => (
          <ResumeTab key={tab} changeActiveTab={changeActiveTab}>
            {tab}
          </ResumeTab>
        ))}
      </ul>
    </div>
  );
}

export default ResumeCate;