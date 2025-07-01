import { Instagram, Linkedin, Github, ArrowUp } from "lucide-react";

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-background border-t border-white/10 text-foreground py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left - Name */}
        <div className="text-muted-foreground md:text-xl lg:text-xl text-center md:text-left">
          Designed and Developed by{" "}
          <span className="text-primary font-medium">David Kunle-Dauda</span>
        </div>

        {/* Center - Copyright */}
        <div className="text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} DKD.
        </div>

        {/* Right - Socials */}
        <div className="flex justify-center space-x-4">
          {[
            {
              href: "https://www.linkedin.com/in/david-kunle-dauda-9932a527b/",
              icon: <Linkedin size={20} />,
            },
            {
              href: "https://github.com/David-Zoldyck",
              icon: <Github size={20} />,
            },
            {
              href: "https://www.instagram.com/idreamofdkd_/",
              icon: <Instagram size={20} />,
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary border border-primary p-2 rounded-full hover:scale-110 transition-transform"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className="absolute right-4 bottom-4 md:bottom-6 md:right-6 bg-primary text-background p-2 rounded-full shadow-lg hover:scale-110 transition-all"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};
