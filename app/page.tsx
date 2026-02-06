import Hero from "./comps/Hero";
import WhyUs from "./comps/WhyUs";
import USP from "./comps/USP";
import OurServices from "./comps/OurServices";
import KnowUs from "./comps/KnowUs";
import { ClientsSlider } from "./comps/Clients";
import Testimonials from "./comps/Testimonials";

export default function Home() {
  return (
    <main className="container mx-auto p-2 grid grid-cols-1 gap-y-10">
      <Hero />
      <WhyUs />
      <USP />
      <OurServices />
      <KnowUs />
      <ClientsSlider />
      <Testimonials />
    </main>
  );
}
