import { useState } from "react";
import "./CreatePost.css";

const CreatePost = ({ onCancel }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ title, category, text });
    onCancel();
  };

  return (
    <div className="main-content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tema">Tema:</label>
          <input
            type="text"
            id="tema"
            placeholder="Dudas sobre front en JS... ¡AYUDA! :("
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoría:</label>
          <select
            id="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected>
              Escoge...
            </option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="texto">Texto:</label>
          <textarea
            id="texto"
            rows="8"
            placeholder="¡Hola a todos! Estoy empezando a trabajar en el desarrollo de frontend..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="buttons">
          <button type="button" className="cancel" onClick={onCancel}>
            Cancelar
          </button>
          <button type="submit" className="submit">
            Subir
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
