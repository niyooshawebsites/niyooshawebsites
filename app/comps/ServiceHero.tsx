import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceInterface from "@/lib/serviceInterface";

interface ServiceHeroProps {
  service: ServiceInterface;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="container py-20 grid lg:grid-cols-2 gap-10">
      {/* Left */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-muted-foreground mb-6">{service.subtitle}</p>

        <Button size="lg">Get a Free Consultation</Button>
      </div>

      {/* Right */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Our {service.title} Services</h3>
        <ul className="space-y-3">
          {service.features.map((item: string) => (
            <li key={item} className="flex items-center gap-2">
              ✅ {item}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
