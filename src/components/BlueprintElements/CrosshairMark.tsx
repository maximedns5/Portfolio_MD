import styles from './CrosshairMark.module.css';

type CrosshairMarkProps = {
  className?: string;
};

export default function CrosshairMark({ className }: CrosshairMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={`${styles.mark} ${className ?? ''}`}
      viewBox="0 0 24 24"
    >
      <path d="M12 1V7M12 17V23M1 12H7M17 12H23" />
      <circle cx="12" cy="12" r="3.25" />
    </svg>
  );
}
