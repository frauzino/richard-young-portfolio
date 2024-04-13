import styles from './banner_new.module.scss'
import localFont from 'next/font/local'
import clsx from 'clsx'
// SVGs
import { SCurve } from '../svg_components/scurve_svg'
import { Wiggle } from '../svg_components/wiggle_svg'
import { SemiCircleLarge } from '../svg_components/semicircle_large_svg'
import { SemiCircleSmall } from '../svg_components/semicircle_small_svg'

const rocketeers = localFont({src: '../../../public/fonts/Rocketeers.otf'})

export function BannerNew({header, content}) {
  return(
    <div className={clsx(styles.banner_container, rocketeers.className)}>
      <div className={styles.bannerBackground} />
      <div className={styles.text_box}>
        <h1 className={clsx(styles.header, rocketeers.className)}>{header}</h1>
        <p className={styles.content}>{content}</p>
      </div>
      <SCurve  className={clsx(styles.svg, styles.sCurve)} />
      <Wiggle className={clsx(styles.svg, styles.wiggle)} />
      <SemiCircleLarge className={clsx(styles.svg, styles.semiCircleLarge)} />
      <SemiCircleSmall className={clsx(styles.svg, styles.semiCircleSmall)} />
    </div>
  )
}
