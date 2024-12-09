function ContactInfo({ children, link }) {
  return (
    <button className="border border-[#00FF9C] w-12 h-12 rounded-full flex justify-center items-center hover:text-[#1e1e1e] hover:bg-[#00FF9C]">
      <a href={link} target="_blank">
        {children}
      </a>
    </button>
  );
}

export default ContactInfo;
