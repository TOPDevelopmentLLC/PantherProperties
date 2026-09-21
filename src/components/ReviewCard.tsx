import StarRating from './StarRating'
import styles from './ReviewCard.module.css'

interface ReviewCardProps {
  author: string
  location: string
  date: string
  text: string
}

export default function ReviewCard({ author, location, date, text }: ReviewCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.ratingRow}>
        <span className={styles.stars}>
          <StarRating />
        </span>
        <span>5/5 Reviews</span>
      </div>
      <p className={styles.text}>&ldquo;{text}&rdquo;</p>
      <footer className={styles.footer}>
        <span className={styles.avatarFallback} aria-hidden="true">{author.charAt(0)}</span>
        <div>
          <p className={styles.name}>{author}</p>
          <p className={styles.meta}>{location} · {date}</p>
        </div>
      </footer>
    </article>
  )
}
