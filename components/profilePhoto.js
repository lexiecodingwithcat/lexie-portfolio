import Image from "next/image";

function ProfilePhoto() {
  return (
    <div className="w-1/2 border flex justify-center items-center">
      <div className="w-[280px] h-[280px] border rounded-full flex justify-center items-center">
        <div className="w-[270px] h-[270px] border rounded-full relative ">
          <Image
            src="/images/lexie.jpg"
            alt="Lexie"
            layout="fill"
            className="rounded-full object-cover animate-fade-down animate-once animate-ease-in"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePhoto;
