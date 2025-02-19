import type { IconType } from "react-icons"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiMongodb } from "react-icons/si"

type Skill = {
  name: string
  icon: IconType
}

const skills: Skill[] = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: FaNodeJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "MongoDB", icon: SiMongodb },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted dark:bg-muted-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground-dark">
          Competenze Tecniche
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center group">
              <div className="bg-background dark:bg-background-dark p-4 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <skill.icon className="text-4xl text-primary dark:text-primary-dark group-hover:text-secondary dark:group-hover:text-secondary-dark transition-colors duration-300" />
              </div>
              <span className="mt-2 text-sm font-medium text-foreground/80 dark:text-foreground-dark/80">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

