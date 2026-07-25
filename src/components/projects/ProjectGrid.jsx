import Container from "@/components/common/Container";
import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects = [], activeFilter }) {
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.layout === activeFilter
        );

  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        {filteredProjects.length === 0 ? (
          <div className="py-32 text-center">
            <h3
              className="text-3xl text-[#1a1a18]"
              style={{ fontFamily: "Playfair Display" }}
            >
              No Projects Found
            </h3>

            <p className="mt-4 text-[#6b6b66]">
              We're continuously adding new completed projects.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              gap-10
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ProjectGrid;