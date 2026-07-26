import Image from "next/image";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";

function LayoutHero({
    title,
    subtitle,
    description,
    image,
    buttonText = "Book Free Consultation",
    buttonLink = ROUTES.CONTACT,
}) {
    return (
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        {/* Subtitle */}
                        <p
                            className="
                mb-6
                text-xs
                uppercase
                tracking-[0.22em]
                text-[#C8A97A]
              "
                        >
                            {subtitle}
                        </p>

                        {/* Title */}
                        <h1
                            className="
                text-white
                text-5xl
                md:text-6xl
                lg:text-7xl
                leading-tight
              "
                            style={{
                                fontFamily: "Playfair Display",
                            }}
                        >
                            {title}
                        </h1>

                        {/* Description */}
                        <p
                            className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-white/80
              "
                        >
                            {description}
                        </p>

                        {/* CTA */}
                        <div className="mt-12 flex flex-wrap gap-4">
                            <Button variant="accent" to={buttonLink}>
                                {buttonText}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LayoutHero;
