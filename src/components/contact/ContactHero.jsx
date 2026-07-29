"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

import { ROUTES } from "@/constants/routes";

import heroImage from "@/assets/images/contact/hero.png";

function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-[#f7f5f0]">
            <Container>
                <div className="grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-36">
                    {/* Left */}
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
                            Contact Us
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
                            Let&apos;s Create
                            <br />
                            Your
                            <span className="italic text-[#C8A97A]">
                                {" "}
                                Dream Modular Kitchen
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
                            Whether you&apos;re renovating your kitchen or building a new home
                            in Delhi NCR, our modular kitchen experts are here to help.
                            With 18+ years of experience and 6000+ kitchens delivered, we
                            create custom modular kitchens tailored to your lifestyle and space.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button
                                variant="primary"
                                type="button"
                                className="gap-2"
                                onClick={() => {
                                    document
                                        .getElementById("contact-form")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Book Free Consultation

                                <ArrowRight size={18} />
                            </Button>

                            <Button
                                to={ROUTES.PROJECTS}
                                variant="outline"
                                className="gap-2"
                            >
                                <ArrowRight size={18} />
                                View Projects
                            </Button>
                        </div>

                        {/* Contact Highlights */}

                        <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[#e8e4dc] pt-10">
                            <div>
                                <h3
                                    className="text-3xl text-[#1a1a18]"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    18+
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#6b6b66]">
                                    Years
                                </p>
                            </div>

                            <div>
                                <h3
                                    className="text-3xl text-[#1a1a18]"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    6000+
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#6b6b66]">
                                    Kitchens
                                </p>
                            </div>

                            <div>
                                <h3
                                    className="text-3xl text-[#1a1a18]"
                                    style={{ fontFamily: "Playfair Display" }}
                                >
                                    98%
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#6b6b66]">
                                    Satisfaction
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}

                    <div className="relative">
                        <Image
                            src={heroImage}
                            alt="Contact Kohinoor Kitchens"
                            preload
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="
                h-[700px]
                w-full
                rounded-sm
                object-cover
              "
                        />

                        {/* Floating Card */}

                        <div
                            className="
                absolute
                bottom-8
                left-8
                max-w-sm
                bg-white/95
                p-8
                shadow-xl
                backdrop-blur
              "
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-[#C8A97A]">
                                Free Design Consultation
                            </p>

                            <h3
                                className="mt-3 text-3xl text-[#1a1a18]"
                                style={{
                                    fontFamily: "Playfair Display",
                                }}
                            >
                                Bring Your
                                <br />
                                Modular Kitchen Vision To Life
                            </h3>

                            <p className="mt-4 leading-7 text-[#6b6b66]">
                                Meet our designers, explore premium materials, and receive a
                                personalized modular kitchen proposal designed exclusively for
                                your home.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default ContactHero;
