import React from "react";
import { Button } from "@/components/ui/button";

const WhyUs = () => {
  return (
    <section className="container mx-auto my-28">
      <article className="flex mb-5">
        <div className="w-6/12">
          <h1 className="text-3xl text-gray-100">
            Best <span className="text-blue-500">Web Design Company</span> In
            Delhi
          </h1>
          <p className="mt-5 text-gray-100">
            Welcome to Niyoosha Websites, where innovation meets optimization!
            As a premier website and SEO company, we are dedicated to
            transforming your digital presence and driving unparalleled success
            for your business. In the ever-evolving landscape of the online
            world, we understand the critical importance of a strong,
            user-friendly website coupled with a robust SEO strategy to ensure
            your brand stands out amidst the competition.
          </p>

          <p className="mt-5 text-gray-100">
            At Niyoosha Websites, we pride ourselves on being at the forefront
            of technological advancements, leveraging cutting-edge tools and
            methodologies to craft websites that not only captivate audiences
            but also convert visitors into loyal customers. Our team of skilled
            developers, designers, and SEO experts collaborate seamlessly to
            deliver solutions tailored to meet your unique business goals.
          </p>

          <Button
            className="mt-10 bg-blue-500 text-white cursor-pointer"
            variant="secondary"
          >
            More Info
          </Button>
        </div>
        <div className="w-6/12 h-[500px] bg-[url('/img/common.jpg')] bg-cover rounded-2xl"></div>
      </article>
      <article className="grid md:grid-cols-4 gap-6">
        <div className="bg-gray-950 border border-blue-500 text-gray-100 p-5 rounded-xl">
          <h1 className="text-2xl mb-2 text-blue-500">
            Customized Web Solutions
          </h1>
          <p>
            Every business is unique, and so are our web solutions. We design
            and develop websites that align with your brand identity, ensuring a
            memorable and user-friendly experience.
          </p>
        </div>

        <div className="bg-gray-950 border border-blue-500 text-gray-100 p-5 rounded-xl">
          <h1 className="text-2xl mb-2 text-blue-500">Data-Driven Approach</h1>
          <p>
            In the world of digital marketing, data is king. We analyze and
            interpret data to refine our strategies, ensuring your online
            presence is continually optimized for maximum impact.
          </p>
        </div>

        <div className="bg-gray-950 border border-blue-500 text-gray-100 p-5 rounded-xl">
          <h1 className="text-2xl mb-2 text-blue-500">
            Transparent Communication
          </h1>
          <p>
            We believe in transparency and open communication. Throughout the
            development and optimization process, you’ll be kept in the loop
            with regular updates, progress reports, and insights into our
            strategies.
          </p>
        </div>

        <div className="bg-gray-950 border border-blue-500 text-gray-100 p-5 rounded-xl">
          <h1 className="text-2xl mb-2 text-blue-500">
            Results-Oriented Focus
          </h1>
          <p>
            Our ultimate goal is to drive measurable results for your business.
            Whether it’s increased website traffic, higher conversion rates, or
            improved search engine rankings, we are dedicated to achieving
            tangible outcomes.
          </p>
        </div>
      </article>
    </section>
  );
};

export default WhyUs;
