import styles from "./card-block.module.scss"
import { ProjectCard } from "./project-card"
import { TechCard } from "./tech-card"

export function CardBlock(props) {
  const cardType = props.cardType
  const cards = props.cards

  switch(cardType){
    case 'tech':
      return (
        <div className={`${styles.card_block} ${styles.between_just}`}>
          {cards?.map((card, index) =>(
            <TechCard
              key={`techcard-${index}`}
              cardTitle={card.title}
              cardLogo={card.logo}
              cardLogoAlt={card.logoAlt}
              cardContent={card.content}
            />
          ))}
        </div>
      )
    case 'project':
      return (
        <div className={`${styles.card_block} ${styles.center_just}`}>
          {cards?.map((card, index) =>(
            <ProjectCard
              key={`projectcard-${index}`}
              title={card.title}
              subHeading={card.subHeading}
              textContent={card.textContent}
              cardImage={card.cardImage}
              cardImageAlt={card.cardImageAlt}
              url={card.url}
              slideImages={card.slideImages}
            />
          ))}
        </div>
      )
    default:
      return (
        <div></div>
      )
  }

}
