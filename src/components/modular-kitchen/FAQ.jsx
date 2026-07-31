"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const faqs = [
    {
        question: "How much does a modular kitchen cost in Delhi NCR?",
        answer:
            "Costs vary based on kitchen size, materials, finish, accessories, and hardware brands. Our premium modular kitchens in Delhi NCR typically start from ₹1.5 lakh, with tailored quotations after a detailed design consultation.",
    },
    {
        question: "Which material is best for a modular kitchen?",
        answer:
            "HDHMR board and marine plywood are top choices for modular kitchen cabinets due to their moisture resistance, strength, and long-term durability.",
    },
    {
        question: "How long does modular kitchen installation take?",
        answer:
            "A complete installation usually takes 3–6 weeks after final design approval, including manufacturing, delivery, and expert on-site installation.",
    },
    {
        question: "Do you offer free design consultation for modular kitchens?",
        answer:
            "Yes. We offer a complimentary modular kitchen consultation and site visit to understand your space, cooking habits, and design preferences.",
    },
    {
        question: "Which hardware brands do you use in your kitchens?",
        answer: "We use premium hardware brands such as Hafele, Hettich, Blum, and Ebco to ensure smooth operation and long-lasting performance.",
    },
    {
        question: "Do Kohinoor modular kitchens come with a warranty?",
        answer:
            "Yes. Every modular kitchen includes a 1-year manufacturer warranty and dedicated after-sales support for peace of mind.",
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
                        <div key={faq.question} className="border-b border-border">
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
                                <h3 className="text-xl text-dark font-medium">
                                    {faq.question}
                                </h3>

                                {active === index ? (
                                    <Minus className="text-accent" />
                                ) : (
                                    <Plus className="text-accent" />
                                )}
                            </button>

                            <div
                                className={`grid transition-all duration-300 ${active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                            >
                                <div className="overflow-hidden">
                                    <p className="pb-7 text-muted leading-8 pr-8">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default FAQ;
