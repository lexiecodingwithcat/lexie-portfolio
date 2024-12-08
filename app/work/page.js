"use client";
import NavBar from "@/components/navBar";
import { LuGithub } from "react-icons/lu";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";
import { useState } from "react";
import next from "next";
import { handleClientScriptLoad } from "next/script";
function Work() {
  const projects = [
    {
      id: 1,
      title: "Full Stack Project",
      description: "A canbin management application for Banff",
      tech: "Next.js, TailwindCSS, Supabase",
      github: "https://github.com/lexiecodingwithcat/pj-the-wild-oasis",
      image: "/images/banff-cabin.jpg",
    },
    {
      id: 2,
      title: "Backend Project",
      description: "An API for a project management application",
      tech: "Python, FastAPI, PostgreSQL",
      github: "https://github.com/lexiecodingwithcat/BrickByClick-backend",
      image: "/images/fastapi.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];
  function handleNextProj() {
    if (currentIndex === projects.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function handlePrevProj() {
    if (currentIndex === 0) {
      setCurrentIndex(projects.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }
  return (
    <div className="px-40 pt-10 ">
      <NavBar />
      <div className="mt-20 flex gap-20">
        <div className="w-1/2">
          <h2 className="hollow-text">0{currentProject.id}</h2>
          <h1 className="text-4xl mt-8 font-semibold">
            {currentProject.title}
          </h1>
          <p className="mt-8 text-lg">{currentProject.description}</p>
          <p className="text-[#00FF9C] mt-8 text-lg">{currentProject.tech}</p>
          <div className="border-t mt-8 py-8 border-1 border-[#808080] flex gap-5">
            <button className="rounded-full px-2 py-2 border bg-[#1e1e1e] hover:bg-[#00FF9C] hover:text-[#1e1e1e]">
              <HiArrowUpRight size={25} />
            </button>
            <button className="rounded-full px-2 py-2 border bg-[#1e1e1e] hover:bg-[#00FF9C] hover:text-[#1e1e1e]">
              <a href={currentProject.github} target="_blank">
                <LuGithub size={25} />
              </a>
            </button>
          </div>
        </div>
        {/* right */}
        <div>
          <div className="bg-[#808080] bg-opacity-10 px-10 py-10 ">
            <Image
              src={currentProject.image}
              height={500}
              width={500}
              alt={currentProject.title}
            />
          </div>
          <div className="flex gap-2 mt-3 justify-end ">
            <button
              className="p-1 bg-[#00FF9C] text-[#1e1e1e] text-center"
              onClick={handlePrevProj}
            >
              <IoMdArrowDropleft size={25} />
            </button>
            <button
              className=" p-1 bg-[#00FF9C] text-[#1e1e1e]"
              onClick={handleNextProj}
            >
              <IoMdArrowDropright size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
