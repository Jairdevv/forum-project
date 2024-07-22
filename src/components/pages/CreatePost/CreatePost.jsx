import { useState, useEffect } from "react";
import "./CreatePost.css";
import axios from "axios";

const CreatePost = ({ onCancel }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndPosts = async () => {
      try {
        const [categoriesResponse, postsResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/categories"),
        ]);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoriesAndPosts();
  }, []);

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
            {categories.map((category, index) => (
              <option key={index} value={category.nombre}>
                {category.nombre}
              </option>
            ))}
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
