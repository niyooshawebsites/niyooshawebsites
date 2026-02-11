import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { LuPackageCheck } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TbWorldWww } from "react-icons/tb";
import { BsCart2 } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";
import { GiPaintRoller } from "react-icons/gi";
import { HiOutlineSpeakerphone } from "react-icons/hi";

interface CardBriefings {
  title: string;
  desc: string;
  link: string;
  showLink: true | false;
  icon: string;
}

const iconMapper = (icon: string) => {
  if (icon == "TbWorldWww") {
    return <TbWorldWww className="text-5xl text-gray-200" />;
  } else if (icon == "BsCart2") {
    return <BsCart2 className="text-5xl text-gray-200" />;
  } else if (icon == "FaAppStore") {
    return <FaAppStore className="text-5xl text-gray-200" />;
  } else if (icon == "GiPaintRoller") {
    return <GiPaintRoller className="text-5xl text-gray-200" />;
  } else if (icon == "HiOutlineSpeakerphone") {
    return <HiOutlineSpeakerphone className="text-5xl text-gray-200" />;
  } else {
    return null;
  }
};

const CardComp = ({ title, desc, link, showLink, icon }: CardBriefings) => {
  return (
    <Card className="border border-gray-950 bg-gray-950">
      <CardHeader className="flex items-center">
        {iconMapper(icon)}
        <CardTitle className="text-orange-500 text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">{desc}</CardDescription>
      </CardContent>
      <CardFooter>
        {showLink ? (
          <CardAction>
            <Button
              asChild
              variant={"outline"}
              className="text-orange-500 shadow-lg shadow-orange-500/50 cursor-pointer hover:translate-y-0.5 hover:bg-orange-500 hover:text-gray-950"
            >
              <Link href={link}>More Info</Link>
            </Button>
          </CardAction>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default CardComp;
