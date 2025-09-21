import type { educationData } from "@/interfaces/educationInterfaces";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

interface educationProps {
  data: educationData[];
  skillSectionRef: React.RefObject<HTMLDivElement | null>;
}

const Education: React.FC<educationProps> = ({ data, skillSectionRef }) => {
  const educationContentRef = useRef<HTMLDivElement>(null);
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
      if (!skillSectionRef.current) return;

      gsap.set(educationContentRef.current, {
        x: 500,
        opacity: 0,
      });

      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top 80%",
          end: "top 0%",
          scrub: 1,
        },
      });

      mainTl.to(educationContentRef.current, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      });

      return () => {
        if (mainTl.scrollTrigger) mainTl.scrollTrigger.kill();
        mainTl.kill();
      };
    },
    { scope: educationContentRef }
  );

  return (
    <div
      ref={educationContentRef}
      className="bg-white/10 backdrop-blur-xl rounded-xl p-4 md:p-6 border border-white/10"
    >
      <h3 className="text-lg md:text-xl font-bold mb-6 text-white">
        <GraduationCap
          className="inline text-white mr-2"
          size={isMobile ? 18 : 24}
        />
        Education
      </h3>
      <div className="flex flex-wrap gap-2 overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl p-5 border border-white/10 transition-all duration-300 hover:bg-white/10 w-full"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-md md:text-lg font-medium text-white">
                  {item.institution}
                </h4>
                <div className="flex items-center text-xs md:text-sm text-slate-300 mt-1">
                  <MapPin size={isMobile ? 10 : 16} className="mr-1" />
                  {item.location}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4">
              <div className="flex items-center text-white/90 text-md">
                <BookOpen
                  size={isMobile ? 12 : 18}
                  className="mr-2 text-slate-300"
                />
                <span>
                  {item.degree} in {item.major}
                </span>
              </div>

              <div className="flex items-center text-white/90 text-md">
                <Calendar
                  size={isMobile ? 12 : 18}
                  className="mr-2 text-slate-300"
                />
                <span>{item.duration}</span>
              </div>

              <div className="flex items-center text-white/90 text-md">
                <Award
                  size={isMobile ? 12 : 18}
                  className="mr-2 text-slate-300"
                />
                <span>GPA: {item.gpa}</span>
              </div>
            </div>

            {/* {expandedItem === index && (
              <div className="mt-5 pt-5 border-t border-white/10 animate-fadeIn">
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mb-5">
                    <h5 className="text-md font-medium text-white mb-2">
                      Achievements
                    </h5>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          <span className="text-white/80">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.courses && item.courses.length > 0 && (
                  <div>
                    <h5 className="text-md font-medium text-white mb-2">
                      Relevant Courses
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course, i) => (
                        <span
                          key={i}
                          className="bg-purple-900/30 text-purple-200 px-3 py-1 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
