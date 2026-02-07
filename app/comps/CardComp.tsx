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

interface CardBriefings {
  title: string;
  desc: string;
  link: string;
  showLink: true | false;
}

const CardComp = ({ title, desc, link, showLink }: CardBriefings) => {
  return (
    <Card className="border border-blue-500 bg-gray-950">
      <CardHeader className="flex items-center">
        <LuPackageCheck className="text-3xl text-gray-100" />
        <CardTitle className="text-gray-100">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-100">{desc}</CardDescription>
      </CardContent>
      <CardFooter>
        {showLink ? (
          <CardAction>
            <Button
              asChild
              variant={"outline"}
              className="text-blue-500 shadow-lg shadow-blue-500/50 cursor-pointer hover:translate-y-0.5"
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
