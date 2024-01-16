import styles from "./section.module.scss"
import { SectionHeader } from './section-header'
import { TextBlock } from "./text-block"
import { CardBlock } from "./card-block"


export function Section(props) {
  const header = props.header
  const textContent = props.textContent
  const cardType = props.cardType
  const cards = props.cards

  return (
    <div className={styles.section_container}>
      <a id={`${header}`} />
      <SectionHeader
        header={header}
      />
      <div className={styles.section_content}>
        <TextBlock
          textContent={textContent}
        />
        <CardBlock
          cardType={cardType}
          cards={cards}
        />
      </div>
    </div>
  )
}
