"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectFilters from "@/components/projects/ProjectFilters";
import ProjectGrid from "@/components/projects/ProjectGrid";

function ProjectsInteractive() {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <>
            <ProjectFilters
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
            />

            <ProjectGrid
                projects={projects}
                activeFilter={activeFilter}
            />
        </>
    );
}

export default ProjectsInteractive;
