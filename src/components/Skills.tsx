import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiWordpress,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: IconType;
};

const skills: Skill[] = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Wordpress", icon: SiWordpress },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-tertiary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-responsive font-bold text-primary mb-6">
              Competenze Tecniche
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-4">
              Le tecnologie che utilizzo per creare esperienze digitali
              eccezionali
            </p>
          </div>

          <div className="grid grid-cols-1 px-16 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                  <skill.icon className="text-3xl sm:text-4xl lg:text-5xl text-primary mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs sm:text-sm font-medium text-secondary tracking-wide">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
