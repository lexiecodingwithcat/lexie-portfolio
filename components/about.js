import ExperienceBar from "./experienceBar";
import ProfilePhoto from "./profilePhoto";
import SummaryInfo from "./summaryInfo";

function About() {
  return (
    <div className="mt-20 flex flex-col gap-20">
      <div className="flex">
        <SummaryInfo />
        <ProfilePhoto />
      </div>
      <ExperienceBar />
    </div>
  );
}

export default About;
