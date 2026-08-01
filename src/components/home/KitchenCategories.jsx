import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";
import img1 from "@/assets/images/layouts/l-shaped/gallery-1.webp";
import img2 from "@/assets/images/layouts/u-shaped/gallery-1.webp";
import img3 from "@/assets/images/layouts/parallel/gallery-1.webp";
import img4 from "@/assets/images/layouts/island/gallery-1.webp";
import img5 from "@/assets/images/layouts/peninsula/gallery-1.webp";
import img6 from "@/assets/images/layouts/straight/gallery-1.webp";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";



const kitchens = [
    {
        title: "L-Shaped Kitchen",
        image: img1,
        path: ROUTES.L_SHAPED_KITCHEN,
    },
    {
        title: "U-Shaped Kitchen",
        image: img2,
        path: ROUTES.U_SHAPED_KITCHEN,
    },
    {
        title: "Parallel Kitchen",
        image: img3,
        path: ROUTES.PARALLEL_KITCHEN,
    },
    {
        title: "Island Kitchen",
        image: img4,
        path: ROUTES.ISLAND_KITCHEN,
    },
    {
        title: "Peninsula Kitchen",
        image: img5,
        path: ROUTES.PENINSULA_KITCHEN,
    },
    {
        title: "Straight Kitchen",
        image: img6,
        path: ROUTES.STRAIGHT_KITCHEN,
    },
];

function KitchenCategories() {
    return (
        <section className="py-24">
            <Container>
                <SectionHeading
                    tag="Kitchen Collection"
                    title="Explore Kitchen"
                    italicWord="Styles"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {kitchens.map((kitchen) => (
                        <Link
                            key={kitchen.title}
                            href={kitchen.path}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden h-[380px]">
                                <Image
                                    src={kitchen.image}
                                    alt={kitchen.title}
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

                            <div className="pt-5">
                                <h3
                                    className="text-2xl text-dark"
                                >
                                    {kitchen.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default KitchenCategories;
