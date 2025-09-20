import type { skillData } from "@/interfaces/skillInterfaces";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hammer } from "lucide-react";
import React, { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface skillProps {
  data: skillData[];
  skillsContentRef: React.RefObject<HTMLDivElement | null>;
  skillSectionRef: React.RefObject<HTMLDivElement | null>;
}

const Skills: React.FC<skillProps> = ({
  data,
  skillsContentRef,
  skillSectionRef,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(
    () => {
      if (!skillsContentRef.current || !skillSectionRef.current) return;

      const xInitVal = isMobile ? -200 : -500;

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top 80%",
          end: "top 0%",
          scrub: 1,
        },
      });

      mainTl.fromTo(
        skillsContentRef.current,
        {
          x: xInitVal,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 2,
        }
      );

      return () => {
        if (mainTl.scrollTrigger) mainTl.scrollTrigger.kill();
        mainTl.kill();
      };
    },
    { scope: skillsContentRef, dependencies: [isMobile] }
  );

  return (
    <div
      ref={skillsContentRef}
      className="bg-white/10 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-white/10 max-w-3xl mx-auto overflow-hidden"
    >
      <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">
        <Hammer className="inline text-white mr-2" size={isMobile ? 18 : 24} />
        {/* <Badge variant={"outline"} className="p-2 mr-2">
        </Badge> */}
        Skills
      </h3>
      <div className="flex flex-wrap gap-2 overflow-hidden">
        {data.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-2 py-1 md:px-3 rounded-full text-[7pt] md:text-sm font-medium  truncate max-w-[120px] md:max-w-[150px] inline-block"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
