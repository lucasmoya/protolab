const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Background gradient overlays - static */}
      <div className="absolute inset-0 bg-gradient-overlay opacity-50"></div>
      
      {/* Static light elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Astronaut image for mobile (centered, big) */}
      <img
        src="/astronauta.png"
        alt="Astronauta"
        className="absolute left-1/2 bottom-0 w-80 max-w-none sm:hidden z-0"
        style={{ transform: 'translate(-50%, 20%)' }}
      />
      
      {/* Astronaut image for sm+ (bottom left, diagonal) */}
      <img
        src="/astronauta.png"
        alt="Astronauta"
        className="hidden sm:block absolute left-0 bottom-0 w-48 md:w-64 lg:w-80 xl:w-[28rem] max-w-none rotate-[-18deg] z-0"
        style={{ transform: 'translate(-5%, 20%) rotate(-18deg)' }}
      />
      
      <div className="container mx-auto text-center relative z-10 h-full flex flex-col justify-between">
        {/* Main Hero Text */}
        <div className="mb-8 sm:mb-12 mt-0 sm:mt-0 -mt-40 sm:mt-0">
          <div className="flex flex-col items-center w-full">
            <div className="w-full flex flex-row items-center justify-between">
              <span className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-black text-white leading-none tracking-tight uppercase">  DISEÑO</span>
              <span className="flex-1 border-b-4 border-white mx-4 md:mx-8" style={{ minWidth: '40px' }}></span>
              <span className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-black text-white leading-none tracking-tight uppercase">WEB</span>
            </div>
            <div className="w-full flex justify-center mt-2">
              <span className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[8rem] font-black text-white leading-none tracking-tight uppercase">CREATIVO</span>
            </div>
          </div>
        </div>
        {/* Subtitle bottom right */}
        <div className="w-full flex justify-end">
          <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-right mr-0 ml-auto mb-4 sm:mb-12 mt-0 sm:mt-8">
            <span className="block text-xs sm:text-sm md:text-base font-sans uppercase tracking-widest text-white/90 leading-snug">
              Protolab es mi base de lanzamiento para crear experiencias digitales innovadoras, funcionales y diseñadas para destacar
            </span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with animation */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;