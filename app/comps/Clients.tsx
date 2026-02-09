"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import clients from "@/lib/clients";

export function ClientsSlider() {
  return (
    <section className="text-orange-500 my-10">
      <article>
        <h1 className="text-3xl mb-3">Our Clients</h1>
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
