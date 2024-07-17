import "./LoginModal.css";

const LoginModal = ({ isVisible, onClose }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="modal-container" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Inicio de Sesión</h2>
        <form action="" className="modal-form">
          <input type="email" name="" id="" required placeholder="Correo" />
          <input type="password" required placeholder="Contraseña" />
          <label>
            <input type="checkbox" />
            Recordar usuario
          </label>
          <button type="submit">Iniciar sesión</button>
        </form>
        <p>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </p>
        <button className="create-count">Crear nueva cuenta</button>
      </div>
    </div>
  );
};

export default LoginModal;
