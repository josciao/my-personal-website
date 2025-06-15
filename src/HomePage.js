// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import portfolioData from './portfolioData'; // 您的作品集数据
import blogData from './blogData';         // 您的博客数据

// 引入图标 (用于联系方式部分)
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiXiaohongshu } from 'react-icons/si';

// 动画变体 (您可以根据需要调整或扩展)
const scrollFadeInUpVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const scrollFadeInLeftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 } // 动画到原位
};

const HomePage = () => {
  // 博客预览逻辑
  const numberOfLatestPostsToShow = 4;
  const latestPosts = blogData
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, numberOfLatestPostsToShow);

  // 联系方式数据 (请务必用您的真实信息替换)
  const contactDetails = {
    email: "j.cao_work@outlook.com", // 您的邮箱
    xiaohongshuId: "Django",         // 您的小红书ID
    xiaohongshuURL: "https://www.xiaohongshu.com/user/profile/5f69fc28000000000100329e", // 您的小红书链接
    douyinId: "Joica",               // 您的抖音ID
    douyinURL: "https://v.douyin.com/-rLPIEWFk3A/", // 您的抖音链接 (请确保这是正确的主页链接)
    instagramUsername: "thatcaoji",  // 您的Instagram用户名
    instagramURL: "https://www.instagram.com/thatcaoji/" // 您的Instagram链接
  };

  // 英雄区文本内容 (请替换为您自己的)
  const heroTexts = {
    mainTitleLine1: "曹 骥", // 例如您的名字，或者 "Creative"
    mainTitleLine2: "Ji Cao",       // 例如您的职业，或者 "Developer" (如果为空，则只有一行大标题)
    subtitle: "Designer | Creator | Mover",
    navName: "Ji Cao",
    introParagraph1: "我是一名在建筑行业拥有13年经验的建筑设计师。我的热情远不止于建筑——它延伸到UX/UI设计、创意表达、歌曲创作、视频制作、写作和木工。",
    introParagraph2: "I’m a designer with 13 years of experience in architecture, driven by a passion for creativity in all forms. Beyond buildings, my work spans UX/UI design, songwriting, filmmaking, writing, and woodworking—design is my way of thinking and expressing.",
    introParagraph3: "我也对体育运动充满热情，包括篮球、徒步和骑行。这个网站远不仅是一个作品集；它是我个人的一面镜子。我重视连接、对话与合作。",
    introParagraph4: "I’m also passionate about sports—especially basketball, hiking, and cycling. This site is more than a portfolio; it’s a reflection of who I am, shaped by a love for life, creativity, and self-expression. I value connection, dialogue, and collaboration."
  };

  return (
    <main className="homepage-main">
      <motion.section
        className="hero-section-peterarendt"
        // ... (initial, animate, transition 属性保持不变)
      >
        <div className="hero-content-wrapper">
          <motion.h1 
            className="hero-title-main text-hover-zoom"
            // ... (属性保持不变)
          >
            {heroTexts.mainTitleLine1}
            {heroTexts.mainTitleLine2 && <br />}
            {heroTexts.mainTitleLine2}
          </motion.h1>
          
          {/* 副标题不再直接放在这里，将移到下方右栏的开头 */}
          {/* <motion.p 
            className="hero-subtitle text-hover-zoom"
            // ...
          >
            {heroTexts.subtitle}
          </motion.p> 
          */}

          <motion.div 
            className="hero-bottom-layout"
            // ... (属性保持不变)
          >
            <div className="hero-left-column">
              <div className="hero-nav-name text-hover-zoom">{heroTexts.navName}</div>
              <div className="hero-nav-line"></div>
              <nav className="hero-nav-links">
                <ul>
                  <li><Link to="/portfolio" className="text-hover-zoom">作品 (Work)</Link></li>
                  <li><Link to="/about" className="text-hover-zoom">关于 (About)</Link></li>
                  <li><Link to="/contact" className="text-hover-zoom">联系 (Contact)</Link></li>
                </ul>
              </nav>
            </div>
            
            {/* 右栏现在将包含副标题和介绍文字 */}
            <div className="hero-right-column"> 
              {/* 将副标题移到这里 */}
              <motion.p 
                className="hero-subtitle text-hover-zoom" // 仍然使用这个类名
                initial={{ opacity:0, y: 20 }}
                animate={{ opacity:1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }} // 这个动画延迟可能需要调整
              >
                {heroTexts.subtitle} {/* "Designer | Creator | Mover" */}
              </motion.p>

              <div className="hero-intro-text">
                <p className="text-hover-zoom">{heroTexts.introParagraph1}</p>
                <p className="text-hover-zoom">{heroTexts.introParagraph2}</p>
                <p className="text-hover-zoom">{heroTexts.introParagraph3}</p>
                <p className="text-hover-zoom">{heroTexts.introParagraph4}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* --- 阶段三：新的作品展示区域 --- */}
      <section id="work-featured" className="work-section-peterarendt content-section">
        {portfolioData.map((project, index) => (
          <motion.div
            className="featured-project-item"
            key={project.id}
            variants={scrollFadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="project-item-section-indicator">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span className="indicator-line-short"></span>
              <span>Work</span>
            </div>
            <div className="project-item-layout">
              <motion.div 
                className="project-item-image"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1, transition: {duration: 0.5, delay: 0.2} }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link to={project.link}>
                  <img src={project.image} alt={project.title} />
                </Link>
              </motion.div>
              <div className="project-item-details">
                <motion.h3
                  className="section-title-main project-title text-hover-zoom"
                  variants={scrollFadeInLeftVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                {project.subtitle && (
                  <motion.p
                    className="item-subtitle project-subtitle text-hover-zoom"
                    variants={scrollFadeInLeftVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                  >
                    {project.subtitle}
                  </motion.p>
                )}
                <motion.div
                    initial={{ opacity:0 }}
                    whileInView={{ opacity:1, transition: { duration:0.5, delay:0.6 } }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                  <Link to={project.link} className="view-project-link text-hover-zoom">
                    VIEW PROJECT
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- 关于我区域 (内容来自您 response #53 的 HomePage.js) --- */}
      <section id="about" className="content-section">
        <motion.h2 className="section-title" variants={scrollFadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>ABOUT | 关于</motion.h2>
        <p>This is where all sides of me meet.</p>
        <p>This space holds my passing thoughts — often unfinished, sometimes unreasonable, always honest. </p>
        <p>Here, expression matters more than perfection. I value raw sincerity over polished form, and genuine ideas over flawless design. If anything here resonates with you, that alone is enough. I hope you enjoy what you see..</p>
      </section>

      {/* --- 旧的作品集预览区域 (建议注释掉或删除，因为已有新的 work-featured 区块) --- */}
      {/*
      <section id="portfolio-preview" className="portfolio content-section">
        <h2 className="section-title">作品</h2>
        <div className="portfolio-grid"> ... </div>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/portfolio" className="cta-button">查看所有作品</Link>
        </div>
      </section>
      */}

      {/* --- 博客预览区域 --- */}
      <section id="blog-preview" className="blog-section content-section">
        <motion.h2 className="section-title" variants={scrollFadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>BLOG | 博客</motion.h2>
        {latestPosts && latestPosts.length > 0 ? (
          <div className="blog-grid">
            {latestPosts.map(post => (
              <article key={post.id} className="blog-post-summary">
                {post.featuredImage && (
                  <Link to={`/blog/${post.id}`}>
                    <img src={post.featuredImage} alt={post.title} />
                  </Link>
                )}
                <div className="blog-post-summary-content">
                  <h3><Link to={`/blog/${post.id}`}>{post.title}</Link></h3>
                  <p className="post-meta" style={{ fontSize: '0.85em', color: '#aaa', marginBottom: '10px' }}>
                    发布于 <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    {post.author && ` 由 ${post.author}`}
                  </p>
                  <p>{post.summary}</p>
                  <Link to={`/blog/${post.id}`} className="read-more-link">阅读更多 →</Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p>目前还没有博客文章可供预览。</p>
        )}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/blog" className="cta-button">阅读所有博客</Link>
        </div>
      </section>

      {/* --- 视频预览区域 --- */}
      <section id="vlog-preview" className="video-showcase-section content-section">
        <motion.h2 className="section-title" variants={scrollFadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>VIDEO | 视频</motion.h2>
        <p>这里将展示最新的视频片段...</p>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/vlog" className="cta-button">观看所有视频</Link>
        </div>
      </section>

      {/* --- 联系方式区域 --- */}
      <section id="contact-preview" className="contact-section content-section">
        <motion.h2 className="section-title" variants={scrollFadeInUpVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          CONTACT | 联系
        </motion.h2>
        <div className="contact-list">
          <div className="contact-item">
            <HiOutlineMail className="contact-icon email-icon" />
            <a href={`mailto:${contactDetails.email}`} className="contact-text">邮箱: {contactDetails.email}</a>
          </div>
          <div className="contact-item">
            <SiXiaohongshu className="contact-icon xiaohongshu-icon" />
            <a href={contactDetails.xiaohongshuURL} target="_blank" rel="noopener noreferrer" className="contact-text">小红书: {contactDetails.xiaohongshuId}</a>
          </div>
          <div className="contact-item">
            <FaTiktok className="contact-icon douyin-icon" />
            <a href={contactDetails.douyinURL} target="_blank" rel="noopener noreferrer" className="contact-text">抖音: {contactDetails.douyinId}</a>
          </div>
          <div className="contact-item">
            <FaInstagram className="contact-icon instagram-icon" />
            <a href={contactDetails.instagramURL} target="_blank" rel="noopener noreferrer" className="contact-text">Instagram: @{contactDetails.instagramUsername}</a>
          </div>
        </div>
        <p style={{textAlign: 'center', marginTop: '30px'}}> </p>
      </section>
    </main>
  );
};

export default HomePage;