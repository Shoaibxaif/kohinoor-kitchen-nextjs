import Image from "next/image";
import Link from "next/link";
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

const layoutLinks = [
    { label: "L-shaped", path: ROUTES.L_SHAPED_KITCHEN },
    { label: "U-shaped", path: ROUTES.U_SHAPED_KITCHEN },
    { label: "parallel", path: ROUTES.PARALLEL_KITCHEN },
    { label: "island", path: ROUTES.ISLAND_KITCHEN },
    { label: "straight", path: ROUTES.STRAIGHT_KITCHEN },
];

function AboutSection() {
    return (
        <section className="bg-[#1a1a18] py-24 lg:py-32">
            <Container>
                <div className="grid lg:grid-cols-2 min-h-[650px]">

                    {/* Image */}
                    <div className="relative h-full min-h-[450px]">
                        <Image
                            src={kitchenImage}
                            alt="Modular kitchen interior design in Ghaziabad, serving Delhi NCR"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
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
                            At Kohinoor Kitchens, we believe a kitchen is more than a
                            workspace - it&apos;s the heart of every home. As a
                            Ghaziabad-based modular kitchen and interior specialist
                            serving homeowners across Delhi NCR, we design{" "}
                            {layoutLinks.map((layout, index) => (
                                <span key={layout.path}>
                                    <Link
                                        href={layout.path}
                                        className="text-[#c8a97a] underline underline-offset-4 hover:text-white transition-colors"
                                    >
                                        {layout.label}
                                    </Link>
                                    {index < layoutLinks.length - 2
                                        ? ", "
                                        : index === layoutLinks.length - 2
                                            ? " and "
                                            : ""}
                                </span>
                            ))}{" "}
                            modular kitchens that make the most of apartment and
                            villa spaces. Choose from premium finishes, smart storage
                            solutions, soft-close hardware, wardrobes, TV units, beds
                            and made-to-measure furniture — planned around your
                            lifestyle, budget and space.
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
