import { useState } from 'react';
import styles from './volunteer.module.css';

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    school: '',
    subjects: [] as string[],
    experience: '',
    availability: '',
    why: ''
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
    console.log('Form submitted:', formData);
    // In production, this would send data to backend
    alert('Thank you for applying! We will be in touch soon.');
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
        <h1>Become a Volunteer Tutor</h1>
        <p>
          Join our team of dedicated student volunteers helping peers across Alberta access free 
          education support. Make a difference in your community while strengthening your own knowledge.
        </p>
      </div>

      <div className={styles.requirements}>
        <h2>Requirements</h2>
        <ul>
          <li>Currently enrolled in Grade 11 or 12</li>
          <li>Strong academic performance in subjects you wish to tutor</li>
          <li>Commitment to helping peers learn and succeed</li>
          <li>Reliable internet connection for online tutoring sessions</li>
          <li>Passion for education and community service</li>
        </ul>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <h3>Personal Information</h3>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>First Name *</label>
              <input
                type="text"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div className={styles.formGroup}>
              <label>Last Name *</label>
              <input
                type="text"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
          <h3>Subjects You Can Tutor</h3>
          <p className={styles.sectionDescription}>
            Select all subjects you feel confident teaching (check your marks!):
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
          <h3>Experience & Availability</h3>
          <div className={styles.formGroup}>
            <label>Previous Tutoring Experience</label>
            <textarea
              rows={4}
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              placeholder="Describe any previous tutoring or teaching experience (optional)"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Availability *</label>
            <textarea
              rows={4}
              required
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              placeholder="When are you available to tutor? (e.g., weekday evenings, Saturday mornings)"
            />
          </div>

          <div className={styles.formGroup}>
            <label>Why do you want to volunteer? *</label>
            <textarea
              rows={4}
              required
              value={formData.why}
              onChange={(e) => setFormData({ ...formData, why: e.target.value })}
              placeholder="Tell us what motivates you to help other students"
            />
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Application
        </button>
      </form>
    </div>
  );
}
