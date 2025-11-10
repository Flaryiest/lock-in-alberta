import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Free Peer Tutoring</div>
          <h1 className={styles.heroTitle}>
            They locked teachers out.<br />We're helping students lock in.
          </h1>
          <p className={styles.heroDescription}>
            Grade 12 IB students providing free, synchronous tutoring to Alberta students. 
            No cost. No barriers. Just support.
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/register" className={styles.primaryButton}>
              Get Started
            </Link>
            <Link to="/volunteer" className={styles.secondaryButton}>
              Volunteer →
            </Link>
          </div>
          <p className={styles.socialProof}>
            Featured by Global Calgary & CTV News
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>12+</div>
            <div className={styles.statLabel}>Courses Available</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Free Forever</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>IB</div>
            <div className={styles.statLabel}>Student Tutors</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.sectionContent}>
          <p className={styles.sectionLabel}>Our Mission</p>
          <h2>Supporting students through uncertainty</h2>
          <p className={styles.missionText}>
            Lock In Alberta is a student-led initiative providing completely free tutoring and 
            study resources. While the teacher's strike has ended, students still face academic 
            gaps and accelerated pacing. We're here to help—without financial barriers.
          </p>
        </div>
      </section>

      {/* Courses Preview */}
      <section className={styles.courses}>
        <div className={styles.sectionContent}>
          <p className={styles.sectionLabel}>What We Offer</p>
          <h2>Available Courses</h2>
          <div className={styles.courseGrid}>
            <div className={styles.courseCategory}>
              <div className={styles.categoryHeader}>Mathematics</div>
              <ul>
                <li>Math 10C</li>
                <li>Math 20-1 (+ IB)</li>
                <li>Math 30-1 & 31 (+ IB)</li>
              </ul>
            </div>
            <div className={styles.courseCategory}>
              <div className={styles.categoryHeader}>Sciences</div>
              <ul>
                <li>Biology 20 & 30 (+ IB)</li>
                <li>Chemistry 20 (+ IB)</li>
                <li>Physics 20 & 30 (+ IB)</li>
              </ul>
            </div>
            <div className={styles.courseCategory}>
              <div className={styles.categoryHeader}>Humanities</div>
              <ul>
                <li>English 10, 20, 30</li>
                <li>Social Studies 10-1, 20-1, 30-1</li>
              </ul>
            </div>
          </div>
          <Link to="/courses" className={styles.viewAllButton}>
            View all courses →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.finalCta}>
        <div className={styles.ctaContent}>
          <h2>Ready to get started?</h2>
          <p>Join students across Alberta accessing free tutoring support</p>
          <div className={styles.ctaButtons}>
            <Link to="/register" className={styles.primaryButton}>
              Register Now
            </Link>
            <Link to="/about" className={styles.secondaryButton}>
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}