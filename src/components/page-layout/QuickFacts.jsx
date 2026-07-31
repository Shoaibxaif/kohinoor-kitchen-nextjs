import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

function QuickFacts({
  tag = "Quick Overview",
  title = "At A",
  italicWord = "Glance",
  facts = [],
}) {
  return (
    <section className="py-24 bg-cream">
      <Container>
        <SectionHeading tag={tag} title={title} italicWord={italicWord} />

        <div className="grid gap-px mt-16 bg-border md:grid-cols-2 lg:grid-cols-2">
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
                      className="text-accent"
                      strokeWidth={1.75}
                    />
                  </div>
                )}

                <p className="text-[11px] uppercase tracking-[0.18em] text-accent">
                  {fact.label}
                </p>

                <h3
                  className="mt-3 text-3xl text-dark"
                >
                  {fact.value}
                </h3>

                <p className="mt-4 text-muted leading-7">
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
