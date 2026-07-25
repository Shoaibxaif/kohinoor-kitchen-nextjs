import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { ROUTES } from "@/constants/routes";

import layout1 from "@/assets/images/layouts/l-shaped.jpg";
import layout2 from "@/assets/images/layouts/l-shaped.jpg";
import layout3 from "@/assets/images/layouts/l-shaped.jpg";
import layout4 from "@/assets/images/layouts/l-shaped.jpg";
import layout5 from "@/assets/images/layouts/l-shaped.jpg";
import layout6 from "@/assets/images/layouts/l-shaped.jpg";

const layouts = [
    {
        title: "L-Shaped Kitchen",
        description:
            "An efficient layout that maximizes corner space and provides a seamless cooking workflow.",
        image: layout1,
        path: ROUTES.L_SHAPED_KITCHEN,
    },
    {
        title: "U-Shaped Kitchen",
        description:
            "Ideal for larger homes, offering generous storage and an expansive work area.",
        image: layout2,
        path: ROUTES.U_SHAPED_KITCHEN,
    },
    {
        title: "Parallel Kitchen",
        description:
            "A practical design with two workstations, perfect for compact and functional spaces.",
        image: layout3,
        path: ROUTES.PARALLEL_KITCHEN,
    },
    {
        title: "Island Kitchen",
        description:
            "A luxurious layout featuring a central island for entertaining and additional workspace.",
        image: layout4,
        path: ROUTES.ISLAND_KITCHEN,
    },
    {
        title: "Straight Kitchen",
        description:
            "Minimal, elegant, and ideal for apartments or compact urban homes.",
        image: layout5,
        path: ROUTES.STRAIGHT_KITCHEN,
    },
    {
        title: "Peninsula Kitchen",
        description:
            "Combines openness with functionality while adding extra storage and seating.",
        image: layout6,
        path: ROUTES.PENINSULA_KITCHEN,
    },
];

function KitchenLayouts() {
    return (
        <section className="py-24 lg:py-32 bg-[#f7f5f0]">
            <Container>
                <SectionHeading
                    tag="Kitchen Layouts"
                    title="Designed For Every"
                    italicWord="Home"
                />

                <div className="grid lg:grid-cols-2 gap-8 mt-16">
                    {layouts.map((layout) => (
                        <Link
                            key={layout.title}
                            href={layout.path}
                            className="
                group
                block
                bg-white
                border
                border-[#e8e4dc]
                overflow-hidden
                transition-shadow
                hover:shadow-lg
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#C8A97A]
                focus-visible:ring-offset-2
              "
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={layout.image?.src ?? layout.image}
                                    alt={layout.title}
                                    className="
                    h-[340px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                />
                            </div>

                            <div className="p-8">
                                <h3
                                    className="text-3xl text-[#1a1a18]"
                                    style={{
                                        fontFamily: "Playfair Display",
                                    }}
                                >
                                    {layout.title}
                                </h3>

                                <p
                                    className="
                    mt-4
                    text-[#6b6b66]
                    leading-8
                  "
                                >
                                    {layout.description}
                                </p>

                                <span
                                    className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    uppercase
                    text-sm
                    tracking-[0.15em]
                    text-[#C8A97A]
                    transition-all
                    group-hover:gap-4
                  "
                                >
                                    Explore Layout
                                    <ArrowRight size={18} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default KitchenLayouts;
