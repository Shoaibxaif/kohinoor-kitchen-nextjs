import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

function AboutSection({
    tag,
    title,
    italicWord,
    description,
    points = [],
    image,
    imageAlt,
    reverse = false,
}) {
    return (
        <section className="bg-white py-24 lg:py-32">
            <Container>
                <div
                    className={`grid items-center gap-16 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""
                        }`}
                >
                    {/* Content */}

                    <div>
                        <SectionHeading
                            tag={tag}
                            title={title}
                            italicWord={italicWord}
                            align="left"
                        />

                        <p className="mt-8 leading-8 text-muted">
                            {description}
                        </p>

                        {points.length > 0 && (
                            <div className="mt-8 space-y-5">
                                {points.map((point) => (
                                    <div
                                        key={point}
                                        className="flex items-start gap-4"
                                    >
                                        <span className="mt-1 text-accent">✓</span>

                                        <p className="text-mid">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Image */}

                    <div className="relative overflow-hidden rounded-sm h-[600px]">
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default AboutSection;
