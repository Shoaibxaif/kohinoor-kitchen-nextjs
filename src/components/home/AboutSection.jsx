import Container from "@/components/common/Container";
import kitchenImage from "@/assets/images/about-kitchen.jpg";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";

const features = [
    "Premium Hardware & Accessories",
    "Custom Space Planning",
    "Professional Installation Team",
    "Dedicated After-Sales Support",
];

function AboutSection() {
    return (
        <section className="bg-[#1a1a18] py-24 lg:py-32">
            <Container>
                <div className="grid lg:grid-cols-2 min-h-[650px]">

                    {/* Image */}
                    <div className="relative">
                        <img
                            src={kitchenImage.src ?? kitchenImage}
                            alt="Luxury Modular Kitchen"
                            loading="lazy"
                            decoding="async"
                            className="
                w-full
                h-full
                object-cover
                min-h-[450px]
              "
                        />
                    </div>

                    {/* Content */}
                    <div
                        className="
              flex
              flex-col
              justify-center
              px-8
              lg:px-16
              py-16
            "
                    >
                        <p
                            className="
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-[#c8a97a]
                mb-5
              "
                        >
                            About Kohinoor
                        </p>

                        <h2
                            className="
                text-4xl
                lg:text-5xl
                leading-tight
                text-white
              "
                            style={{
                                fontFamily: "Playfair Display",
                            }}
                        >
                            Crafting Kitchens
                            <br />
                            For Modern
                            <em className="text-[#c8a97a] not-italic">
                                {" "}Living
                            </em>
                        </h2>

                        <p
                            className="
                mt-8
                text-white/60
                leading-8
                max-w-xl
              "
                        >
                            At Kohinoor Kitchens, we believe a kitchen is more
                            than a workspace. It is the heart of every home.
                            Our team combines thoughtful design, premium
                            materials, and expert craftsmanship to create
                            spaces that are both beautiful and functional.
                        </p>

                        <ul className="mt-10 space-y-5">
                            {features.map((item) => (
                                <li
                                    key={item}
                                    className="
                    flex
                    items-center
                    gap-3
                    text-white/75
                  "
                                >
                                    <span
                                        className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#c8a97a]
                    "
                                    />

                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button
                            to={ROUTES.ABOUT}
                            variant="accent"
                            className="mt-10 w-fit"

                        >
                            Discover Our Story
                        </Button>
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default AboutSection;
