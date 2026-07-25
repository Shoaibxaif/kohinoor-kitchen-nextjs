import Container from "@/components/common/Container";

const filters = [
  "All",
  "L-Shaped",
  "U-Shaped",
  "Parallel",
  "Straight",
  "Island",
  "Peninsula",
];

function ProjectFilters({ activeFilter, onFilterChange }) {
  return (
    <section id="projects" className="py-16 bg-white">
      <Container>
        <div className="flex justify-center">
          <div
            className="
              inline-flex
              flex-wrap
              justify-center
              gap-3
              rounded-full
              border
              border-[#e8e4dc]
              bg-[#f7f5f0]
              p-2
            "
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => onFilterChange(filter)}
                className={`
                  px-6
                  py-3
                  rounded-full
                  text-sm
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  ${
                    activeFilter === filter
                      ? "bg-[#1a1a18] text-white shadow-md"
                      : "text-[#6b6b66] hover:bg-white hover:text-[#1a1a18]"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectFilters;