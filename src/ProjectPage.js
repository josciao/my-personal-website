// src/ProjectPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectPage = ({ portfolioData }) => {
  const { projectId } = useParams();
  const project = portfolioData.find(p => p.id === projectId);

  if (!project) {
    return (
      <main className="content-section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">404 - 项目未找到</h2>
        <p>抱歉，您访问的项目不存在。</p>
        <Link to="/portfolio" className="cta-button" style={{marginTop: '20px'}}>返回作品集</Link>
      </main>
    );
  }

  // 决定使用哪个描述：优先用 detailDescription，如果没有，则用 description 作为备用
  const descriptionToDisplay = project.detailDescription || project.description;

  return (
    <motion.main 
      className="project-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 文字描述区域 */}
      <section className="project-text-section">
        <h1 className="project-detail-title">{project.title}</h1>
        {project.subtitle && <p className="project-detail-subtitle">{project.subtitle}</p>}
        
        {descriptionToDisplay && descriptionToDisplay.split('\n').map((paragraph, index) => (
          paragraph.trim() !== '' && <p key={index}>{paragraph}</p>
        ))}
      </section>

      {/* 图片展示区域 */}
      <section className="project-image-gallery">
        {project.detailImages && project.detailImages.map((imageSrc, index) => (
          // motion.div 现在是直接的网格项
          <motion.div 
            key={index}
            className="gallery-image-item" // 使用一个简单的新类名
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={imageSrc} alt={`${project.title} - ${index + 1}`} />
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
};

export default ProjectPage;
