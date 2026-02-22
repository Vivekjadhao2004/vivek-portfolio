import { Code, BarChart3, Shield } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground text-justify">
              Hi, I am Vivek Yogesh Jadhao, a final-year Computer Science Engineering
              student at Jawaharlal Darda Institute of Engineering & Technology,
              Yavatmal. I specialize in full-stack web development, API integration,
              and modern web technologies with hands-on experience in React.js,
              Node.js, MongoDB, HTML, CSS, JavaScript, and Python.
            </p>

            <p className="text-muted-foreground text-justify">
              I have completed industry-level projects including full-stack
              applications and weather forecasting tools along with professional
              certifications in Web Development, Data Analytics, and Cyber Security.
              I enjoy solving real-world problems, collaborating with teams, and
              building user-focused solutions that deliver practical impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              {/* ✅ FINAL RESUME LINK (GitHub Pages FIX) */}
              <a
                href={import.meta.env.BASE_URL + "resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="cosmic-button"
              >
                Download CV
              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Completed Web Development Internship building full-stack
                    applications using React.js, Node.js, MongoDB, HTML, CSS,
                    and JavaScript with real-world project experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Data Analytics</h4>
                  <p className="text-muted-foreground">
                    Completed Deloitte Data Analytics Job Simulation gaining
                    hands-on experience in data analysis, visualization,
                    and forensic technology concepts.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Cyber Security</h4>
                  <p className="text-muted-foreground">
                    Completed Cyber Security training focused on secure coding
                    practices, threat awareness, and modern system protection
                    fundamentals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

