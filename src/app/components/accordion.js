import styles from './accordion.module.scss'
import localFont from 'next/font/local'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

const rocketeers = localFont({src: '../../../public/fonts/Rocketeers.otf'})

export function Accordion({title, url, content, isActive, onClick}) {

  return(
    <div className={styles.accordion}>
      <div className={styles.accordionItem}>
        <div className={styles.titleWrapper} onClick={onClick}>
          <h4 className={clsx(styles.title, rocketeers.className)}>{title}</h4>
          <div className={clsx(styles.icon)}>{isActive ? '-' : '+'}</div>
        </div>
        <div className={clsx(styles.content, isActive && styles.showContent)}>
          {content.summary}
          <div className={styles.featuresContainer}>
            <h3 className={rocketeers.className}>Features</h3>
            <ul className={styles.features}>
              {content.features.map((item, index) => (
                <li key={`tool-${index}`}>{item}</li>
                ))}
            </ul>
          </div>
          <Link href={url} target='_blank' className={styles.linkWrapper}>
            <Image
              className='new-tab'
              src='/new_tab.svg'
              alt='new tab icon'
              width={30}
              height={30}
            />
            <h3 className={clsx(styles.link, rocketeers.className)}>Visit</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}
