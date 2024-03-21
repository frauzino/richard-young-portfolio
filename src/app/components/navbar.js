import styles from "./navbar.module.scss"
import Link from "next/link";
import { SocialIcons } from "./social_icons";
import localFont from 'next/font/local'
import clsx from 'clsx';
import { useFlicker } from "../functions/flicker";
import { useState } from "react";

const shadeBlue = localFont({ src: '../../../public/fonts/shade-blue.regular.ttf' })

export function Navbar(props) {
  const socials = props.socials
  const header = props.header
  const navItems = props.navItems

  const [headerLinkHover, setHeaderLinkHover] = useState(false)
  const [linkHoverStates, setLinkHoverStates] = useState(navItems.reduce((acc, item) => {
    acc[item] = false;
    return acc;
  }, {}))

  const borderNeon = useFlicker({ boxShadow: `0 0 4px #fff, 0 0 1rem #08f, inset 0 0 4px #fff, inset 0 0 1rem #08f` })
  const headerNeon = useFlicker({textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 15px #00ca87, 0 0 42px #00ca87'})
  const hoverHeaderNeon = {textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 15px #0fa, 0 0 42px #0fa, 0 0 52px #0fa'}
  const linkNeon = useFlicker({textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 15px #c9bb00, 0 0 42px #c9bb00'})
  const hoverLinkNeon = {textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 15px #ffee02, 0 0 42px #ffee02, 0 0 52px #ffee02'}

  const handleMouseEnter = (item) => {
    setLinkHoverStates({...linkHoverStates, [item]: true})
  }
  const handleMouseLeave = (item) => {
    setLinkHoverStates({...linkHoverStates, [item]: false})
  }

  return (
    <div className={styles.navbar} style={borderNeon}>
      <div className={styles.navbar__header_wrapper}>
        <Link
          className={clsx(styles.navbar__header, shadeBlue.className)}
          href="#banner"
          onMouseEnter={()=>setHeaderLinkHover(true)}
          onMouseLeave={()=>setHeaderLinkHover(false)}
          style={headerLinkHover? hoverHeaderNeon : headerNeon}
        >
          {header}
        </Link>
      </div>
      <ul className={styles.navbar__nav_links}>
        {navItems.map((item, index) => (
          <li key={`navlink-${index}`} className={styles.nav_link}>
            <Link
              className={shadeBlue.className}
              href={`#${item}`}
              onMouseEnter={()=>handleMouseEnter(item)}
              onMouseLeave={()=>handleMouseLeave(item)}
              style={linkHoverStates[item] ? hoverLinkNeon : linkNeon}
            >
              {item}
            </Link>
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
