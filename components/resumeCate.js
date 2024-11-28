import ResumeTab from "./resumeTab";
function ResumeCate({ changeActiveTab }) {
  const tabs = [
    "Experience",
    "Education",
    "Skills",
    "About me",
    "Testimonials",
  ];
  return (
    <div className="w-[40%]">
      <ul className="text-xl font-medium flex flex-col justify-center items-center gap-5 w-full">
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
