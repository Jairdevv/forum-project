import { useState } from "react";
import "./LoginModal.css";
import SignUpModal from "./SignUpModal";

const LoginModal = ({ isVisible, onClose }) => {
  const [isSignUpVisible, setSignUpVisible] = useState(false);

  if (!isVisible) {
    return null;
  }

  const handleSignUpClick = () => {
    setSignUpVisible(true);
  };

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Inicio de Sesión</h2>
        <form action="" className="modal-form">
          <input type="email" required placeholder="Correo" />
          <input type="password" required placeholder="Contraseña" />
          <button type="submit">Iniciar sesión</button>
        </form>
        <p>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </p>
        <button className="create-count" onClick={handleSignUpClick}>
          Crear nueva cuenta
        </button>
      </div>
      {isSignUpVisible && (
        <SignUpModal
          isVisible={isSignUpVisible}
          onClose={() => setSignUpVisible(false)}
        />
      )}
    </div>
  );
};

export default LoginModal;
