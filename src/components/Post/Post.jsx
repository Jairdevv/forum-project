import Header from "../Header/Header";
import "./Post.css";
import image from "../../assets/code-bg.jfif";

const Post = () => {
  return (
    <>
      <div className="post-container">
        <div className="post-content">
          <div className="post-category">
            <h4>JavaScript</h4>
          </div>
          <div className="post-title">
            <h2>Hola hola holaaa</h2>
          </div>
          <div className="post-text">
            <p>
              A lado de tu casa venden pollo. Al frente lo cortan y más atrás lo
              crían A lado de tu casa venden pollo. Al frente lo cortan y más
              atrás lo crían A lado de tu casa venden pollo. Al frente lo cortan
              y más atrás lo crían A lado de tu casa venden pollo. Al frente lo
              cortan y más atrás lo crían A lado de tu casa venden pollo. Al
              frente lo cortan y más atrás lo crían
            </p>
          </div>
          <div className="post-author-date">
            <p>
              <em>Xavier</em> - Feb 31, 2024
            </p>
          </div>
        </div>
        <div className="post-image">
          <img src={image} alt="imagen" />
        </div>
      </div>
    </>
  );
};

export default Post;
