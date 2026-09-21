import { useState } from 'react'
import styles from './Faq.module.css'

interface FaqItem {
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    question: 'What amenities are included at Point Breeze Guest House?',
    answer:
      'Our rooms offer free coffee and tea setups, mini fridge, microwave, high-speed Wi-Fi, private outdoor patio, and complimentary toiletries to ensure a comfortable stay.',
  },
  {
    question: 'How can I make a reservation at Point Breeze Guest House?',
    answer:
      'You can book directly through Airbnb, or reach out to us through the Contact page and we will help you find the right property and dates.',
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
