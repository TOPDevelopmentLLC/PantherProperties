import { Link } from 'react-router-dom'
import heroBridge from '../assets/hero-bridge.jpg'
import aerialNeighborhood from '../assets/aerial-neighborhood.jpg'
import mostLivableCorner from '../assets/most-livable-corner.jpg'
import neighborhoodBed from '../assets/neighborhood-bed.jpg'
import ReviewCard from '../components/ReviewCard'
import Faq from '../components/Faq'
import CtaBand from '../components/CtaBand'
import { featuredProperties } from '../data/properties'

const featuredCardOverrides: Record<string, { name: string; cardDescription: string }> = {
  'pbgh-sunrise': {
    name: 'Guest House B&B',
    cardDescription: 'Wake up to warm eastern light in this serene upper-floor unit',
  },
}
import { reviews } from '../data/reviews'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          src="/hero-video.mp4"
          poster={heroBridge}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.heroEyebrow}>Welcome to Pittsburgh</p>
          <h1 className={styles.heroTitle}>BnB and Short-term Rentals in Pittsburgh</h1>
          <p className={styles.heroSubtitle}>
            Unique Short Term Stays in Squirrel Hill and Point Breeze, close to CMU / Pitt / Chatham, Hospitals and
            Bakery Square
          </p>
          <Link to="/properties" className={styles.heroButton}>
            Explore Properties
          </Link>
        </div>
      </section>

      <section className={styles.about}>
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <span className={styles.eyebrow}>About Point Breeze Guest House</span>
            <h2 className={styles.aboutTitle}>
              Comfortable Stays in
              <br />
              Pittsburgh's East End
            </h2>
            <p className={styles.aboutText}>
              Point Breeze Guest House offers cozy and comfortable short-term rentals in some of Pittsburgh's most
              desirable neighborhoods. Our properties are located in Point Breeze and Squirrel Hill, with convenient
              access to CMU, Pitt, Chatham University, nearby hospitals, and Bakery Square.
            </p>
            <Link to="/properties" className={styles.textLink}>
              VIEW ALL PROPERTIES &rarr;
            </Link>
          </div>
          <div className={styles.aboutImage}>
            <img src={aerialNeighborhood} alt="Aerial view of Point Breeze neighborhood streets" />
          </div>
        </div>
      </section>

      <section className={styles.properties}>
        <div className="container">
          <div className={styles.propertiesHeader}>
            <div>
              <span className={styles.eyebrow}>Our Properties</span>
              <h2 className={styles.propertiesTitle}>Find Your Stay</h2>
            </div>
            <Link to="/properties" className={styles.allLink}>
              All Properties
            </Link>
          </div>

          <div className={styles.propertyGrid}>
            {featuredProperties.map((property) => {
              const override = featuredCardOverrides[property.slug]
              const name = override?.name ?? property.name
              const cardDescription = override?.cardDescription ?? property.cardDescription
              return (
                <Link key={property.slug} to={`/properties/${property.slug}`} className={styles.propertyCard}>
                  <div className={styles.propertyImage}>
                    <img src={property.cardImage} alt={name} />
                  </div>
                  <div className={styles.propertyBody}>
                    <h3 className={styles.propertyName}>{name}</h3>
                    <p className={styles.propertyDescription}>{cardDescription}</p>
                    <span className={styles.viewProperty}>View Property &rarr;</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.neighborhood} style={{ backgroundImage: `url(${neighborhoodBed})` }}>
        <p className={styles.neighborhoodEyebrow}>The Neighborhood</p>
        <h2 className={styles.neighborhoodTitle}>Discover Pittsburgh's East End</h2>
        <p className={styles.neighborhoodText}>
          Explore stays in Point Breeze and Squirrel Hill, with convenient access to universities, hospitals, parks,
          and Bakery Square.
        </p>
        <Link to="/properties" className={styles.neighborhoodButton}>
          Explore Properties
        </Link>
      </section>

      <section className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.reviewsHeader}>
            <span className={styles.eyebrow}>Guest Reviews</span>
            <h2 className={styles.reviewsTitle}>What Our Guests Say</h2>
          </div>

          <div className={styles.reviewGrid}>
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                author={review.author}
                location={review.location}
                date={review.date}
                text={review.text}
              />
            ))}
          </div>

          <Link to="/reviews" className={styles.readAll}>
            Read All Reviews
          </Link>
        </div>
      </section>

      <section className={styles.livable}>
        <div className={`container ${styles.livableGrid}`}>
          <div>
            <span className={styles.eyebrow}>The Neighborhood</span>
            <h2 className={styles.livableTitle}>Pittsburgh's Most Livable Corner</h2>
            <p className={styles.livableText}>
              Our properties are located in Point Breeze and Squirrel Hill — quiet, tree-lined neighborhoods in
              Pittsburgh's East End, close to universities, hospitals, parks, and Bakery Square.
            </p>
            <div className={styles.livableLists}>
              <ul>
                <li>Point Breeze</li>
                <li>Bakery Square</li>
                <li>Carnegie Mellon University</li>
                <li>Chatham University</li>
              </ul>
              <ul>
                <li>Squirrel Hill</li>
                <li>Frick Park</li>
                <li>University of Pittsburgh</li>
                <li>UPMC Shadyside</li>
              </ul>
            </div>
          </div>
          <div className={styles.livableImage}>
            <img src={mostLivableCorner} alt="Historic Victorian house in Point Breeze, Pittsburgh" />
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
