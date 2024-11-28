// "use client";
import Image from "next/image";
// import ThreeDCube from "./threeDCube";

function ProfilePhoto() {
  const photoPath = "/images/lexie.jpg";
  return (
    <div className="w-1/2  flex justify-center items-center">
      <div className="w-[300px] h-[300px] rounded-full flex justify-center items-center border-[4px] border-dashed border-[#00FF9C] animate-spin animate-infinite animate-duration-[20000ms] animate-linear animate-delay-[3000ms]"></div>
      <div className="w-[270px] h-[270px] rounded-full absolute animate-fade animate-once animate-duration-[5000ms] animate-ease-linear">
        <Image
          src="/images/lexie.jpg"
          alt="Lexie"
          layout="fill"
          className="rounded-full object-cover"
        />
        {/* <ThreeDCube photo={photoPath} /> */}
      </div>
    </div>
  );
}

export default ProfilePhoto;
