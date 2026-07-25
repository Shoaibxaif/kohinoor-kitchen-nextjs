import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

import magicCorner from "@/assets/images/accessories/magic-corner.png";
import pantry from "@/assets/images/accessories/pantry.png";
import bottlePullout from "@/assets/images/accessories/bottlePullout.png";
import cutlery from "@/assets/images/accessories/cutlery.png";
import softClose from "@/assets/images/accessories/softClose.png";
import carousel from "@/assets/images/accessories/magic-corner.png";

const accessories = [
    {
        title: "Magic Corner",
        image: magicCorner,
        description:
            "Utilize every corner effortlessly with smooth pull-out storage.",
    },
    {
        title: "Tall Pantry",
        image: pantry,
        description:
            "Dedicated vertical storage for groceries and everyday essentials.",
    },
    {
        title: "Bottle Pull-Out",
        image: bottlePullout,
        description: "Slim pull-out units designed for oils, sauces, and spices.",
    },
    {
        title: "Cutlery Organizer",
        image: cutlery,
        description: "Keep utensils neatly organized and always within easy reach.",
    },
    {
        title: "Soft Close Drawers",
        image: softClose,
        description: "Premium channels and hinges for smooth, silent operation.",
    },
    {
        title: "Corner Carousel",
        image: carousel,
        description:
            "Easy access to difficult corner cabinets with rotating shelves.",
    },
];

function Accessories() {
    return (
        <section className="py-24 lg:py-32 bg-[#f7f5f0]">
            <Container>
                <SectionHeading
                    tag="Smart Storage"
                    title="Premium Accessories For"
                    italicWord="Every Kitchen"
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {accessories.map((item) => (
                        <article
                            key={item.title}
                            className="
                group
                bg-white
                border
                border-[#e8e4dc]
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-xl
              "
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={item.image?.src ?? item.image}
                                    alt={item.title}
                                    className="
                    w-full
                    h-64
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                />
                            </div>

                            <div className="p-6">
                                <h3
                                    className="text-2xl text-[#1a1a18]"
                                    style={{
                                        fontFamily: "Playfair Display",
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-[#6b6b66] leading-7">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Accessories;
