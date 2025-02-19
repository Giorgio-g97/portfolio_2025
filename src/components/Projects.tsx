import ProjectCard from "./ProjectCard"

const projects = [
  {
    title: "Progetto 1",
    description: "Una breve descrizione del Progetto 1. Questo progetto mostra...",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://project1-demo.com",
    codeUrl: "https://github.com/yourusername/project1",
  },
  {
    title: "Progetto 2",
    description: "Una breve descrizione del Progetto 2. Questo progetto dimostra...",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://project2-demo.com",
    codeUrl: "https://github.com/yourusername/project2",
  },
  {
    title: "Progetto 3",
    description: "Una breve descrizione del Progetto 3. Questo progetto presenta...",
    image: "/placeholder.svg",
    tags: ["React Native", "Firebase", "Redux"],
    demoUrl: "https://project3-demo.com",
    codeUrl: "https://github.com/yourusername/project3",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Progetti in Evidenza</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

