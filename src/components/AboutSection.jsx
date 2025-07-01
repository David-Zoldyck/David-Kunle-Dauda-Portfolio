import { Link } from "react-router-dom";
import { Code } from "lucide-react";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl opacity-0 animate-fade-in-delay-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              I'm a software developer from Nigeria with a love for creativity,
              clean code, and clever ideas. I specialize in building modern web
              applications on the frontend and backend — basically, making both
              sides of the internet talk to each other smoothly.
            </p>
            <p className="text-muted-foreground">
              I constantly look to learn new stuff...whether it’s diving into
              new web tools, exploring the world of AI, or experimenting with
              ideas that live somewhere between art and code. I believe in
              learning by doing and creating with intent.
            </p>
            <p className="text-primary">
              "You hold yourself back when you don't try" - David
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Let's Connect
              </a>
              <a
                href="/david-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                View CV
              </a>

              {/* <Link to="/cv" className="cosmic-button">
                View CV
              </Link> */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Frontend Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive and creative user interfaces
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Backend Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building robust APIs and server-side logic
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Database Management
                  </h4>
                  <p className="text-muted-foreground">
                    Modeling, managing and integrating data into full-stack
                    applications
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
