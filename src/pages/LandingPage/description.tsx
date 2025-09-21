import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Description() {
  const descriptionRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!descriptionRef.current) return;

      const mainTl = gsap.timeline();

      mainTl.fromTo(
        descriptionRef.current,
        {
          y: 100, // Start from 100px below
          opacity: 0, // Start invisible
        },
        {
          y: 0, // Move to original position
          opacity: 1, // Fade to fully visible
          duration: 2,
          ease: "power2.out",
        }
      );
    },
    { scope: descriptionRef }
  );
  return (
    <div className="p-2 overflow-hidden">
      <span ref={descriptionRef} className="inline-block">
        Halo, saya Tariq /Ṭāriq/. <br /> Saya merupakan seorang Programmer yang
        handal dalam bidang Front-End, Back-End dan Fullstack. Mengoding adalah
        hal yang saya sukai, tidak ada aktivitas menyenangkan selain mengoding.
      </span>
    </div>
  );
}

export default Description;
