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

                        <p className="mt-8 leading-8 text-[#6b6b66]">
                            {description}
                        </p>

                        {points.length > 0 && (
                            <div className="mt-8 space-y-5">
                                {points.map((point) => (
                                    <div
                                        key={point}
                                        className="flex items-start gap-4"
                                    >
                                        <span className="mt-1 text-[#C8A97A]">✓</span>

                                        <p className="text-[#4a4a46]">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Image */}

                    <div className="overflow-hidden rounded-sm">
                        <img
                            src={image?.src ?? image}
                            alt={imageAlt}
                            loading="lazy"
                            className="
                h-[600px]
                w-full
                object-cover
              "
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default AboutSection;
