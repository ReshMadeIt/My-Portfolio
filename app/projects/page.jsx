import RenderDebug from "../components/RenderDebug";

const projects = [
  {
    title: "Nganya Mobile",
    description: "A modern Android commuter tracking platform.",
    href: "/projects/nganya-mobile",
  },
  {
    title: "Portfolio Website",
    description: "Premium Next.js portfolio experience.",
    href: "/projects/portfolio-website",
  },
];

export default function ProjectsPage() {
  return (
    <main data-render-page="projects-page" className="max-w-6xl mx-auto px-6 py-20">
      <RenderDebug label="app/projects/page.jsxxx" />
      <h1 className="text-5xl font-bold mb-12">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-white/60">{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
