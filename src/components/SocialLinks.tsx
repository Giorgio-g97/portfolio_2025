import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/Giorgio-g97"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
      >
        <FaGithub className="text-2xl" />
      </a>
      <a
        href="www.linkedin.com/in/giorgio-guadagno"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
      >
        <FaLinkedin className="text-2xl" />
      </a>
    </div>
  );
}
