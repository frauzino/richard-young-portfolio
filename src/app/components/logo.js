import styles from './logo.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export function Logo() {
  return(
    <Link className={styles.logoContainer} href={'/'}>
      <Image
        className={styles.logo}
        src='/logo.svg'
        width={100}
        height={100}
        alt='RY logo'
      />
    </Link>
  )
}
