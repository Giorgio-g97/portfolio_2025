import Image from "next/image";
import Button from "./Button";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-background dark:bg-background-dark rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground-dark">
          {title}
        </h3>
        <p className="text-foreground/70 dark:text-foreground-dark/70 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-foreground dark:bg-foreground-dark text-background dark:text-background-dark px-2 py-1 rounded-md text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <Button
            asChild
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo Live
          </Button>
          <Button
            asChild
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Vedi codice{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
