import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const options = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
    description:
      "Speak directly with our kitchen experts for immediate assistance.",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@kohinoorkitchens.com",
    description:
      "Send your requirements and we'll get back within 24 hours.",
    href: "mailto:hello@kohinoorkitchens.com",
  },
  {
    icon: MapPin,
    title: "Visit Showroom",
    value: "Jaipur, Rajasthan",
    description:
      "Explore premium materials, finishes, and complete kitchen displays.",
    href: "https://maps.google.com",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon – Sat | 10 AM – 7 PM",
    description:
      "Book an appointment for a personalized design consultation.",
    href: null,
  },
];

function ContactOptions() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          tag="Get In Touch"
          title="We're Always"
          italicWord="Here To Help"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {options.map((item) => {
            const Icon = item.icon;

            const Card = (
              <article
                className="
                  group
                  h-full
                  border
                  border-[#e8e4dc]
                  bg-[#f7f5f0]
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:bg-white
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    transition-all
                    duration-300
                    group-hover:bg-[#C8A97A]
                  "
                >
                  <Icon
                    size={28}
                    className="
                      text-[#C8A97A]
                      transition-all
                      duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                <h3
                  className="mt-8 text-2xl text-[#1a1a18]"
                  style={{
                    fontFamily: "Playfair Display",
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 font-medium text-[#1a1a18]">
                  {item.value}
                </p>

                <p className="mt-4 leading-7 text-[#6b6b66]">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-16 bg-[#C8A97A]" />
              </article>
            );

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {Card}
              </a>
            ) : (
              <div key={item.title}>{Card}</div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ContactOptions;