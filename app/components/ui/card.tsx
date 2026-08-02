'use client';
import React, { useState } from 'react';
import './card.css';

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  imageSrc?: string;
  link?: string;    
  tags?: string[]; 
}

const ProjectCard = ({ title, description, imageSrc, link, tags }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
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

        <div className={`card-desc ${isExpanded ? 'expanded' : 'collapsed'}`}>
        <p>{description}</p>
        </div>
        <button 
          className="expand-btn" 
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'See Less' : 'See More'}
        </button>

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