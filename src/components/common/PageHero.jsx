import Link from "next/link";
import Button from "@/components/common/Button";

function PageHero({
    tag,
    title,
    description,
    image,
    primaryAction,
    secondaryAction,
}) {
    return (
        <section className="relative h-[65vh] min-h-[520px] overflow-hidden">
            {/* Background */}
            <img
                src={image?.src ?? image}
                alt={title}
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">

                        {/* Breadcrumb */}
                        <div className="mb-8 flex items-center gap-2 text-sm text-white/70">
                            <Link
                                href="/"
                                className="transition-colors hover:text-white"
                            >
                                Home
                            </Link>

                            <span>/</span>

                            <span className="text-white">
                                {tag}
                            </span>
                        </div>

                        {/* Tag */}
                        <p className="mb-6 text-xs uppercase tracking-[0.22em] text-[#C8A97A]">
                            {tag}
                        </p>

                        {/* Heading */}
                        <h1
                            className="text-5xl font-medium leading-tight text-white lg:text-7xl"
                            style={{
                                fontFamily: "Playfair Display",
                            }}
                        >
                            {title}
                        </h1>

                        {/* Description */}
                        {description && (
                            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">
                                {description}
                            </p>
                        )}

                        {/* CTA */}
                        {(primaryAction || secondaryAction) && (
                            <div className="mt-10 flex flex-wrap gap-4">

                                {primaryAction && (
                                    <Button
                                        variant="accent"
                                        to={primaryAction.to}
                                        href={primaryAction.href}
                                        onClick={primaryAction.onClick}
                                    >
                                        {primaryAction.label}
                                    </Button>
                                )}

                                {secondaryAction && (
                                    <Button
                                        variant="outline-light"
                                        to={secondaryAction.to}
                                        href={secondaryAction.href}
                                        onClick={secondaryAction.onClick}
                                    >
                                        {secondaryAction.label}
                                    </Button>
                                )}

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageHero;
