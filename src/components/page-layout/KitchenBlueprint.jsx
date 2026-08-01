import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

function KitchenBlueprint({
    tag,
    title,
    italicWord,
    description,
    image,
    points = [],
}) {
    const isPortrait = image?.height > image?.width;

    return (
        <section>
            <Container>
                <SectionHeading tag={tag} title={title} italicWord={italicWord} />

                {description && (
                    <p
                        className="
              mt-6
              max-w-3xl
              mx-auto
              text-center
              text-muted
              leading-8
            "
                    >
                        {description}
                    </p>
                )}

                <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">
                    {/* Blueprint */}

                    <div
                        className={
                            `relative bg-cream overflow-hidden max-h-[520px] md:max-h-[600px] ${isPortrait ? "aspect-[5/7]" : "aspect-[16/9]"}`
                        }
                    >
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain"
                            sizes="(min-width: 1024px) 50vw, 80vw"
                        />
                    </div>

                    {/* Features */}

                    <div className="space-y-10">
                        {points.map((point, index) => (
                            <div key={point.title} className="flex gap-6">
                                <div
                                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-accent
                    text-white
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                    text-sm
                    font-semibold
                  "
                                >
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>
                                    <h3
                                        className="
                      text-2xl
                      text-dark
                    "
                                    >
                                        {point.title}
                                    </h3>

                                    <p
                                        className="
                      mt-3
                      text-muted
                      leading-8
                    "
                                    >
                                        {point.description}
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

export default KitchenBlueprint;
