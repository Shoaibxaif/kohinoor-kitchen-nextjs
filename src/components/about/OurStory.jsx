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
                    <div className="relative">
                        <img
                            src={storyImage.src ?? storyImage}
                            alt="Our Story"
                            className="h-[650px] w-full object-cover rounded-sm"
                        />

                        {/* Floating Card */}
                        <div
                            className="
                absolute
                -bottom-8
                right-8
                bg-[#1a1a18]
                px-10
                py-8
                text-white
                shadow-2xl
              "
                        >
                            <h3
                                className="text-5xl"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                15+
                            </h3>

                            <p className="mt-2 uppercase tracking-[0.18em] text-sm text-[#C8A97A]">
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

                        <p className="mt-8 text-lg leading-8 text-[#6b6b66]">
                            At Kohinoor Kitchens, we believe a kitchen is more than just a
                            place to cook—it's the heart of every home. Every family has a
                            unique lifestyle, and every kitchen we create is thoughtfully
                            designed to reflect that individuality.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-[#6b6b66]">
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
                      bg-[#f7f5f0]
                    "
                                    >
                                        <Check
                                            size={18}
                                            className="text-[#C8A97A]"
                                        />
                                    </div>

                                    <span className="text-[#1a1a18]">
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
