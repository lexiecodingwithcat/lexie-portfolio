import ProfilePhoto from "./profilePhoto";
import SummaryInfo from "./summaryInfo";

function About() {
  return (
    <div className="mt-20 flex gap-20">
      <SummaryInfo />

      <ProfilePhoto />
    </div>
  );
}

export default About;
