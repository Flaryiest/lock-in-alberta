import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>About Lock In Alberta</h1>
        <p className={styles.tagline}>
          Student-led. Community-driven. Always free.
        </p>
      </div>

      <section className={styles.section}>
        <h2>Our Story</h2>
        <p>
          Lock In Alberta was founded by a group of Grade 12 International Baccalaureate students 
          in response to the 2025 Alberta teacher's strike. When teachers were locked out and 
          students faced unprecedented academic disruption, we knew we had to act.
        </p>
        <p>
          "They locked Alberta teachers out, we're helping students lock in" became our rallying cry. 
          What started as a small initiative to help fellow students has grown into a province-wide 
          movement offering free peer tutoring and study resources.
        </p>
      </section>

      <section className={styles.section}>
        <h2>The Impact of Job Action</h2>
        <p>
          <em>
            "There are no winners during job action. Each day of teachers striking means students 
            lose out on not only valuable learning opportunities, but their support communities and 
            extracurricular passions."
          </em>
        </p>
        <p>
          While the strike has concluded, its effects linger. Students face accelerated course 
          pacing, missed content, and increased stress around diploma exams. Education must be 
          funded fairly, and the future of youth in our province hinges on the deal. But in the 
          meantime, we're here to help bridge the gap.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What We Offer</h2>
        <div className={styles.offerGrid}>
          <div className={styles.offerCard}>
            <h3>Free Tutoring</h3>
            <p>
              100% free synchronous online tutoring sessions with experienced IB students. No hidden 
              costs, no barriers to access.
            </p>
          </div>
          <div className={styles.offerCard}>
            <h3>Study Resources</h3>
            <p>
              Curated study materials, practice problems, and exam prep resources aligned with 
              Alberta curriculum.
            </p>
          </div>
          <div className={styles.offerCard}>
            <h3>Diploma Prep</h3>
            <p>
              Specialized support for students preparing for diploma exams, focusing on key concepts 
              and test-taking strategies.
            </p>
          </div>
          <div className={styles.offerCard}>
            <h3>Peer Support</h3>
            <p>
              Learn from students who've recently mastered the same material, in an approachable 
              and supportive environment.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Media Recognition</h2>
        <p>
          Lock In Alberta has been featured by <strong>Global Calgary</strong> and <strong>CTV News</strong> for 
          our innovative approach to supporting students during the teacher's strike. We're proud to 
          represent the resilience and compassion of Alberta's student community.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Commitment</h2>
        <p>
          We believe that financial barriers should never stand in the way of education. Every 
          student deserves access to quality learning support, regardless of their family's economic 
          situation. That's why Lock In Alberta will always remain completely free of charge.
        </p>
        <p>
          Our volunteer tutors are passionate about education and committed to helping their peers 
          succeed. We source content from CBE schools and public educational resources, ensuring 
          quality and curriculum alignment.
        </p>
      </section>

      <section className={styles.ctaSection}>
        <h2>Join Our Community</h2>
        <p>
          Whether you're a student seeking support or a volunteer wanting to give back, there's a 
          place for you in Lock In Alberta.
        </p>
      </section>
    </div>
  );
}
