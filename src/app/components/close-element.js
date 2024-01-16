import styles from './close-element.module.scss'
import Image from 'next/image'

export function CloseElement({ closeElement }) {

  return (
    <div className={styles.x_icon_wrapper}>
      <Image
        className={styles.x_icon}
        src='/x.svg'
        alt='X icon'
        width={20}
        height={20}
        onClick={closeElement}
      />
    </div>
  )

}
