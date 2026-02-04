import CardComp from "./CardComp";

const knowUsItems = [
  {
    title: "PORTFOLIO ANALYSIS",
    desc: "You can analyze our skills by going through our web design portfolio and branding portfolio. We welcome all type of web design and development work from any field",
    link: "/contact",
  },
  {
    title: "PICK THE PACKAGE",
    desc: "We develop all kinds of websites, irrespective of field and location. Be it for a small business or a large organization, we have plans for all",
    link: "/contact",
  },
  {
    title: "DROP A PROPOSAL",
    desc: "Drop a proposal by submitting the inquiry through the website and in a short period we will reach you with the estimate",
    link: "/contact",
  },
  {
    title: "CO-ORDINATION",
    desc: "We enable clients to monitor the web development process throughout the phase. After completion, we provide one year of technical support",
    link: "/contact",
  },
];

const KnowUs = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <article>
        <h1 className="text-3xl">
          Know Us, <span className="text-blue-500">To Move With Us</span>
        </h1>
        <p>
          Niyoosha Websites is focused on delivering professional and the best
          web development service to clients.
        </p>
      </article>
      <article className="grid grid-cols-2 gap-3">
        {knowUsItems.map((item, i) => (
          <CardComp
            key={i}
            title={item.title}
            desc={item.desc}
            link={item.link}
            showLink={false}
          />
        ))}
      </article>
    </section>
  );
};

export default KnowUs;
