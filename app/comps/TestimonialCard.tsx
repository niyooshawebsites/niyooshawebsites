import { testimonials } from "@/lib/testimonials";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimoinalsInterface {
  name: string;
  role: string;
  image?: string;
  quote: string;
}

const TestimonialCard = ({
  name,
  role,
  image,
  quote,
}: TestimoinalsInterface) => {
  return (
    <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p>{quote}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
