import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
const roles = [
  "Web Developer",
  "Data Analytics",
  "CyberSecurity Intern",
  "Animations"
];

export const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 500); // Short pause at full word
        }
      } else {
        if (charIndex > 0) {
          setText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(handleTyping);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="container max-w-4xl mx-auto text-left z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Vivek</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2"> Yogesh</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-3"> Jadhav</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80">
            {text}
            <span className="animate-pulse">|</span>
          </p>

          <p className=" text-lg md: text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a final-year Computer Science student at 
            Jawaharlal Darda Institute of Engineering and Technology Yavatmal.
            I have hands-on experience in full-stack web development, cybersecurity, 
            and data analytics, gained through internships as well as academic projects.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4"> 
                <a href="#projects" className="cosmic-button"> 
                  View My Work
                </a>
            </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span classname ="text-sm text-muted-foreground mb-2"> Scroll</span>
      <ArrowDown classname="h-5 w-5 text-primary" />
      </div>

    </section>
  );
};