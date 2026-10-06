import { useState, type ReactNode } from 'react'
import styles from './Faq.module.css'

interface FaqItem {
  question: string
  answer: ReactNode
}

const directBookingUrl = 'https://direct-book.com/properties/pantherproperties'

const faqItems: FaqItem[] = [
  {
    question: 'What amenities are included at Point Breeze Guest House?',
    answer:
      'Our rooms offer free coffee and tea setups, mini fridge, microwave, high-speed Wi-Fi, private outdoor patio, and complimentary toiletries to ensure a comfortable stay.',
  },
  {
    question: 'How can I make a reservation at Point Breeze Guest House?',
    answer: (
      <>
        Our properties are listed on various sites or you can book direct at:{' '}
        <a href={directBookingUrl} target="_blank" rel="noreferrer">
          {directBookingUrl}
        </a>
      </>
    ),
  },
  {
    question: 'Is there parking available at Point Breeze Guest House?',
    answer: 'Yes, free parking is available at most properties, with close and easy street parking at the others.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>FAQ</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.list}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div className={styles.item} key={item.question}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                <div className={`${styles.answerWrap} ${isOpen ? styles.answerWrapOpen : ''}`}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
