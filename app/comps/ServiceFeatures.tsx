import { CheckCircle } from "lucide-react";

interface ServiceFeaturesProps {
  features: string[];
}

const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm"
            >
              <CheckCircle className="text-primary w-6 h-6" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
