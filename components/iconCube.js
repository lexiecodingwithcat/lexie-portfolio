import Image from "next/image";
function IconCube({ imagePath }) {
  const desc = imagePath.split(".")[0];
  return (
    <div className="flex flex-col justify-center items-center border rounded-lg px-5 py-2">
      <Image src={`/icons/${imagePath}`} alt={desc} width={50} height={50} />
      <p>{desc.toUpperCase()}</p>
    </div>
  );
}

export default IconCube;
