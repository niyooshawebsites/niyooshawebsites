import Hero from "./comps/Hero";
import About from "./comps/About";
import WhyUs from "./comps/WhyUs";
import USP from "./comps/USP";
import OurServices from "./comps/OurServices";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
      <About />
      <WhyUs />
      <USP />
      <OurServices />
    </main>
  );
}
