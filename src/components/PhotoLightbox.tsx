import { useEffect, useState } from 'react'
import styles from './PhotoLightbox.module.css'

interface PhotoLightboxProps {
  photos: string[]
  initialIndex: number
  alt: string
  onClose: () => void
}

export default function PhotoLightbox({ photos, initialIndex, alt, onClose }: PhotoLightboxProps) {
  const [index, setIndex] = useState(initialIndex)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') setIndex((current) => (current + 1) % photos.length)
      if (event.key === 'ArrowLeft') setIndex((current) => (current - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [photos.length, onClose])

  function goNext() {
    setIndex((current) => (current + 1) % photos.length)
  }

  function goPrev() {
    setIndex((current) => (current - 1 + photos.length) % photos.length)
  }

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={`${alt} photos`}>
      <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close photo viewer">
        ✕
      </button>

      <span className={styles.counter}>
        {index + 1} / {photos.length}
      </span>

      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        onClick={(event) => {
          event.stopPropagation()
          goPrev()
        }}
        aria-label="Previous photo"
      >
        ‹
      </button>

      <img
        src={photos[index]}
        alt={`${alt} photo ${index + 1} of ${photos.length}`}
        className={styles.image}
        onClick={(event) => event.stopPropagation()}
      />

      <button
        type="button"
        className={`${styles.navButton} ${styles.navButtonNext}`}
        onClick={(event) => {
          event.stopPropagation()
          goNext()
        }}
        aria-label="Next photo"
      >
        ›
      </button>
    </div>
  )
}
