type Benefit = {
  title: string;
  desc: string;
};

interface ServiceInterface {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  benefits: Benefit[];
}

export default ServiceInterface;
