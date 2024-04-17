import styles from './hamburger_menu.module.scss'
import clsx from 'clsx'
import { useState } from 'react'
import Link from 'next/link'
import { HamburgerSvg } from '../svg_components/hamburger_svg'
import localFont from 'next/font/local'
import { saveAs } from 'file-saver'
import { Logo } from './logo'

const rocketeers = localFont({src: '../../../public/fonts/Rocketeers.otf'})

export function HamburgerMenu({ navItems }) {
  const [menuState, toggleMenuState] = useState(false)

  const toggleMenu = () => {
    toggleMenuState(!menuState)
  }

  const saveFile = () => {
    saveAs(
      '/Richard_Young_CV.pdf',
      '/Richard_Young_CV.pdf'
    )
  }

  return (
    <div className={styles.menu}>
      <div className={styles.hamburgerWrapper} onClick={() => toggleMenu()} >
        <HamburgerSvg hamburgerState={menuState} />
      </div>
      <div className={clsx(styles.menuContainer, menuState && styles.active)}>
        <div className={clsx(styles.growCircle, menuState && styles.active)}></div>
        <div className={clsx(styles.menuContentContainer, menuState && styles.active)}>
          <div className={clsx(styles.logo, menuState && styles.active)} onClick={() => toggleMenu()}>
            <Logo />
          </div>
          <ul className={clsx(styles.navLinks, menuState && styles.active)}>
            {navItems.map((item, index) => (
              <li key={`navlink-${index}`} className={styles.nav_link}>
                <Link href={`/${item !== 'home' && item}`} className={clsx(styles.link, rocketeers.className)} onClick={() => toggleMenu()} >{item.replace('_', ' ')}</Link>
              </li>
            ))}
            <li className={clsx(styles.link, rocketeers.className)} onClick={saveFile}>Download My CV</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
