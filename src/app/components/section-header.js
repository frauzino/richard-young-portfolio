import styles from "./section-header.module.scss"

export function SectionHeader(props) {
  const header = props.header

  return (
    <div className={styles.section_header_wrapper}>
      <h1 className={styles.section_header}>{header}</h1>
    </div>
  )
}
