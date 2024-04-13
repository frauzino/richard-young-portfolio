import styles from './accordion.module.scss'
import { useState } from 'react'
import localFont from 'next/font/local'
import clsx from 'clsx'
import Image from 'next/image'

const rocketeers = localFont({src: '../../../public/fonts/Rocketeers.otf'})

export function Accordion({title, content, isActive, onClick}) {

  return(
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        <div className={styles.titleWrapper} onClick={onClick}>
          <h4 className={clsx(styles.title, rocketeers.className)}>{title}</h4>
          <div className={clsx(styles.icon)}>{isActive ? '-' : '+'}</div>
        </div>
        <div className={clsx(styles.content, isActive && styles.showContent)}>{content}</div>
      </div>
    </div>
  )
}
