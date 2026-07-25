import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

function StorageSolutions({ tag, title, italicWord, description, items = [] }) {
    return (
        <section className="py-24 lg:py-32 bg-white">
            <Container>
                <SectionHeading tag={tag} title={title} italicWord={italicWord} />

                {description && (
                    <p className="max-w-3xl mx-auto mt-6 text-center text-[#6b6b66] leading-8">
                        {description}
                    </p>
                )}

                <div className="grid gap-8 mt-20 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="
                group
                overflow-hidden
                bg-white
                border
                border-[#e8e4dc]
                transition-all
                duration-300
                hover:shadow-xl
                hover:-translate-y-2
              "
                        >
                            <div className="overflow-hidden h-72">
                                <img
                                    src={item.image?.src ?? item.image}
                                    alt={item.title}
                                    className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
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
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-[#6b6b66] leading-7">
                                    {item.description}
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-[#C8A97A] uppercase tracking-[0.15em] text-xs">
                                    <span>Premium Hardware</span>

                                    <div className="flex-1 h-px bg-[#C8A97A]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default StorageSolutions;
