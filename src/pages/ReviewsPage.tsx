import { useMemo, useState } from 'react'
import { reviews, featuredTestimonial, reviewStats, reviewFilters } from '../data/reviews'
import ReviewCard from '../components/ReviewCard'
import StarRating from '../components/StarRating'
import CtaBand from '../components/CtaBand'
import styles from './ReviewsPage.module.css'

const PAGE_SIZE = 9

export default function ReviewsPage() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filteredReviews = useMemo(() => {
    const pool = activeSlug ? reviews.filter((review) => review.propertySlug === activeSlug) : reviews
    if (pool.length === 0) return []
    const repeated = []
    for (let i = 0; i < PAGE_SIZE * 2; i += 1) {
      repeated.push({ ...pool[i % pool.length], id: `${pool[i % pool.length].id}-${i}` })
    }
    return repeated
  }, [activeSlug])

  const visibleReviews = filteredReviews.slice(0, visibleCount)

  function handleFilter(slug: string | null) {
    setActiveSlug(slug)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroTop}>
            <div>
              <span className={styles.eyebrow}>Guest Experiences</span>
              <h1 className={styles.title}>Guest Reviews</h1>
            </div>
            <p className={styles.subtitle}>
              Authentic reviews from our guests on Airbnb. We've gathered the voices of those who've stayed with us
              in Pittsburgh's East End.
            </p>
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

          <div className={styles.filters} role="tablist" aria-label="Filter reviews by property">
            {reviewFilters.map((filter) => (
              <button
                key={filter.label}
                type="button"
                role="tab"
                aria-selected={activeSlug === filter.slug}
                className={`${styles.filterButton} ${activeSlug === filter.slug ? styles.filterButtonActive : ''}`}
                onClick={() => handleFilter(filter.slug)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {visibleReviews.length > 0 ? (
            <>
              <div className={styles.reviewGrid}>
                {visibleReviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    author={review.author}
                    location={review.location}
                    date={review.date}
                    text={review.text}
                  />
                ))}
              </div>

              {visibleCount < filteredReviews.length && (
                <div className={styles.loadMoreWrap}>
                  <button
                    type="button"
                    className={styles.loadMoreButton}
                    onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                  >
                    Load More Reviews
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className={styles.emptyState}>No reviews found for this property yet.</p>
          )}
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
