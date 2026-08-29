import Image from "next/image";
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
            "An efficient modular kitchen layout that maximizes corner storage and supports a seamless cooking workflow.",
        image: layout1,
        path: ROUTES.L_SHAPED_KITCHEN,
    },
    {
        title: "U-Shaped Kitchen",
        description:
            "A premium modular kitchen design for larger homes, offering generous storage and an expansive work area.",
        image: layout2,
        path: ROUTES.U_SHAPED_KITCHEN,
    },
    {
        title: "Parallel Kitchen",
        description:
            "A practical modular kitchen with two workstations, ideal for compact and highly functional spaces.",
        image: layout3,
        path: ROUTES.PARALLEL_KITCHEN,
    },
    {
        title: "Island Kitchen",
        description:
            "A luxury modular kitchen featuring a central island for entertaining, cooking, and extra workspace.",
        image: layout4,
        path: ROUTES.ISLAND_KITCHEN,
    },
    {
        title: "Straight Kitchen",
        description:
            "A minimal modular kitchen design that is elegant, efficient, and perfect for apartments or urban homes.",
        image: layout5,
        path: ROUTES.STRAIGHT_KITCHEN,
    }
];

function KitchenLayouts() {
    return (
        <section className="py-24 lg:py-32 bg-cream">
            <Container>
                <SectionHeading
                    tag="Modular Kitchen Layouts"
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
                border-border
                overflow-hidden
                transition-shadow
                hover:shadow-lg
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-accent
                focus-visible:ring-offset-2
              "
                        >
                            <div className="relative overflow-hidden h-[340px]">
                                <Image
                                    src={layout.image}
                                    alt={layout.title}
                                    fill
                                    className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                    sizes="(min-width: 1024px) 33vw, 100vw"
                                />
                            </div>

                            <div className="p-8">
                                <h3
                                    className="text-3xl text-dark"
                                >
                                    {layout.title}
                                </h3>

                                <p
                                    className="
                    mt-4
                    text-muted
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
                    text-accent
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
