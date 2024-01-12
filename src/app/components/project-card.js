import { Button } from "./button"
import Image from "next/image"
import styles from "./project-card.module.scss"

export function ProjectCard(props) {
  const title = props.title
  const subHeading = props.subHeading
  const textContent = props.textContent
  const cardImage = props.cardImage
  const cardImageAlt = props.cardImageAlt
  const url = props.url

  return (
    <div>
      <div className={`${styles.card_container}::before`} style={{width: '28rem'}}/>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <div className={styles.card_front}>
            <Image
              className={styles.card_image}
              src={cardImage}
              alt={cardImageAlt}
              height={600}
              width={800}
            />
          </div>

          <div className={styles.card_back}>
            <h3 className={styles.card_title}>{title}</h3>
            <p className={styles.card_subheading}>{subHeading}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
