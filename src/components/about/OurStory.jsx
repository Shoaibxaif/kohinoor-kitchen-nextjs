import Image from "next/image";
import { Check } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import storyImage from "@/assets/images/about/story.png";

const highlights = [
    "Premium modular kitchen solutions",
    "Customized for every home and lifestyle",
    "High-quality materials & branded hardware",
    "Professional design, manufacturing & installation",
];

function OurStory() {
    return (
        <section className="bg-white py-24 lg:py-32">
            <Container>
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-[650px]">
                        <Image
                            src={storyImage}
                            alt="Our Story"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="rounded-sm object-cover"
                        />

                        {/* Floating Card */}
                        <div
                            className="
                absolute
                -bottom-8
                right-8
                bg-dark
                px-10
                py-8
                text-white
                shadow-2xl
              "
                        >
                            <h3
                                className="text-5xl"
                            >
                                18+
                            </h3>

                            <p className="mt-2 uppercase tracking-[0.18em] text-sm text-accent">
                                Years of Excellence
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <SectionHeading
                            align="left"
                            tag="Our Story"
                            title="Designed Around"
                            italicWord="People"
                        />

                        <p className="mt-8 text-lg leading-8 text-muted">
                            At Kohinoor Kitchens, we believe a kitchen is more than just a
                            place to cook—it&apos;s the heart of every home. With 18+ years of
                            experience and 6000+ kitchens delivered, we design modular kitchen
                            solutions that support daily living while elevating the look and
                            feel of your space.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-muted">
                            By combining intelligent space planning, premium materials,
                            precision craftsmanship, and timeless aesthetics, we deliver
                            modular kitchens that are as functional as they are beautiful.
                            From the first consultation to the final installation, our focus
                            is on creating spaces that bring families together and stand the
                            test of time.
                        </p>

                        <div className="mt-10 space-y-5">
                            {highlights.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4"
                                >
                                    <div
                                        className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-cream
                    "
                                    >
                                        <Check
                                            size={18}
                                            className="text-accent"
                                        />
                                    </div>

                                    <span className="text-dark">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default OurStory;
