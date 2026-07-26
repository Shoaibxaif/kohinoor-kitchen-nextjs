"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";
import heroImage from "@/assets/images/hero-kitchen.jpg";

const stats = [
    {
        value: "6000+",
        label: "Projects Delivered",
    },
    {
        value: "18+",
        label: "Years Experience",
    },
    {
        value: "100%",
        label: "Custom Design",
    },
];

function Hero() {
    return (
        <section className="py-16 lg:py-20 overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-xs uppercase tracking-[0.25em] text-[#c8a97a] mb-6">
                            Luxury Modular Kitchens & Furniture
                        </p>

                        <h1
                            className="text-5xl md:text-6xl xl:text-7xl leading-tight text-[#1a1a18]"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Crafted For
                            <br />
                            Modern Homes
                        </h1>

                        <p className="mt-8 text-lg text-[#4a4a46] max-w-xl leading-relaxed">
                            Designing and manufacturing premium modular kitchens, wardrobes, TV panels, beds, sofas, and custom furniture for modern homes across Delhi NCR.
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10">
                            <Button
                                to={ROUTES.CONTACT}
                            >
                                Get Free Consultation
                            </Button>

                            <Button
                                variant="link"
                                to={ROUTES.PROJECTS}
                                className="
    gap-2
    bg-transparent
    text-[#1a1a18]
    hover:bg-transparent
    hover:text-[#C8A97A]
    px-0
    py-0
  "
                            >
                                View Projects
                                <ArrowRight size={16} />
                            </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-[#e8e4dc]">
                            {stats.map((item) => (
                                <div key={item.label}>
                                    <h3
                                        className="text-3xl font-medium text-[#1a1a18]"
                                        style={{ fontFamily: "Playfair Display" }}
                                    >
                                        {item.value}
                                    </h3>

                                    <p className="text-sm text-[#9a9a92] mt-2">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-sm h-[500px] lg:h-[700px]">
                            <Image
                                src={heroImage}
                                alt="Luxury Modular Kitchen"
                                fill
                                priority
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 100vw"
                            />
                        </div>

                        <div
                            className="
                hidden lg:block
                absolute
                -bottom-8
                -left-8
                bg-white
                p-6
                shadow-lg
              "
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-[#c8a97a]">
                                Featured Project
                            </p>

                            <h4
                                className="mt-2 text-xl text-[#1a1a18]"
                                style={{ fontFamily: "Playfair Display" }}
                            >
                                Contemporary Kitchen
                            </h4>

                            <p className="mt-2 text-sm text-[#4a4a46]">
                                South Delhi Residence
                            </p>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;
