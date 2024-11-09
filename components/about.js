import MyPhoto from "./myPhoto";
import SummaryInfo from "./summaryInfo";

function About() {
  return (
    <div className="mt-20 flex gap-20">
      <SummaryInfo />

      <MyPhoto />
    </div>
  );
}

export default About;
