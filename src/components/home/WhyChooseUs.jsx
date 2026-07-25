import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const features = [
    {
        number: "01",
        title: "Premium Materials",
        description:
            "Carefully selected finishes, hardware, and materials built for lasting beauty and durability.",
    },
    {
        number: "02",
        title: "Custom Design",
        description:
            "Every kitchen is tailored to your lifestyle, space requirements, and aesthetic preferences.",
    },
    {
        number: "03",
        title: "Expert Installation",
        description:
            "Experienced professionals ensure seamless execution with attention to every detail.",
    },
    {
        number: "04",
        title: "Dedicated Support",
        description:
            "From consultation to after-sales assistance, we remain available throughout the journey.",
    },
];

function WhyChooseUs() {
    return (
        <section className="py-24 lg:py-32 bg-[#f7f5f0]">
            <Container>
                <SectionHeading
                    tag="Why Choose Us"
                    title="Designed With"
                    italicWord="Purpose"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    {features.map((feature) => (
                        <article
                            key={feature.number}
                            className="
                bg-white
                p-8
                border
                border-[#e8e4dc]
                transition-all
                duration-300
                hover:-translate-y-1
              "
                        >
                            <span
                                className="
                  text-sm
                  tracking-[0.2em]
                  uppercase
                  text-[#c8a97a]
                "
                            >
                                {feature.number}
                            </span>

                            <h3
                                className="
                  mt-4
                  text-2xl
                  text-[#1a1a18]
                "
                                style={{
                                    fontFamily: "Playfair Display",
                                }}
                            >
                                {feature.title}
                            </h3>

                            <p
                                className="
                  mt-4
                  text-[#4a4a46]
                  leading-7
                  text-sm
                "
                            >
                                {feature.description}
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default WhyChooseUs;