import styles from './tech-card.module.scss'
import Image from 'next/image'

export function TechCard(props) {
  const cardTitle = props.cardTitle
  const cardLogo = props.cardLogo
  const cardLogoAlt = props.cardLogoAlt
  const cardContent = props.cardContent

  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <div className={styles.card_front}>
          <h3 className={styles.card_title}>{cardTitle}</h3>
          <div className={styles.logo_background}>
            <Image
              className={styles.logo}
              loading="lazy"
              src={cardLogo}
              alt={cardLogoAlt}
              height={600}
              width={800}
            />
          </div>
        </div>
        <div className={styles.card_back}>
          <h3 className={styles.card_title}>{cardTitle}</h3>
          <div className={styles.card_content}>{cardContent}</div>
        </div>
      </div>
    </div>
  )
}
