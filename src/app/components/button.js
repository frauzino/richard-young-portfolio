import Link from 'next/link'
import styles from './button.module.scss'
import localFont from 'next/font/local'
import clsx from 'clsx'

const contourGenerator = localFont({ src: '../../../public/fonts/contour-generator.regular.otf' })

export function Button(props) {
  const buttonText = props.buttonText
  const url = props.url

  return (
    <div className={styles.button_wrapper}>
      <Link href={url} className={clsx(styles.button, contourGenerator.className)}>
      <div className={styles.gloss}/>
        {buttonText}
        </Link>
    </div>
  )
}
