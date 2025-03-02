import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "NUSA Creazioni",
    description: "Landing page responsive con animazioni fluide",
    image: "/nusa.png",
    tags: ["Next.js", "Node.js", "Framer-motion"],
    demoUrl: "https://nusa-landing-page.vercel.app/",
    codeUrl: "https://github.com/Giorgio-g97/nusa_landing_page",
  },
  {
    title: "Saveur Ricettario",
    description: "Ricettario digitale",
    image: "/saveur.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://saveur-fawn.vercel.app/",
    codeUrl: "https://github.com/Giorgio-g97/saveur",
  },
  {
    title: "MyGaia",
    description: "Gestionale di prenotazione appuntamenti",
    image: "/mygaia.png",
    tags: ["Next.js", "Hygraph", "Descope"],
    demoUrl: "https://my-gaia.vercel.app/",
    codeUrl: "https://github.com/Giorgio-g97/MyGaia",
  },
  {
    title: "LeBontaDiCupido",
    description: "Landing page forno senza glutine",
    image: "/bontaCupido.png",
    tags: ["Next.js", "TailwindCSS"],
    demoUrl: "https://le-bont-di-cupido-site.vercel.app/",
    codeUrl: "https://github.com/Giorgio-g97/LeBont-DiCupidoSite",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Progetti in Evidenza
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
