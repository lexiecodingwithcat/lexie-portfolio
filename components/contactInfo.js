function ContactInfo({ children }) {
  return (
    <button className="border border-[#00FF9C] w-12 h-12 rounded-full flex justify-center items-center hover:text-[#1e1e1e] hover:bg-[#00FF9C]">
      {children}
    </button>
  );
}

export default ContactInfo;
