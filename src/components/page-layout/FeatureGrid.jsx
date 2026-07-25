import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

function FeatureGrid({
  tag,
  title,
  italicWord,
  description,
  items = [],
  columns = 3,
}) {
  const gridClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="py-24 lg:py-32 bg-[#f7f5f0]">
      <Container>
        <SectionHeading tag={tag} title={title} italicWord={italicWord} />

        {description && (
          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-center
              text-[#6b6b66]
              leading-8
            "
          >
            {description}
          </p>
        )}

        <div
          className={`
            mt-16
            grid
            gap-8
            ${gridClass[columns]}
          `}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-[#e8e4dc]
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              {/* Number */}
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#C8A97A]/10
                  text-[#C8A97A]
                  flex
                  items-center
                  justify-center
                  text-lg
                  font-semibold
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3
                className="
                  mt-6
                  text-2xl
                  text-[#1a1a18]
                "
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  text-[#6b6b66]
                  leading-7
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeatureGrid;
