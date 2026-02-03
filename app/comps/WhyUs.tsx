import React from "react";
import Image from "next/image";

const WhyUs = () => {
  return (
    <section className="container mx-auto my-10">
      <article className="flex mb-5">
        <div className="w-6/12">
          <h1 className="text-3xl mb-2">Strategic SEO Expertise</h1>
          <p>
            Our SEO specialists are committed to staying ahead of the curve,
            implementing the latest techniques to enhance your website’s
            visibility and ranking on search engines.
          </p>
        </div>
        <div className="w-6/12">
          <Image src={"/common.jpg"} alt="why us" width={500} height={300} />
        </div>
      </article>
      <article className="grid grid-cols-2 gap-6">
        <div className="bg-gray-100 hover:bg-gray-200 p-5 rounded">
          <h1 className="text-2xl mb-2">Customized Web Solutions</h1>
          <p>
            Every business is unique, and so are our web solutions. We design
            and develop websites that align with your brand identity, ensuring a
            memorable and user-friendly experience.
          </p>
        </div>

        <div className="bg-gray-100 hover:bg-gray-200 p-5 rounded">
          <h1 className="text-2xl mb-2">Data-Driven Approach</h1>
          <p>
            In the world of digital marketing, data is king. We analyze and
            interpret data to refine our strategies, ensuring your online
            presence is continually optimized for maximum impact.
          </p>
        </div>

        <div className="bg-gray-100 hover:bg-gray-200 p-5 rounded">
          <h1 className="text-2xl mb-2">Transparent Communication</h1>
          <p>
            We believe in transparency and open communication. Throughout the
            development and optimization process, you’ll be kept in the loop
            with regular updates, progress reports, and insights into our
            strategies.
          </p>
        </div>

        <div className="bg-gray-100 hover:bg-gray-200 p-5 rounded">
          <h1 className="text-2xl mb-2">Results-Oriented Focus</h1>
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
