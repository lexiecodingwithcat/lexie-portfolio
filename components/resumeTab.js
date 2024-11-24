function ResumeTab({ children, changeActiveTab }) {
  return (
    <li className="text-center  py-2 rounded-md w-full bg-[#2c2c2c] text-white hover:bg-[#00FF9C] hover:text-[#1e1e1e]">
      <button
        className="w-full h-full px-0 py-0"
        onClick={() => changeActiveTab(children)}
      >
        {children}
      </button>
    </li>
  );
}

export default ResumeTab;
