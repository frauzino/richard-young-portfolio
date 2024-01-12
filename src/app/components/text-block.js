import styles from "./text-block.module.scss"

export function TextBlock(props) {
  const textContent = props.textContent
  return (
    <div className={styles.text_block}>
      <div className={styles.text_content}>{textContent}</div>
    </div>
  )
}
