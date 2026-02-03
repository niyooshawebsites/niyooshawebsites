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

interface ServiceBriefings {
  serviceTitle: string;
  serviceDesc: string;
  actionBtnLink: string;
}

const SerivceCard = ({
  serviceTitle,
  serviceDesc,
  actionBtnLink,
}: ServiceBriefings) => {
  return (
    <Card>
      <CardHeader className="flex">
        <LuPackageCheck className="text-3xl" />
        <CardTitle>{serviceTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{serviceDesc}</CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button asChild>
            <Link href={actionBtnLink}>More Info</Link>
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default SerivceCard;
