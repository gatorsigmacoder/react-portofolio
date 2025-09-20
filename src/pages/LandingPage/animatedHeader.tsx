import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { TextCursor } from "lucide-react";

gsap.registerPlugin(TextPlugin);

function AnimatedHeader() {
  const headerRef = useRef<HTMLSpanElement>(null);

  const calculateTypingDurationByChars = (
    text: string,
    wordsPerMinute = 40
  ) => {
    // Average characters per word (including spaces and punctuation)
    const avgCharsPerWord = 5;
    const charCount = text.length;

    // Calculate duration: characters / (wordsPerMinute * avgCharsPerWord / 60)
    return charCount / ((wordsPerMinute * avgCharsPerWord) / 60);
  };

  const firstText = "Hello World...";
  const firstTypingDuration = calculateTypingDurationByChars(firstText, 120);
  const secondText = "I'm Tariq";
  const secondTypingDuration = calculateTypingDurationByChars(secondText, 120);
  const words = [
    {
      word: firstText,
      duration: firstTypingDuration,
      style: "text-blue-500 font-mono font-bold",
    },
    {
      word: secondText,
      duration: secondTypingDuration,
      style: "text-green-500 font-mono font-bold",
    },
  ];

  useGSAP(
    () => {
      const typingTl = gsap.timeline({ repeat: -1 }); // -1 means infinite repeat

      words.forEach((data) => {
        let tl = gsap.timeline({ repeat: 1, yoyo: true });
        tl.to(headerRef.current, {
          duration: data.duration,
          text: {
            value: data.word,
            newClass: data.style,
          },
          ease: "none",
        }).to({}, { duration: 1 });
        typingTl.add(tl);
      });
    },
    { scope: headerRef }
  );

  return (
    <div className="p-4 bg-gray-100 w-fit">
      <span ref={headerRef} className="text-xl font-mono"></span>
      <span className="blinking-cursor ">
        <TextCursor className="inline" />
      </span>
    </div>
  );
}

export default AnimatedHeader;
