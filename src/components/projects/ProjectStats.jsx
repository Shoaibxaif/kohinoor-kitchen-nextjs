import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const stats = [
  {
    value: "500+",
    label: "Projects Completed",
    description: "Luxury modular kitchens delivered across India.",
  },
  {
    value: "15+",
    label: "Years Experience",
    description: "Crafting premium kitchens with precision and care.",
  },
  {
    value: "25+",
    label: "Cities Served",
    description: "Trusted by homeowners across multiple cities.",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Exceptional quality backed by happy customers.",
  },
];

function ProjectStats() {
  return (
    <section className="bg-[#f7f5f0] py-24 lg:py-32">
      <Container>
        <SectionHeading
          tag="Our Achievements"
          title="Numbers That"
          italicWord="Matter"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                border
                border-[#e8e4dc]
                bg-white
                p-10
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <h3
                className="text-6xl text-[#C8A97A]"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                {stat.value}
              </h3>

              <h4 className="mt-6 text-xl font-medium text-[#1a1a18]">
                {stat.label}
              </h4>

              <p className="mt-4 leading-7 text-[#6b6b66]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectStats;