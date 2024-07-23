import { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal/LoginModal";

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");

  const handleProfileClick = () => {
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <h2 className="logo">
          <Link to="/">
            Foros<span>DEV</span>
          </Link>
        </h2>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/forum">Foro</Link>
            </li>
            <li>
              <Link to="/proposito">Propósito</Link>
            </li>
            {userToken && (
              <li>
                <Link to="/contacto">Mostrar Perfil</Link>{" "}
                {/* Cambiado según requisito */}
              </li>
            )}
          </ul>
        </nav>
        {userToken ? (
          <a className="login" onClick={handleProfileClick}>
            Cerrar Sesión
          </a>
        ) : (
          <a className="login" onClick={() => setModalVisible(true)}>
            Iniciar Sesión
          </a>
        )}
      </header>
      <LoginModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default Header;
