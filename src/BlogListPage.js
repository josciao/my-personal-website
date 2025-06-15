// src/BlogListPage.js
import React from 'react';
import { Link } from 'react-router-dom';
// 我们假设 App.css 中的样式已经通过 App.js 全局应用，
// 或者您可以在此组件的文件夹中创建特定的 BlogListPage.css 文件并导入。
// import './BlogListPage.css'; // 如果您有特定于此页面的样式

const BlogListPage = ({ blogData }) => {
  // 检查 blogData 是否有效且不为空
  if (!blogData || blogData.length === 0) {
    return (
      <main className="content-section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">博客文章</h2>
        <p>目前还没有博客文章。</p>
        <Link to="/" className="cta-button" style={{ marginTop: '20px' }}>返回首页</Link>
      </main>
    );
  }

  return (
    <main className="blog-section content-section"> {/* 使用 App.css 中定义的类 */}
      <h2 className="section-title">博客文章</h2>
      <div className="blog-grid"> {/* 使用 App.css 中定义的类 */}
        {blogData.map(post => (
          <article key={post.id} className="blog-post-summary"> {/* 使用 App.css 中定义的类 */}
            {/* 特色图片，点击图片链接到文章详情页 */}
            {post.featuredImage && (
              <Link to={`/blog/${post.id}`}>
                <img src={post.featuredImage} alt={post.title} />
              </Link>
            )}
            <div className="blog-post-summary-content"> {/* 使用 App.css 中定义的类 */}
              {/* 文章标题，链接到文章详情页 */}
              <h3>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              {/* 文章元数据：日期和作者 */}
              <p className="post-meta" style={{ fontSize: '0.85em', color: '#aaa', marginBottom: '10px' }}>
                发布于 <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                {post.author && ` 由 ${post.author}`}
              </p>
              {/* 文章摘要 */}
              <p>{post.summary}</p>
              {/* “阅读更多”链接 */}
              <Link to={`/blog/${post.id}`} className="read-more-link"> {/* 使用 App.css 中定义的类 */}
                阅读更多 &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default BlogListPage;