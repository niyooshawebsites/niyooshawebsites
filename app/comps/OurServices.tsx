import SerivceCard from "./CardComp";
import coreSerivces from "@/lib/coreServices";

const OurServices = () => {
  return (
    <section className="flex flex-col gap-y-10">
      <article className="text-gray-100 ">
        <h1 className="text-3xl mb-5">Our Core Services</h1>
        <p>
          Niyoosha Websites is the leading web design, development and digital
          marketing agency in Delhi. We offer professional solutions with
          premium quality for your web designing, web development, digital
          marketing and other IT related issues
        </p>
      </article>
      <article className="grid md:grid-cols-3 gap-3">
        {coreSerivces.map((service, i) => (
          <SerivceCard
            key={i}
            title={service.title}
            desc={service.desc}
            link={service.link}
            showLink={true}
          />
        ))}
      </article>
    </section>
  );
};

export default OurServices;
