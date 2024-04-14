'use client'

import styles from "./navbar.module.scss";
import { HamburgerMenu } from "./hamburger_menu";
import { usePathname } from "next/navigation";
import clsx from 'clsx';
import localFont from 'next/font/local';
import { Logo } from "./logo";

const rocketeers = localFont({src: '../../../public/fonts/Rocketeers.otf'})

export function Navbar({ navItems}) {
  const path = usePathname()
  const header = path.substring(1).replaceAll(new RegExp(/-|_|\W|\d+/, 'g'), ' ')

  return (
    <div className={styles.navbar}>
      {path != '/' &&
        <div className={styles.logoContainer}>
          <Logo />
        </div>
      }
      <h2 className={clsx(styles.navbar__header, rocketeers.className)}>{header}</h2>
      {/* <div className={styles.navbar__header_wrapper}>
      </div> */}
      <HamburgerMenu navItems={navItems}/>
    </div>
  )
}
