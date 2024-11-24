import Timeline from "./timeline";

function myEducation() {
  return (
    <div className="px-[20px]">
      <div>
        <h2 className="text-3xl font-semibold">My education</h2>
        <p className="text-[#808080] mt-5">
          I thrive on debugging and solving complex problems, always seeking to
          apply best practices to deliver high-quality projects.
        </p>
      </div>
      <Timeline />
    </div>
  );
}

export default myEducation;
