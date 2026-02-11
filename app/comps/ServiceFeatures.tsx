import { CheckCircle } from "lucide-react";
import ServiceInterface from "@/lib/serviceInterface";

interface ServiceFeaturesProps {
  service: ServiceInterface;
}

const ServiceFeatures = ({ service }: ServiceFeaturesProps) => {
  return (
    <section className="py-16 bg-gray-950 p-2 rounded-xl">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-400">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-orange-500 text-gray-400 p-5 rounded-xl hover:translate-y-0.5 hover:cursor-pointer"
            >
              <CheckCircle className="text-primary w-6 h-6" />
              <span className="font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
