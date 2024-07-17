import Header from "../Header/Header";
import "./Proposito.css";
import image from "../../assets/developers.jfif";
import Footer from "../Footer/Footer";

const Proposito = () => {
  return (
    <>
      <Header />
      <main>
        <div className="purpose-container">
          <h1 className="purpose-title">Nuestro Propósito</h1>

          <p className="purpose-text">
            En este foro, nuestra misión es crear un espacio de colaboración y
            aprendizaje para desarrolladores web de todos los niveles. Creemos
            en el poder de la comunidad para impulsar el crecimiento y la
            innovación en el mundo del desarrollo web.
          </p>

          <div className="objetives">
            <ul className="objetives-container">
              <li>
                <h2>Compartir</h2>
                Fomentar el intercambio de conocimientos y experiencias entre
                desarrolladores.
              </li>
              <li>
                <h2>Respeto</h2>
                Proporcionar un entorno seguro y respetuoso para hacer
                preguntas, compartir soluciones y debatir ideas.
              </li>
              <li>
                <h2>Recursos</h2>
                Ofrecer recursos y herramientas útiles para mejorar las
                habilidades de desarrollo web.
              </li>
              <li>
                <h2>Comunidad</h2>
                Construir una comunidad sólida y activa de desarrolladores
                apasionados por la web.
              </li>
            </ul>
            <div className="objetives-image-container">
              <img src={image} alt="Desarrolladores" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Proposito;
