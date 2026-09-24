import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './SiteLayout.module.css'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Contact', to: '/contact' },
]

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <nav className={styles.navLeft} aria-label="Primary">
            {navItems.slice(0, 2).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink to="/" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">P</span>
            <span className={styles.brandName}>Point Breeze Guest House</span>
          </NavLink>

          <nav className={styles.navRight} aria-label="Secondary">
            {navItems.slice(2).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`} aria-label="Mobile">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <p className={styles.footerBrand}>
                Point Breeze
                <br />
                Guest House
              </p>
              <p className={styles.footerText}>
                Cozy and comfortable short-term rentals in Pittsburgh's East End.
              </p>
            </div>

            <div>
              <p className={styles.footerHeading}>Navigate</p>
              <ul className={styles.footerLinks}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/properties">Properties</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>

            <div className={styles.contactBlock}>
              <div className={styles.contactInfo}>
                <p className={styles.footerHeading}>Contact</p>
                <p><a href="mailto:PointBreezeGuestHouse@gmail.com">PointBreezeGuestHouse@gmail.com</a></p>
                <p><a href="tel:+14128070883">+1.412.807.0883</a></p>
                <p>Pittsburgh, PA</p>
              </div>

              <div className={styles.footerCta}>
                <p>Book directly to check availability and secure your stay.</p>
                <NavLink to="/contact" className={styles.contactButton}>
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; 2026 PBGH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
