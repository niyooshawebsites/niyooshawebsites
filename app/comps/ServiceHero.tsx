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
import Link from "next/link";

interface ServiceHeroProps {
  service: ServiceInterface;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="container mx-auto py-10 grid grid-cols-1 gap-10 text-gray-400">
      <article>
        <h1 className="text-4xl font-bold mb-4 text-orange-500">
          {service.title}
        </h1>
        <Separator className="bg-gray-500" />
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

          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="bg-orange-500 shadow-lg shadow-orange-500/50 cursor-pointer hover:translate-y-0.5"
            >
              Get a Free Consultation
            </Button>
          </Link>
        </div>

        {/* Right */}
        <Card className="p-5 border-0 ">
          {service.features.map((item) => (
            <Item
              key={item.title}
              variant="outline"
              className="border-gray-950 shadow-md shadow-orange-500/50 hover:-translate-y-0.5 hover:cursor-pointer bg-gray-950"
            >
              <ItemMedia variant="icon">
                <ImCheckboxChecked className="text-orange-500" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="text-orange-500">{item.title}</ItemTitle>
                <ItemDescription>{item.desc}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </Card>
      </article>
    </section>
  );
}
