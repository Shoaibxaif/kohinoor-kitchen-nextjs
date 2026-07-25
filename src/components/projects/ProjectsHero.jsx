import Container from "@/components/common/Container";

import heroImage from "@/assets/images/projects/hero.png";

function ProjectsHero() {

    return (
        <section className="relative overflow-hidden bg-[#f7f5f0]">
            <Container>
                <div className="grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-24">
                    {/* Content */}
                    <div className="max-w-xl">
                        <span
                            className="
                inline-block
                uppercase
                tracking-[0.25em]
                text-xs
                text-[#C8A97A]
              "
                        >
                            Our Portfolio
                        </span>

                        <h1
                            className="
                mt-6
                text-5xl
                leading-tight
                text-[#1a1a18]
                lg:text-7xl
              "
                            style={{
                                fontFamily: "Playfair Display",
                            }}
                        >
                            Crafted Kitchens
                            <br />
                            For
                            <span className="italic text-[#C8A97A]"> Real Homes</span>
                        </h1>

                        <p
                            className="
                mt-8
                text-lg
                leading-8
                text-[#6b6b66]
              "
                        >
                            Explore our collection of luxury modular kitchens designed for
                            apartments, villas, and modern homes. Every project is customized
                            to reflect the homeowner's lifestyle, space, and personality.
                        </p>



                        {/* Stats */}

                        <div className="mt-16 grid grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-3xl font-semibold text-[#1a1a18]">
                                    500+
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-wider text-[#6b6b66]">
                                    Projects
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-semibold text-[#1a1a18]">
                                    15+
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-wider text-[#6b6b66]">
                                    Years
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-semibold text-[#1a1a18]">
                                    98%
                                </h3>

                                <p className="mt-2 text-sm uppercase tracking-wider text-[#6b6b66]">
                                    Satisfaction
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image */}

                    <div className="relative">
                        <img
                            src={heroImage?.src ?? heroImage}
                            alt="Luxury Modular Kitchen"
                            className="
                h-[650px]
                w-full
                object-cover
                rounded-sm
              "
                        />

                        <div
                            className="
                absolute
                bottom-8
                left-8
                bg-white/90
                backdrop-blur
                px-8
                py-6
                shadow-lg
              "
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-[#C8A97A]">
                                Featured Project
                            </p>

                            <h3
                                className="mt-2 text-2xl text-[#1a1a18]"
                                style={{
                                    fontFamily: "Playfair Display",
                                }}
                            >
                                Modern Luxury Kitchen
                            </h3>

                            <p className="mt-2 text-[#6b6b66]">
                                Jaipur • L-Shaped • 320 sq.ft
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default ProjectsHero;
