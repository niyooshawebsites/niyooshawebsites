import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className=" rounded-3xl p-10 bg-gray-950 ">
      <article className="py-24 text-center h-[300px] md:h-[450px] bg-[url('/img/online.png')] bg-no-repeat bg-center bg-contain -mt-16"></article>
      <article className="flex flex-col justify-center items-center -mt-32">
        <h1 className="text-7xl text-gray-100 font-bold tracking-tight text-center">
          Niyoosha <span className=" text-orange-500">Websites</span>
        </h1>
        <p className="mt-6 text-center text-muted-foreground mx-auto max-w-xl text-gray-100">
          A whole new world of opportunities are waiting for you!!!
        </p>
        <div className="mt-8 flex justify-center gap-4 text-gray-100">
          <Button
            size="lg"
            variant="secondary"
            className="bg-orange-500 shadow-lg shadow-orange-500/50 cursor-pointer hover:translate-y-0.5 hover:bg-orange-600"
          >
            Contact us
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-orange-500 shadow-lg shadow-orange-500/50 cursor-pointer  hover:translate-y-0.5"
          >
            Learn more
          </Button>
        </div>
      </article>
    </section>
  );
};

export default Hero;
