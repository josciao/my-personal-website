// src/BlogPage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "./blogData";

function BlogPage() {
  const { blogId } = useParams();
  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="blog-page">
        <h2>找不到该文章</h2>
        <Link to="/">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <Link to="/" className="back-link">← 返回首页</Link>
      <h2>{blog.title}</h2>
      <p className="blog-date">{blog.date}</p>
      <div className="blog-tags">
        {blog.tags.map((tag, index) => (
          <span key={index} className="tag">#{tag}</span>
        ))}
      </div>
      <p className="blog-content">{blog.content}</p>
    </div>
  );
}

export default BlogPage;
