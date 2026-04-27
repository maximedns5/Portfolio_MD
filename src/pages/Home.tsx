import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CrosshairMark from '../components/BlueprintElements/CrosshairMark';
import DimensionLine from '../components/BlueprintElements/DimensionLine';
import GridBackground from '../components/BlueprintElements/GridBackground';
import SectionLabel from '../components/BlueprintElements/SectionLabel';
import ProjectGroupCard from '../components/ProjectGroupCard/ProjectGroupCard';
import { getFeaturedGroups } from '../data/projects';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './Home.module.css';

const featuredGroups = getFeaturedGroups().slice(0, 4);

export default function Home() {
  useDocumentTitle('Portfolio | Home', {
    description: 'Blueprint-style engineering portfolio documenting grouped projects with clarity and precision.',
  });

  return (
    <div className={`${styles.home} fadeInUp`}>
      <section className={styles.hero}>
        <GridBackground />
        <CrosshairMark className={styles.cornerTopLeft} />
        <CrosshairMark className={styles.cornerTopRight} />
        <CrosshairMark className={styles.cornerBottomLeft} />
        <CrosshairMark className={styles.cornerBottomRight} />
        <DimensionLine className={styles.dimensionTop} label="Portfolio 2026" />
        <DimensionLine className={styles.dimensionSide} direction="vertical" label="Blueprint" />

        <div className={styles.heroContent}>
          <p className="label">Portfolio — 2026</p>
          <h1>Maxime Denis</h1>
          <p className={styles.lead}>
            Engineering and personal projects gathered in one place, from mechanical systems to software and applied research.
          </p>
        </div>

          <div className={`${styles.scrollCue} bounceCue`}>
          <ArrowDown size={16} />
        </div>
      </section>

      <section className="pageShell">
        <div className={styles.section}>
          <SectionLabel label="Selected groups" count={featuredGroups.length} />
          {featuredGroups.length > 0 ? (
            <div className={styles.featuredGrid}>
              {featuredGroups.map((group, index) => (
                <ProjectGroupCard group={group} index={index} key={group.id} />
              ))}
            </div>
          ) : (
            <div className="emptyState">
              <p className="label">No featured group yet</p>
              <p>Add `featured: true` to a group in the data source to populate this section.</p>
            </div>
          )}
          <Link className={styles.inlineLink} to="/projects">
            View all project groups <ArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.section}>
          <SectionLabel label="About" />
          <div className={`${styles.aboutTeaser} contentSurface`}>
            <div>
              <p className="label">Profile</p>
              <h3 className={styles.aboutTitle}>A technical, documented, and understated approach.</h3>
              <p>
                This structure is ready for real project cases, education, and contact details
                without leaving the blueprint visual language defined in the spec.
              </p>
            </div>
            <Link className={styles.inlineLink} to="/about">
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
