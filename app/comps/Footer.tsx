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
    <footer className="flex flex-col mt-10">
      <section className="grid md:grid-cols-4 p-5 gap-4 bg-gray-950">
        <div className="text-gray-100">
          <h1 className="text-3xl mb-3 text-orange-500">About</h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            odit quidem molestiae, sed voluptatem iure vero nesciunt nemo dolore
            voluptate dolor placeat delectus quaerat eligendi repellendus
            laboriosam asperiores, ullam nostrum iste fuga in omnis beatae quasi
            deserunt.
          </p>
          <Button
            variant="secondary"
            className="bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/50 rounded-md text-gray-100 cursor-pointer"
          >
            More Info
          </Button>
        </div>

        <div className="text-gray-100">
          <h1 className="text-3xl mb-3 text-orange-500">Quick Links</h1>
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
          <h1 className="text-3xl text-orange-500">Contact us</h1>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <FaMapMarkerAlt className="text-orange-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-orange-500">Address</ItemTitle>
              <ItemDescription>
                H 189, street no 7, Samaypur, Delhi 110042
              </ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <FaPhoneVolume className="text-orange-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-orange-500">Phone</ItemTitle>
              <ItemDescription>+91 9205504115</ItemDescription>
            </ItemContent>
          </Item>

          <Item variant="outline">
            <ItemMedia variant="icon">
              <MdAlternateEmail className="text-orange-500" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="text-orange-500">Email</ItemTitle>
              <ItemDescription>niyooshawebsites@gmail.com</ItemDescription>
            </ItemContent>
          </Item>
        </div>

        <div className="text-gray-100 flex flex-col gap-y-3">
          <h1 className="text-3xl text-orange-500">Follow us</h1>
          <div className="flex gap-3 ">
            <AiOutlineYoutube className="border border-gray-100 text-5xl inline-block p-1 rounded-full hover:cursor-pointer hover:translate-y-0.5" />
            <FaInstagram className="border border-gray-100 text-5xl inline-block p-1 rounded-full hover:cursor-pointer hover:translate-y-0.5" />
            <FaFacebook className="border border-gray-100 text-5xl inline-block p-1 rounded-full hover:cursor-pointer hover:translate-y-0.5" />
            <FaWhatsapp className="border border-gray-100 text-5xl inline-block p-1 rounded-full hover:cursor-pointer hover:translate-y-0.5" />
          </div>
        </div>
      </section>
      <section>
        <p className="text-center bg-orange-500 text-gray-100">
          All rights reserved. Copyright &copy; 2026
        </p>
      </section>
    </footer>
  );
};

export default Footer;
