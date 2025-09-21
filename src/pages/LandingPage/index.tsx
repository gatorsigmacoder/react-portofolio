import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedHeader from "./animatedHeader";
import Description from "./description";
import Skills from "./skills";
import Education from "./education";
import Beams from "@/components/Beams";
import {
  useGetAllEducationsQuery,
  useGetAllSkillsQuery,
} from "@/services/landingPageServices";
import Tools from "./tools";
import Contact from "./contact";
import Navbar from "@/components/navbar";

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const bioTextRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const skillsContentRef = useRef<HTMLDivElement>(null);
  const toolsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  const section = [
    {
      name: "Home",
      elementRef: heroSectionRef,
    },
    {
      name: "Skills & Education",
      elementRef: skillsSectionRef,
    },
    {
      name: "Tools",
      elementRef: toolsSectionRef,
    },
    {
      name: "Contact",
      elementRef: contactSectionRef,
    },
  ];
  const { data: skillData, isLoading: isLoadingSkillData } =
    useGetAllSkillsQuery();
  const { data: educationData, isLoading: isLoadingEducationData } =
    useGetAllEducationsQuery();

  useEffect(() => {
    // Background zoom and blur animation
    gsap.to(backgroundRef.current, {
      scrollTrigger: {
        trigger: skillsSectionRef.current,
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
      scale: 1.2,
      filter: "blur(5px)",
      ease: "none",
    });

    // Bio text fade out animation
    gsap.to(bioTextRef.current, {
      scrollTrigger: {
        trigger: skillsSectionRef.current,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
      opacity: 0,
      y: -50,
      ease: "none",
    });

    gsap.to(skillsContentRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: toolsSectionRef.current,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });

    // Skills content animation

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App relative min-h-screen">
      <Navbar sections={section} />
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={10}
          beamHeight={25}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={34}
        />
      </div>

      {/* Hero Section with Background Image */}
      <section
        ref={heroSectionRef}
        className="relative h-screen overflow-hidden"
      >
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('myfoto.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Bio Content */}
          <div
            ref={bioTextRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 flex flex-col items-center justify-center w-full max-w-xl px-4"
          >
            <AnimatedHeader />
            <Description />

            {/* Scroll indicator */}
            <div className="absolute bottom-[-100px] animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Skills and Education Section */}
      <section
        ref={skillsSectionRef}
        className="h-screen relative overflow-hidden"
      >
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center md:mb-12 mb-8 text-white">
            Skills & Education
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {/* Skills Container */}
            {!isLoadingSkillData && (
              <Skills
                data={skillData?.data ?? []}
                skillsContentRef={skillsContentRef}
                skillSectionRef={skillsSectionRef}
              />
            )}

            {/* Education Container */}

            {!isLoadingEducationData && (
              <Education
                data={educationData?.data ?? []}
                skillSectionRef={skillsSectionRef}
              />
            )}
          </div>
        </div>
      </section>

      <section ref={toolsSectionRef} className="min-h-screen relative">
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-6xl w-full">
          <Tools />
        </div>
      </section>

      <section ref={contactSectionRef} className="h-screen relative">
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
