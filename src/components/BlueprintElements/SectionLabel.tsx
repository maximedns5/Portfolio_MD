import styles from './SectionLabel.module.css';

type SectionLabelProps = {
  label: string;
  count?: number;
};

export default function SectionLabel({ label, count }: SectionLabelProps) {
  return (
    <div className={styles.row}>
      <span className={styles.line} />
      <p className={styles.label}>
        {label}
        {typeof count === 'number' ? ` / ${count}` : ''}
      </p>
      <span className={styles.line} />
    </div>
  );
}
