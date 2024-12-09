import { LuInstagram, LuGithub, LuLinkedin, LuDownload } from "react-icons/lu";
import ContactInfo from "./contactInfo";

function InfoBar() {
  return (
    <div className="mt-8 flex gap-36">
      <a
        href="/files/Tianzi_Resume.pdf"
        download="Tianzi_Resume.pdf"
        className="border border-[#00FF9C] rounded-full px-5 py-2 flex justify-center items-center gap-3 text-lg hover:bg-[#00FF9C] hover:text-[#1e1e1e]"
      >
        DOWNLOAD CV <LuDownload className="h-5 w-5" />
      </a>

      <div className="flex gap-5">
        <ContactInfo link="https://github.com/lexiecodingwithcat">
          <LuGithub className="w-5 h-5" />
        </ContactInfo>
        <ContactInfo link="https://www.linkedin.com/in/tianzi-cui-1090b4295/">
          <LuLinkedin className="w-5 h-5" />
        </ContactInfo>
        <ContactInfo link="https://www.instagram.com/zzzhi.zhi/">
          <LuInstagram className="w-5 h-5" />
        </ContactInfo>
      </div>
    </div>
  );
}

export default InfoBar;
