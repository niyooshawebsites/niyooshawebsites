import { MdMobileFriendly } from "react-icons/md";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { FaGears } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

const USP = () => {
  return (
    <section className="container mx-auto grid grid-cols-2 md:grid-cols-6 bg-gray-950 text-gray-100 border border-blue-500 rounded-xl p-2 gap-2">
      <div className="flex flex-col items-center gap-2 p-5 border border-blue-500 rounded-lg">
        <MdMobileFriendly className="text-5xl" />
        <span>Mobile Friendly Designs</span>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-blue-500 rounded-lg">
        <MdMobileFriendly className="text-5xl" />
        <span>Mobile Friendly Designs</span>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-blue-500 rounded-lg">
        <AiTwotoneThunderbolt className="text-5xl" />
        <span>Light Weight and Fast Loading</span>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-blue-500 rounded-lg">
        <IoMdSearch className="text-5xl" />
        <span>SEO Optimized</span>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-blue-500 rounded-lg">
        <FaGears className="text-5xl" />
        <span>360 Degree Tech Support</span>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-blue-500 rounded-lg">
        <IoShareSocialOutline className="text-5xl" />
        <span>Social Media Integration</span>
      </div>
    </section>
  );
};

export default USP;
