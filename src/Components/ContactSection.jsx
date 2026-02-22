import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Send
} from "lucide-react";

import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_zr9jfgd",
        "template_6xtse15",
        e.target,
        "u_ksAl2AwKkLMUeL_"
      )
      .then(() => {
        setTimeout(() => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for your message. I'll get back to you soon.",
          });
          setIsSubmitting(false);
        }, 1500);

        e.target.reset();
      })
      .catch(() => {
        toast({
          title: "Error",
          description: "Oops! Something went wrong",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m a computer science engineering student excited to learn, collaborate, and work on real-world challenges. If you have opportunities or ideas Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Information
            </h3>

            {/* ✅ ALIGNMENT FIXED */}
            <div className="space-y-6 max-w-md mx-auto md:mx-0">

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918830402353"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +198830402353
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:vivekjadhao04@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vivekjadhao04@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Digras, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center md:text-left">
                Connect With Me
              </h4>

              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/vivek-jadhao" target="_blank"><Linkedin /></a>
                <a href="#" target="_blank"><Twitter /></a>
                
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Name..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};