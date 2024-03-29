import styles from "./navbar.module.scss"
import Link from "next/link";
import { SocialIcons } from "./social_icons";

export function Navbar(props) {
  const socials = props.socials
  const header = props.header
  const navItems = props.navItems

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__header_wrapper}>
        <Link className={styles.navbar__header} href="#banner">{header}</Link>
      </div>
      <ul className={styles.navbar__nav_links}>
        {navItems.map((item, index) => (
          <li key={`navlink-${index}`} className={styles.nav_link}>
            <Link href={`#${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.navbar__socials}>
        <SocialIcons
          socials={socials}
          parent={'Navbar'}
        />
      </div>
    </div>
  )
}
