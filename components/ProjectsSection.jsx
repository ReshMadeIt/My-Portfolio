const projects = [
  {
    title: "Nganya Mobile",
    description: "A modern Android app for commuter transport tracking.",
    link: "https://play.google.com/store/apps/details?id=com.nganya.mobile",
  },
  {
    title: "Portfolio Website",
    description: "Showcase of my development projects.",
    link: "https://reshleyatsiaya.vercel.app",
  },
  // add more projects here
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 bg-gray-50"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}