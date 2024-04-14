'use client'

import styles from './home.module.scss'
import { BannerNew } from './components/banner_new'

export default function Home() {
  return(
    <div className={styles.main_container}>
      <BannerNew
        header={'RICHARD YOUNG'}
        content={'Full Stack Web Developer and Shopify Expert'}
      />
    </div>
  )
}
