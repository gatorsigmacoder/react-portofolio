import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import { ModeToggle } from "./mode-toggle";

interface navbarProps {
  sections: {
    name: string;
    elementRef: React.RefObject<HTMLDivElement | null>;
  }[];
  //   navigate: {
  //     name: string;
  //     page: string;
  //   }[];
}
const Navbar: React.FC<navbarProps> = ({ sections }) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };
  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/10 backdrop-blur-xl py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-white font-bold text-xl">Portofolio</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {sections.map((sec) => (
              <button
                onClick={() => scrollToSection(sec.elementRef)}
                className="text-white hover:text-gray-300 transition-colors cursor-pointer"
              >
                {sec.name}
              </button>
            ))}
            <Button
              variant={"outline"}
              onClick={() => {
                navigate("/projects");
              }}
              className="cursor-pointer"
            >
              Projects
            </Button>
            <ModeToggle />
          </div>
          <div className="md:hidden flex gap-2">
            <ModeToggle />
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-4">
            <div className="flex flex-col space-y-4">
              {sections.map((sec) => (
                <button
                  onClick={() => scrollToSection(sec.elementRef)}
                  className="text-white hover:text-gray-300 transition-colors text-left"
                >
                  {sec.name}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate("/projects");
                }}
                className="text-white hover:text-gray-300 transition-colors text-left"
              >
                Projects
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
