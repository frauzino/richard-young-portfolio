import styles from "./navbar.module.scss"
import Link from "next/link";

export function Navbar(props) {
  const header = props.header
  const navItems = props.navItems

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__header_wrapper}>
        <Link className={styles.navbar__header} href="/">{header}</Link>
      </div>
      <ul className={styles.navbar__nav_links}>
        {navItems.map((item, index) => (
          <li key={`navlink-${index}`} className={styles.nav_link}>
            <Link href="">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
