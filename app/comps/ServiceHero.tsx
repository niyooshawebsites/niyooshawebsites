import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceInterface from "@/lib/serviceInterface";
import { Separator } from "@/components/ui/separator";
import {
  Item,
  ItemDescription,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { ImCheckboxChecked } from "react-icons/im";

interface ServiceHeroProps {
  service: ServiceInterface;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="container mx-auto py-10 grid grid-cols-1 gap-10 text-gray-100">
      <article>
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <Separator className="text-gray-100" />
      </article>

      <article className="container mx-auto grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <p className="text-muted-foreground mb-6">{service.subtitle}</p>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-blue-500 shadow-lg shadow-blue-500/50 cursor-pointer hover:translate-y-0.5"
          >
            Get a Free Consultation
          </Button>
        </div>

        {/* Right */}
        <Card className="p-5 border-0">
          {service.features.map((item) => (
            <Item
              key={item.title}
              variant="outline"
              className="border-blue-500 shadow-md shadow-gray-500/50 hover:-translate-y-0.5 hover:cursor-pointer"
            >
              <ItemMedia variant="icon">
                <ImCheckboxChecked className="text-blue-500" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-blue-500">{item.title}</ItemTitle>
                <ItemDescription>{item.desc}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </Card>
      </article>
    </section>
  );
}
