import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import project1 from "@/assets/images/layouts/l-shaped/gallery-2.jpg";
import project2 from "@/assets/images/layouts/island/gallery-2.png";
import project3 from "@/assets/images/layouts/parallel/gallery-2.png";


const projects = [
    {
        title: "Contemporary Residence",
        location: "South Delhi",
        type: "L-Shaped Kitchen",
        image: project1,
        path: ROUTES.L_SHAPED_KITCHEN,
    },
    {
        title: "Luxury Apartment",
        location: "Gurgaon",
        type: "Island Kitchen",
        image: project2,
        path: ROUTES.ISLAND_KITCHEN,
    },
    {
        title: "Modern Family Home",
        location: "Noida",
        type: "Parallel Kitchen",
        image: project3,
        path: ROUTES.PARALLEL_KITCHEN,
    },
];

function FeaturedProjects() {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                {/* Heading */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <SectionHeading
                        tag="Featured Projects"
                        title="Spaces We've"
                        italicWord="Crafted"
                    />

                    <Button
                        to={ROUTES.PROJECTS}
                        variant="link"
                        className="gap-2"
                    >
                        View All Projects
                        <ArrowRight size={16} />
                    </Button>
                </div>

                {/* Projects */}
                <div className="grid lg:grid-cols-3 gap-8 mt-16">
                    {projects.map((project) => (
                        <Link
                            key={project.title}
                            href={project.path}
                            className="group block"
                        >
                            <article className="cursor-pointer">
                                {/* Image */}
                                <div className="relative overflow-hidden h-[450px]">
                                    <Image
                                        src={project.image}
                                        alt={`${project.type} interior design, ${project.location} — Kohinoor Kitchens`}
                                        fill
                                        loading="lazy"
                                        sizes="(min-width: 1024px) 33vw, 100vw"
                                        className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                                    />
                                </div>

                                {/* Content */}

                                <div className="pt-6">
                                    <p
                                        className="
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    text-[#c8a97a]
                  "
                                    >
                                        {project.location}
                                    </p>

                                    <h3
                                        className="
                    mt-3
                    text-2xl
                    text-[#1a1a18]
                  "
                                        style={{
                                            fontFamily: "Playfair Display",
                                        }}
                                    >
                                        {project.title}
                                    </h3>

                                    <div className="flex items-center justify-between mt-5">
                                        <span className="text-[#4a4a46]">
                                            {project.type}
                                        </span>

                                        <ArrowRight
                                            size={18}
                                            className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                                        />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default FeaturedProjects;
