import styles from './DimensionLine.module.css';

type DimensionLineProps = {
  direction?: 'horizontal' | 'vertical';
  label: string;
  className?: string;
};

export default function DimensionLine({
  direction = 'horizontal',
  label,
  className,
}: DimensionLineProps) {
  const isVertical = direction === 'vertical';

  return (
    <div
      className={`${styles.wrapper} ${isVertical ? styles.vertical : styles.horizontal} ${
        className ?? ''
      }`}
      aria-hidden="true"
    >
      <span className={styles.arrow} />
      <span className={styles.label}>{label}</span>
      <span className={styles.arrow} />
    </div>
  );
}
