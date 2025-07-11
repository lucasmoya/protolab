import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Article() {
  return (
    <article className="prose lg:prose-xl max-w-none">
      <p>
        El diseño digital está atravesando una transformación radical. Lo que alguna vez fue una práctica guiada por la intuición estética, hoy se redefine como una disciplina computacional, híbrida entre arte, ciencia y algoritmos. En esta nueva era, el diseñador ya no solo crea objetos visuales, sino que modela sistemas complejos con lógica matemática y colaboración de inteligencia artificial.
      </p>
      <br></br>
      <h2><strong>1. Del diseñador intuitivo al diseñador sistémico</strong></h2>
      <br></br>
      <p>
        Tradicionalmente, el diseño digital se apoyó en la observación del usuario, la teoría visual y la experiencia heurística. Sin embargo, la llegada de modelos generativos —como redes transformer, algoritmos evolutivos y diffusion models— ha cambiado radicalmente este paradigma.
      </p>
      <br></br>
      <blockquote>
        "Un sistema puede generar miles de alternativas de diseño, ponderadas por criterios que van desde estética percibida hasta eficiencia energética."<br />
        — <em>A. Ramesh et al., Zero-Shot Text-to-Image Generation, NeurIPS 2021</em>
      </blockquote>
      <br></br>
      <p>
        Ya no se trata de tomar decisiones aisladas, sino de definir espacios de búsqueda donde cada solución emerge de un equilibrio entre múltiples variables. Diseñar hoy implica programar condiciones iniciales, restricciones y criterios de evaluación en un sistema dinámico no lineal.
      </p>
      <br></br>
      <h2><strong>2. Interacción como sistema físico: diseño con ecuaciones</strong></h2>
      <br></br>
      <p>
        En muchos casos, la experiencia de usuario no se describe con palabras, sino con física. Las microinteracciones, animaciones y comportamientos responsivos se modelan mediante ecuaciones diferenciales y simulaciones físicas.
      </p>
      <p>Un ejemplo común es el sistema masa-resorte para simular transiciones naturales:</p>
      <BlockMath math="F = -kx - bv" />
      <br></br>
      <p>
        Donde <InlineMath math="k" /> es la constante de elasticidad, <InlineMath math="b" /> el coeficiente de fricción, <InlineMath math="x" /> el desplazamiento y <InlineMath math="v" /> la velocidad. Este tipo de modelo, implementado en motores como Unity3D o librerías como Framer Motion, permite diseñar comportamientos que se "sienten" correctos porque responden a las leyes físicas que intuimos desde la infancia.
      </p>
      <br></br>
      <h2><strong>3. El diseñador como editor algorítmico</strong></h2>
      <br></br>
      <p>
        Herramientas como Figma AI, Uizard o Builder.io marcan una transición en el rol del diseñador: de autor a editor. La IA no solo ejecuta comandos, sino que propone soluciones, variantes y patrones visuales.
      </p>
      <br></br>
      <blockquote>
        "El diseño generativo convierte al diseñador en un editor, un seleccionador dentro de un espacio de posibilidades multidimensional generado por la IA."<br />
        — <em>J. Maeda, Design in Tech Report, 2023</em>
      </blockquote>
      <br></br>
      <p>
        Esto requiere nuevas competencias: entender modelos probabilísticos, lógica difusa, redes neuronales y estadística bayesiana. El diseño se convierte en un proceso de curaduría algorítmica, donde se seleccionan y refinan resultados generados por sistemas inteligentes.
      </p>
      <br></br>
      <h2><strong>4. Espacios topológicos y estructuras matemáticas del diseño</strong></h2>
      <br></br>
      <p>
        Algunos diseñadores están explorando estructuras matemáticas para representar experiencias. Un flujo de usuario, por ejemplo, puede modelarse como un grafo dirigido:
      </p>
      <BlockMath math={"G = (V, E), \\quad w : E \\rightarrow \\mathbb{R}^{+}"} />
      <br></br>
      <p>
        Esta representación permite aplicar algoritmos como Dijkstra o A* para optimizar caminos de navegación. Incluso técnicas de aprendizaje por refuerzo pueden entrenar sistemas que optimicen experiencias en función del comportamiento del usuario.
      </p>
      <p>
        Este enfoque convierte al diseño en una disciplina capaz de predecir y adaptar su comportamiento a través de funciones matemáticas y aprendizaje automático.
      </p>
      <br></br>
      <h2><strong>5. Belleza, ética y sesgo: nuevas preguntas del diseño computacional</strong></h2>
      <br></br>
      <p>
        Con este cambio de paradigma emergen preguntas urgentes: ¿cómo definimos belleza cuando es producto de un modelo estadístico? ¿Qué pasa con la diversidad estética si los datasets están sesgados? ¿Qué significa "buena experiencia" cuando el sistema se optimiza para métricas de retención más que para bienestar?
      </p>
      <br></br>
      <p>
        La estética algorítmica plantea el riesgo de homogeneidad. Cuando todos los sistemas aprenden del mismo conjunto de datos, tienden a producir soluciones similares. El diseñador debe entonces asumir un nuevo rol ético: intervenir, desviar, proponer lo inesperado dentro de lo probable.
      </p>
      <br></br>
      <h2><strong>Conclusión</strong></h2>
      <br></br>
      <p>
        El diseño digital ya no es solo arte ni solo ingeniería. Es una práctica transdisciplinar que combina sensibilidad estética, comprensión de sistemas, pensamiento lógico y conciencia ética. Diseñar con IA es, en esencia, modelar el comportamiento de sistemas inteligentes en función de valores humanos.
      </p>
      <p>
        Programar la creatividad no significa automatizar el diseño, sino ampliar sus límites. Estamos entrando en una era donde el diseño se codifica, pero también se humaniza desde nuevas coordenadas: espacio, tiempo, emoción y datos.
      </p>
      <br></br>
      <h2><strong>Referencias</strong></h2>
      <br></br>
      <ul>
        <li><em>Ramesh, A., Pavlov, M., Goh, G. et al. (2021). Zero-Shot Text-to-Image Generation. NeurIPS.</em></li>
        <li><em>Maeda, J. (2023). Design in Tech Report.</em></li>
        <li><em>Tversky, A., Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases.</em></li>
        <li><em>Ma, Y., & Belkin, M. (2020). Neural Tangent Kernel: Convergence and Generalization in Neural Networks. ICML.</em></li>
        <li><em>Framer Motion (2024). Motion Library for React. https://www.framer.com/motion/</em></li>
        <li><em>Unity Technologies. (2023). Unity Physics Engine Documentation.</em></li>
      </ul>
    </article>
  );
} 