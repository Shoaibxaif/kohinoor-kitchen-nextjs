import { ROUTES } from "@/constants/routes";
import { SITE } from "@/constants/siteConfig";

const layoutRoutes = [
  { path: ROUTES.L_SHAPED_KITCHEN, priority: 0.9 },
  { path: ROUTES.U_SHAPED_KITCHEN, priority: 0.9 },
  { path: ROUTES.PARALLEL_KITCHEN, priority: 0.9 },
  { path: ROUTES.ISLAND_KITCHEN, priority: 0.9 },
  { path: ROUTES.STRAIGHT_KITCHEN, priority: 0.9 },
];

const staticRoutes = [
  { path: ROUTES.HOME, priority: 1.0 },
  { path: ROUTES.MODULAR_KITCHEN, priority: 0.95 },
  { path: ROUTES.ABOUT, priority: 0.9 },
  { path: ROUTES.CONTACT, priority: 0.9 },
  { path: ROUTES.PROJECTS, priority: 0.9 },
  { path: ROUTES.PRIVACY, priority: 0.6 },
  { path: ROUTES.TERMS, priority: 0.6 },
  { path: ROUTES.WARDROBES, priority: 0.85 },
  { path: ROUTES.BEDS, priority: 0.8 },
  { path: ROUTES.SOFAS, priority: 0.8 },
  { path: ROUTES.TV_PANELS, priority: 0.8 },
  { path: ROUTES.DINING_FURNITURE, priority: 0.85 },
];

function buildUrl(path, priority) {
  const url = `${SITE.url}${path === "/" ? "" : path}`;

  return {
    url,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  };
}

export const dynamic = "force-static";

export default function sitemap() {
  return [
    ...staticRoutes.map(({ path, priority }) => buildUrl(path, priority)),
    ...layoutRoutes.map(({ path, priority }) => buildUrl(path, priority)),
  ];
}
