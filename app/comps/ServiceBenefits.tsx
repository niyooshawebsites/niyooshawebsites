import { Card, CardContent } from "@/components/ui/card";
import ServiceInterface from "@/lib/serviceInterface";

interface ServiceProps {
  service: ServiceInterface;
}

interface Benefit {
  title: string;
  desc: string;
}

export default function ServiceBenefits({ service }: ServiceProps) {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose This Technology?
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {service.benefits.map((benefit: Benefit) => (
          <Card key={benefit.title}>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
