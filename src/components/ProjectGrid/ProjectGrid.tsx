import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import type { Project, ProjectDomain } from '../../types/project';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectGrid.module.css';

type ProjectGridProps = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeDomain, setActiveDomain] = useState<'all' | ProjectDomain>('all');

  const domains = useMemo(
    () => ['all', ...Array.from(new Set(projects.flatMap((project) => project.domains)))],
    [projects],
  );

  const filteredProjects =
    activeDomain === 'all'
      ? projects
      : projects.filter((project) => project.domains.includes(activeDomain));

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        {domains.map((domain) => (
          <button
            key={domain}
            className={`${styles.filter} ${activeDomain === domain ? styles.active : ''}`}
            onClick={() => setActiveDomain(domain as 'all' | ProjectDomain)}
            type="button"
          >
            {domain === 'all' ? 'Tout' : domain}
          </button>
        ))}
      </div>

      <motion.div layout className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 ? (
        <div className="emptyState">
          <p className="label">No projects for this filter</p>
          <p>Add new entries to the data source to populate this view.</p>
        </div>
      ) : null}
    </div>
  );
}
