import {
  Award,
  Wrench,
  Ruler,
  ShieldCheck,
  Clock3,
  Headphones,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Premium Materials",
    description:
      "HDHMR, Marine Plywood, quartz countertops, and branded hardware for long-lasting performance.",
  },
  {
    icon: Ruler,
    title: "100% Custom Design",
    description:
      "Every kitchen is planned around your lifestyle, space, and storage requirements.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description:
      "Experienced installers ensure precise fitting and flawless finishing at every project.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Multiple quality inspections guarantee every kitchen meets our highest standards.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Well-planned manufacturing and installation keep your project on schedule.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description:
      "Responsive customer support and reliable warranty assistance long after installation.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28 h-fit">
            <SectionHeading
              align="left"
              tag="Why Choose Kohinoor Kitchens"
              title="Luxury Modular Kitchens"
              italicWord="Built Around You"
            />

            <p className="mt-8 text-lg leading-8 text-muted">
              We don&apos;t just manufacture modular kitchens—we create personalized
              spaces that combine intelligent planning, premium craftsmanship,
              and timeless aesthetics for modern homes across Delhi NCR.
            </p>

            <p className="mt-6 text-lg leading-8 text-muted">
              From design consultation to final installation, every step is handled
              by experienced professionals committed to delivering exceptional
              quality and complete customer satisfaction.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="
                    group
                    border
                    border-border
                    bg-cream
                    p-8
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
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      transition
                      duration-300
                      group-hover:bg-accent
                    "
                  >
                    <Icon
                      size={26}
                      className="
                        text-accent
                        transition
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  <h3
                    className="mt-6 text-2xl text-dark"
                  >
                    {reason.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;