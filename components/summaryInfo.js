import InfoBar from "./infoBar";

function SummaryInfo() {
  return (
    <div className="w-1/2">
      <h2 className="text-xl">Software Developer</h2>
      <div className="text-7xl font-semibold">
        <h2>Hello I'm</h2>
      </div>
      <div className="flex-col text-xl text-[#C0C0C0] mt-3">
        <p>I excel at crafting elegant digital experience and</p>
        <p>
          I am proficient in various programming languages and technologies.
        </p>
      </div>
      <InfoBar />
    </div>
  );
}

export default SummaryInfo;
