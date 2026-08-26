import ProjectCard from "./ProjectCard";

const projects = [
  { title: "NUSA Creazioni", description: "Landing page responsive con animazioni fluide", image: "/nusa.png", tags: ["Next.js", "Node.js", "Framer-motion"], demoUrl: "https://nusa-landing-page.vercel.app/", codeUrl: "https://github.com/Giorgio-g97/nusa_landing_page" },
  { title: "Saveur Ricettario", description: "Ricettario digitale", image: "/saveur.png", tags: ["Next.js", "TypeScript", "Tailwind CSS"], demoUrl: "https://saveur-fawn.vercel.app/", codeUrl: "https://github.com/Giorgio-g97/saveur" },
  { title: "MyGaia", description: "Gestionale di prenotazione appuntamenti", image: "/mygaia.png", tags: ["Next.js", "Hygraph", "Descope"], demoUrl: "https://my-gaia.vercel.app/", codeUrl: "https://github.com/Giorgio-g97/MyGaia" },
  { title: "LeBontaDiCupido", description: "Landing page forno senza glutine", image: "/bontaCupido.png", tags: ["Next.js", "TailwindCSS"], demoUrl: "https://le-bont-di-cupido-site.vercel.app/", codeUrl: "https://github.com/Giorgio-g97/LeBont-DiCupidoSite" },
  { title: "Parrocchia Sant'Antonio", description: "Sito web ufficiale parrocchia", image: "/sant_antonio.png", tags: ["Wordpress"], demoUrl: "https://santantoniofoggia.altervista.org/" },
];

export default function Projects() { return <section id="projects" className="bg-[#101a20] px-4 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-8 sm:mb-16 sm:flex-row sm:items-end sm:justify-between"><h2 className="text-responsive text-white">Progetti in Evidenza</h2><p className="max-w-md text-base leading-relaxed text-white/55 sm:text-right sm:text-lg">Una selezione dei miei lavori più significativi che dimostrano la mia esperienza e creatività</p></div><div className="grid grid-cols-1 gap-5 lg:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.title} index={index} {...project} />)}</div></div></section>; }
