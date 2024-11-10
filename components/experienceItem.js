function ExperienceItem({ number, content1, content2 }) {
  return (
    <div className="flex item-center gap-2">
      <div className="text-5xl font-bold">{number}</div>
      <div className="flex flex-col">
        <span>{content1}</span>
        <span>{content2}</span>
      </div>
    </div>
  );
}

export default ExperienceItem;
