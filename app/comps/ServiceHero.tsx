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
import Image from "next/image";

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

      <article className="container mx-auto grid md:grid-cols-2 gap-10 ">
        {/* Left */}
        <div>
          <h2 className="text-muted-foreground text-xl mb-6">
            {service.subtitle}
          </h2>
          <p className="leading-relaxed text-gray-500">{service.description}</p>

          <Image
            src={service.imageLink}
            alt={service.title}
            width={1200}
            height={800}
            style={{ width: "100%", height: "auto" }}
            className="my-10 rounded-xl"
          />

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
