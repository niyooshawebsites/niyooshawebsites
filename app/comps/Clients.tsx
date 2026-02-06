"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// data/clients.ts
export const clients = [
  {
    name: "BSV Milk",
    logo: "/img/clients/holy.webp",
    alt: "BSV Milk",
  },
  {
    name: "Balistic Nets",
    logo: "/img/clients/ballisticlogo.webp",
    alt: "Balistic Nets",
  },
  {
    name: "White Knight Holidays",
    logo: "/img/clients/whiteknightlogo.webp",
    alt: "White Knight Holidays",
  },
  {
    name: "Ag-nee Ayurveda",
    logo: "/img/clients/agneelogo.webp",
    alt: "Ag-nee Ayurveda",
  },
  {
    name: "Eagle View Phychiatry",
    logo: "/img/clients/eagleviewlogo.webp",
    alt: "Eagle View Phychiatry",
  },
  {
    name: "Jai Shree Mahakaal Security Services",
    logo: "/img/clients/jmss.webp",
    alt: "Jai Shree Mahakaal Security Services",
  },
  {
    name: "Mann Nutrition",
    logo: "/img/clients/mann.webp",
    alt: "Mann Nutrition",
  },
  {
    name: "Seasprint Logistics",
    logo: "/img/clients/seasprint-logo.webp",
    alt: "Seasprint Logistics",
  },
  {
    name: "Vedika Instruments",
    logo: "/img/clients/vedika.webp",
    alt: "Vedika Instruments",
  },
  {
    name: "Indian Human Hair Extensions",
    logo: "/img/clients/vedica.png",
    alt: "Indian Human Hair Extensions",
  },
  {
    name: "Galaxy Hospitality",
    logo: "/img/clients/galaxy-logo.webp",
    alt: "Galaxy Hospitality",
  },
  {
    name: "Hunkship Logistics",
    logo: "/img/clients/hunk.webp",
    alt: "Hunkship Logistics",
  },
  {
    name: "3KYU",
    logo: "/img/clients/3kyulogo.webp",
    alt: "3KYU",
  },
  {
    name: "Mendro Corporation",
    logo: "/img/clients/mendrocorporationlogo.webp",
    alt: "Mendro Corporation",
  },
  {
    name: "KVUS Agrotech",
    logo: "/img/clients/kvus-logo.webp",
    alt: "KVUS",
  },
  {
    name: "Economic Council of India",
    logo: "/img/clients/ecilogo.webp",
    alt: "Economic Council of India",
  },
  {
    name: "Eurostar IT Solutions",
    logo: "/img/clients/et.webp",
    alt: "Eurostar IT Solutions",
  },
  {
    name: "Visooptica",
    logo: "/img/clients/visooptica-logo.webp",
    alt: "/clients/vedica.png",
  },
  {
    name: "TrueDiet Nutrition",
    logo: "/img/clients/truedietlogo.webp",
    alt: "TrueDiet Nutrition",
  },
  {
    name: "Limiteless Vacations",
    logo: "/img/clients/vacation.webp",
    alt: "Limiteless Vacations",
  },
  {
    name: "RVL",
    logo: "/img/clients/rajveda-logo.webp",
    alt: "RVL",
  },
  {
    name: "Phonical Synergies",
    logo: "/img/clients/phonical-logo.webp",
    alt: "Phonical Synergies",
  },
  {
    name: "Notun Kore Sajo",
    logo: "/img/clients/notunloresajo-logo.webp",
    alt: "Notun Kore Sajo",
  },
  {
    name: "Muscle Diet Nutrition",
    logo: "/img/clients/musclidi8logo.webp",
    alt: "Muscle Diet Nutrition",
  },
  {
    name: "Lead Time Group",
    logo: "/img/clients/leadtimelogo.webp",
    alt: "Lead Time Group",
  },
  {
    name: "Humey Life Sciences",
    logo: "/img/clients/humay-logo.webp",
    alt: "Humey Life Sciences",
  },
  {
    name: "Heaven Reset Foundation",
    logo: "/img/clients/hrf-logo.webp",
    alt: "Heaven Reset Foundation",
  },
  {
    name: "Fabic DS",
    logo: "/img/clients/fabicdslogo.webp",
    alt: "Fabic DS",
  },
];

export function ClientsSlider() {
  return (
    <section className="text-gray-100">
      <article>
        <h1 className="text-3xl">Our Clients</h1>
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {clients.map((client, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/4 lg:basis-1/6"
              >
                <div className="flex items-center justify-center p-4">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={300}
                    height={150}
                    className="object-contain  transition border border-gray-300 p-1 rounded-2xl"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </article>
    </section>
  );
}
