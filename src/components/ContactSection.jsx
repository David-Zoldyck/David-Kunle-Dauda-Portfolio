import { Instagram, Linkedin, Mail, MapPin, Phone, Github } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground lg:text-xl md:text-xl mb-12 max-w-xl mx-auto">
          Got a project in mind or need a new developer on your team? Feel free
          to contact me. I'm always open to new ideas and collaborations.
        </p>

        {/* Contact Info Block - centered but content left-aligned */}
        <div className="space-y-8 mb-12 text-left mx-auto w-fit">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Email</h4>
              <a
                href="mailto:davidkunledauda2003@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                davidkunledauda2003@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Phone</h4>
              <a
                href="tel:+2348025955618"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +234 802-595-5618
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium">Location</h4>
              <p className="text-muted-foreground">Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium lg:text-2xl md:text-xl mb-4">
            Connect With<span className="text-primary"> Me</span>
          </h4>
          <div className="flex justify-center space-x-6 text-primary">
            <a
              href="https://www.linkedin.com/in/david-kunle-dauda-9932a527b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/David-Zoldyck"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.instagram.com/idreamofdkd_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Instagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
