import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="grupo1">
          <div className="box">
            <h2>Sobre Nosotros</h2>
            <p>
              ¡Bienvenidos a Foros Dev! Somos una comunidad vibrante y
              apasionada de desarrolladores de todos los niveles y
              especialidades. Nuestra misión es ser el punto de encuentro
              preferido para compartir conocimientos, resolver problemas y
              avanzar en el campo del desarrollo de software. En Foros Dev,
              encontrarás un espacio inclusivo donde tanto principiantes como
              expertos pueden discutir una amplia variedad de temas, desde las
              últimas tendencias en desarrollo web y móvil, hasta inteligencia
              artificial y desarrollo de videojuegos.
            </p>
            <p>
              Únete a nosotros y forma parte de una comunidad dinámica y
              solidaria. En Foros Dev, creemos que la colaboración es la clave
              del éxito, y ofrecemos foros de discusión, tutoriales, recursos,
              eventos, y programas de mentoría para ayudarte a mejorar tus
              habilidades y conectar con otros desarrolladores. Regístrate hoy y
              comienza a explorar, aprender y colaborar con otros apasionados
              del desarrollo de software. ¡Esperamos verte pronto en los foros!
            </p>
          </div>
        </div>
        <div className="grupo2">
          <small>
            &copy; 2024 <b>ForosDEV</b> - Todos los Derechos Reservados.
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
