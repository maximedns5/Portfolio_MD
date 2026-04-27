import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CrosshairMark from '../BlueprintElements/CrosshairMark';
import styles from './Nav.module.css';

const navItems = [
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <NavLink to="/" className={styles.brand}>
            Maxime Denis
          </NavLink>
          <CrosshairMark className={styles.crosshair} />
        </div>
        <nav className={styles.links} aria-label="Navigation principale">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
