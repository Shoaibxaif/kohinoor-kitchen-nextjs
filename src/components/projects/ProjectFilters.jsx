"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import { ChevronDown } from "lucide-react";

const filters = [
  "All",
  "L-Shaped",
  "U-Shaped",
  "Parallel",
  "Straight",
  "Island",
  "Wardrobe",
  "Bed",
  "Sofa",
  "TV Panel",
  "Dining Furniture",
];

function ProjectFilters({ activeFilter, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectFilter = (filter) => {
    onFilterChange(filter);
    setIsOpen(false);
  };

  return (
    <section id="projects" className="bg-white pb-6 pt-12 lg:pb-8 lg:pt-16">
      <Container>
        <div className="flex justify-center">
          <div className="flex w-full max-w-7xl flex-col gap-3 rounded-xl border border-border bg-cream p-3 shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:px-5">
            <p className="shrink-0 text-xs uppercase tracking-[0.15em] text-muted">
              Filter by category
            </p>

            <div
              className="relative w-full sm:ml-auto sm:w-80"
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsOpen(false);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setIsOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls="project-category-menu"
                aria-haspopup="menu"
                onClick={() => setIsOpen((current) => !current)}
                className="
                  min-h-12
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-border
                  bg-white
                  px-4
                  text-sm
                  uppercase
                  tracking-[0.12em]
                  text-dark
                  outline-none
                  transition-colors
                  hover:border-accent/50
                  focus:border-accent
                  focus:ring-2
                  focus:ring-accent/30
                "
              >
                <span>{activeFilter === "All" ? "All Projects" : activeFilter}</span>
                <ChevronDown
                  aria-hidden="true"
                  size={18}
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              <div
                id="project-category-menu"
                role="menu"
                aria-label="Project categories"
                aria-hidden={!isOpen}
                className={`
                  absolute
                  left-0
                  top-full
                  z-20
                  w-full
                  pt-2
                  transition-all
                  duration-300
                  ${isOpen
                    ? "visible translate-y-0 opacity-100"
                    : "pointer-events-none invisible -translate-y-2 opacity-0"
                  }
                `}
              >
                <div className="max-h-80 overflow-y-auto border border-border bg-white shadow-xl">
                  <div className="h-[2px] bg-accent" />
                  <div className="p-2">
                    {filters.map((filter) => (
                      <button
                        key={filter}
                        type="button"
                        role="menuitem"
                        onClick={() => selectFilter(filter)}
                        className={`
                          block
                          w-full
                          px-4
                          py-3
                          text-left
                          text-sm
                          uppercase
                          tracking-[0.12em]
                          transition-colors
                          ${activeFilter === filter
                            ? "bg-cream text-accent"
                            : "text-mid hover:bg-cream hover:text-accent"
                          }
                        `}
                      >
                        {filter === "All" ? "All Projects" : filter}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ProjectFilters;
