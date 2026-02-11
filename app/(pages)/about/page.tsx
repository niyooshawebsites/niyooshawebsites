"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Rocket,
  Eye,
  Globe,
  Code,
  Smartphone,
  ShoppingCart,
  Megaphone,
  Palette,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import CountUp from "react-countup";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="container mx-auto p-2 grid grid-cols-1 gap-y-10">
      {/* Company Introduction */}
      <section className="grid gap-5 grid-cols-1 md:grid-cols-2 mx-auto my-10">
        <article>
          <div className="w-full h-[500px] bg-[url('/img/common.jpg')] bg-cover rounded-2xl"></div>
        </article>
        <article>
          <h1 className=" text-orange-500 text-5xl font-semibold mb-5">
            About us
          </h1>
          <p className="text-gray-400 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum hic
            recusandae debitis cupiditate tempora molestiae aliquid perspiciatis
            ipsum laborum voluptatem ex unde libero voluptas repudiandae esse,
            natus saepe ullam dolorem quos assumenda. Harum deleniti omnis
            aspernatur officiis, maxime incidunt ut voluptatem cupiditate
            quaerat accusantium perferendis dolor corrupti repellat, iusto sed
            laborum pariatur doloribus. Odio odit officiis, nihil beatae tempore
            debitis asperiores at, dicta quod dolorum delectus ipsa fugiat
            recusandae reprehenderit voluptas sequi pariatur facere excepturi,
            quibusdam esse exercitationem repellendus.
          </p>

          <p className="text-gray-400 mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum hic
            recusandae debitis cupiditate tempora molestiae aliquid perspiciatis
            ipsum laborum voluptatem ex unde libero voluptas repudiandae esse,
            natus saepe ullam dolorem quos assumenda. Harum deleniti omnis
            aspernatur officiis, maxime incidunt ut voluptatem cupiditate
            quaerat accusantium perferendis dolor corrupti repellat, iusto sed
            laborum pariatur doloribus. Odio odit officiis, nihil beatae tempore
            debitis asperiores at, dicta quod dolorum delectus ipsa fugiat
            recusandae reprehenderit voluptas sequi pariatur facere excepturi,
            quibusdam esse exercitationem repellendus.
          </p>

          <Link href="/contact">
            <Button className="border border-orange-500 text-orange-500 shadow-lg shadow-orange-500/50 cursor-pointer hover:translate-y-0.5 hover:bg-orange-500 hover:text-gray-400">
              Contact us
            </Button>
          </Link>
        </article>
      </section>

      {/* Who we are */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="bg-gray-950 border-0">
          <CardContent>
            <h1 className="text-orange-500 text-xl mb-2">Our Mission</h1>
            <p className="text-gray-400">
              Deliver cutting-edge web applications that drive measurable
              business success.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-950 border-0">
          <CardContent>
            <h1 className="text-orange-500 text-xl mb-2">Our Vision</h1>
            <p className="text-gray-400">
              To become a trusted technology partner for startups and
              enterprises worldwide.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-950 border-0">
          <CardContent>
            <h1 className="text-orange-500 text-xl mb-2">Our Values</h1>
            <p className="text-gray-400">
              Integrity, innovation, performance, and long-term client
              partnerships.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="py-20 px-6 border-t border-gray-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold text-orange-500 mb-6">
              Our Story
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded with a passion for technology, Niyoosha Websites
              specializes in React, Next.js, and full-stack development. We help
              businesses transform ideas into powerful digital products.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Our team focuses on performance, scalability, and modern UI/UX
              principles to ensure your product stands out in today’s
              competitive market.
            </p>

            <Link href="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-gray-400 hover:cursor-pointer">
                Get in Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-950 border-0 rounded-2xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>✔ Modern React & Next.js Expertise</li>
              <li>✔ High Performance & SEO Optimization</li>
              <li>✔ Clean, Scalable Code Architecture</li>
              <li>✔ Long-Term Technical Support</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="px-6 ">
        <h2 className="text-3xl font-semibold text-center text-orange-500 mb-5">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-5 w-full bg-gray-950 rounded-2xl p-5">
          {[
            {
              icon: Code,
              title: "Web Development",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet tenetur dicta fugit quam, magnam aspernatur nemo vero repellendus odio.",
            },
            {
              icon: Smartphone,
              title: "Mobile Apps",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet tenetur dicta fugit quam, magnam aspernatur nemo vero repellendus odio.",
            },
            {
              icon: ShoppingCart,
              title: "eCommerce",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet tenetur dicta fugit quam, magnam aspernatur nemo vero repellendus odio.",
            },
            {
              icon: Megaphone,
              title: "Digital Marketing",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet tenetur dicta fugit quam, magnam aspernatur nemo vero repellendus odio.",
            },
            {
              icon: Palette,
              title: "Branding & Design",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet tenetur dicta fugit quam, magnam aspernatur nemo vero repellendus odio.",
            },
            {
              icon: Globe,
              title: "Custom Software",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas amet tenetur dicta fugit quam, magnam aspernatur nemo vero repellendus odio.",
            },
          ].map((service, i) => (
            <Card
              key={i}
              className="bg-gray-900 border-0 backdrop-blur-xl hover:border hover:border-gray-400 transition"
            >
              <CardContent className="p-8 text-center space-y-4">
                <service.icon className="mx-auto text-gray-400" size={40} />
                <h3 className="font-semibold text-orange-500">
                  {service.title}
                </h3>
                <p className=" text-gray-400">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-24 text-center border-t border-gray-500">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { value: 250, label: "Projects" },
            { value: 150, label: "Clients" },
            { value: 98, label: "Satisfaction %" },
            { value: 24, label: "Support Hours" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-6xl font-bold text-orange-500">
                <CountUp end={stat.value} duration={3} />+
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
