import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Item,
  ItemDescription,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { LuChevronDown } from "react-icons/lu";
import Link from "next/link";
import services from "@/lib/quickLinks";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="grid md:grid-cols-4 p-5 gap-4 bg-gray-950 mt-10">
      <div className="text-gray-100">
        <h1 className="text-3xl mb-3">About</h1>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          odit quidem molestiae, sed voluptatem iure vero nesciunt nemo dolore
          voluptate dolor placeat delectus quaerat eligendi repellendus
          laboriosam asperiores, ullam nostrum iste fuga in omnis beatae quasi
          deserunt.
        </p>
        <Button
          variant="secondary"
          className="bg-blue-500 hover:bg-blue-600 rounded-md text-gray-100 cursor-pointer"
        >
          More Info
        </Button>
      </div>

      <div className="text-gray-100">
        <h1 className="text-3xl mb-3">Quick Links</h1>
        {services.map((service, i) => (
          <Collapsible key={i}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                {service.name}
                <LuChevronDown />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <ul>
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="border border-blue-500 p-2 rounded-md my-2 hover:bg-gray-900"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      <div className="flex flex-col gap-y-3 text-gray-100">
        <h1 className="text-3xl ">Contact us</h1>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <FaMapMarkerAlt />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Address</ItemTitle>
            <ItemDescription>
              <p>H 189, street no 7, Samaypur, Delhi 110042</p>
            </ItemDescription>
          </ItemContent>
        </Item>

        <Item variant="outline">
          <ItemMedia variant="icon">
            <FaPhoneVolume />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Phone</ItemTitle>
            <ItemDescription>
              <p>+91 9205504115</p>
            </ItemDescription>
          </ItemContent>
        </Item>

        <Item variant="outline">
          <ItemMedia variant="icon">
            <MdAlternateEmail />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Email</ItemTitle>
            <ItemDescription>
              <p>niyooshawebsites@gmail.com</p>
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>

      <div className="text-gray-100 flex flex-col gap-y-3">
        <h1 className="text-3xl ">Follow us</h1>
        <div className="flex gap-3 ">
          <AiOutlineYoutube className="border border-gray-100 text-5xl inline-block p-1 rounded-full " />
          <FaInstagram className="border border-gray-100 text-5xl inline-block p-1 rounded-full " />
          <FaFacebook className="border border-gray-100 text-5xl inline-block p-1 rounded-full " />
          <FaWhatsapp className="border border-gray-100 text-5xl inline-block p-1 rounded-full " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
