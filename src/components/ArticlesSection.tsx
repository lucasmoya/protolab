import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTrigger, DialogClose } from '@radix-ui/react-dialog';
import Article from './Article';

const articleContent = `El diseño digital contemporáneo está dejando de ser una disciplina puramente visual para convertirse en un campo híbrido entre programación, teoría de sistemas, física computacional y neurociencia aplicada.\n\nEn este artículo exploro cómo la inteligencia artificial —específicamente los modelos generativos— está reconfigurando no solo el cómo diseñamos productos, sino qué significa diseñar en una era de algoritmos adaptativos y datos multidimensionales.\n\n1. Del diseño basado en intuición al diseño basado en sistemas dinámicos\nTradicionalmente, el diseño digital ha dependido de la heurística: decisiones tomadas desde la experiencia, la observación del usuario y el lenguaje visual. Sin embargo, la incorporación de modelos generativos como diffusion models, redes transformer y técnicas de optimización evolutiva ha dado paso a una nueva forma de creación:\n\n"Un sistema puede generar miles de alternativas de diseño, ponderadas por criterios que van desde estética percibida hasta eficiencia energética."\n— A. Ramesh et al., "Zero-Shot Text-to-Image Generation," NeurIPS 2021\n\nEsto implica que el diseño ya no se basa en decisiones puntuales, sino en espacios de solución, definidos por funciones matemáticas y restricciones lógicas. En otras palabras: diseñar hoy puede implicar resolver un sistema dinámico no lineal donde la experiencia de usuario es una función multivariable.\n\n2. El rol de la física computacional en el diseño de interacción\nUno de los aspectos más intrigantes es el uso de modelos físicos para definir comportamientos interactivos. Las microinteracciones, transiciones de interfaz y simulaciones en productos complejos se modelan hoy mediante ecuaciones diferenciales ordinarias (ODEs) y técnicas de integración numérica como Runge-Kutta.\n\nPor ejemplo, en prototipos avanzados de interfaces tangibles (UI físicas), se utilizan principios de masa-resorte para simular respuesta háptica:\n\n𝐹 = −𝑘𝑥−𝑏𝑣\nDonde k es la constante elástica, b el coeficiente de fricción, x el desplazamiento y v la velocidad. Este tipo de modelos se implementa hoy con facilidad usando librerías como p5.js o motores como Unity3D y se evalúan mediante técnicas de simulación en tiempo real.\n\n3. Algoritmos generativos como co-diseñadores\nCon la maduración de herramientas como Figma AI, Uizard, Builder.io, e incluso el uso de modelos de lenguaje como GPT-4, el rol del diseñador se está desplazando hacia una relación colaborativa con el algoritmo. Estos sistemas no solo ejecutan tareas, sino que proponen soluciones autónomas:\n\n"El diseño generativo convierte al diseñador en un editor, un seleccionador dentro de un espacio de posibilidades multidimensional generado por la IA."\n— J. Maeda, "Design in Tech Report," 2023\n\nEste cambio exige conocimientos técnicos nuevos: desde redes neuronales hasta estadística bayesiana, pasando por teoría de grafos y lógica difusa.\n\n4. De lo visual a lo matemático: el diseño como topología funcional\nAlgunos diseñadores ya están explorando cómo mapear decisiones de diseño a espacios matemáticos, lo que permite tratar productos digitales como espacios topológicos con funciones de coste, reglas de transición y geometría de estados. Por ejemplo, el flujo de un usuario a través de una aplicación puede representarse como un grafo dirigido con pesos adaptativos, donde cada nodo corresponde a una vista, y cada arista a una transición condicionada.\n\n𝐺 = (𝑉,𝐸), 𝑤:𝐸→𝑅+\n\nEste enfoque permite optimizar flujos usando algoritmos como Dijkstra o A*, pero también diseñar experiencias más eficientes con aprendizaje por refuerzo, donde el sistema aprende la ruta óptima para cada tipo de usuario.\n\n5. Implicaciones éticas y estéticas\nSi bien esta evolución promete eficiencia y personalización, también plantea preguntas críticas:\n¿Dónde queda la intuición humana? ¿Cómo se valida la belleza cuando es generada por un modelo estadístico? ¿Cómo se representa la diversidad estética en datasets sesgados?\n\nComo diseñador, no puedo evitar preguntarme si la estética algorítmica reemplazará lo artesanal o si estamos entrando en una nueva era donde ambas coexisten.\n\nConclusión\nEl diseño digital del futuro no es solo arte ni solo ingeniería: es la síntesis de múltiples lenguajes —visual, computacional, físico y emocional— mediada por sistemas inteligentes. Diseñar con IA es, en esencia, programar la creatividad en tiempo real.\n\nReferencias\nRamesh, A., Pavlov, M., Goh, G. et al. (2021). Zero-Shot Text-to-Image Generation. NeurIPS.\nMaeda, J. (2023). Design in Tech Report.\nTversky, A., Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases.\nMa, Y., & Belkin, M. (2020). Neural Tangent Kernel: Convergence and Generalization in Neural Networks. ICML.`;

  const articles = [
    {
      id: 1,
    title: 'Diseño generativo asistido por IA: Hacia una fusión entre estética, algoritmos y sistemas adaptativos',
    excerpt: 'El diseño digital contemporáneo está dejando de ser una disciplina puramente visual para convertirse en un campo híbrido entre programación, teoría de sistemas, física computacional y neurociencia aplicada.',
    date: 'Publicado el 8 de julio de 2025',
    readTime: 'Lectura de 6–7 min',
    content: articleContent
  }
];

const ArticlesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const showNavigation = articles.length > 1;

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 lg:mb-16 space-y-6 lg:space-y-0">
          <div>
            <h2 className="text-section-title mb-4">
              Nuestro último —<br />
              <span className="gradient-text">artículo</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-lg">
              Insights, tendencias y conocimientos del mundo del diseño digital para inspirar tu próximo proyecto.
            </p>
          </div>
          {/* Navigation Controls */}
          {showNavigation && (
            <div className="flex space-x-4 justify-center lg:justify-start">
              <button
                onClick={prevSlide}
                className="p-3 sm:p-4 rounded-full bg-card border border-border hover:bg-accent hover:border-accent transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-accent-foreground transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 sm:p-4 rounded-full bg-card border border-border hover:bg-accent hover:border-accent transition-colors group"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-accent-foreground transition-colors" />
          </button>
            </div>
          )}
        </div>
        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
          {articles.map((article) => (
              <div key={article.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Article Image - portada solo en desktop */}
                  <div className="order-2 lg:order-1 w-full">
                    {/* Desktop: portada en su lugar original */}
                    <div className="hidden sm:block">
                      <div className="aspect-video bg-muted/20 flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src="/astronauta-articulo.png"
                          alt="Portada del artículo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Article Details */}
                  <div className="space-y-4 sm:space-y-6 order-1 lg:order-2 w-full">
                    {/* Mobile: portada primero dentro del bloque de detalles */}
                    <div className="block sm:hidden mb-4">
                      <div className="aspect-video bg-muted/20 flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src="/astronauta-articulo.png"
                          alt="Portada del artículo"
                          className="w-full h-full object-cover"
                        />
                </div>
              </div>
                    <div className="space-y-2">
                      {/* No category shown */}
                      <h3 className="text-card-title">{article.title}</h3>
                    </div>
              {/* Article Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-muted-foreground mb-4 space-y-2 sm:space-y-0">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-medium self-start">
                        {article.date} · {article.readTime}
                </span>
                    </div>
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors font-medium">
                            <span>Leer más</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </DialogTrigger>
                        <DialogPortal>
                          <DialogOverlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in" />
                          <DialogContent className="fixed left-1/2 top-1/2 max-h-[70vh] w-full max-w-2xl sm:max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-background p-0 sm:p-0 shadow-xl focus:outline-none z-50 animate-scale-in overflow-y-auto mx-2 sm:mx-0">
                            <div className="flex justify-between items-center mb-6 p-6 sm:p-10 pb-0">
                              <h2 className="text-xl font-bold leading-tight mr-4">{article.title}</h2>
                              <DialogClose asChild>
                                <button aria-label="Cerrar" className="rounded-full p-2 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent">
                                  <X className="w-6 h-6" />
                                </button>
                              </DialogClose>
                            </div>
                            <div className="p-6 sm:p-10 pt-0">
                              <Article />
                            </div>
                          </DialogContent>
                        </DialogPortal>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
        </div>
        {/* Dots Indicator */}
        {showNavigation && (
          <div className="flex justify-center space-x-3 mt-8 sm:mt-12">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-accent' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;