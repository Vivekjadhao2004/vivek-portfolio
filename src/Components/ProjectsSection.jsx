import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Career Coach Platform",
    description:
      "An AI-powered carrer coach platform built with React,Tailwind CSS, and integrate AI APIs.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Next.js", "Gemini AI API", "NeonDB", "Prisma"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Resume Builder",
    description:
      " An AI-powered Resume Builder web app using MERN Stack and AI .",
    image: "/projects/project2.png",
    tags: ["React JS", "Tailwind CSS", "Node.js", "MongoDB", "Express jS",],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "A Full-Stack Dating Web App",
    description:
      "An advanced dating platform ",
    image: "/projects/project3.png",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Stream API",  "Realtime Chat", "Video Call APIs"
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Upcoming <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are the projects I’m planning to begin soon. I’m excited to work on them, learn new skills, and create fresh solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* content */}
              <div className="p-6">
                {/* tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* github button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Vivekjadhao2004"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};