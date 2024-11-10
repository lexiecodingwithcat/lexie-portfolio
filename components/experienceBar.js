import ExperienceItem from "./experienceItem";

function ExperienceBar() {
  return (
    <div className=" py-5 flex justify-between w-[1106px]">
      <ExperienceItem number="1" content1="Years of" content2="experience" />
      <ExperienceItem number="7" content1="Technologies" content2="mastered" />
      <ExperienceItem number="10" content1="Projects" content2="completed" />
      <ExperienceItem number="558" content1="Code" content2="commits" />
    </div>
  );
}

export default ExperienceBar;
