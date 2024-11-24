function Timeline() {
  return (
    // timeline
    <div className="timeline w-full">
      {/* container */}
      <div className="container" style={{ animationDelay: "1s" }}>
        {/* text-content */}
        <div className="text-content">
          <p className="text-[#808080] text-sm"> Sep 2023 - Apr 2025</p>
          <h2 className="text-lg font-semibold">
            Souther Alberta Institute of Technology
          </h2>
          <p>
            <span className="text-[#00FF9C] mr-1">&middot;</span>Diploma in
            Software Development
          </p>
          <p>
            <span className="text-[#00FF9C] mr-1">&middot;</span>GPA: 4.0 / 4.0
          </p>
        </div>
      </div>
      {/* container */}
      <div className="container" style={{ animationDelay: "2s" }}>
        {/* text-content */}
        <div className="text-content">
          <p className="text-[#808080] text-sm"> Jan 2019 - Dec 2019 </p>
          <h2 className="text-lg font-semibold">
            State University of New York
          </h2>
          <p>
            <span className="text-[#00FF9C] mr-1">&middot;</span>Exchange
            student in TESOL
          </p>
          <p>
            <span className="text-[#00FF9C] mr-1">&middot;</span>GPA: 3.7 / 4.0
          </p>
          <p>
            <span className="text-[#00FF9C] mr-1">&middot;</span>Obtained a full
            scholarship
          </p>
        </div>
      </div>
      {/* container */}
      <div className="container" style={{ animationDelay: "3s" }}>
        {/* text-content */}
        <div className="text-content">
          <p className="text-[#808080] text-sm"> Sep 2016 - Jun 2020</p>
          <h2 className="text-lg font-semibold">Fujian Normal University</h2>
          <p>
            <span className="text-[#00FF9C] mr-1">&middot;</span>Bachelor of
            Arts in English
          </p>
          <p>
            <span className="text-[#00FF9C] mr-1">&middot;</span>
            University-level scholarship (top 3%)
          </p>
          <p>
            <span className="text-[#00FF9C] mr-1">&middot;</span>
            The "excellent leader of students' union" award
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
