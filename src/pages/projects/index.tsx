import { useGetAllProjectsQuery } from "@/services/projectServices";
import ProjectCard from "./components/projectCard";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const Projects = () => {
  const { data, isLoading } = useGetAllProjectsQuery();
  return (
    <>
      <div className="flex flex-col gap-4">
        <h2 className="md:text-xl text-md font-bold">Projects 👷🏻‍♂️</h2>
        <span className="text-sm">
          Saya telah memiliki berbagai pengalaman dalam mengembangkan aplikasi
          dengan menggunakan library maupun framework yang bervariasi seperti
          Laravel, React, Golang, Codeigniter dan Svelte. Berikut merupakan
          web/aplikasi yang pernah saya kembangkan.
        </span>
        <Separator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading && (
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[250px] md:w-[500px] w-[300px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 md:w-[500px] w-[300px]" />
                <Skeleton className="h-4 md:w-[450px] w-[250px]" />
              </div>
            </div>
          )}
          {!isLoading &&
            data?.data?.map((project, index) => {
              return (
                <ProjectCard
                  key={project.id ?? index} // better if project has an id
                  name={project.name}
                  image={project.image_base64}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Projects;
