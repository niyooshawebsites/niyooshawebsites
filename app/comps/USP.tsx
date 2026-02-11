import { MdMobileFriendly } from "react-icons/md";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { FaGears } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { BiHappy } from "react-icons/bi";

const USP = () => {
  return (
    <section className="container mx-auto grid grid-cols-2 md:grid-cols-6 text-gray-400 rounded-xl p-2 gap-2 my-10">
      <div className="flex flex-col items-center gap-2 p-5 border border-gray-950 rounded-lg bg-gray-950">
        <BiHappy className="text-5xl text-orange-500" />
        <p className="text-center">Freebies</p>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-gray-950 rounded-lg bg-gray-950">
        <MdMobileFriendly className="text-5xl text-orange-500" />
        <p className="text-center">Mobile Friendly Designs</p>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-gray-950 rounded-lg bg-gray-950">
        <AiTwotoneThunderbolt className="text-5xl text-orange-500" />
        <p className="text-center">Light Weight and Fast Loading</p>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-gray-950 rounded-lg bg-gray-950">
        <IoMdSearch className="text-5xl text-orange-500" />
        <p className="text-center">SEO Optimized</p>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-gray-950 rounded-lg bg-gray-950">
        <FaGears className="text-5xl text-orange-500" />
        <p className="text-center">360 Degree Tech Support</p>
      </div>

      <div className="flex flex-col items-center gap-2 p-5 border border-gray-950 rounded-lg bg-gray-950">
        <IoShareSocialOutline className="text-5xl text-orange-500" />
        <p className="text-center">Social Media Integration</p>
      </div>
    </section>
  );
};

export default USP;
