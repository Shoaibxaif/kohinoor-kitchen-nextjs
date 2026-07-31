import Image from "next/image";
import {
    BadgeCheck,
    ShieldCheck,
    Hammer,
    Wrench,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import promiseImage from "@/assets/images/about/quality-promise.png";

const promises = [
    {
        icon: BadgeCheck,
        title: "Premium Materials",
        description:
            "We use HDHMR, Marine Plywood, quartz countertops, and branded hardware for exceptional durability.",
    },
    {
        icon: Hammer,
        title: "Precision Manufacturing",
        description:
            "Every cabinet is manufactured with advanced machinery to achieve perfect dimensions and flawless finishes.",
    },
    {
        icon: Wrench,
        title: "Expert Installation",
        description:
            "Our experienced installation team ensures every cabinet, accessory, and countertop fits perfectly.",
    },
    {
        icon: ShieldCheck,
        title: "Quality Assurance",
        description:
            "Each kitchen undergoes multiple inspections before handover to ensure it meets our highest standards.",
    },
];

function QualityPromise() {
    return (
        <section className="bg-white py-24 lg:py-32">
            <Container>
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    {/* Content */}
                    <div>
                        <SectionHeading
                            align="left"
                            tag="Our Promise"
                            title="Quality You Can"
                            italicWord="Trust"
                        />

                        <p className="mt-8 text-lg leading-8 text-muted">
                            Every Kohinoor Kitchen is built with one commitment in mind:
                            delivering exceptional modular kitchen quality without
                            compromise. From premium materials to expert craftsmanship, every
                            detail is carefully planned, manufactured, and installed to
                            create kitchens that remain beautiful for years.
                        </p>

                        <div className="mt-12 space-y-8">
                            {promises.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div key={item.title} className="flex gap-5">
                                        <div
                                            className="
                        flex
                        h-14
                        w-14
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-cream
                      "
                                        >
                                            <Icon
                                                size={24}
                                                className="text-accent"
                                            />
                                        </div>

                                        <div>
                                            <h3
                                                className="text-2xl text-dark"
                                            >
                                                {item.title}
                                            </h3>

                                            <p className="mt-2 leading-7 text-muted">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative h-[700px]">
                        <Image
                            src={promiseImage}
                            alt="Quality Promise"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="rounded-sm object-cover"
                        />

                        <div
                            className="
                absolute
                bottom-8
                right-8
                max-w-xs
                bg-white/95
                p-8
                shadow-xl
                backdrop-blur
              "
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-accent">
                                Quality Promise
                            </p>

                            <h3
                                className="mt-3 text-3xl text-dark"
                            >
                                Built For
                                <br />
                                Everyday Living
                            </h3>

                            <p className="mt-4 leading-7 text-muted">
                                Premium craftsmanship, trusted materials, and meticulous
                                installation ensure every kitchen delivers lasting beauty and
                                performance.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default QualityPromise;
