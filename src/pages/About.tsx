import Button from '../components/ui/Button';
import SectionLabel from '../components/BlueprintElements/SectionLabel';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './About.module.css';

const education = [
  {
    period: 'Aug. 2025 – Present',
    degree: 'Master of Engineering in Mechanical Engineering',
    institution: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    note: 'In progress',
    noteVariant: 'badge' as const,
  },
  {
    period: 'Sept. 2023 – June 2025',
    degree: 'B.Sc. in Mechanical & Industrial Engineering',
    institution: 'Arts et Métiers ParisTech',
    location: 'Paris, France',
  },
  {
    period: 'Sept. 2021 – June 2023',
    degree: 'Classes Préparatoires aux Grandes Écoles — PTSI / PT*',
    institution: 'Lycée Raspail',
    location: 'Paris 14ème, France',
    note:
      'Intensive two-year preparatory program in mathematics, physics, and engineering sciences. PT* track (top section).',
    noteVariant: 'body' as const,
  },
];

const skillGroups = [
  {
    category: 'Design & CAD',
    skills:
      'CATIA V5 (400h+), SolidWorks, GD&T, parametric modeling, assemblies, technical drawings',
  },
  {
    category: 'Simulation',
    skills:
      'STARCCM+ (CFD), ABAQUS (FEA), COMSOL Multiphysics (electromagnetics, heat transfer, fluid flow), Reality DC',
  },
  {
    category: 'Manufacturing',
    skills: 'Sand casting, turning, milling, 5-axis drilling, 3D printing, DFM/DFA',
  },
  {
    category: 'Programming',
    skills: 'Python, MATLAB, TypeScript, MySQL, SQLite',
  },
  {
    category: 'ML & Data',
    skills:
      'Keras / TensorFlow, scikit-learn, genetic algorithms, PINNs, Random Forest, feature engineering',
  },
  {
    category: 'Energy & Thermal',
    skills:
      'Thermodynamics, fluid mechanics, heat transfer, cooling systems, hydrogen transport, psychrometrics',
  },
  {
    category: 'Languages',
    skills: 'French (native), English (fluent — working language at Berkeley)',
  },
];

export default function About() {
  useDocumentTitle('Portfolio | About', {
    description: 'Mechanical engineering profile, education, skills, and contact details.',
  });

  return (
    <section className={`${styles.page} pageShell fadeInUp`}>
      <div className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.statusLabel}>MEng Mechanical Engineering · UC Berkeley</p>
          <h1>Maxime Denis</h1>
          {/* <img src="/about/photo.jpg" alt="Maxime Denis" /> */}
          <div className={styles.intro}>
            <p>
              I&apos;m a mechanical engineering student at UC Berkeley, finishing my MEng and
              actively looking for full-time opportunities in mechanical design, multiphysics
              simulation, or energy systems engineering — open to relocate.
            </p>
            <p>
              I&apos;m genuinely passionate about engineering: I love the moment when a physical
              system starts making sense — whether it&apos;s a cam profile clicking into place
              analytically, a CFD simulation converging, or a machine learning model that actually
              learns something about the physics it&apos;s supposed to describe. I tend to work
              across scales and disciplines, which is probably why data centers, hydrogen
              reactors, and shoulder prostheses have all ended up in the same portfolio.
            </p>
            <p>
              Outside of engineering, I co-founded Well.Be, an AI-driven platform for caregiver
              support — because good engineering, at its best, solves problems that actually
              matter.
            </p>
          </div>
        </div>

        <aside className={styles.contactCard}>
          <p className={styles.contactCardLabel}>Contact</p>
          <div className={styles.contactList}>
            <a href="mailto:maxime.denis@berkeley.edu" className={styles.contactLink}>
              maxime.denis@berkeley.edu
            </a>
            <a href="tel:+13417668027" className={styles.contactLink}>
              +1 (341) 766-8027
            </a>
            <div className={styles.contactItemRow}>
              <a href="tel:+33783751179" className={styles.contactLink}>
                +33 7 83 75 11 79
              </a>
              <span className={styles.waLabel}>WhatsApp</span>
            </div>
          </div>
          <Button href="/about/resume.pdf" target="_blank" rel="noreferrer" accent>
            Resume
          </Button>
        </aside>
      </div>

      <section className={styles.section}>
        <SectionLabel label="EDUCATION" />
        <div className={styles.timeline}>
          {education.map((item) => (
            <article className={styles.timelineItem} key={item.period}>
              <div className={styles.timelineMarker} aria-hidden="true" />
              <div className={styles.timelineContent}>
                <p className={styles.period}>{item.period}</p>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.location}>{item.location}</p>
                {item.note ? (
                  item.noteVariant === 'badge' ? (
                    <span className={styles.noteBadge}>{item.note}</span>
                  ) : (
                    <p className={styles.noteBody}>{item.note}</p>
                  )
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel label="SKILLS" />
        <div className={styles.skillsGrid}>
          {skillGroups.map((group) => (
            <article className={styles.skillCard} key={group.category}>
              <p className={styles.skillLabel}>{group.category}</p>
              <p className={styles.skillText}>{group.skills}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionLabel label="CONTACT" />
        <div className={styles.contactRow}>
          <a href="mailto:maxime.denis@berkeley.edu">maxime.denis@berkeley.edu</a>
          <span aria-hidden="true">—</span>
          <a href="tel:+13417668027">+1 (341) 766-8027</a>
          <span aria-hidden="true">—</span>
          <a href="tel:+33783751179">+33 7 83 75 11 79</a>
          <span aria-hidden="true">—</span>
          <a href="https://www.linkedin.com/in/maxime-denis-5244b0325/" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>
    </section>
  );
}
