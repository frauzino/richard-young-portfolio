import styles from './mobile-nav.module.scss'
import Link from 'next/link'

export function MobileNav(props) {
  const navItems = props.navItems

  return (
    <div className={styles.mobile_nav__container}>
      <ul className={styles.nav_links}>
        {navItems.map((item, index) => (
          <li key={`navlink-${index}`} className={styles.nav_link}>
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
