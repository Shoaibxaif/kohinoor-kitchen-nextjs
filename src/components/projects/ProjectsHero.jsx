"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/common/Container";

import heroImage from "@/assets/images/projects/hero.png";

function ProjectsHero() {
    return (
        <section className="relative overflow-hidden bg-[#f7f5f0] py-16 lg:py-20">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-xl"
                    >
                        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#C8A97A]">
                            Our Portfolio
                        </p>

                        <h1
                            className="text-5xl leading-tight text-[#1a1a18] md:text-6xl xl:text-7xl"
                            style={{
                                fontFamily: "Playfair Display",
                            }}
                        >
                            Crafted Kitchens
                            <br />
                            For
                            <span className="italic text-[#C8A97A]"> Real Homes</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#4a4a46]">
                            Explore our collection of luxury modular kitchens designed for
                            apartments, villas, and modern homes. Every project is customized
                            to reflect the homeowner&apos;s lifestyle, space, and personality.
                        </p>

                        {/* Stats */}
                        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-[#e8e4dc] pt-8">
                            <div>
                                <h3 className="text-3xl font-medium text-[#1a1a18]" style={{ fontFamily: "Playfair Display" }}>
                                    6000+
                                </h3>

                                <p className="mt-2 text-sm text-[#9a9a92]">
                                    Projects
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-medium text-[#1a1a18]" style={{ fontFamily: "Playfair Display" }}>
                                    18+
                                </h3>

                                <p className="mt-2 text-sm text-[#9a9a92]">
                                    Years
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-medium text-[#1a1a18]" style={{ fontFamily: "Playfair Display" }}>
                                    98%
                                </h3>

                                <p className="mt-2 text-sm text-[#9a9a92]">
                                    Satisfaction
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] overflow-hidden rounded-sm lg:h-[700px]"
                    >
                        <Image
                            src={heroImage}
                            alt="Luxury Modular Kitchen"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                        />

                        <div className="absolute bottom-8 left-8 bg-white/90 px-8 py-6 shadow-lg backdrop-blur">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#C8A97A]">
                                Featured Project
                            </p>

                            <h3
                                className="mt-2 text-2xl text-[#1a1a18]"
                                style={{
                                    fontFamily: "Playfair Display",
                                }}
                            >
                                Modern Luxury Kitchen
                            </h3>

                            <p className="mt-2 text-[#6b6b66]">
                                Delhi NCR • L-Shaped • 320 sq.ft
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}

export default ProjectsHero;
