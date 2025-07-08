import { Sparkle } from 'lucide-react';

const MarqueeSection = () => {
  const keywords = [
    'Experiencias Digitales',
    'Diseño Interactivo',
    'Interfaces de Usuario',
    'Estrategia de Marca',
    'Desarrollo de Producto',
    'Soluciones Creativas',
    'Transformación Digital',
    'Innovación Tecnológica',
    'Experiencia de Usuario',
    'Desarrollo Web',
    'Diseño Mobile First',
    'Impacto Digital'
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-y border-border bg-secondary/10 overflow-hidden">
      <div className="md:hidden">
        {/* Mobile version with animation */}
        <div className="flex items-center space-x-6 animate-marquee whitespace-nowrap">
          {keywords.map((keyword, index) => (
            <div key={`mobile-${index}`} className="flex items-center space-x-6">
              <span className="text-lg sm:text-xl font-light text-foreground">
                {keyword}
              </span>
              <Sparkle className="w-4 h-4 text-accent flex-shrink-0" />
            </div>
          ))}
          {keywords.map((keyword, index) => (
            <div key={`mobile-dup-${index}`} className="flex items-center space-x-6">
              <span className="text-lg sm:text-xl font-light text-foreground">
                {keyword}
              </span>
              <Sparkle className="w-4 h-4 text-accent flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="hidden md:block">
        {/* Desktop version with animation */}
        <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
          {keywords.map((keyword, index) => (
            <div key={`desktop-${index}`} className="flex items-center space-x-8">
              <span className="text-2xl lg:text-3xl xl:text-4xl font-light text-foreground">
                {keyword}
              </span>
              <Sparkle className="w-5 h-5 text-accent flex-shrink-0" />
            </div>
          ))}
          {keywords.map((keyword, index) => (
            <div key={`desktop-dup-${index}`} className="flex items-center space-x-8">
              <span className="text-2xl lg:text-3xl xl:text-4xl font-light text-foreground">
                {keyword}
              </span>
              <Sparkle className="w-5 h-5 text-accent flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;