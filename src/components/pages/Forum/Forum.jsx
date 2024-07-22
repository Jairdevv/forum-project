import { useState, useEffect } from "react";
import Header from "../../Header/Header";
import "./Forum.css";
import Post from "../../Post/Post";
import Footer from "../../Footer/Footer";
import CreatePost from "../CreatePost/CreatePost";
import axios from "axios";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("posts");

  useEffect(() => {
    const fetchCategoriesAndPosts = async () => {
      try {
        const [categoriesResponse, postsResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/categories"),
          axios.get("http://localhost:5000/api/posts"),
        ]);
        setCategories(categoriesResponse.data);
        setPosts(postsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategoriesAndPosts();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory !== "" && post.categoria_nombre !== selectedCategory) {
      return false;
    }
    const searchTermLower = searchTerm.toLowerCase();
    return (
      post.titulo.toLowerCase().includes(searchTermLower) ||
      post.contenido.toLowerCase().includes(searchTermLower)
    );
  });

  return (
    <>
      <Header />
      <main>
        <div className="forum-container">
          <div className="left-container">
            <div className="menu">
              <button onClick={() => setView("createPost")}>Nuevo Post</button>
              <button onClick={() => setView("posts")}>Más recientes</button>
              <button onClick={() => setView("posts")}>Todos los posts</button>
              <button onClick={() => setView("posts")}>Respuestas</button>
              <button onClick={() => setView("posts")}>Destacados</button>
            </div>
          </div>
          <div className="right-container">
            {view === "createPost" ? (
              <CreatePost onCancel={() => setView("posts")} />
            ) : (
              <>
                <div className="search-container">
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="Buscar"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                  <div className="filter">
                    <select
                      id="lenguajes"
                      name="lenguajes"
                      onChange={handleCategoryChange}
                      value={selectedCategory}
                    >
                      <option value="">Todos</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category.nombre}>
                          {category.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="posts">
                  {filteredPosts.map((post) => (
                    <Post
                      key={post.id}
                      category={post.categoria_nombre}
                      title={post.titulo}
                      text={post.contenido}
                      author={post.usuario_nombre}
                      date={new Date(post.fecha_creacion).toLocaleDateString(
                        "es-ES",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Forum;
