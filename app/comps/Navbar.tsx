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
  { title: "React Development", href: "/react-development" },
  { title: "Tailwind CSS Development", href: "/tailwind-development" },
  { title: "Bootstrap Development", href: "/bootstrap-development" },
  { title: "Node Js Development", href: "/node-js-development" },
  { title: "MERN Stack Development", href: "/mern-stack-development" },
  { title: "NEXT Js Development", href: "/next-js-development" },
  { title: "Django Development", href: "/django-development" },
  { title: "Laravel Development", href: "/laravel-development" },
  { title: "Wordpress Development", href: "/wordpress-development" },
  { title: "Shopify Development", href: "/shopify-development" },
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
  <ul className="grid gap-2 p-4 w-[320px]">
    {items.map((item) => (
      <li key={item.href}>
        <NavigationMenuLink
          asChild
          className="border border-gray-200 hover:bg-gray-300"
        >
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
    <NavigationMenu className="container mx-auto py-2">
      <NavigationMenuList className=" flex gap-6">
        <NavigationMenuItem className="relative">
          <NavigationMenuLink asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Web Development</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-50">
            <DropdownList items={webDevComps} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Mobile Development</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-50">
            <DropdownList items={mobileDevComps} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Graphic Designing</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-50">
            <DropdownList items={graphicsComps} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Branding & Marketing</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-gray-50">
            <DropdownList items={brandingMarketingComps} />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="tel:+9192005504115"
              className="bg-blue-500 text-gray-100 hover:bg-blue-600"
            >
              Call: +91 92005504115
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuViewport className="mx-auto" />
    </NavigationMenu>
  );
};

export default Navbar;
