import {
  Gem,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const values = [
  {
    icon: Gem,
    title: "Premium Quality",
    description:
      "We use premium materials, branded hardware, and precision manufacturing to ensure every modular kitchen stands the test of time.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Design",
    description:
      "Every kitchen is customized around your lifestyle and space, maximizing functionality while maintaining timeless aesthetics.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description:
      "From moisture-resistant boards to superior fittings, every detail is chosen for durability and long-term performance.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "We deliver exceptional service, transparent communication, and complete customer satisfaction on every kitchen project.",
  },
];

function CoreValues() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <Container>
        <SectionHeading
          tag="Our Values"
          title="What Drives"
          italicWord="Everything We Do"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="
                  group
                  border
                  border-border
                  bg-white
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-2
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
                    bg-cream
                    transition
                    duration-300
                    group-hover:bg-accent
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-accent
                      transition
                      duration-300
                      group-hover:text-white
                    "
                  />
                </div>

                <h3
                  className="mt-8 text-2xl text-dark"
                >
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-muted">
                  {value.description}
                </p>

                <div className="mt-8 h-px w-16 bg-accent" />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default CoreValues;