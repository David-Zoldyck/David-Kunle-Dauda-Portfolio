import { useState } from "react";
import { cn } from "./lib/utils";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiPostman,
  SiArduino,
  SiInsomnia,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  //frontend
  { name: "HTML/CSS", icon: <SiHtml5 />, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
  { name: "React", icon: <SiReact />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },

  //backend
  { name: "Node.js", icon: <SiNodedotjs />, category: "backend" },
  { name: "Express", icon: <SiExpress />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb />, category: "backend" },

  //tools
  { name: "VS Code", icon: <VscVscode />, category: "tools" },
  { name: "Git/GitHub", icon: <SiGithub />, category: "tools" },
  { name: "Postman", icon: <SiPostman />, category: "tools" },
  { name: "Insomnia", icon: <SiInsomnia />, category: "tools" },
  { name: "Arduino IDE", icon: <SiArduino />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"]


export const SkillsSection = () => {
const [activeCategory, setActiveCategory] = useState("all")

const filteredSkills = skills.filter(
  (skill) => activeCategory === "all" || skill.category === activeCategory
);


  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl opacity-0 animate-fade-in-delay-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary cursor-pointer"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl text-primary">{skill.icon}</span>
                <h3 className="font-bold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
