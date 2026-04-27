import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ProjectGroup } from '../../types/project';
import ProjectImage from '../ui/ProjectImage';
import Tag from '../ui/Tag';
import styles from './ProjectGroupCard.module.css';

type ProjectGroupCardProps = {
  group: ProjectGroup;
  index: number;
};

export default function ProjectGroupCard({ group, index }: ProjectGroupCardProps) {
  return (
    <m.article
      className={styles.card}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
      layout
    >
      <Link className={styles.link} to={`/projects/${group.id}`}>
        <div className={styles.imageWrap}>
          <ProjectImage
            alt={group.title}
            className={styles.image}
            fallbackClassName={`${styles.image} ${styles.imageFallback}`}
            src={group.coverImage}
          />
        </div>
        <div className={styles.tags}>
          {group.domains.map((domain) => (
            <Tag key={domain}>{domain}</Tag>
          ))}
        </div>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{group.title}</h3>
          <span className={styles.count}>{group.projects.length} projects</span>
        </div>
        <p className={styles.description}>{group.shortDesc}</p>
        <div className={styles.footer}>
          <div className={styles.groupTags}>
            {group.tags.slice(0, 4).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <span className={styles.cta}>
            Open group <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </m.article>
  );
}
