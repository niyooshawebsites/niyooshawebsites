import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/testimonials";

const Testimonials = () => {
  return (
    <section className="py-24">
      <article>
        <h2 className="text-3xl tracking-tight sm:text-4xl">
          Loved by teams worldwide
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              quote={testimonial.quote}
            ></TestimonialCard>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
