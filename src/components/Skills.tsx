import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiWordpress } from "react-icons/si";

type Skill = { name: string; icon: IconType };
const skills: Skill[] = [
  { name: "HTML5", icon: FaHtml5 }, { name: "CSS3", icon: FaCss3Alt }, { name: "JavaScript", icon: FaJs }, { name: "React", icon: FaReact }, { name: "Next.js", icon: SiNextdotjs }, { name: "Node.js", icon: FaNodeJs }, { name: "TypeScript", icon: SiTypescript }, { name: "MongoDB", icon: SiMongodb }, { name: "Wordpress", icon: SiWordpress },
];

export default function Skills() {
  return <section id="skills" className="bg-[#0b1117] px-4 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-7xl"><div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-8 sm:mb-16 sm:flex-row sm:items-end sm:justify-between"><h2 className="text-responsive text-white">Competenze Tecniche</h2><p className="max-w-md text-base leading-relaxed text-white/55 sm:text-right sm:text-lg">Le tecnologie che utilizzo per creare esperienze digitali eccezionali</p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">{skills.map((skill) => <div key={skill.name} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 sm:p-5"><skill.icon className="mb-8 text-3xl text-[#bcd1d6] transition duration-300 group-hover:scale-110 group-hover:text-white sm:text-4xl" /><span className="text-xs font-medium text-white/65 sm:text-sm">{skill.name}</span></div>)}</div></div></section>;
}
