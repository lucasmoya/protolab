import { useState, useEffect } from 'react';
import { Linkedin, Github, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-colors ${
        scrolled ? 'bg-background/90 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/protolab-logo.png" 
              alt="Protolab" 
              className="h-8 sm:h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/lucasmoyaj/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/lucasmoya" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu pt-20">
          <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;