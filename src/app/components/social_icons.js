'use client'

import styles from './social_icons.module.scss'
import Image from 'next/image'
import clsx from 'clsx'

export function SocialIcons({socials}) {

  return (
    <div className={styles.socials_wrapper}>
      <div className={styles.social_icons_wrapper}>
        {socials?.map((social, index) => (
          <a
            key={`social-${index}`}
            className={clsx(styles.icon_wrapper, 'tooltip')}
            href={social.url}
          >
            <Image
              className={styles.icon}
              src={social.icon}
              alt={`Richard Young's ${social.app}`}
              width={60}
              height={60}
            />
            <span className='tooltip-text'>{social.app}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
