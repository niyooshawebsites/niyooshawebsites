type Benefit = {
  title: string;
  desc: string;
};

type Feature = {
  title: string;
  desc: string;
};

interface ServiceInterface {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: Feature[];
  benefits: Benefit[];
  link: string;
  imageLink: string;
}

export default ServiceInterface;
