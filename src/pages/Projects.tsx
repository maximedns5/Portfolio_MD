import { motion } from 'framer-motion';
import SectionLabel from '../components/BlueprintElements/SectionLabel';
import ProjectGroupCard from '../components/ProjectGroupCard/ProjectGroupCard';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';
import { getActiveGroups, standaloneProjects } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './Projects.module.css';

const groups = getActiveGroups();

export default function Projects() {
  useDocumentTitle('Portfolio | Projects', {
    description: 'Overview of project groups and standalone work.',
  });

  return (
    <motion.section
      className="pageShell"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="pageIntro">
        <p className="label">Technical archive</p>
        <h1>Projects</h1>
        <p>
          Work is organized by project group so related studies, builds, and experiments can be
          read as coherent technical families.
        </p>
      </div>

      <SectionLabel label="Project groups" count={groups.length} />
      <div style={{ height: '24px' }} />
      <div className={styles.grid}>
        {groups.map((group, index) => (
          <ProjectGroupCard group={group} index={index} key={group.id} />
        ))}
      </div>

      {standaloneProjects.length > 0 ? (
        <>
          <div style={{ height: '64px' }} />
          <SectionLabel label="Standalone projects" count={standaloneProjects.length} />
          <div style={{ height: '24px' }} />
          <ProjectGrid projects={standaloneProjects} />
        </>
      ) : null}
    </motion.section>
  );
}
