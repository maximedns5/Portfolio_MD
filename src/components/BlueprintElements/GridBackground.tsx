import styles from './GridBackground.module.css';

type GridBackgroundProps = {
  className?: string;
};

export default function GridBackground({ className }: GridBackgroundProps) {
  return (
    <svg
      aria-hidden="true"
      className={`${styles.grid} ${className ?? ''}`}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern id="blueprint-grid" width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.25" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
    </svg>
  );
}
