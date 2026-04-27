import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.label}>Portfolio technique</p>
        <p className={styles.copy}>Blueprint portfolio built with React, TypeScript and CSS Modules.</p>
      </div>
    </footer>
  );
}
