import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function Article() {
  return (
    <article className="prose lg:prose-xl max-w-none">
      <p>
        El diseño digital contemporáneo está dejando de ser una disciplina puramente visual para convertirse en un campo híbrido entre programación, teoría de sistemas, física computacional y neurociencia aplicada. En este artículo exploro cómo la inteligencia artificial —específicamente los modelos generativos— está reconfigurando no solo el <em>cómo</em> diseñamos productos, sino <em>qué significa diseñar</em> en una era de algoritmos adaptativos y datos multidimensionales.
      </p>
      <br></br>
      <h2>1. Del diseño basado en intuición al diseño basado en sistemas dinámicos:</h2>
      <br></br>
      <p>
        Tradicionalmente, el diseño digital ha dependido de la heurística: decisiones tomadas desde la experiencia, la observación del usuario y el lenguaje visual. Sin embargo, la incorporación de modelos generativos como <strong>diffusion models</strong>, redes <strong>transformer</strong> y técnicas de <strong>optimización evolutiva</strong> ha dado paso a una nueva forma de creación:
      </p>
      <br></br>
      <blockquote>
        “Un sistema puede generar miles de alternativas de diseño, ponderadas por criterios que van desde estética percibida hasta eficiencia energética.”<br />
        — <em>A. Ramesh et al., "Zero-Shot Text-to-Image Generation," NeurIPS 2021</em>
      </blockquote>
      <br></br>
      <p>
        Esto implica que el diseño ya no se basa en decisiones puntuales, sino en <strong>espacios de solución</strong>, definidos por funciones matemáticas y restricciones lógicas. En otras palabras: diseñar hoy puede implicar resolver un sistema dinámico no lineal donde la experiencia de usuario es una función multivariable.
      </p>
      <br></br>
      <h2>2. El rol de la física computacional en el diseño de interacción:</h2>
      <br></br>
      <p>
        Uno de los aspectos más intrigantes es el uso de modelos físicos para definir comportamientos interactivos. Las microinteracciones, transiciones de interfaz y simulaciones en productos complejos se modelan hoy mediante ecuaciones diferenciales ordinarias (ODEs) y técnicas de integración numérica como Runge-Kutta.
      </p>
      <p>Por ejemplo, en interfaces físicas se utiliza la fórmula de masa-resorte:</p>
      <BlockMath math="F = -kx - bv" />
      <br></br>
      <p>
        Donde <InlineMath math="k" /> es la constante elástica, <InlineMath math="b" /> el coeficiente de fricción, <InlineMath math="x" /> el desplazamiento y <InlineMath math="v" /> la velocidad. Este tipo de modelos se implementa con librerías como <strong>p5.js</strong> o motores como <strong>Unity3D</strong> y se evalúan en tiempo real.
      </p>
      <br></br>
      <h2>3. Algoritmos generativos como co-diseñadores:</h2>
      <br></br>
      <p>
        Con herramientas como <strong>Figma AI</strong>, <strong>Uizard</strong> o <strong>Builder.io</strong>, el diseñador se convierte en colaborador de la IA. Estos sistemas no solo ejecutan tareas, sino que proponen soluciones autónomas:
      </p>
      <br></br>
      <blockquote>
        "El diseño generativo convierte al diseñador en un editor, un seleccionador dentro de un espacio de posibilidades multidimensional generado por la IA."<br />
        — <em>J. Maeda, "Design in Tech Report," 2023</em>
      </blockquote>
      <br></br>
      <p>
        Este cambio exige conocimientos técnicos nuevos: redes neuronales, estadística bayesiana, teoría de grafos y lógica difusa.
      </p>
      <br></br>
      <h2>4. De lo visual a lo matemático: el diseño como topología funcional:</h2>
      <br></br>
      <p>
        Algunos diseñadores están mapeando decisiones visuales a espacios matemáticos, permitiendo tratar productos como <strong>espacios topológicos</strong>. Por ejemplo, el flujo de usuario puede representarse como un grafo dirigido:
      </p>
      <BlockMath math={"G = (V, E), \\quad w : E \\rightarrow \\mathbb{R}^{+}"} />
      <br></br>
      <p>
        Este enfoque permite aplicar algoritmos como Dijkstra o A*, o incluso aprendizaje por refuerzo para optimizar caminos en interfaces personalizadas.
      </p>
    <br></br>
      <h2>5. Implicaciones éticas y estéticas:</h2>
      <br></br>
      <p>
        Esta evolución plantea preguntas críticas: ¿Dónde queda la intuición humana? ¿Cómo validamos la belleza cuando es generada por un modelo estadístico? ¿Qué pasa con la diversidad estética en datasets sesgados?
      </p>
      <br></br>
      <p>
        Como diseñador, me pregunto si la estética algorítmica reemplazará lo artesanal o si estamos entrando en una nueva era donde ambas coexisten.
      </p>
      <br></br>
      <h2>Conclusión</h2>
      <br></br>
      <p>
        El diseño digital del futuro no es solo arte ni solo ingeniería: es la síntesis de múltiples lenguajes —visual, computacional, físico y emocional— mediada por sistemas inteligentes. Diseñar con IA es, en esencia, <strong>programar la creatividad</strong> en tiempo real.
      </p>
      <br></br>
      <h2>Referencias</h2>
      <br></br>
      <ul>
        <li>Ramesh, A., Pavlov, M., Goh, G. et al. (2021). <em>Zero-Shot Text-to-Image Generation</em>. NeurIPS.</li>
        <li>Maeda, J. (2023). <em>Design in Tech Report</em>.</li>
        <li>Tversky, A., Kahneman, D. (1974). <em>Judgment under Uncertainty: Heuristics and Biases</em>.</li>
        <li>Ma, Y., & Belkin, M. (2020). <em>Neural Tangent Kernel: Convergence and Generalization in Neural Networks</em>. ICML.</li>
      </ul>
    </article>
  );
} 