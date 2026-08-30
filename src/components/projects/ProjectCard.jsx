import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ROUTES } from "@/constants/routes";

function ProjectCard({
    image,
    title,
    layout,
    projectIndex,
    allProjects = [],
}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeProjectIndex, setActiveProjectIndex] = useState(projectIndex ?? 0);
    const touchStart = useRef({ x: 0, y: 0 });

    useEffect(() => {
        if (!isModalOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
            }
        };

        const handleArrow = (event) => {
            if (event.key === "ArrowLeft") {
                setActiveProjectIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
            }
            if (event.key === "ArrowRight") {
                setActiveProjectIndex((prev) => (prev + 1) % allProjects.length);
            }
        };

        window.addEventListener("keydown", handleEscape);
        window.addEventListener("keydown", handleArrow);

        return () => {
            window.removeEventListener("keydown", handleEscape);
            window.removeEventListener("keydown", handleArrow);
        };
    }, [isModalOpen, allProjects.length]);

    const currentProject = allProjects[activeProjectIndex] || { image, title, layout };

    const showPrevious = () => {
        setActiveProjectIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
    };

    const showNext = () => {
        setActiveProjectIndex((prev) => (prev + 1) % allProjects.length);
    };

    const handleOpenModal = () => {
        setActiveProjectIndex(projectIndex ?? 0);
        setIsModalOpen(true);
    };

    const handleTouchStart = (event) => {
        const touch = event.changedTouches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (event) => {
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStart.current.x;
        const deltaY = touch.clientY - touchStart.current.y;

        if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY)) {
            touchStart.current = { x: 0, y: 0 };
            return;
        }

        if (deltaX > 0) showPrevious();
        if (deltaX < 0) showNext();
        touchStart.current = { x: 0, y: 0 };
    };

    return (
        <>
            <article className="group overflow-hidden bg-white">
                {/* Image */}
                <button
                    type="button"
                    onClick={handleOpenModal}
                    className="block w-full text-left"
                    aria-label={`Open project image for ${title}`}
                >
                    <div className="relative overflow-hidden h-[420px]">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
                            sizes="(min-width: 1024px) 33vw, 100vw"
                        />

                        {/* Layout Badge */}
                        <span
                            className="
            absolute
            top-5
            left-5
            bg-white/90
            backdrop-blur
            px-4
            py-2
            text-xs
            uppercase
            tracking-[0.15em]
            text-dark
          "
                        >
                            {layout}
                        </span>

                        {/* Overlay */}
                        <div
                            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/10
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
                        />
                    </div>
                </button>

                {/* Content */}
                <div className="border border-t-0 border-border p-7">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3
                                className="text-2xl text-dark"
                            >
                                {title}
                            </h3>
                        </div>

                        <Link
                            href={ROUTES.CONTACT}
                            className="
              h-12
              w-12
              rounded-full
              border
              border-border
              flex
              items-center
              justify-center
              transition-all
              duration-300
              group-hover:bg-dark
              group-hover:text-white
              text-dark
              group-hover:text-white
            "
                            aria-label={`Discuss a similar project for ${title}`}
                        >
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
            </article>

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-[92vw] sm:max-w-5xl w-full rounded-2xl overflow-hidden bg-white shadow-2xl"
                        onClick={(event) => event.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        style={{ touchAction: "pan-y" }}
                    >
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark shadow-md transition hover:bg-white"
                            aria-label="Close image preview"
                        >
                            <X size={20} />
                        </button>

                        <button
                            type="button"
                            onClick={showPrevious}
                            className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-dark shadow-md transition hover:bg-white sm:flex"
                            aria-label="Previous project image"
                        >
                            <ArrowLeft size={18} />
                        </button>

                        <button
                            type="button"
                            onClick={showNext}
                            className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-dark shadow-md transition hover:bg-white sm:flex"
                            aria-label="Next project image"
                        >
                            <ArrowRight size={18} />
                        </button>

                        <div className="relative h-[60vh] sm:h-[70vh] w-full">
                            <Image
                                src={currentProject.image}
                                alt={currentProject.title}
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </div>

                        <div className="border-t border-border bg-white px-5 py-4">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-accent">
                                        {currentProject.layout}
                                    </p>
                                    <h3 className="mt-2 text-2xl text-dark">{currentProject.title}</h3>
                                </div>
                                <span className="text-sm text-muted">
                                    {activeProjectIndex + 1} / {allProjects.length || 1}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectCard;
