const items = [
    "Custom Modular Kitchens",
    "Premium Hardware",
    "5-Year Warranty",
    "Free Design Consultation",
    "Made For Delhi Homes",
    "Expert Installation",
    "Luxury Finishes",
    "Space Optimized Designs",
];

function MarqueeBar() {
    return (
        <section className="bg-[#1a1a18] overflow-hidden py-3">
            <div className="marquee-track motion-reduce:animate-none">
                {[...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 shrink-0"
                    >
                        <span className="w-1 h-1 rounded-full bg-[#c8a97a]" />

                        <span
                            className="
                text-[11px]
                uppercase
                tracking-[0.18em]
                text-white/60
                whitespace-nowrap
              "
                        >
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MarqueeBar;
