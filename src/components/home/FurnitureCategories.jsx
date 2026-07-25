import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";

import wardrobeImg from "@/assets/images/furniture/wardrobe.jpg";
import bedImg from "@/assets/images/furniture/bed.jpg";
import sofaImg from "@/assets/images/furniture/sofa.jpg";
import tvPanelImg from "@/assets/images/furniture/tv-panel.jpg";
import chairImg from "@/assets/images/furniture/chair.jpg";
import diningImg from "@/assets/images/furniture/dining.jpg";

import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const furnitureItems = [
    {
        title: "Wardrobes",
        image: wardrobeImg,
        path: ROUTES.WARDROBES,
    },
    {
        title: "Beds",
        image: bedImg,
        path: ROUTES.BEDS,
    },
    {
        title: "Sofas",
        image: sofaImg,
        path: ROUTES.SOFAS,
    },
    {
        title: "TV Panels",
        image: tvPanelImg,
        path: ROUTES.TV_PANELS,
    },
    {
        title: "Chairs",
        image: chairImg,
        path: ROUTES.DINING_FURNITURE,
    },
    {
        title: "Dining Tables",
        image: diningImg,
        path: ROUTES.DINING_FURNITURE,
    },
];

function FurnitureCategories() {
    return (
        <section className="bg-white py-24">
            <Container>
                <SectionHeading
                    tag="Furniture Collection"
                    title="Complete Your"
                    italicWord="Home"
                />

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {furnitureItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.path}
                            className="group block"
                        >
                            <article>
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image.src ?? item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="
                      h-[380px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                                    />
                                </div>

                                <div className="pt-5">
                                    <h3
                                        className="text-2xl text-[#1a1a18]"
                                        style={{
                                            fontFamily: "Playfair Display",
                                        }}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default FurnitureCategories;
