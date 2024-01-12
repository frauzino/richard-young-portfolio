import styles from './banner.module.scss'

export function Banner(props) {
  const header = props.header
  const content = props.content

  return (
    <div className={styles.banner}>
      <div className={styles.banner__text_box}>
        <h1 className={styles.text_box__header}>{header}</h1>
        <p className={styles.text_box__content}>{content}</p>
      </div>
    </div>
  )
}
