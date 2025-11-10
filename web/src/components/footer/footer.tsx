import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Lock In Alberta</h3>
          <p>
            Free peer tutoring for Alberta students. Student-led, community-driven, always free.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/volunteer">Volunteer</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <p>Email: info@lockinab.ca</p>
          <p>Website: lockinab.ca</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Recognition</h4>
          <p>Featured by Global Calgary and CTV News</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 Lock In Alberta. All rights reserved.</p>
        <p className={styles.disclaimer}>
          *Content sourced from CBE schools and public resources
        </p>
      </div>
    </footer>
  );
}
