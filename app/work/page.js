import NavBar from "@/components/navBar";
import { LuGithub } from "react-icons/lu";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";
function Work() {
  return (
    <div className="px-40 pt-10 ">
      <NavBar />
      <div className="mt-20 flex gap-20">
        <div className="w-1/2">
          <h2 className="hollow-text">01</h2>
          <h1 className="text-4xl mt-8 font-semibold">Frontend Project</h1>
          <p className="mt-8 text-lg">
            A canbin management application for Banff
          </p>
          <p className="text-[#00FF9C] mt-8 text-lg">
            Next.js, TailwindCSS, Supabase
          </p>
          <div className="border-t mt-8 py-8 border-1 border-[#808080] flex gap-5">
            <button className="rounded-full px-2 py-2 border bg-[#1e1e1e] hover:bg-[#00FF9C] hover:text-[#1e1e1e]">
              <HiArrowUpRight size={25} />
            </button>
            <button className="rounded-full px-2 py-2 border bg-[#1e1e1e] hover:bg-[#00FF9C] hover:text-[#1e1e1e]">
              <LuGithub size={25} />
            </button>
          </div>
        </div>
        {/* right */}
        <div>
          <div className="bg-[#808080] bg-opacity-10 px-10 py-10">
            <Image
              src="/images/banff-cabin.jpg"
              height={500}
              width={500}
              alt="banff-cabin"
            />
          </div>
          <div className="flex gap-2 mt-3 justify-end ">
            <button className="p-1 bg-[#00FF9C] text-[#1e1e1e] text-center">
              <IoMdArrowDropleft size={25} />
            </button>
            <button className=" p-1 bg-[#00FF9C] text-[#1e1e1e]">
              <IoMdArrowDropright size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
