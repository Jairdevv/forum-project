import { useState } from "react";
import axios from "axios";
import "./LoginModal.css";
import SignUpModal from "./SignUpModal";

const LoginModal = ({ isVisible, onClose }) => {
  const [isSignUpVisible, setSignUpVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  if (!isVisible) {
    return null;
  }

  const handleSignUpClick = () => {
    setSignUpVisible(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      setSuccess(response.data.message);
      setError("");
      onClose();
    } catch (err) {
      setError(
        err.response ? err.response.data.message : "Inicio de sesión fallido"
      );
    }
  };

  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Inicio de Sesión</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Correo"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Contraseña"
          />
          <button type="submit">Iniciar sesión</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
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
