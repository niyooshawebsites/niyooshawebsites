import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="border border-gray-400 rounded-3xl p-10 bg-gray-950">
      <article className="py-24 text-center h-[450px] bg-[url('/img/online.png')] bg-no-repeat bg-center bg-contain -mt-16"></article>
      <article className="flex flex-col justify-center items-center -mt-32">
        <h1 className="text-7xl text-gray-100 font-bold tracking-tight">
          Niyoosha <span className=" text-blue-500">Websites</span>
        </h1>
        <p className="mt-6 text-muted-foreground mx-auto max-w-xl text-gray-100">
          A whole new world of opportunities are waiting for you!!!
        </p>
        <div className="mt-8 flex justify-center gap-4 text-gray-100">
          <Button size="lg" variant="secondary" className="bg-blue-500">
            Contact us
          </Button>
          <Button size="lg" variant="outline" className="text-gray-100">
            Learn more
          </Button>
        </div>
      </article>
    </section>
  );
};

export default Hero;
