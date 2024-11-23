function ResumeTab({ children }) {
  return (
    <li className="text-center  py-2 rounded-md w-full bg-[#2c2c2c] text-white hover:bg-[#00FF9C] hover:text-[#1e1e1e]">
      <button>{children}</button>
    </li>
  );
}

export default ResumeTab;
