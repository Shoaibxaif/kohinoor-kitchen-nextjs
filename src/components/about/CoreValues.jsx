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
      "We use carefully selected materials, branded hardware, and precision manufacturing to ensure every kitchen stands the test of time.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Design",
    description:
      "Every kitchen is customized around your lifestyle, maximizing functionality while maintaining timeless aesthetics.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Last",
    description:
      "From moisture-resistant boards to premium fittings, every detail is chosen for durability and long-term performance.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "We believe exceptional service, transparent communication, and complete customer satisfaction are the foundation of every successful project.",
  },
];

function CoreValues() {
  return (
    <section className="bg-[#f7f5f0] py-24 lg:py-32">
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
                  border-[#e8e4dc]
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
                    bg-[#f7f5f0]
                    transition
                    duration-300
                    group-hover:bg-[#C8A97A]
                  "
                >
                  <Icon
                    size={30}
                    className="
                      text-[#C8A97A]
                      transition
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
                  {value.title}
                </h3>

                <p className="mt-5 leading-8 text-[#6b6b66]">
                  {value.description}
                </p>

                <div className="mt-8 h-px w-16 bg-[#C8A97A]" />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default CoreValues;