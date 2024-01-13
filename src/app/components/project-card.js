import { useState } from 'react';
import { Button } from "./button"
import Image from "next/image"
import styles from "./project-card.module.scss"
import { SlideshowCard } from "./slideshow-card"

export function ProjectCard(props) {
  const title = props.title
  const subHeading = props.subHeading
  const cardImage = props.cardImage
  const cardImageAlt = props.cardImageAlt
  const textContent = props.textContent
  const url = props.url
  const slideImages = props.slideImages

  // let showCard = false
  const [cardState, setCardState] = useState(false)

  const showSlideshowCard = () => {
    const showCard = true;
    setCardState(showCard);
  }

  const hideSlideshowCard = () => {
    const showCard = false;
    setCardState(showCard);
  }

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
            <h3 className={styles.card_title} onClick={showSlideshowCard}>{title}</h3>
            <p className={styles.card_subheading}>{subHeading}</p>
          </div>
        </div>
      </div>

      <div className={`${styles.slideshow_card_container} ${cardState === true ? 'show' : 'hidden'}`}>
        <SlideshowCard
          slideImages={slideImages}
          textContent={textContent}
          url={url}
        />
      </div>
      <div
        className={`${styles.blocker} ${cardState === true ? 'show' : 'hidden'}`}
        onClick={hideSlideshowCard}
      />
    </div>
  )
}
