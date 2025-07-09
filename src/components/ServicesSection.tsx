import { Palette, Code, Smartphone, Globe, Zap, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Diseño de marca',
      description: 'Creamos identidades visuales que conectan y comunican la esencia de tu marca.'
    },
    {
      icon: Code,
      title: 'Producto digital',
      description: 'Diseñamos y desarrollamos productos digitales modernos, funcionales y atractivos.'
    },
    {
      icon: Smartphone,
      title: 'Desarrollo web',
      description: 'Desarrollamos sitios web responsivos y aplicaciones móviles intuitivas y de alto rendimiento.'
    },
    {
      icon: Globe,
      title: 'Plataformas y sistemas',
      description: 'Implementamos plataformas y sistemas robustos para potenciar tu negocio.'
    },
    {
      icon: Zap,
      title: 'Estrategia digital',
      description: 'Definimos estrategias digitales para impulsar el crecimiento y la innovación.'
    },
    {
      icon: Users,
      title: 'Escalabilidad y roadmaps técnicos',
      description: 'Te ayudamos a escalar tu producto y planificar el crecimiento tecnológico.'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-background relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-overlay opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-section-title mb-4 sm:mb-6">
            Soluciones digitales —<br />
            <span className="gradient-text">integrales</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Desde conceptos creativos hasta implementaciones técnicas, ofrecemos un ecosistema completo.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-glass p-6 sm:p-8 group cursor-pointer hover:bg-accent/5 transition-colors text-left"
            >
              {/* Icon */}
              <div className="mb-4">
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent" />
              </div>
              {/* Content */}
              <h3 className="text-card-title font-normal group-hover:text-accent transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        {/* <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button className="btn-primary">
            Explorar Todos los Servicios
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;