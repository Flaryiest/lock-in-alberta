import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          Lock In Alberta
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/volunteer">Volunteer</Link>
          </li>
          <li>
            <Link to="/register" className={styles.registerButton}>
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
