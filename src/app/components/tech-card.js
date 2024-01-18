import { useRef } from 'react'
import { ProgressBar } from './progress-bar'
import styles from './tech-card.module.scss'
import Image from 'next/image'

export function TechCard(props) {
  const cardTitle = props.cardTitle
  const cardLogo = props.cardLogo
  const cardLogoAlt = props.cardLogoAlt
  const cardContent = props.cardContent
  const skillLevel = props.skillLevel
  const startDate = props.startDate

  const experience = (startDate) => {
    let today = new Date()
    let newDate = Date.parse(startDate)
    const timeDif = today - newDate
    const yearDif = (timeDif / 1000 / (60 * 60 *24 * 365)).toFixed(1)
    return yearDif < 0.5 ? 0.5 : yearDif
  }

  const cardToFlip = useRef()

  const flipCardBack = () => {
    cardToFlip.current.style.transform = 'rotateY(180deg)'
  }

  const flipCardFront = () => {
    cardToFlip.current.style.transform = 'rotateY(0deg)'
  }


  return (
    <div className={styles.card_container}>
      <div className={styles.card} ref={cardToFlip}>
        <div className={styles.card_front} onClick={flipCardBack}>
          <h3 className={styles.card_title}>{cardTitle}</h3>
          <div className={styles.logo_background}>
            <Image
              className={styles.logo}
              loading="lazy"
              // priority={true}
              src={cardLogo}
              alt={cardLogoAlt}
              height={120}
              width={120}
            />
          </div>
        </div>
        <div className={styles.card_back} onClick={flipCardFront}>
          {/* <h3 className={styles.card_title}>{cardTitle}</h3> */}
          <ProgressBar
            value={skillLevel}
            type='Proficiency'
          />
          <ProgressBar
            value={experience(startDate)}
            type='Experience'
          />
        </div>
      </div>
    </div>
  )
}
