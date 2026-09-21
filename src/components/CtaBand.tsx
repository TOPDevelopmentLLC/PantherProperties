import { Link } from 'react-router-dom'
import ctaBandBed from '../assets/cta-band-bed.jpg'
import styles from './CtaBand.module.css'

interface CtaBandProps {
  title: string
  subtitle: string
  buttonLabel: string
  to: string
}

export default function CtaBand({ title, subtitle, buttonLabel, to }: CtaBandProps) {
  return (
    <section className={styles.section} style={{ backgroundImage: `url(${ctaBandBed})` }}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <Link to={to} className={styles.button}>
        {buttonLabel}
      </Link>
    </section>
  )
}
