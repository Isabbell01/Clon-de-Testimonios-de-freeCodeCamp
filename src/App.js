import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp </h1>
        <Testimonio
          nombre="Lizbeth Álvarez"
          pais="México"
          imagen="eli"
          cargo="Ingeniera de software"
          texto="En lo personal siempre he tenido problemas para aprender JavaScript, He tomado muchos cursos, pero el curso que ofrensen de freeCodeCamp fue el que se quedó. Estudiar este curso me dio habilidades y la confianza que necesitava para conseguir el trabajo de mis sueños."
        />
        <Testimonio
          nombre="Alvaro Medina"
          pais="México"
          imagen="medina"
          cargo="Ingeniero de software"
          texto="Da miedo cambiar de carrera. Solo gané la confianza de que podia programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de 6 sifras como ingeniero de software, freeCode cambió mi vida."
        />

        <Testimonio
          nombre="Abraham Pérez"
          pais="Alemania"
          imagen="abraham"
          cargo="Ingeniero de software"
          texto="freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante totala un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo en desarrollardor en una empresa increible."
        />
      </div>
    </div>
  );
}

export default App;
