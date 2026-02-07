import { services } from "@/lib/serviceDetails";
import ServiceHero from "@/app/comps/ServiceHero";
import ServiceProcess from "@/app/comps/ServiceProcess";
import ServiceFeatures from "@/app/comps/ServiceFeatures";
import ServiceOverview from "@/app/comps/ServiceOverview";
import ServiceBenefits from "@/app/comps/ServiceBenefits";
import ServiceCTA from "@/app/comps/ServiceCTA";

const ServicePage = ({ params }: { params: { slug: string } }) => {
  const service = services[params.slug as keyof typeof services];

  if (!service) return <div>Service not found</div>;
  return (
    <main>
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <ServiceFeatures features={service.features} />
      <ServiceBenefits service={service} />
      <ServiceProcess />
      <ServiceCTA />
    </main>
  );
};

export default ServicePage;
