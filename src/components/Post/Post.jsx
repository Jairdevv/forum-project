import "./Post.css";
import image from "../../assets/code-bg.jfif";
import { Link } from "react-router-dom";

const Post = ({ category, title, text, author, date, id }) => {
  return (
    <>
      <div className="post-container">
        <div className="post-content">
          <div className="post-category">
            <h4>{category}</h4>
          </div>
          <div className="post-title">
            <h2>{title}</h2>
          </div>
          <div className="post-text">
            <p>{text}</p>
          </div>
          <div className="post-author-date">
            <p>
              <em>{author}</em> - {date}
            </p>
          </div>
        </div>
        <div className="post-image">
          <Link to={`/posts/${id}`}>
            <img src={image} alt="imagen" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Post;
