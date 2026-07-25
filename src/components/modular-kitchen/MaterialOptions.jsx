import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import hdhmr from "@/assets/images/materials/hdhmr.jpg";
import plywood from "@/assets/images/materials/plywood.jpg";
import mdf from "@/assets/images/materials/mdf.jpg";
import acrylic from "@/assets/images/materials/acrylic.jpg";

const materials = [
    {
        title: "HDHMR Board",
        image: hdhmr,
        description:
            "A premium moisture-resistant board known for exceptional durability and long-lasting performance.",
        features: ["Moisture Resistant", "High Strength", "Long Life"],
    },
    {
        title: "Marine Plywood",
        image: plywood,
        description:
            "The preferred choice for premium modular kitchens where strength and durability are essential.",
        features: ["Water Resistant", "Excellent Strength", "Premium Quality"],
    },
    {
        title: "MDF Board",
        image: mdf,
        description:
            "Smooth, versatile, and ideal for painted finishes with elegant modern aesthetics.",
        features: ["Smooth Finish", "Cost Effective", "Modern Look"],
    },
    {
        title: "Acrylic Finish",
        image: acrylic,
        description:
            "A luxurious high-gloss finish that creates a sleek contemporary appearance.",
        features: ["Mirror Finish", "Scratch Resistant", "Easy Cleaning"],
    },
];

function MaterialOptions() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading
                    tag="Materials & Finishes"
                    title="Built With"
                    italicWord="Premium Quality"
                />

                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    {materials.map((material) => (
                        <article
                            key={material.title}
                            className="
                group
                border
                border-[#e8e4dc]
                bg-[#f7f5f0]
                overflow-hidden
              "
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={material.image?.src ?? material.image}
                                    alt={material.title}
                                    className="
                    w-full
                    h-[300px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                />
                            </div>

                            <div className="p-8">
                                <h3
                                    className="text-3xl text-[#1a1a18]"
                                    style={{
                                        fontFamily: "Playfair Display",
                                    }}
                                >
                                    {material.title}
                                </h3>

                                <p className="mt-4 text-[#6b6b66] leading-8">
                                    {material.description}
                                </p>

                                <ul className="mt-6 space-y-3">
                                    {material.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <span className="w-2 h-2 rounded-full bg-[#C8A97A]" />

                                            <span className="text-[#4a4a46]">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default MaterialOptions;
