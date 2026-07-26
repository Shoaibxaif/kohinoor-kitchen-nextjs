"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

function FAQSection({
    tag = "Frequently Asked Questions",
    title = "Everything You Need",
    italicWord = "To Know",
    items = [],
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading tag={tag} title={title} italicWord={italicWord} />

                <div className="max-w-4xl mx-auto mt-16">
                    {items.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        const buttonId = `faq-toggle-${index}`;
                        const panelId = `faq-panel-${index}`;

                        return (
                            <div key={faq.question} className="border-b border-[#e8e4dc]">
                                <button
                                    type="button"
                                    id={buttonId}
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => toggle(index)}
                                    className="
                    w-full
                    py-7
                    flex
                    items-center
                    justify-between
                    text-left
                  "
                                >
                                    <h3
                                        className="
                      text-xl
                      text-[#1a1a18]
                      font-medium
                      pr-8
                    "
                                    >
                                        {faq.question}
                                    </h3>

                                    {isOpen ? (
                                        <Minus size={20} className="text-[#C8A97A] flex-shrink-0" />
                                    ) : (
                                        <Plus size={20} className="text-[#C8A97A] flex-shrink-0" />
                                    )}
                                </button>

                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    aria-hidden={!isOpen}
                                    className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${isOpen ? "max-h-60 pb-7" : "max-h-0"}
                  `}
                                >
                                    <p
                                        className="
                      text-[#6b6b66]
                      leading-8
                      pr-8
                    "
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}

export default FAQSection;
