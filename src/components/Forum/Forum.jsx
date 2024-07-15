import Header from "../Header/Header";
import "./Forum.css";
import Post from "../Post/Post";

const Forum = () => {
  return (
    <>
      <Header />
      <main>
        <div className="forum-container">
          <div className="left-container">
            <div className="menu">
              <button>Nuevo Post</button>
              <button>Más recientes</button>
              <button>Todos los posts</button>
              <button>Respuestas</button>
              <button>Destacados</button>
            </div>
          </div>
          <div className="right-container">
            <div className="search-container">
              <div className="search-bar">
                <input type="text" placeholder="Buscar" />
              </div>
              <div className="filter">
                <select id="lenguajes" name="lenguajes">
                  <option value="">Todos</option>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                </select>
              </div>
            </div>
            <div className="posts">
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
              <Post></Post>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Forum;
