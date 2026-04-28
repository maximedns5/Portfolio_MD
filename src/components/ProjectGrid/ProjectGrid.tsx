import { useMemo, useState } from 'react';
import type { Project, ProjectDomain } from '../../types/project';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectGrid.module.css';

const DOMAIN_LABELS: Record<string, string> = {
  software: 'Software',
  'machine-learning': 'Machine Learning',
  mechanical: 'Mechanical',
  research: 'Research',
  design: 'Design',
  electronic: 'Electronic',
  other: 'Other',
};

function domainLabel(domain: string): string {
  return DOMAIN_LABELS[domain] ?? domain.charAt(0).toUpperCase() + domain.slice(1);
}

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
            {domain === 'all' ? 'All' : domainLabel(domain)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} index={index} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="emptyState">
          <p className="label">No projects for this filter</p>
          <p>Add new entries to the data source to populate this view.</p>
        </div>
      ) : null}
    </div>
  );
}
