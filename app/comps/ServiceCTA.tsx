import Link from "next/link";
const ServiceCTA = () => {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-4 text-orange-500">
          Looking for a perfect digital partner?
        </h2>
        <p className="mb-8 text-lg">
          Let’s turn your idea into a powerful digital product.
        </p>
        <Link href="/contact">
          <button className="bg-orange-500 shadow-lg shadow-orange-500/50 text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition hover:cursor-pointer hover:text-gray-950">
            Get Free Consultation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServiceCTA;
