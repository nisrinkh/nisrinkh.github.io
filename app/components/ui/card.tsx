import React from 'react';
import './card.css';

// 1. Definisikan "bentuk" data yang akan diterima card ini
interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  imageSrc?: string;
  link?: string;    
  tags?: string[]; 
}

const ProjectCard = ({ title, description, imageSrc, link, tags }: ProjectCardProps) => {
  return (
    <div className="project-card">
      {imageSrc && (
        <div className="card-image">
          <img src={imageSrc} alt={`Thumbnail project ${title}`} />
        </div>
      )}
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-desc">
        <p>{description}</p>
        </div>
        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            See project &rarr;
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;