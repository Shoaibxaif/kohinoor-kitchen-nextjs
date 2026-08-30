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
    <section className="bg-white pb-10 pt-4 lg:pb-16 lg:pt-6">
      <Container>
        {filteredProjects.length === 0 ? (
          <div className="py-32 text-center">
            <h3
              className="text-3xl text-dark"
            >
              No Projects Found
            </h3>

            <p className="mt-4 text-muted">
              We&apos;re continuously adding new completed projects.
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
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                projectIndex={index}
                allProjects={filteredProjects}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ProjectGrid;
