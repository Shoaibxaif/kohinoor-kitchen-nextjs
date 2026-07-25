"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const faqs = [
    {
        question: "How much does a modular kitchen cost in Delhi?",
        answer:
            "The cost depends on the kitchen size, materials, finishes, accessories, and hardware brands. Our modular kitchens typically start from ₹1.5 lakh.",
    },
    {
        question: "Which material is best for a modular kitchen?",
        answer:
            "HDHMR and Marine Plywood are the most popular choices due to their strength, durability, and moisture resistance.",
    },
    {
        question: "How long does installation take?",
        answer:
            "Most modular kitchens are completed within 3–6 weeks after final design approval.",
    },
    {
        question: "Do you provide free design consultation?",
        answer:
            "Yes. Our experienced designers provide a complimentary consultation and site visit.",
    },
    {
        question: "Which hardware brands do you use?",
        answer: "We use premium brands such as Hafele, Hettich, Blum, and Ebco.",
    },
    {
        question: "Do you offer warranty?",
        answer:
            "Yes. Every kitchen includes manufacturer warranty along with dedicated after-sales support.",
    },
];

function FAQ() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading
                    tag="Frequently Asked Questions"
                    title="Everything You Need"
                    italicWord="To Know"
                />

                <div className="max-w-4xl mx-auto mt-16">
                    {faqs.map((faq, index) => (
                        <div key={faq.question} className="border-b border-[#e8e4dc]">
                            <button
                                onClick={() => setActive(active === index ? null : index)}
                                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  py-7
                  text-left
                "
                            >
                                <h3 className="text-xl text-[#1a1a18] font-medium">
                                    {faq.question}
                                </h3>

                                {active === index ? (
                                    <Minus className="text-[#C8A97A]" />
                                ) : (
                                    <Plus className="text-[#C8A97A]" />
                                )}
                            </button>

                            <div
                                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${active === index ? "max-h-60 pb-7" : "max-h-0"}
                `}
                            >
                                <p className="text-[#6b6b66] leading-8 pr-8">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default FAQ;
