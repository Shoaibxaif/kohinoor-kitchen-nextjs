import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

import { ROUTES } from "@/constants/routes";

import heroImage from "@/assets/images/about/hero.png";

function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-[#f7f5f0]">
            <Container>
                <div className="grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-36">
                    {/* Left Content */}
                    <div className="max-w-xl">
                        <span
                            className="
                inline-block
                text-xs
                uppercase
                tracking-[0.25em]
                text-[#C8A97A]
              "
                        >
                            About Kohinoor Kitchens
                        </span>

                        <h1
                            className="
                mt-6
                text-5xl
                leading-tight
                text-[#1a1a18]
                lg:text-7xl
              "
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Crafting Beautiful
                            <br />
                            Kitchens For
                            <span className="italic text-[#C8A97A]">
                                {" "}
                                Modern Living
                            </span>
                        </h1>

                        <p
                            className="
                mt-8
                text-lg
                leading-8
                text-[#6b6b66]
              "
                        >
                            At Kohinoor Kitchens, we believe every kitchen should be as
                            functional as it is beautiful. Combining thoughtful design,
                            premium materials, and expert craftsmanship, we create modular
                            kitchens that become the heart of every home.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button
                                variant="primary"
                                to={ROUTES.CONTACT}
                                className="gap-2"
                            >
                                Free Consultation
                                <ArrowRight size={18} />
                            </Button>

                            <Button variant="outline" to={ROUTES.PROJECTS}>
                                View Projects
                            </Button>
                        </div>

                        {/* Highlights */}
                        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[#e8e4dc] pt-10">
                            <div>
                                <h3
                                    className="text-4xl text-[#1a1a18]"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    6000+
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#6b6b66]">
                                    Kitchens Delivered
                                </p>
                            </div>

                            <div>
                                <h3
                                    className="text-4xl text-[#1a1a18]"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    18+
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#6b6b66]">
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <h3
                                    className="text-4xl text-[#1a1a18]"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    98%
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#6b6b66]">
                                    Happy Clients
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative min-h-[650px]">
                        <Image
                            src={heroImage}
                            alt="Kohinoor Kitchens"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="rounded-sm object-cover"
                        />

                        {/* Floating Card */}
                        <div
                            className="
                absolute
                bottom-8
                left-8
                max-w-xs
                bg-white/95
                p-8
                shadow-xl
                backdrop-blur
              "
                        >
                            <p
                                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#C8A97A]
                "
                            >
                                Our Promise
                            </p>

                            <h3
                                className="mt-3 text-2xl text-[#1a1a18]"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                Premium Design.
                                <br />
                                Precision Craftsmanship.
                            </h3>

                            <p className="mt-4 leading-7 text-[#6b6b66]">
                                Every kitchen is thoughtfully designed, expertly manufactured,
                                and professionally installed to deliver exceptional quality that
                                lasts for years.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default AboutHero;
