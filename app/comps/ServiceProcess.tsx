const processSteps = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "We understand your business goals and technical needs.",
  },
  {
    step: "02",
    title: "UI/UX & Architecture",
    desc: "Designing scalable and user-friendly architecture.",
  },
  {
    step: "03",
    title: "Development",
    desc: "Clean, optimized, and future-ready code.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    desc: "Thorough QA and smooth production launch.",
  },
];

const ServiceProcess = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Development Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.step} className="text-center p-6 border rounded-xl">
              <span className="text-primary text-4xl font-bold">
                {step.step}
              </span>
              <h3 className="mt-4 font-semibold text-xl">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
