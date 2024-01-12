import styles from "./section.module.scss"
import { SectionHeader } from './section-header'
import { TextBlock } from "./text-block"
import { CardBlock } from "./card-block"


export function Section(props) {
  const header = props.header
  const textContent = props.textContent
  const cards = props.cards

  return (
    <div className={styles.section_container}>
      <SectionHeader
        header={header}
      />
      <div className={styles.section_content}>
        <TextBlock
          textContent={textContent}
        />
        <CardBlock
          cards={cards}
        />
      </div>
    </div>
  )
}
