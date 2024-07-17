import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <>
      <header className="header">
        <h2 className="logo">
          <Link to="/home">
            Foros<span>DEV</span>
          </Link>
        </h2>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <Link to="/forum">Foro</Link>
            </li>
            <li>
              <Link to="/proposito">Propósito</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <a className="login" onClick={() => setModalVisible(true)}>
          Iniciar Sesión
        </a>
      </header>
      <LoginModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default Header;
