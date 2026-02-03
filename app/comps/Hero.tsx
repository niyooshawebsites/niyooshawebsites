import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className=" mx-auto py-24 text-center h-[580px] bg-cyan-700 bg-[url('/online.jpg')] bg-no-repeat bg-center">
      <h1 className="text-4xl font-bold tracking-tight">
        <span className="text-7xl text-blue-500">Niyoosha Websites</span>
      </h1>
      <p className="mt-6 text-muted-foreground mx-auto max-w-xl">
        A whole new world of opportunities are waiting for you!!!
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg">Contact us</Button>
        <Button size="lg" variant="outline">
          Learn more
        </Button>
      </div>
    </section>
  );
};

export default Hero;
