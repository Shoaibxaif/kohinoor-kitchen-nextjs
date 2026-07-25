import { ArrowRight } from "lucide-react";
import Link from "next/link";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { ROUTES } from "@/constants/routes";

function GallerySection({ tag, title, italicWord, projects = [] }) {
    return (
        <section className="py-24 lg:py-32 bg-[#f7f5f0]">
            <Container>
                <SectionHeading tag={tag} title={title} italicWord={italicWord} />

                <div className="grid md:grid-cols-2 gap-8 mt-16">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="
                group
                overflow-hidden
                border
                border-[#e8e4dc]
                bg-[#f7f5f0]
              "
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={project.image?.src ?? project.image}
                                    alt={project.title}
                                    className="
                    w-full
                    h-[380px]
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                />
                            </div>

                            <div className="p-8">
                                <h3
                                    className="text-2xl text-[#1a1a18]"
                                    style={{
                                        fontFamily: "Playfair Display",
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-[#6b6b66]">{project.location}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="flex justify-center mt-14">
                    <Link
                        href={ROUTES.PROJECTS}
                        className="
              inline-flex
              items-center
              gap-2
              uppercase
              tracking-[0.15em]
              text-sm
              text-[#C8A97A]
              hover:gap-4
              transition-all
            "
                    >
                        View Complete Projects
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </Container>
        </section>
    );
}

export default GallerySection;
