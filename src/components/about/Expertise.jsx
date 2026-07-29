import {
    PenTool,
    Factory,
    Drill,
    ShieldCheck,
    Users,
    Settings2,
} from "lucide-react";

import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import expertiseImage from "@/assets/images/about/expertise.png";

const expertise = [
    {
        icon: PenTool,
        title: "Design Consultation",
        description:
            "Personalized modular kitchen planning with detailed layouts and realistic 3D visualizations before execution.",
    },
    {
        icon: Factory,
        title: "Precision Manufacturing",
        description:
            "Modern manufacturing ensures accurate dimensions and superior finishes for every kitchen cabinet and component.",
    },
    {
        icon: Drill,
        title: "Professional Installation",
        description:
            "Experienced installation specialists deliver seamless fitting and precise execution at every project site.",
    },
    {
        icon: ShieldCheck,
        title: "Quality Inspection",
        description:
            "Every modular kitchen undergoes multiple quality checks before final handover to ensure lasting performance.",
    },
    {
        icon: Users,
        title: "Dedicated Project Team",
        description:
            "A dedicated team coordinates design, production, delivery, and installation for a hassle-free kitchen experience.",
    },
    {
        icon: Settings2,
        title: "Premium Hardware",
        description:
            "We use trusted brands for hinges, channels, accessories, and fittings to ensure long-lasting kitchen performance.",
    },
];

function Expertise() {
    return (
        <section className="bg-[#f7f5f0] py-24 lg:py-32">
            <Container>
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-[700px]">
                        <Image
                            src={expertiseImage}
                            alt="Kohinoor Kitchens Expertise"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="rounded-sm object-cover"
                        />

                        {/* Floating Badge */}
                        <div
                            className="
                absolute
                bottom-8
                left-8
                bg-white
                px-8
                py-6
                shadow-xl
              "
                        >
                            <h3
                                className="text-4xl text-[#1a1a18]"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                6000+
                            </h3>

                            <p className="mt-2 uppercase tracking-[0.18em] text-sm text-[#C8A97A]">
                                Kitchens Delivered
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <SectionHeading
                            align="left"
                            tag="Our Expertise"
                            title="Built By"
                            italicWord="Professionals"
                        />

                        <p className="mt-8 text-lg leading-8 text-[#6b6b66]">
                            Every Kohinoor kitchen is the result of 18+ years of experience,
                            skilled craftsmanship, precision manufacturing, and professional
                            installation. With 6000+ kitchens delivered across Delhi NCR,
                            our expertise ensures every project is completed with exceptional
                            quality and attention to detail.
                        </p>

                        <div className="mt-12 space-y-8">
                            {expertise.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="flex gap-5"
                                    >
                                        <div
                                            className="
                        flex
                        h-14
                        w-14
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                      "
                                        >
                                            <Icon
                                                size={24}
                                                className="text-[#C8A97A]"
                                            />
                                        </div>

                                        <div>
                                            <h3
                                                className="text-2xl text-[#1a1a18]"
                                                style={{
                                                    fontFamily: "Playfair Display",
                                                }}
                                            >
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 leading-7 text-[#6b6b66]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Expertise;
