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

  useEffect(() => {
    if (!emblaApi) return;
    // Forzar recalculo al montar y al cambiar el tamaño de la ventana
    const handleResize = () => emblaApi.reInit();
    emblaApi.reInit();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [emblaApi]);

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
        <div className="flex justify-center gap-1.5 mt-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${selectedIndex === idx ? 'bg-accent' : 'bg-muted-foreground/30'}`}
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
      description: 'Mucama es un Saas para hoteles que optimiza la gestión de lavandería y ropa blanca de forma simple, rápida y eficiente.',
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
      title: 'Volaria',
      category: 'Plataforma de Viajes',
      description: 'Volaria planifica vuelos, hoteles, itinerarios y experiencias en un solo lugar, potenciado por inteligencia artificial.',
      images: ['/volaria-screen.png', '/volaria-screen2.png']
    },
    {
      id: 4,
      title: 'Punto de Venta',
      category: 'Sistema de Gestión',
      description: 'Simplifica la toma de pedidos, el control de mesas y las ventas en tu hotel o restaurante, todo en un solo lugar.',
      image: '/pos-screen.png'
    },
    {
      id: 5,
      title: 'Kaja',
      category: 'Tecnología IoT',
      description: 'Kaja es un módulo inteligente creado en pandemia que detecta la proximidad de personas para fomentar el distanciamiento físico de forma visual y precisa.',
      image: '/kaja-screen.png',
      url: 'https://github.com/lucasmoya/kaja'
    },
    {
      id: 6,
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
          {projects.map((project) => {
            const ProjectImage = (
              <div className="aspect-video bg-gradient-card rounded-lg mb-4 sm:mb-6 overflow-hidden flex items-center justify-center p-4 sm:p-6">
                {project.images ? (
                  <ProjectImageSlider images={project.images} />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-muted/20 flex items-center justify-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-muted-foreground/30">
                      {/* Imagen o icono del proyecto */}
                    </div>
                  </div>
                )}
              </div>
            );

            const ProjectContent = (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className={`text-card-title line-clamp-2 ${
                    project.url ? 'group-hover:text-accent transition-colors' : ''
                  }`}>
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                        {project.category}
                      </span>
                    </div>
                <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm sm:text-base">
                      {project.description}
                    </p>
              </div>
            );

            const ProjectButton = (
              <div className="flex items-center justify-between pt-4 sm:pt-6">
                <button className={`flex items-center space-x-2 font-medium ${
                  project.url 
                    ? 'text-accent hover:text-accent/80 transition-colors' 
                    : 'text-muted-foreground/50 cursor-not-allowed'
                }`}>
                  <span>{project.url ? 'Ver proyecto' : 'En desarrollo'}</span>
                  {project.url && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </button>
              </div>
            );

            return (
              <article
                key={project.id}
                className={`card-glass p-4 sm:p-6 transition-colors h-full ${
                  project.url ? 'group' : 'cursor-not-allowed'
                }`}
              >
                {/* Project Image - Not clickable */}
                {ProjectImage}
                
                {/* Project Content - Clickable area */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    {ProjectContent}
                    {ProjectButton}
                  </a>
                ) : (
                  <>
                    {ProjectContent}
                    {ProjectButton}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;