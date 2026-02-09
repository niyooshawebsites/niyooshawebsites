import { services } from "@/lib/serviceDetails";
import ServiceHero from "@/app/comps/ServiceHero";
import ServiceProcess from "@/app/comps/ServiceProcess";
import ServiceFeatures from "@/app/comps/ServiceFeatures";
import ServiceBenefits from "@/app/comps/ServiceBenefits";
import ServiceCTA from "@/app/comps/ServiceCTA";

const ServicePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const service = services[slug as keyof typeof services];
  if (!service) return <div>Service not found</div>;
  return (
    <main className="p-2">
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceBenefits service={service} />
      <ServiceProcess />
      <ServiceCTA />
    </main>
  );
};

export default ServicePage;
