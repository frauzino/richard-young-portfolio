import Link from 'next/link'
import styles from './button.module.scss'

export function Button(props) {
  const buttonText = props.buttonText
  const url = props.url

  return (
    <div className={styles.button_wrapper}>
      <Link href={url} className={styles.button}>
        {buttonText}
        </Link>
    </div>
  )
}
