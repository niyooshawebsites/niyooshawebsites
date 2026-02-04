import SerivceCard from "./CardComp";

const niyooshaWebistesServices = [
  {
    title: "Static Development",
    desc: "We develop both static as well dynamic websites using HTML and CSS, Bootsrap, Twailwind CSS, PHP",
    link: "/static-web-development",
  },
  {
    title: "Dyamic Development",
    desc: "We develop both static as well dynamic websites using CMS like Wordpress as well as completely custom coded using HTML and CSS, Bootsrap, Twailwind CSS, PHP",
    link: "/dynamic-web-development",
  },
  {
    title: "E-commerce Development",
    desc: "We develop e-commerce webites using using CMS like Wocommerce or Shopify as well as completely custom coded using MERN Stack, Laravel, Next JS and Django",
    link: "/ecommerce-development",
  },
  {
    title: "Web Application Development",
    desc: "We develop custom web applications using using CMS like Wordpress as well as completely custom coded using React Js + Node Js, laravel, Next JS and Django",
    link: "/ecommerce-development",
  },
  {
    title: "Graphic Designing",
    desc: "We deisgn logos, banners and letterheads using Adbode Illustrator, Coral Draw and Photoshop",
    link: "/graphic-designing",
  },
  {
    title: "SEO",
    desc: "We also improving website ranking using Search Engine Optimization.",
    link: "/search-engine-optimization",
  },
];

const OurServices = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <article>
        <h1 className="text-3xl">Our Services</h1>
        <p>
          Niyoosha Websites is the leading web design, development and digital
          marketing agency in Delhi. We offer professional solutions with
          premium quality for your web designing, web development, digital
          marketing and other IT related issues
        </p>
      </article>
      <article className="grid md:grid-cols-3 gap-3">
        {niyooshaWebistesServices.map((service, i) => (
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
