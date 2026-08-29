import Container from "@/components/common/Container";

const filters = [
  "All",
  "L-Shaped",
  "U-Shaped",
  "Parallel",
  "Straight",
  "Island",
];

function ProjectFilters({ activeFilter, onFilterChange }) {
  return (
    <section id="projects" className="py-16 bg-white">
      <Container>
        <div className="flex justify-center">
          <div
            role="group"
            aria-label="Project layout filters"
            className="
              inline-flex
              flex-wrap
              justify-center
              gap-3
              rounded-full
              border
              border-border
              bg-cream
              p-2
            "
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => onFilterChange(filter)}
                aria-pressed={activeFilter === filter}
                className={`
                  px-6
                  py-3
                  rounded-full
                  text-sm
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  ${activeFilter === filter
                    ? "bg-dark text-white shadow-md"
                    : "text-muted hover:bg-white hover:text-dark"
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