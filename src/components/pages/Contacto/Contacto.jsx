import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Contacto.css";
const Contacto = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="contact-card">
          <h2>Contacto del Usuario</h2>
          <div className="contact-info">
            <label htmlFor="nombre">Nombre:</label>
            <span id="nombre">Nombre del Usuario</span>
          </div>
          <div className="contact-info">
            <label htmlFor="email">Email:</label>
            <span id="email">usuario@ejemplo.com</span>
          </div>
          <div className="contact-info">
            <label htmlFor="telefono">Teléfono:</label>
            <span id="telefono">+123 456 7890</span>
          </div>
          <div className="contact-info">
            <label htmlFor="direccion">Dirección:</label>
            <span id="direccion">Calle Ejemplo 123, Ciudad, País</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacto;
