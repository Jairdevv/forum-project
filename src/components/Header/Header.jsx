import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>ForosDEV</h1>
      <nav className="nav">
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Foro</a>
          </li>
          <li>
            <a href="">Propósito</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
      </nav>
      <a className="login" href="#">
        Iniciar Sesión
      </a>
    </header>
  );
};

export default Header;
