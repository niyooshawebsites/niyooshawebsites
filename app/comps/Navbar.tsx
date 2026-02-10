"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const webDevComps = [
  { title: "React Development", href: "/service-details/react" },
  { title: "Tailwind CSS Development", href: "/service-details/tailwind" },
  { title: "Bootstrap Development", href: "/service-details/bootstrap" },
  { title: "Node Js Development", href: "/service-details/nodejs" },
  {
    title: "MERN Stack Development",
    href: "/service-details/mern-stack",
  },
  {
    title: "NEXT Js Development",
    href: "/service-details/nextjs",
  },
  { title: "Django Development", href: "/service-details/django" },
  {
    title: "Laravel Development",
    href: "/service-details/laravel",
  },
  {
    title: "Wordpress Development",
    href: "/service-details/wordpress",
  },
  {
    title: "Woocommerce Development",
    href: "/service-details/woocommerce",
  },
  {
    title: "Shopify Development",
    href: "/service-details/shopify",
  },
];

const mobileDevComps = [
  { title: "Android Development", href: "/android-development" },
  { title: "iOS Development", href: "/ios-development" },
];

const graphicsComps = [
  { title: "Logo Designing", href: "/logo-designing" },
  { title: "Banners Designing", href: "/banners-designing" },
  { title: "Letterhead Designing", href: "/letterhead-designing" },
  { title: "Visiting Card Designing", href: "/visiting-card-designing" },
];

const brandingMarketingComps = [
  { title: "SEO", href: "/seo" },
  { title: "Facebook Marketing", href: "/facebook-marketing" },
  { title: "Instagram Marketing", href: "/instagram-marketing" },
  { title: "Google Business Profile", href: "/google-business-profile" },
  { title: "Google Ads", href: "/google-ads" },
];

const DropdownList = ({
  items,
}: {
  items: { title: string; href: string }[];
}) => (
  <ul className="grid gap-2 p-2 w-[320px]">
    {items.map((item) => (
      <li key={item.href}>
        <NavigationMenuLink asChild className="border-0 hover:bg-orange-500">
          <Link
            href={item.href}
            className="block rounded-md px-3 py-2 text-sm hover:bg-accent"
          >
            {item.title}
          </Link>
        </NavigationMenuLink>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  return (
    <NavigationMenu className="container mx-auto py-2 text-gray-100">
      <NavigationMenuList className=" flex gap-6">
        <NavigationMenuItem className="relative rounded-md">
          <NavigationMenuLink
            asChild
            className="hover:text-orange-500 hover:cursor-pointer"
          >
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:cursor-pointer rounded-md">
          <NavigationMenuTrigger className="hover:text-orange-500 hover:cursor-pointer">
            Web Development
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-900">
            <DropdownList items={webDevComps} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:cursor-pointer rounded-md">
          <NavigationMenuTrigger className="hover:text-orange-500 hover:cursor-pointer">
            Mobile Development
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-900 ">
            <DropdownList items={mobileDevComps} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:cursor-pointer rounded-md">
          <NavigationMenuTrigger className="hover:text-orange-500 hover:cursor-pointer">
            Graphic Designing
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-900">
            <DropdownList items={graphicsComps} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:cursor-pointer rounded-md">
          <NavigationMenuTrigger className="hover:text-orange-500 hover:cursor-pointer">
            Branding & Marketing
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-900">
            <DropdownList items={brandingMarketingComps} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:cursor-pointer rounded-md">
          <NavigationMenuLink
            asChild
            className="hover:text-orange-500 hover:cursor-pointer"
          >
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hover:cursor-pointer rounded-md">
          <NavigationMenuLink
            asChild
            className="hover:text-orange-500 hover:cursor-pointer"
          >
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="tel:+919205504115"
              className="bg-orange-500 shadow-lg shadow-orange-500/50 text-gray-100 hover:bg-orange-600"
            >
              +91 9205504115
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport className="mx-auto" />
    </NavigationMenu>
  );
};

export default Navbar;
