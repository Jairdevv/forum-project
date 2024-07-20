import { useState, useEffect } from "react";
import Header from "../../Header/Header";
import "./Forum.css";
import Post from "../../Post/Post";
import Footer from "../../Footer/Footer";
import postsData from "./testData.json";
import CreatePost from "../CreatePost/CreatePost";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("posts"); // Estado para controlar la vista

  useEffect(() => {
    setPosts(postsData);
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    if (
      selectedCategory &&
      post.category.toLowerCase() !== selectedCategory.toLowerCase()
    ) {
      return false;
    }
    const searchTermLower = searchTerm.toLowerCase();
    return (
      post.title.toLowerCase().includes(searchTermLower) ||
      post.text.toLowerCase().includes(searchTermLower)
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
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                    </select>
                  </div>
                </div>
                <div className="posts">
                  {filteredPosts.map((post, index) => (
                    <Post
                      key={index}
                      category={post.category}
                      title={post.title}
                      text={post.text}
                      author={post.author}
                      date={post.date}
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
