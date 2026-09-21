import { Link } from 'react-router-dom'
import { properties } from '../data/properties'
import { featuredTestimonial, reviewStats } from '../data/reviews'
import StarRating from '../components/StarRating'
import Faq from '../components/Faq'
import CtaBand from '../components/CtaBand'
import styles from './PropertiesPage.module.css'

export default function PropertiesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroTop}>
            <div>
              <span className={styles.eyebrow}>Pittsburgh's East End</span>
              <h1 className={styles.title}>Our Properties</h1>
            </div>
            <p className={styles.subtitle}>Individually managed short-term rentals in Pittsburgh's East End.</p>
          </div>

          <div className={styles.grid}>
            {properties.map((property) => (
              <Link key={property.slug} to={`/properties/${property.slug}`} className={styles.card}>
                <div className={styles.cardImage}>
                  <img src={property.gridImage ?? property.heroImage} alt={property.name} />
                </div>
                <div className={styles.cardFooter}>
                  <div>
                    <p className={styles.cardLocation}>{property.neighborhood}</p>
                    <h2 className={styles.cardName}>{property.name}</h2>
                    <p className={styles.cardDescription}>{property.cardDescription}</p>
                  </div>
                  <span className={styles.arrowButton} aria-hidden="true">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.reviewsHeader}>
            <div>
              <span className={styles.eyebrow}>Guest Experiences</span>
              <h2 className={styles.reviewsTitle}>Guest Reviews</h2>
            </div>
            <div>
              <Link to="/reviews" className={styles.viewMoreButton}>
                View More Reviews
              </Link>
              <p className={styles.reviewsCopy}>
                Authentic reviews from our guests on Airbnb. We've gathered the voices of those who've stayed with
                us in Pittsburgh's East End.
              </p>
            </div>
          </div>

          <div className={styles.statsBar}>
            <div className={styles.stat}>
              <span className={styles.statValue}>{reviewStats.total}</span>
              <span className={styles.statLabel}>Total Reviews</span>
            </div>
            <div className={styles.stat}>
              <span className={`${styles.statValue} ${styles.statStars}`}><StarRating count={reviewStats.airbnbRating} /></span>
              <span className={styles.statLabel}>Airbnb Rating</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{reviewStats.superhostRating}</span>
              <span className={styles.statLabel}>Airbnb Superhost Rating</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{reviewStats.mostCommonRating}</span>
              <span className={styles.statLabel}>Most Common Rating</span>
            </div>
          </div>

          <div className={styles.testimonial}>
            <p className={styles.testimonialText}>&ldquo;{featuredTestimonial.text}&rdquo;</p>
            <div className={styles.testimonialMeta}>
              <span className={styles.testimonialStars}><StarRating /></span>
              <span>{featuredTestimonial.author}</span>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <CtaBand
        title="Have Questions Or Need Help Choosing A Property?"
        subtitle="We're happy to help. Reach out by email or phone and we'll get back to you promptly."
        buttonLabel="Explore Properties"
        to="/properties"
      />
    </>
  )
}
