import { ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useState, useCallback, useEffect } from 'react';

function ProjectImageSlider({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((src, idx) => (
            <div className="min-w-0 flex-[0_0_100%] aspect-video flex items-center justify-center bg-muted/20" key={src}>
              <img src={src} alt="Proyecto" className="object-contain w-full h-full" />
            </div>
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${selectedIndex === idx ? 'bg-accent' : 'bg-muted-foreground/30'}`}
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              aria-label={`Ir a la imagen ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Mucama',
      category: 'Plataforma Hotelera',
      description: 'Mucama es una plataforma digital para hoteles que optimiza la gestión de lavandería y ropa blanca de forma simple, rápida y eficiente.',
      images: ['/mucama-screen.png', '/mucama-screen2.png'],
      url: 'https://www.mucama.cl/'
    },
    {
      id: 2,
      title: 'Peirum',
      category: 'Plataforma Hotelera',
      description: 'Peirum es una plataforma integral para pequeños hoteles que centraliza la gestión de reservas, ventas y operaciones en una interfaz moderna e intuitiva.',
      images: ['/peirum-screen.png', '/peirum-screen2.png'],
      url: 'https://peirum.github.io/home/'
    },
    {
      id: 3,
      title: 'Kaja',
      category: 'Tecnología IoT',
      description: 'Kaja es un módulo inteligente creado en pandemia que detecta la proximidad de personas para fomentar el distanciamiento físico de forma visual y precisa.',
      image: '/kaja-screen.png',
      url: 'https://github.com/lucasmoya/kaja'
    },
    {
      id: 4,
      title: 'DXTEC1',
      category: 'Tecnología IoT',
      description: 'Este módulo inteligente detecta la temperatura del agua y alerta a personas con sensibilidad reducida en las extremidades, mejorando la autonomía.',
      image: '/dxtec1-screen.png',
      url: 'https://github.com/lucasmoya/dxtec1'
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-16 space-y-6 lg:space-y-0">
          <div>
            <h2 className="text-section-title mb-4">
              Proyectos completos —<br />
              <span className="gradient-text">con éxito</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-lg">
              Cada proyecto es una historia de éxito, diseñada con pasión y ejecutada con precisión para superar las expectativas.
            </p>
          </div>
        </div>
        {/* Projects Grid (como artículos) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <article
                className="card-glass p-4 sm:p-6 cursor-pointer group hover:bg-accent/5 transition-colors h-full"
              >
                {/* Project Image o Iframe */}
                <div className="aspect-video bg-gradient-card rounded-lg mb-4 sm:mb-6 overflow-hidden flex items-center justify-center p-4 sm:p-6">
                  {project.images ? (
                    <ProjectImageSlider images={project.images} />
                  ) : project.title === 'Kaja' ? (
                    <img
                      src="/kaja-screen.png"
                      alt="Kaja preview"
                      className="object-contain max-w-full max-h-full mx-auto rounded-lg"
                    />
                  ) : project.title === 'DXTEC1' ? (
                    <img
                      src="/dxtec1-screen.png"
                      alt="DXTEC1 preview"
                      className="object-contain max-w-full max-h-full mx-auto rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold text-muted-foreground/30">
                        {/* Imagen o icono del proyecto */}
                      </div>
                    </div>
                  )}
                </div>
                {/* Project Content */}
                <div className="space-y-3">
                  <h3 className="text-card-title group-hover:text-accent transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm sm:text-base">
                      {project.description}
                    </p>
                </div>
                {/* Read More Link */}
                <div className="flex items-center justify-between pt-4 sm:pt-6">
                  <button className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors font-medium">
                    <span>Ver proyecto</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;