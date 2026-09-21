import { type FormEvent, useState } from 'react'
import CtaBand from '../components/CtaBand'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log('Contact form submitted', Object.fromEntries(formData))
    setSubmitted(true)
  }

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.grid}`}>
          <div>
            <span className={styles.eyebrow}>Get in Touch</span>
            <h1 className={styles.title}>We'd Love To Hear From You</h1>
            <p className={styles.intro}>
              Questions about availability, property details, or anything else? We respond personally and promptly.
              No automated replies.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.5 3h3l1.5 3.5-1.75 1.25a9 9 0 0 0 4 4l1.25-1.75L15 11.5v3a1.5 1.5 0 0 1-1.6 1.5A12.5 12.5 0 0 1 2 4.6 1.5 1.5 0 0 1 3.5 3Z" stroke="#1b1b1b" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className={styles.infoLabel}>Phone number:</p>
                  <p className={styles.infoValue}>
                    <a href="tel:+14128070883">+1 (412) 807-0883</a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2.5" y="4" width="13" height="10" rx="1.5" stroke="#1b1b1b" strokeWidth="1.2" />
                    <path d="M3 5l6 5 6-5" stroke="#1b1b1b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className={styles.infoLabel}>Email Address:</p>
                  <p className={styles.infoValue}>
                    <a href="mailto:PointBreezeGuestHouse@gmail.com">PointBreezeGuestHouse@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 16s5-4.5 5-8.5A5 5 0 0 0 4 7.5C4 11.5 9 16 9 16Z" stroke="#1b1b1b" strokeWidth="1.2" />
                    <circle cx="9" cy="7.5" r="1.8" stroke="#1b1b1b" strokeWidth="1.2" />
                  </svg>
                </span>
                <div>
                  <p className={styles.infoLabel}>Location:</p>
                  <p className={styles.infoValue}>6412 Darlington Rd Pittsburgh, PA 15217</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <p className={styles.successMessage}>
                Thanks for reaching out! We've received your message and will get back to you personally, soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="firstName">
                      First Name <span className={styles.required}>*</span>
                    </label>
                    <input className={styles.input} type="text" id="firstName" name="firstName" placeholder="Enter first name" required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">
                      Email Address <span className={styles.required}>*</span>
                    </label>
                    <input className={styles.input} type="email" id="email" name="email" placeholder="Enter email address" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="propertyType">
                      Property Type <span className={styles.required}>*</span>
                    </label>
                    <select className={styles.select} id="propertyType" name="propertyType" defaultValue="" required>
                      <option value="" disabled>
                        Select property type
                      </option>
                      <option value="carriage-house-apartment">Carriage House Apartment</option>
                      <option value="tiny-house">Tiny House</option>
                      <option value="pbgh-sunrise">PBGH Sunrise</option>
                      <option value="pbgh-east-view">PBGH East View</option>
                      <option value="pbgh-bakery">PBGH Bakery</option>
                      <option value="pbgh-garden">PBGH Garden</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">
                      Phone Number <span className={styles.required}>*</span>
                    </label>
                    <input className={styles.input} type="tel" id="phone" name="phone" placeholder="Enter phone number" required />
                  </div>
                </div>

                <div className={`${styles.field} ${styles.messageField}`}>
                  <label className={styles.label} htmlFor="message">
                    Message
                  </label>
                  <textarea className={styles.textarea} id="message" name="message" placeholder="Enter your message" />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready To Find Your Stay?"
        subtitle="Browse properties in Pittsburgh's East End."
        buttonLabel="Find Your Stay"
        to="/properties"
      />
    </>
  )
}
