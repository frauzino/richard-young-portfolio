import styles from "./card-block.module.scss"
import { TechCard } from "./tech-card"

export function CardBlock(props) {
  const cards = props.cards

  return (
    <div className={styles.card_block}>
      {cards?.map((card) =>(
        <TechCard
          key={card.index}
          cardTitle={card.title}
          cardLogo={card.logo}
          cardLogoAlt={card.logoAlt}
          cardContent={card.content}
        />
      ))}
    </div>
  )
}
