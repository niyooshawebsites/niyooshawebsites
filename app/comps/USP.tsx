import { MdMobileFriendly } from "react-icons/md";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { FaGears } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

const USP = () => {
  return (
    <section className="container mx-auto flex justify-between my-10">
      <div className="flex flex-col items-center gap-2">
        <MdMobileFriendly className="text-3xl" />
        <span>Mobile Friendly Designs</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <AiTwotoneThunderbolt className="text-3xl" />
        <span>Light Weight and Fast Loading</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <IoMdSearch className="text-3xl" />
        <span>SEO Optimized</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <FaGears className="text-3xl" />
        <span>360 Degree Tech Support</span>
      </div>

      <div className="flex flex-col items-center gap-2">
        <IoShareSocialOutline className="text-3xl" />
        <span>Social Media Integration</span>
      </div>
    </section>
  );
};

export default USP;
