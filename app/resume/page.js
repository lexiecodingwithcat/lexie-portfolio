"use client";
import { useState } from "react";
import NavBar from "@/components/navBar";
import ResumeCate from "@/components/resumeCate";
import ResumeContent from "@/components/resumeContent";

function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");
  function handleActiveTab(tab) {
    console.log(tab);
    setActiveTab(tab);
  }
  return (
    <div className="px-40 pt-10 ">
      <NavBar />
      <div className="mt-20 flex gap-14 px-5 py-10">
        {/* cate bar */}
        <ResumeCate changeActiveTab={handleActiveTab} />
        {/* content */}
        <ResumeContent currentTab={activeTab} />
      </div>
    </div>
  );
}

export default Resume;
