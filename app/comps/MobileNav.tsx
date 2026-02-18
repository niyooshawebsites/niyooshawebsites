"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { FaPhoneVolume } from "react-icons/fa6";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

// Reuse your arrays here (import them if separated)
const webDevComps = [
  { title: "React Development", href: "/service-details/react-development" },
  {
    title: "Tailwind CSS Development",
    href: "/service-details/tailwind-development",
  },
  {
    title: "Bootstrap Development",
    href: "/service-details/bootstrap-development",
  },
  {
    title: "Node Js Development",
    href: "/service-details/node-js-development",
  },
  {
    title: "MERN Stack Development",
    href: "/service-details/mern-stack-development",
  },
  {
    title: "NEXT Js Development",
    href: "/service-details/next-js-development",
  },
  { title: "Django Development", href: "/service-details/django-development" },
  {
    title: "Laravel Development",
    href: "/service-details/laravel-development",
  },
  {
    title: "Wordpress Development",
    href: "/service-details/wordpress-development",
  },
  {
    title: "Woocommerce Development",
    href: "/service-details/woocommerce-development",
  },
  {
    title: "Shopify Development",
    href: "/service-details/shopify-development",
  },
];

const mobileDevComps = [
  {
    title: "Android Development",
    href: "/service-details/android-development",
  },
  { title: "iOS Development", href: "/service-details/ios-development" },
];

const customDevComps = [
  {
    title: "Custom Ecommerce Development",
    href: "/service-details/custom-ecommerce-development",
  },
  {
    title: "Custom Web App Development",
    href: "/service-details/custom-web-app-development",
  },
];

const graphicsComps = [
  { title: "Logo Designing", href: "/service-details/logo-designing" },
  { title: "Banners Designing", href: "/service-details/banner-designing" },
  {
    title: "Letterhead Designing",
    href: "/service-details/letterhead-designing",
  },
  {
    title: "Visiting Card Designing",
    href: "/service-details/visiting-card-designing",
  },
];

const brandingMarketingComps = [
  { title: "SEO", href: "/seo" },
  { title: "Facebook Marketing", href: "/service-details/facebook-marketing" },
  {
    title: "Instagram Marketing",
    href: "/service-details/instagram-marketing",
  },
  {
    title: "Google Business Profile",
    href: "/service-details/google-business-profile",
  },
  { title: "Google Ads", href: "/service-details/google-ads" },
  {
    title: "Brand Promotional Videos",
    href: "/service-details/brand-promotional-videos",
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6 text-orange-500" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="bg-gray-950 text-gray-300 w-[300px] p-5"
      >
        <div className="mt-6 space-y-4">
          {/* Home */}
          <Link href="/" className="block text-lg hover:text-orange-500">
            Home
          </Link>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="web">
              <AccordionTrigger>Web Development</AccordionTrigger>
              <AccordionContent className="space-y-2">
                {webDevComps.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block pl-4 text-sm hover:text-orange-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="mobile">
              <AccordionTrigger>Mobile Development</AccordionTrigger>
              <AccordionContent className="space-y-2">
                {mobileDevComps.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block pl-4 text-sm hover:text-orange-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="custom">
              <AccordionTrigger>Custom Development</AccordionTrigger>
              <AccordionContent className="space-y-2">
                {customDevComps.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block pl-4 text-sm hover:text-orange-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="graphics">
              <AccordionTrigger>Graphic Designing</AccordionTrigger>
              <AccordionContent className="space-y-2">
                {graphicsComps.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block pl-4 text-sm hover:text-orange-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="branding">
              <AccordionTrigger>Branding & Marketing</AccordionTrigger>
              <AccordionContent className="space-y-2">
                {brandingMarketingComps.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block pl-4 text-sm hover:text-orange-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link href="/about" className="block text-lg hover:text-orange-500">
            About
          </Link>

          <Link href="/contact" className="block text-lg hover:text-orange-500">
            Contact
          </Link>

          <Link
            href="tel:+919205504115"
            className="flex items-center gap-2 bg-orange-500 text-gray-950 px-4 py-2 rounded-md mt-4"
          >
            <FaPhoneVolume />
            +91 9205504115
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
