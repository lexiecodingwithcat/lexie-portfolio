// "use client";
import MyExperienceItem from "@/components/myExperienceItem";
import NavBar from "@/components/navBar";
import ResumeTab from "@/components/resumeTab";

function Resume() {
  const tabs = ["Experience", "Education", "Skills", "About me"];
  return (
    <div className="px-40 pt-10 ">
      <NavBar />
      <div className="border mt-20 flex gap-10 px-5 py-10">
        {/* cate bar */}
        <div className="w-1/3">
          <ul className="text-xl font-medium flex flex-col border justify-center items-center gap-5 ">
            {tabs.map((tab) => (
              <ResumeTab key={tab}>{tab}</ResumeTab>
            ))}
          </ul>
        </div>
        {/* content */}
        <div>
          <div>
            <h2 className="text-2xl font-semibold">My experience</h2>
            <p className="text-[#808080]">
              I thrive on debugging and solving complex problems, always seeking
              to apply best practices to deliver high-quality projects.
            </p>
          </div>
          <div className="flex">
            <MyExperienceItem />
            <MyExperienceItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
