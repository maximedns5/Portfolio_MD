import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getProjectPath } from '../../data/projects';
import type { Project } from '../../types/project';
import ProjectImage from '../ui/ProjectImage';
import Tag from '../ui/Tag';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className={`${styles.card} fadeInUp`}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <Link className={styles.link} to={getProjectPath(project.id)}>
        <div className={styles.imageWrap}>
          <ProjectImage
            alt={project.title}
            className={styles.image}
            fallbackClassName={`${styles.image} ${styles.imageFallback}`}
            loading="lazy"
            src={project.coverImage}
          />
        </div>

        <div className={styles.tags}>
          {project.domains.map((domain) => (
            <Tag key={domain}>{domain}</Tag>
          ))}
        </div>

        <div className={styles.titleRow}>
          <h3 className={styles.title}>{project.title}</h3>
          <span className={styles.year}>{project.year}</span>
        </div>

        <p className={styles.description}>{project.shortDesc}</p>

        <span className={styles.cta}>
          View project <ArrowRight size={14} />
        </span>
      </Link>
    </article>
  );
}
