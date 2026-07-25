import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

function QuickFacts({
  tag = "Quick Overview",
  title = "At A",
  italicWord = "Glance",
  facts = [],
}) {
  return (
    <section className="py-24 bg-[#f7f5f0]">
      <Container>
        <SectionHeading tag={tag} title={title} italicWord={italicWord} />

        <div className="grid gap-px mt-16 bg-[#e8e4dc] md:grid-cols-2 lg:grid-cols-3">
          {facts.map((fact) => {
            const Icon = fact.icon;

            return (
              <div
                key={fact.label}
                className="bg-white p-10 transition-all duration-300 hover:bg-[#faf8f4]"
              >
                {Icon && (
                  <div className="mb-6">
                    <Icon
                      size={32}
                      className="text-[#C8A97A]"
                      strokeWidth={1.75}
                    />
                  </div>
                )}

                <p className="text-[11px] uppercase tracking-[0.18em] text-[#c8a97a]">
                  {fact.label}
                </p>

                <h3
                  className="mt-3 text-3xl text-[#1a1a18]"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {fact.value}
                </h3>

                <p className="mt-4 text-[#6b6b66] leading-7">
                  {fact.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default QuickFacts;
