import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          odit quidem molestiae, sed voluptatem iure vero nesciunt nemo dolore
          voluptate dolor placeat delectus quaerat eligendi repellendus
          laboriosam asperiores, ullam nostrum iste fuga in omnis beatae quasi
          deserunt. Officia at expedita ab ipsum necessitatibus doloremque quis
          eius! Autem, laborum a? Dolorum unde id est ratione minima vitae
          dolore exercitationem, aspernatur, non ea eligendi voluptate in
          incidunt nobis quod illo velit doloribus aliquid officia. Minus fugit
          odit natus dolores placeat vitae reiciendis ducimus corrupti! Quae
          pariatur laudantium obcaecati molestiae, sit soluta ea illo sequi eos
          ipsum quo, nulla vel aut quibusdam odio!
        </p>
        <Button
          variant="secondary"
          className="bg-blue-500 rounded-md text-gray-100"
        >
          More Info
        </Button>
      </div>

      <div>
        <h1>Quick Links</h1>
      </div>
    </footer>
  );
};

export default Footer;
