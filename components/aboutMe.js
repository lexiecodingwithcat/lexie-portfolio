"use client";

import { useUserAuth } from "@/app/_utils/auth-context";

function AboutMe() {
  return (
    <div className="px-[20px]">
      <h2 className="text-3xl font-semibold">About me</h2>
      <p className="text-[#808080] mt-5">
        Graduating with a diploma in Software Development from SAIT, I
        transitioned into tech after three years as an English instructor, where
        I discovered a passion for problem-solving and technology&apos;
        potential to create impactful solutions. My experience as a frontend
        developer intern and in IT support has strengthened my skills in
        building user-centered designs and solving technical challenges.
      </p>
    </div>
  );
}

export default AboutMe;
