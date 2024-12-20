import MyExperienceItem from "./myExperienceItem";

function MyExperience() {
  return (
    <div className="px-[20px]">
      <div>
        <h2 className="text-3xl font-semibold">My experience</h2>
        <p className="text-[#808080] mt-5">
          I thrive on debugging and solving complex problems, always seeking to
          apply best practices to deliver high-quality projects.
        </p>
      </div>
      <div className="flex gap-10 px-5 flex-wrap  ">
        <MyExperienceItem
          time="Sep 2024 - current"
          title="IT support"
          company="A-Plus IT services"
        />
        <MyExperienceItem
          time="May 2024 - Sep 2024"
          title="Front-end Devloper Intern"
          company="Empowered Futures"
        />
        <MyExperienceItem
          time="May 2022 - Feb 2023"
          title="English Instructor"
          company="Global Education for IELTS"
        />
        <MyExperienceItem
          time="Mar 2021 - Sep 2021"
          title="Social Media Specialist"
          company="International Volunteer Association"
        />
      </div>
    </div>
  );
}

export default MyExperience;
