import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-6">
      <a
        href="https://github.com/Giorgio-g97"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <FaGithub className="text-2xl text-white group-hover:text-white/90" />
      </a>
      <a
        href="https://www.linkedin.com/in/giorgio-guadagno"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 group"
      >
        <FaLinkedin className="text-2xl text-white group-hover:text-white/90" />
      </a>
    </div>
  );
}