import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

function ProjectCard({
    image,
    title,
    location,
    layout,
    area,
}) {
    return (
        <article className="group overflow-hidden bg-white">
            {/* Image */}
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

            {/* Content */}
            <div className="border border-t-0 border-border p-7">
                <div className="flex items-center justify-between">
                    <div>
                        <h3
                            className="text-2xl text-dark"
                        >
                            {title}
                        </h3>

                        <p className="mt-2 text-muted">
                            {location}
                        </p>
                    </div>

                    <div
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
            "
                    >
                        <ArrowUpRight size={18} />
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <span
                        className="
              text-xs
              uppercase
              tracking-[0.18em]
              text-accent
            "
                    >
                        {area}
                    </span>

                    <Link
                        href={ROUTES.CONTACT}
                        className="
              text-sm
              uppercase
              tracking-[0.15em]
              text-dark
              hover:text-accent
              transition-colors
            "
                    >
                        Discuss a Similar Project
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
