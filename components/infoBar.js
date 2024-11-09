import { LuInstagram, LuGithub, LuLinkedin, LuDownload } from "react-icons/lu";
import ContactInfo from "./contactInfo";

function InfoBar() {
  return (
    <div className="mt-8 flex gap-36">
      <button className="border border-[#00FF9C] rounded-full px-5 py-2 flex justify-center items-center gap-3 text-lg hover:bg-[#00FF9C] hover:text-[#1e1e1e]">
        DOWNLOAD CV <LuDownload className="h-5 w-5" />
      </button>
      <div className="flex gap-5">
        <ContactInfo>
          <LuGithub className="w-5 h-5" />
        </ContactInfo>
        <ContactInfo>
          <LuLinkedin className="w-5 h-5" />
        </ContactInfo>
        <ContactInfo>
          <LuInstagram className="w-5 h-5" />
        </ContactInfo>
      </div>
    </div>
  );
}

export default InfoBar;
