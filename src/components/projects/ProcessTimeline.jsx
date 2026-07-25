import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We understand your lifestyle, space, preferences, and budget before starting the design process.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our designers create detailed 2D layouts and realistic 3D visualizations tailored to your home.",
  },
  {
    number: "03",
    title: "Manufacturing",
    description:
      "Every cabinet is manufactured using premium materials and precision-engineered machinery.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Our experienced installation team ensures every component fits perfectly with exceptional finishing.",
  },
  {
    number: "05",
    title: "Handover",
    description:
      "After a complete quality inspection, your dream kitchen is ready to enjoy for years to come.",
  },
];

function ProcessTimeline() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        <SectionHeading
          tag="Our Process"
          title="From Concept"
          italicWord="To Completion"
        />

        <div className="relative mt-20">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-[#e8e4dc] lg:block" />

          <div className="grid gap-10 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Number Circle */}
                <div
                  className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-[#f7f5f0]
                    bg-[#C8A97A]
                    text-2xl
                    text-white
                    shadow-lg
                  "
                  style={{
                    fontFamily: "Playfair Display",
                  }}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className="
                    mt-8
                    border
                    border-[#e8e4dc]
                    bg-[#f7f5f0]
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  <h3
                    className="text-2xl text-[#1a1a18]"
                    style={{
                      fontFamily: "Playfair Display",
                    }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#6b6b66]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProcessTimeline;