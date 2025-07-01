import { ArrowRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Automatic Irrigation System",
    description:
      "A system that monitors soil moisture and controls irrigation using Arduino, Node.js and React.",
    image: "/projects/img-irrigation-monitor.png",
    tags: ["Arduino", "Node.js", "React"],
    githubUrl: "https://github.com/David-Zoldyck/automatic-irrigation-system",
  },
  {
    id: 2,
    title: "PettyCash App UI",
    description:
      "The React-built frontend of a web application built for managing expenses within an organization.",
    image: "/projects/img-pettycash-ui.png",
    tags: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/David-Zoldyck/pettycash-ui",
  },
  {
    id: 3,
    title: "PettyCash App API",
    description:
      "The server-side of a web application built for managing expenses within an organization using Node.js and MongoDB",
    image: "/projects/img-pettycash-api.png",
    tags: ["Node.js", "MongoDB"],
    githubUrl: "https://github.com/David-Zoldyck/pettycash-api",
  },
  {
    id: 4,
    title: "Bankist App",
    description:
      "A web-based project using HTML, CSS and JavaScript for the simulation of movement of funds in different accounts.",
    image: "/projects/img-bankist.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/David-Zoldyck/bankist-final",
  },
  {
    id: 5,
    title: "E-commerce Website Server",
    description:
      "Server-side of an e-commerce website built with Node.js and MongoDB, handling product management and user authentication.",
    image: "/projects/img-ecommerce-backend.png",
    tags: ["Node.js", "MongoDB"],
    githubUrl: "https://github.com/David-Zoldyck/Ecommerce-Platform-Backend",
  },
  {
    id: 6,
    title: "Pig(Dice) Game",
    description:
      "An interactive web-based game inspired by the popular dice game built with HTML, CSS and JavaScript.",
    image: "/projects/img-pig-game.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/David-Zoldyck/pig-game-starter",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
          {" "}
          My <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Feel free to explore them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 border text-xsfont-medium rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/David-Zoldyck"
            target="_blank"
          >
            Check Out My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
