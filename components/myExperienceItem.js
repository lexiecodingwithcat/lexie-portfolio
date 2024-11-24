function MyExperienceItem({ time, title, company }) {
  return (
    <div className="rounded-lg px-8 py-8 mt-5 bg-[#2c2c2c] w-1/3">
      <p className="text-[#00FF9C]">{time}</p>
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="text-[#808080] mt-8">
        <span className="text-[#00FF9C] mr-1">&middot;</span>
        {company}
      </p>
    </div>
  );
}

export default MyExperienceItem;
