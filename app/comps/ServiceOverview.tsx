import ServiceInterface from "@/lib/serviceInterface";

interface ServiceOverviewProps {
  service: ServiceInterface;
}

const ServiceOverview = ({ service }: ServiceOverviewProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-4">Overview</h2>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
      </div>
    </section>
  );
};

export default ServiceOverview;
