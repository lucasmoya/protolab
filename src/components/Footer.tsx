import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-16 px-0">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-secondary/30 border border-border p-4 sm:p-8 md:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
            {/* Brand & Description */}
            <div className="flex-1 min-w-[220px] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <img src="/protolab-logo.png" alt="Protolab" className="h-8 w-auto" />
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Protolab impulsa equipos para transformar ideas en productos digitales claros y atractivos, facilitando la innovación y el crecimiento.
              </p>
            </div>
            {/* Social Icons & Mail - left on mobile, right on desktop */}
            <div className="flex flex-col items-start md:items-end justify-end gap-2 mt-6 md:mt-0">
              <div className="flex flex-row items-center gap-6">
                <a href="https://www.linkedin.com/in/lucasmoyaj/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/lucasmoya" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
                  <Github size={24} />
                </a>
              </div>
              <div className="flex gap-2 items-center mt-2">
                <Mail size={18} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">hola@protolab.cl</span>
              </div>
            </div>
          </div>
          {/* Legal Section */}
          <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <span className="text-xs text-muted-foreground">© {currentYear} Protolab. Creado por Lucas Moya.</span>
            <div className="flex gap-6 text-xs">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Política de Privacidad</a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Términos de Servicio</a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;