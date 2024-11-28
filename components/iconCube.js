import Image from "next/image";
function IconCube({ imagePath }) {
  const desc = imagePath.split(".")[0];
  return (
    <div className="w-1/5 flex flex-col justify-center items-center gap-2  rounded-lg px-8 py-8 bg-[#808080] bg-opacity-5 hover:animate-shake">
      <Image src={`/icons/${imagePath}`} alt={desc} width={50} height={50} />
      <p className="font-semibold space-x-1">{desc.toUpperCase()}</p>
    </div>
  );
}

export default IconCube;
