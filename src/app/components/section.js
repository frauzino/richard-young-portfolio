import styles from "./section.module.scss"
import { SectionHeader } from './section-header'
import { TextBlock } from "./text-block"
import { CardBlock } from "./card-block"
import { ContactBlock } from "./contact-block"


export function Section(props) {
  const header = props.header
  const blockType = props.blockType
  const textContent = props.textContent
  const cardType = props.cardType
  const cards = props.cards
  const socials = props.socials

  const blockSwitch = (blockType) => {
    switch (blockType) {
      case 'contact':
        return (
          <ContactBlock
            socials={socials}
          />
        );
      case 'card':
        return (
          <CardBlock
            cardType={cardType}
            cards={cards}
          />
        );
      default:
        return (
          <TextBlock
            textContent={textContent}
          />
        );
    }
  }

  return (
    <div className={styles.section_container}>
      <a id={`${header}`} />
      <SectionHeader
        header={header}
      />
      <div className={styles.section_content}>
        {blockSwitch(blockType)}
      </div>
    </div>
  )
}
