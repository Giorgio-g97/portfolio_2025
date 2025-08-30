import Image from "next/image";
import { Button } from "./ui/button";

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
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 mx-4 sm:mx-0">
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500"></div>
      </div>
      
      <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
        <div className="space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-secondary leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-tertiary text-secondary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
          <Button className="bg-primary text-white hover:bg-primary/90 px-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 flex-1">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              Demo Live
            </a>
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 flex-1"
          >
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              Vedi Codice
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}