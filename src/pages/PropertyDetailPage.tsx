import { Link, useParams } from 'react-router-dom'
import { getPropertyBySlug } from '../data/properties'
import { reviews } from '../data/reviews'
import hostNicholas from '../assets/host-nicholas.jpg'
import ReviewCard from '../components/ReviewCard'
import { isApplePlatform } from '../lib/platform'
import styles from './PropertyDetailPage.module.css'

export default function PropertyDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const property = getPropertyBySlug(slug)

  if (!property) {
    return (
      <section className={styles.notFound}>
        <h1>Property not found</h1>
        <p>We couldn't find the property you're looking for.</p>
        <Link to="/properties" className={styles.notFoundLink}>
          &larr; Back to all properties
        </Link>
      </section>
    )
  }

  const [mainImage, ...thumbImages] = property.galleryImages
  const mapQuery = encodeURIComponent(property.address ?? `${property.locationTitle}, USA`)
  const mapEmbedSrc = `https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`
  const mapLinkHref = isApplePlatform()
    ? `https://maps.apple.com/?q=${mapQuery}`
    : `https://www.google.com/maps/search/?api=1&query=${mapQuery}`

  return (
    <>
      <section className={styles.hero} style={{ backgroundImage: `url(${property.heroImage})` }}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.heroLocation}>{property.neighborhood}</p>
          <h1 className={styles.heroTitle}>{property.name}</h1>
          <p className={styles.heroMeta}>{property.heroSubtitle}</p>
          <p className={styles.heroRating}>
            <span className={styles.heroStar}>★</span> {property.rating.toFixed(2)} · {property.reviewCount} Airbnb
            reviews {property.guestFavorite && <> · Guest favorite</>}
          </p>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container">
          <div className={styles.galleryGrid}>
            <div className={styles.galleryMain}>
              <img src={mainImage} alt={`${property.name} interior`} />
            </div>
            {thumbImages.map((image, index) => (
              <div className={styles.galleryThumb} key={image}>
                <img src={image} alt={`${property.name} photo ${index + 2}`} />
                {index === thumbImages.length - 1 && (
                  <button type="button" className={styles.showAllPhotos}>
                    Show all photos
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div>
              <span className={styles.eyebrow}>Property Overview</span>
              <h2 className={styles.overviewTitle}>{property.overviewTitle}</h2>
              {property.overviewParagraphs.map((paragraph) => (
                <p className={styles.overviewParagraph} key={paragraph}>
                  {paragraph}
                </p>
              ))}

              <hr className={styles.divider} />

              <h3 className={styles.sectionTitle}>Listing highlights</h3>
              <div className={styles.highlightsList}>
                {property.highlights.map((highlight, index) => (
                  <div className={styles.highlightRow} key={highlight.title}>
                    <span className={styles.highlightNumber}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={styles.highlightTitle}>{highlight.title}</span>
                    <span className={styles.highlightDescription}>{highlight.description}</span>
                  </div>
                ))}
              </div>

              <hr className={styles.divider} />

              <h3 className={styles.sectionTitle}>What this place offers</h3>
              <div className={styles.amenitiesGrid}>
                {property.amenities.map((amenity) => (
                  <span className={styles.amenityPill} key={amenity}>
                    <span className={styles.checkmark}>✓</span>
                    {amenity}
                  </span>
                ))}
              </div>

              <hr className={styles.divider} />

              <h3 className={styles.sectionTitle}>Things to know</h3>
              <div className={styles.thingsToKnowGrid}>
                <div>
                  <p className={styles.thingsToKnowHeading}>Check-in &amp; Checkout</p>
                  <ul className={styles.thingsToKnowList}>
                    <li>Check-in: {property.checkIn}</li>
                    <li>Checkout {property.checkOut}</li>
                  </ul>
                </div>
                <div>
                  <p className={styles.thingsToKnowHeading}>Safety</p>
                  <ul className={styles.thingsToKnowList}>
                    {property.safety.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.bookingCard}>
                <p className={styles.cardEyebrow}>Booking Options</p>
                <h3 className={styles.cardTitle}>Choose how you book</h3>
                <p className={styles.cardRating}>
                  ★ {property.rating.toFixed(2)} · {property.reviewCount} reviews
                </p>
                <p className={styles.cardNote}>Only platforms available for this property are shown. No dates are preselected.</p>
                <div className={styles.bookingButtons}>
                  <a className={styles.bookPrimary} href={property.airbnbUrl} target="_blank" rel="noreferrer">
                    Book on Airbnb
                  </a>
                  {property.vrboUrl && (
                    <a className={styles.bookSecondary} href={property.vrboUrl} target="_blank" rel="noreferrer">
                      Book on VRBO
                    </a>
                  )}
                  {property.bookingUrl && (
                    <a className={styles.bookSecondary} href={property.bookingUrl} target="_blank" rel="noreferrer">
                      Book on Booking.com
                    </a>
                  )}
                  <a
                    className={styles.bookSecondary}
                    href="https://direct-book.com/properties/pantherproperties"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View direct booking options
                  </a>
                  <Link to="/contact" className={styles.bookSecondary}>
                    Contact Us
                  </Link>
                </div>
                <p className={styles.hostMeta}>
                  Hosted by {property.hostName} · {property.hostYears} years hosting
                </p>
                {(() => {
                  const hiddenPlatforms = [
                    !property.vrboUrl && 'VRBO',
                    !property.bookingUrl && 'Booking.com',
                  ].filter(Boolean)
                  return hiddenPlatforms.length > 0 ? (
                    <p className={styles.bookedByNote}>
                      {hiddenPlatforms.join(' and ')} {hiddenPlatforms.length > 1 ? 'are' : 'is'} hidden until
                      property-specific {hiddenPlatforms.length > 1 ? 'links are' : 'link is'} supplied.
                    </p>
                  ) : null
                })()}
              </div>

              <div className={styles.sleepCard}>
                <p className={styles.cardEyebrow}>Where You'll Sleep</p>
                <h3 className={styles.cardTitle}>{property.bedroomTitle}</h3>
                <p className={styles.sleepBeds}>{property.bedroomBeds}</p>
                <p className={styles.cardNote} style={{ marginBottom: 0 }}>{property.bedroomNote}</p>
              </div>

              <div className={styles.hostCard}>
                <p className={styles.cardEyebrow}>Your Host</p>
                <h3 className={styles.cardTitle}>{property.hostName}</h3>
                <p className={styles.hostMeta} style={{ marginBottom: 16 }}>
                  {property.hostReviews} reviews · {property.hostYears} years hosting
                </p>
                <img
                  src={hostNicholas}
                  alt={property.hostName}
                  style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }}
                />
                <p className={styles.hostBlurb}>{property.hostBlurb}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.locationSection}>
        <div className="container">
          <div className={styles.locationHeader}>
            <div>
              <p className={styles.eyebrow}>Where You'll Be</p>
              <h2 className={styles.locationTitle}>{property.locationTitle}</h2>
              <p className={styles.locationBlurb}>{property.locationBlurb}</p>
            </div>
            <a href={mapLinkHref} target="_blank" rel="noreferrer" className={styles.gpsButton}>
              Open location / GPS
            </a>
          </div>

          <div className={styles.mapEmbed}>
            <iframe
              title={`Map of ${property.locationTitle}`}
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className={styles.mapCaption}>Neighborhood map shown for location context. Use the GPS link for directions.</p>
        </div>
      </section>

      <section className={styles.reviewsSection}>
        <div className="container">
          <div className={styles.reviewsHeading}>
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
            Read all 301 reviews
          </Link>
        </div>
      </section>
    </>
  )
}
