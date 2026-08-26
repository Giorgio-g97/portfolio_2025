import { FaGithub, FaLinkedin } from "react-icons/fa"

type SocialLinksProps = {
  variant?: "light" | "dark";
};

export default function SocialLinks({ variant = "light" }: SocialLinksProps) {
  const baseClasses =
    variant === "dark"
      ? "bg-white/10 hover:bg-white/20 text-white"
      : "bg-primary/5 hover:bg-primary hover:text-white text-primary";

  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com/Giorgio-g97"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} p-4 rounded-full transition-all duration-300 hover:scale-110 group`}
      >
        <FaGithub className="text-2xl transition-colors duration-300" />
      </a>
      <a
        href="https://www.linkedin.com/in/giorgio-guadagno"
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} p-4 rounded-full transition-all duration-300 hover:scale-110 group`}
      >
        <FaLinkedin className="text-2xl transition-colors duration-300" />
      </a>
    </div>
  );
}