import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../../common/Chip";
import "./styles.css";
import Icon from "supercons";

const BlogItem = ({
  blog: {
    homeDescription,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <img className="blogItem-cover" src={cover} alt="cover" />
      </Link>
      <center>
        <Chip label={category} />
      </center>
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p className="blogItem-desc">{homeDescription}</p>
      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          <Icon glyph="enter" size={32} />
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
