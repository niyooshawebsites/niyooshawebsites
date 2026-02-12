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
    <section className="container grid md:grid-cols-2">
      <article></article>
      <article className="bg-gray-950 p-10 rounded-lg text-gray-400">
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
              className="w-full bg-orange-500"
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
