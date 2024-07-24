import { useState, useEffect } from "react";
import "./CreatePost.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = ({ onCancel }) => {
  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(""); // Este estado ahora almacenará el ID de la categoría seleccionada
  const [text, setText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesResponse = await axios.get(
          "http://localhost:5000/api/categories"
        );
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!userToken) {
      navigate("/");
    }
  }, [navigate, userToken]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("No user ID found");
      return;
    }

    try {
      console.log(text);
      const response = await axios.post("http://localhost:5000/api/posts", {
        title,
        category,
        text,
        userId,
      });

      onCancel();
    } catch (error) {}
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
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
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
