import { FaGithub, FaLinkedin } from "react-icons/fa"

type SocialLinksProps = { variant?: "light" | "dark" };
export default function SocialLinks({ variant = "dark" }: SocialLinksProps) {
  const baseClasses = variant === "dark" ? "border-white/20 bg-white/5 text-white hover:bg-white hover:text-[#172127]" : "border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-white";
  return <div className="flex justify-center space-x-4"><a href="https://github.com/Giorgio-g97" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`${baseClasses} flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110`}><FaGithub className="text-xl" /></a><a href="https://www.linkedin.com/in/giorgio-guadagno" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${baseClasses} flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 hover:scale-110`}><FaLinkedin className="text-xl" /></a></div>;
}
