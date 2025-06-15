// src/BlogPostPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 用于页面加载动画

// 如果您的博客内容是 Markdown 格式，您可能需要引入一个 Markdown 解析库
// 例如: import ReactMarkdown from 'react-markdown';
// 并确保已经通过 npm/yarn 安装了它: npm install react-markdown

// 同样，我们假设 App.css 中的样式已全局应用
// import './BlogPostPage.css'; // 如果您有特定于此页面的样式

const BlogPostPage = ({ blogData }) => {
  const { postId } = useParams(); // 从路由参数中获取 postId (例如: /blog/design-thinking 中的 "design-thinking")
  const post = blogData.find(p => p.id === postId); // 在 blogData 中查找对应的文章

  // 如果未找到文章
  if (!post) {
    return (
      <main className="content-section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">404 - 文章未找到</h2>
        <p>抱歉，您要查找的博客文章不存在或已被移动。</p>
        <Link to="/blog" className="cta-button" style={{ marginTop: '20px' }}>返回博客列表</Link>
      </main>
    );
  }

  // 如果找到了文章，则渲染文章内容
  return (
    <motion.main
      className="blog-post-full content-section" // 使用 App.css 中定义的类
      initial={{ opacity: 0, y: 20 }} // 初始状态：透明且略微向下偏移
      animate={{ opacity: 1, y: 0 }}    // 动画到：完全不透明且回到原位
      transition={{ duration: 0.5 }}   // 动画时长
    >
      <article>
        <header className="post-header"> {/* 使用 App.css 中定义的类 */}
          <h1>{post.title}</h1>
          <p className="post-meta"> {/* 使用 App.css 中定义的类 */}
            发布于 <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            {post.author && ` 由 ${post.author}`}
          </p>
          {/* 显示文章标签 */}
          {post.tags && post.tags.length > 0 && (
            <div className="tags" style={{ marginBottom: '20px', marginTop: '10px' }}>
              {post.tags.map(tag => (
                <span key={tag} className="tag" style={{
                    backgroundColor: '#333', // 标签背景色
                    color: '#ffcc00',       // 标签文字颜色 (与您的强调色一致)
                    padding: '4px 10px',   // 内边距
                    borderRadius: '4px',    // 圆角
                    marginRight: '8px',     // 右边距
                    fontSize: '0.85em',     // 字体大小
                    display: 'inline-block',// 使 margin 生效
                    marginBottom: '5px'     // 底部边距，用于多行标签
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* 显示特色图片 (如果存在) */}
        {post.featuredImage && (
          <img
            src={post.featuredImage}
            alt={post.title}
            style={{
              width: '100%',
              maxHeight: '450px', // 您可以调整最大高度
              objectFit: 'cover',  // 保持图片比例并裁剪
              borderRadius: '8px', // 轻微圆角
              marginBottom: '30px' // 与下方内容的间距
            }}
          />
        )}

        {/* 文章正文内容 */}
        <div className="post-content"> {/* 使用 App.css 中定义的类 */}
          {/*
            如果 post.content 是 Markdown 格式:
            <ReactMarkdown children={post.content} />
          */}

          {/*
            如果 post.content 是包含换行符的纯文本，可以这样处理以保留段落:
            (确保您的 blogData.js 中的 content 字段的字符串中的换行是真实的换行符 \n,
            而不是模板字符串中的视觉换行)
          */}
          {typeof post.content === 'string' && post.content.split('\n').map((paragraph, index) => (
            // 过滤掉由多个连续换行符产生的空段落
            paragraph.trim() !== '' && <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to="/blog" className="cta-button">&larr; 返回博客列表</Link>
      </div>
    </motion.main>
  );
};

export default BlogPostPage;