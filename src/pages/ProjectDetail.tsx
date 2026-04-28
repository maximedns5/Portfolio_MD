import { ArrowLeft, ArrowRight, ExternalLink, FileText, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Link, Navigate, useParams } from 'react-router-dom';
import ImageGallery from '../components/ui/ImageGallery';
import Button from '../components/ui/Button';
import ProjectImage from '../components/ui/ProjectImage';
import Tag from '../components/ui/Tag';
import { getAllProjects, getProjectInGroup, getProjectLocation, getProjectPath } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ProjectDetail.module.css';

const linkIcons = {
  github: Github,
  pdf: FileText,
  demo: ExternalLink,
  external: ExternalLink,
};

export default function ProjectDetail() {
  const { groupId, projectId, slug } = useParams();
  const standaloneId = slug ?? (groupId && !projectId ? groupId : undefined);
  const resolvedProject = groupId && projectId ? getProjectInGroup(groupId, projectId) : undefined;
  const project = resolvedProject ?? (standaloneId ? getProjectLocation(standaloneId)?.project : undefined);

  if (!project) {
    return <Navigate replace to="/projects" />;
  }

  const allProjects = getAllProjects();
  const projectIndex = allProjects.findIndex((entry) => entry.id === project.id);
  const previousProject = projectIndex > 0 ? allProjects[projectIndex - 1] : undefined;
  const nextProject = projectIndex < allProjects.length - 1 ? allProjects[projectIndex + 1] : undefined;
  const showProprietaryNotice = project.id === 'hydrogen-transport' || project.id === 'wellbe';
  const showLiveDemoSoon = project.id === 'building-thermal' && (!project.links || project.links.length === 0);

  useDocumentTitle(`Portfolio | ${project.title}`, {
    description: project.shortDesc,
  });

  return (
    <article className="pageShell fadeInUp">
      <header className={styles.header}>
        <div className={styles.heading}>
          <p className="label">Ref. {String(projectIndex + 1).padStart(3, '0')}</p>
          <div className={styles.titleRow}>
            <h1>{project.title}</h1>
            {project.status === 'in-progress' ? <span className={styles.statusBadge}>In progress</span> : null}
          </div>
          {project.subtitle ? <p className={styles.subtitle}>{project.subtitle}</p> : null}
          <div className="metaRow">
            <span>{project.domains.join(' — ')}</span>
            <span>{project.year}</span>
            {project.duration ? <span>{project.duration}</span> : null}
            {project.context ? <span>{project.context}</span> : null}
          </div>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        {project.links?.length ? (
          <div className={styles.linkStack}>
            {project.links.map((link) => {
              const Icon = linkIcons[link.type];
              return (
                <Button
                  key={`${link.label}-${link.url}`}
                  href={link.url}
                  rel="noreferrer"
                  target="_blank"
                  accent={link.type === 'demo'}
                >
                  <Icon size={14} />
                  {link.label}
                </Button>
              );
            })}
          </div>
        ) : showLiveDemoSoon ? (
          <div className={styles.linkStack}>
            <span className={styles.comingSoon}>Live demo coming soon</span>
          </div>
        ) : null}
      </header>

      <figure className={styles.coverFigure}>
        <ProjectImage
          alt={project.title}
          className={styles.coverImage}
          fallbackClassName={`${styles.coverImage} ${styles.coverFallback}`}
          loading="eager"
          src={project.coverImage}
        />
        <figcaption className={styles.caption}>Cover view — {project.title}</figcaption>
      </figure>

      <div className={styles.body}>
        {showProprietaryNotice ? (
          <div className={styles.proprietaryNotice}>
            Proprietary scope notice: this page intentionally presents a high-level overview only.
          </div>
        ) : null}
        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <div className={styles.markdownSection}>
                <div className={styles.markdownDivider} />
                <h2 className={styles.markdownHeading}>{children}</h2>
              </div>
            ),
            li: ({ children }) => <li className={styles.listItem}>{children}</li>,
            code: ({ children }) => <code className={styles.inlineCode}>{children}</code>,
          }}
        >
          {project.fullDesc}
        </ReactMarkdown>
      </div>

      {project.images?.length ? (
        <section className={styles.gallerySection}>
          <p className="label">Technical gallery</p>
          <ImageGallery images={project.images} />
        </section>
      ) : null}

      <nav className={styles.bottomNav}>
        {previousProject ? (
          <Link className={styles.projectNavLink} to={getProjectPath(previousProject.id)}>
            <ArrowLeft size={14} />
            Previous project
          </Link>
        ) : (
          <span />
        )}
        {nextProject ? (
          <Link className={styles.projectNavLink} to={getProjectPath(nextProject.id)}>
            Next project
            <ArrowRight size={14} />
          </Link>
        ) : null}
      </nav>
    </article>
  );
}
