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
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6">
              Progetti in Evidenza
            </h2>
            <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Una selezione dei miei lavori più significativi che dimostrano la mia esperienza e creatività
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}