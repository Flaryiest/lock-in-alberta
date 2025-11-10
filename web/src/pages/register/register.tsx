import { useState } from 'react';
import styles from './register.module.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    studentFirstName: '',
    studentLastName: '',
    email: '',
    phone: '',
    grade: '',
    school: '',
    parentName: '',
    parentEmail: '',
    subjects: [] as string[],
    goals: '',
    preferredTimes: ''
  });

  const subjects = [
    'Mathematics 10C',
    'Mathematics 20-1',
    'Mathematics 30-1 & 31',
    'Biology 20',
    'Biology 30',
    'Chemistry 20',
    'Physics 20',
    'Physics 30',
    'English 10/20/30',
    'Social Studies 10-1',
    'Social Studies 20-1',
    'Social Studies 30-1'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // In production, this would send data to backend
    alert('Thank you for registering! We will contact you soon to schedule your first session.');
  };

  const handleSubjectChange = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Register for Free Tutoring</h1>
        <p>
          Sign up to access free peer tutoring sessions with experienced IB students. 
          No cost, no commitment—just support when you need it.
        </p>
      </div>

      <div className={styles.infoBox}>
        <h3>What to Expect</h3>
        <ul>
          <li>Personalized 1-on-1 or small group tutoring sessions</li>
          <li>Flexible scheduling to fit your availability</li>
          <li>Support from students who've recently mastered the material</li>
          <li>Completely free of charge—no hidden fees</li>
        </ul>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <h3>Student Information</h3>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>First Name *</label>
              <input
                type="text"
                required
                value={formData.studentFirstName}
                onChange={(e) => setFormData({ ...formData, studentFirstName: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name *</label>
              <input
                type="text"
                required
                value={formData.studentLastName}
                onChange={(e) => setFormData({ ...formData, studentLastName: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Current Grade *</label>
              <select
                required
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              >
                <option value="">Select...</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>School *</label>
              <input
                type="text"
                required
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3>Parent/Guardian Information (for students under 18)</h3>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Parent/Guardian Name</label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Parent/Guardian Email</label>
              <input
                type="email"
                value={formData.parentEmail}
                onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h3>Subjects Needed</h3>
          <p className={styles.sectionDescription}>
            Select all subjects you'd like help with:
          </p>
          <div className={styles.checkboxGrid}>
            {subjects.map((subject) => (
              <label key={subject} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={formData.subjects.includes(subject)}
                  onChange={() => handleSubjectChange(subject)}
                />
                <span>{subject}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.formSection}>
          <h3>Additional Details</h3>
          <div className={styles.formGroup}>
            <label>Learning Goals</label>
            <textarea
              rows={4}
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              placeholder="What are you hoping to achieve? (e.g., prepare for diploma exams, catch up on missed content, improve understanding of specific topics)"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Preferred Session Times *</label>
            <textarea
              rows={3}
              required
              value={formData.preferredTimes}
              onChange={(e) => setFormData({ ...formData, preferredTimes: e.target.value })}
              placeholder="When are you typically available? (e.g., weekday evenings, Saturday afternoons)"
            />
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Complete Registration
        </button>
      </form>
    </div>
  );
}
