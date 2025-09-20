import LogoLoop from "@/components/LogoLoop";
import { useEffect, useState } from "react";
import {
  SiDocker,
  SiExpress,
  SiGo,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiSvelte />, title: "Svelte", href: "https://svelte.dev" },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://www.javascript.com",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiLaravel />,
    title: "Laravel",
    href: "https://laravel.com",
  },
  {
    node: <SiExpress />,
    title: "Express",
    href: "https://expressjs.com",
  },
  {
    node: <SiNestjs />,
    title: "Nest Js",
    href: "https://nestjs.com",
  },
  {
    node: <SiGo />,
    title: "Go",
    href: "https://go.dev",
  },
  {
    node: <SiSpringboot />,
    title: "Springboot",
    href: "https://spring.io/projects/spring-boot",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiPostgresql />,
    title: "Postgresql",
    href: "https://www.postgresql.org",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://www.docker.com",
  },
];

function Tools() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-center md:mb-12 mb-8 text-white">
        Tools
      </h2>
      <div className="flex flex-col">
        <div
          style={{ position: "relative", overflow: "hidden" }}
          className="w-full border border-white/10 bg-white/10 backdrop-blur-xl py-6 rounded-xl"
        >
          <div className="flex flex-col gap-8">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={isMobile ? 30 : 60}
              gap={40}
              width={"100%"}
              pauseOnHover
              scaleOnHover
              ariaLabel="Technology partners"
              className="text-white"
            />
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="right"
              logoHeight={isMobile ? 30 : 60}
              gap={40}
              width={"100%"}
              pauseOnHover
              scaleOnHover
              ariaLabel="Technology partners"
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
