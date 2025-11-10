import styles from './courses.module.css';

export default function CoursesPage() {
  const courses = [
    {
      category: 'Mathematics',
      courses: [
        { name: 'Mathematics 10C', description: 'Foundational math concepts' },
        { name: 'Mathematics 20-1 (+ IB)', description: 'Advanced Grade 11 mathematics' },
        { name: 'Mathematics 30-1 & 31 (+ IB)', description: 'Calculus and advanced topics' }
      ]
    },
    {
      category: 'Sciences',
      courses: [
        { name: 'Biology 20', description: 'Ecosystems and biological systems' },
        { name: 'Biology 30 (+ IB)', description: 'Advanced biology and exam prep' },
        { name: 'Chemistry 20 (+ IB)', description: 'Chemical reactions and stoichiometry' },
        { name: 'Physics 20', description: 'Kinematics and dynamics' },
        { name: 'Physics 30 (+ IB)', description: 'Advanced physics and diploma prep' }
      ]
    },
    {
      category: 'English',
      courses: [
        { name: 'English 10', description: 'Literary analysis and writing' },
        { name: 'English 20', description: 'Essay format and critical thinking' },
        { name: 'English 30', description: 'Exam prep and advanced composition' }
      ]
    },
    {
      category: 'Social Studies',
      courses: [
        { name: 'Social Studies 10-1', description: 'Canadian history and identity' },
        { name: 'Social Studies 20-1', description: 'Nationalism and identity' },
        { name: 'Social Studies 30-1', description: 'Globalization and diploma prep' }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Available Courses</h1>
        <p>
          Free peer tutoring sessions led by experienced IB students. All sessions are conducted 
          online and tailored to Alberta curriculum and diploma exam requirements.
        </p>
      </div>

      <div className={styles.coursesGrid}>
        {courses.map((category, idx) => (
          <div key={idx} className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <div className={styles.coursesList}>
              {category.courses.map((course, courseIdx) => (
                <div key={courseIdx} className={styles.courseCard}>
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.additionalInfo}>
        <h2>Need Something Else?</h2>
        <p>
          We're expanding our course offerings based on student demand. If you need help with a 
          subject not listed here, please contact us and we'll do our best to match you with a volunteer tutor.
        </p>
        <p className={styles.note}>
          *All content is sourced from CBE schools and public educational resources.
        </p>
      </div>
    </div>
  );
}
