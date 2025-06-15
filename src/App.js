// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { motion } from "framer-motion";

// 页面组件
import HomePage from "./HomePage";
import ProjectPage from "./ProjectPage";
import BlogListPage from "./BlogListPage";
import BlogPostPage from "./BlogPostPage";

// 数据
import portfolioData from "./portfolioData";
import blogData from "./blogData";

import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="app">
        <header className="navbar">
          {/* --- 修改开始 --- */}
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <h1>
              <span className="brand-line brand-chinese">曹骥</span>
              <span className="brand-line brand-english">Cao Ji</span>
            </h1>
          </Link>
          {/* --- 修改结束 --- */}
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <ul>
              <li><NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : "" } end>主页</NavLink></li>
              <li><NavLink to="/portfolio" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : "" }>作品集</NavLink></li>
              <li><NavLink to="/blog" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : "" }>博客</NavLink></li>
              <li><NavLink to="/vlog" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : "" }>视频</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? "active-link" : "" }>联系</NavLink></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectPage portfolioData={portfolioData} />} />
          <Route path="/portfolio" element={
            <main className="content-section portfolio">
              <h2 className="section-title">所有作品</h2>
              <p style={{textAlign: 'center', marginBottom: '30px'}}>这里展示我的所有设计项目和作品。</p>
              <div className="portfolio-grid">
                {portfolioData.map((item) => (
                  <motion.div
                    key={item.id}
                    className="portfolio-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={`/project/${item.id}`}>
                      <img src={item.image} alt={item.title} />
                      <div className="portfolio-item-content">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </main>
          } />
          <Route path="/blog" element={<BlogListPage blogData={blogData} />} />
          <Route path="/blog/:postId" element={<BlogPostPage blogData={blogData} />} />
          <Route path="/vlog" element={
            <main className="content-section">
              <h2 className="section-title">视频频道</h2>
              <p style={{textAlign: 'center'}}>视频内容即将上线，敬请期待！</p>
            </main>
          }/>
          <Route path="/contact" element={
            <main className="content-section">
              <h2 className="section-title">联系我</h2>
              <p style={{textAlign: 'center'}}>您可以通过以下方式与我取得联系： j.cao_work@outlook.com</p>
            </main>
          }/>
          <Route path="*" element={
            <main className="content-section" style={{ textAlign: 'center' }}>
              <h2 className="section-title">404 - 页面未找到</h2>
              <p>抱歉，您访问的页面不存在。</p>
              <Link to="/" className="cta-button" style={{marginTop: '20px'}}>返回首页</Link>
            </main>
          }/>
        </Routes>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} 曹骥 Cao Ji. 保留所有权利。</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;