import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import SectionLabel from '../components/BlueprintElements/SectionLabel';
import ProjectGrid from '../components/ProjectGrid/ProjectGrid';
import { getGroupById } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ProjectGroupPage.module.css';

export default function ProjectGroupPage() {
  const { groupId, slug } = useParams();
  const resolvedGroupId = groupId ?? slug;
  const group = resolvedGroupId ? getGroupById(resolvedGroupId) : undefined;

  if (!group) {
    return <Navigate replace to="/projects" />;
  }

  useDocumentTitle(`Portfolio | ${group.title}`, {
    description: group.shortDesc,
  });

  return (
    <motion.section
      className="pageShell"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="pageIntro">
        <p className="label">Project group</p>
        <h1>{group.title}</h1>
        <p>{group.shortDesc}</p>
        <div className="metaRow">
          <span>{group.projects.length} projects</span>
          <span>{group.domains.join(' — ')}</span>
        </div>
      </div>

      <div className={styles.topNav}>
        <Link className={styles.backLink} to="/projects">
          Back to all groups
        </Link>
      </div>

      <SectionLabel label="Projects in group" count={group.projects.length} />
      <div style={{ height: '24px' }} />
      <ProjectGrid projects={group.projects} />
    </motion.section>
  );
}
