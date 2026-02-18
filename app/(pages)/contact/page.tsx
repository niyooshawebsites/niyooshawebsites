"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid Email id"),
  mobile: z.string().min(10, "Mobile number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be aleast 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      service: "",
      message: "",
    },
  });

  const submimssion = async (values: FormValues) => {
    try {
      setLoading(true);
      await axios.post("/api/contact", values);
      alert("Message sent successfully!");
      form.reset();
    } catch (err: any) {
      alert(err.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto grid md:grid-cols-2 gap-5 mt-10">
      <article className="border bg-gray-950 rounded-lg p-3 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.1287220649297!2d77.14179539999999!3d28.745573500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0104313d284d%3A0x8885dba4d75e3b22!2sNiyoosha%20Websites!5e0!3m2!1sen!2sin!4v1771339057213!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          className="rounded-lg contain-content"
        />
        <div className=" w-fit p-5 text-gray-400 rounded-lg absolute bottom-3 left-3">
          <div className="bg-gray-950 opacity-90 p-3 rounded-lg mb-2">
            <h1 className="text-2xl mb-2 text-orange-500">Our Location</h1>
            <p>H - 189, Street no 7</p>
            <p>Samaypur, Delhi</p>
            <p>Pincode - 110042</p>
          </div>

          <div className="bg-gray-950 opacity-90 p-3 rounded-lg mb-2">
            <h1 className="text-2xl mb-2 text-orange-500">Email</h1>
            <p>niyooshawebsites@gmail.com</p>
          </div>

          <div className="bg-gray-950 opacity-90 p-3 rounded-lg">
            <h1 className="text-2xl mb-2 text-orange-500">Phone</h1>
            <p>+91 9205504115</p>
          </div>
        </div>
      </article>
      <article className="bg-gray-950 p-5 rounded-lg text-gray-400">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submimssion)} className="space-y-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@gmail.com"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Mobile */}
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input placeholder="9876543210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Service Dropdown */}
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Service</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gray-100">
                      <SelectItem
                        value="web-development"
                        className="hover:cursor-pointer"
                      >
                        Web Development
                      </SelectItem>
                      <SelectItem
                        value="app-development"
                        className="hover:cursor-pointer"
                      >
                        App Development
                      </SelectItem>
                      <SelectItem value="seo" className="hover:cursor-pointer">
                        SEO
                      </SelectItem>
                      <SelectItem
                        value="consulting"
                        className="hover:cursor-pointer"
                      >
                        Consulting
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your requirement..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              variant="default"
              type="submit"
              className="w-full bg-orange-500 text-gray-100 hover:cursor-pointer hover:text-gray-950 hover:scale-101"
            >
              {loading ? "Submitting" : "Submit"}
            </Button>
          </form>
        </Form>
      </article>
    </section>
  );
};

export default Contact;
