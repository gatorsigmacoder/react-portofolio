import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  name: string;
  image: string;
  description: string;
  tags?: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  description,
  tags = [],
  link,
}) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 md:w-96">
      <div className="relative w-96 h-48 overflow-hidden">
        <img
          src={`data:image/png;base64,${image}`}
          alt={name}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span className="text-white font-medium">View Project</span>
          </a>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
