import SerivceCard from "./Card";

const niyooshaWebistesServices = [
  {
    serviceTitle: "Static Development",
    serviceDesc:
      "We develop both static as well dynamic websites using HTML and CSS, Bootsrap, Twailwind CSS, PHP",
    actionBtnLink: "/static-web-development",
  },
  {
    serviceTitle: "Dyamic Development",
    serviceDesc:
      "We develop both static as well dynamic websites using CMS like Wordpress as well as completely custom coded using HTML and CSS, Bootsrap, Twailwind CSS, PHP",
    actionBtnLink: "/dynamic-web-development",
  },
  {
    serviceTitle: "E-commerce Development",
    serviceDesc:
      "We develop e-commerce webites using using CMS like Wocommerce or Shopify as well as completely custom coded using MERN Stack, Laravel, Next JS and Django",
    actionBtnLink: "/ecommerce-development",
  },
  {
    serviceTitle: "Web Application Development",
    serviceDesc:
      "We develop custom web applications using using CMS like Wordpress as well as completely custom coded using React Js + Node Js, laravel, Next JS and Django",
    actionBtnLink: "/ecommerce-development",
  },
  {
    serviceTitle: "Graphic Designing",
    serviceDesc:
      "We deisgn logos, banners and letterheads using Adbode Illustrator, Coral Draw and Photoshop",
    actionBtnLink: "/graphic-designing",
  },
  {
    serviceTitle: "SEO",
    serviceDesc:
      "We also improving website ranking using Search Engine Optimization.",
    actionBtnLink: "/search-engine-optimization",
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
      <article className="grid grid-cols-3 gap-3">
        {niyooshaWebistesServices.map((service, i) => (
          <SerivceCard
            key={i}
            serviceTitle={service.serviceTitle}
            serviceDesc={service.serviceDesc}
            actionBtnLink={service.actionBtnLink}
          />
        ))}
      </article>
    </section>
  );
};

export default OurServices;
