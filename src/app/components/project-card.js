import { useState } from 'react';
import { useRef } from 'react';
import { Button } from "./button"
import Image from "next/image"
import styles from "./project-card.module.scss";
import { SlideshowCard } from './slideshow-card';

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

  const openElement = () => {
    const showCard = true;
    setCardState(showCard);
  }

  const closeElement = () => {
    const showCard = false;
    setCardState(showCard);
  }

  const toggleCard = () => {
    setCardState(!cardState);
  }

  const cardToFlip = useRef()

  const flipCardBack = () => {
    cardToFlip.current.style.transform = 'rotateY(180deg)'
  }

  const flipCardFront = () => {
    cardToFlip.current.style.transform = 'rotateY(0deg)'
  }

  return (
    <div className={styles.card_outside_container}>
      <div
        className={`${styles.card_container}::before`}
        style={{width: '28rem'}}
      />
      <div className={styles.card_container}>
        <div className={styles.card} ref={cardToFlip}>
          <div className={styles.card_front} onClick={flipCardBack}>
            <Image
              className={styles.card_image}
              loading='lazy'
              src={cardImage}
              alt={cardImageAlt}
              height={600}
              width={800}
            />
          </div>
          <div className={styles.card_back} onClick={flipCardFront}>
            <h3
              className={styles.card_title}
              onClick={openElement}
            >
              {title}
            </h3>
            <p className={styles.card_subheading}>{subHeading}</p>
          </div>
        </div>
      </div>

      <div
        className={`${styles.slideshow_card_container}`}
        style={cardState === true ? {transform: 'translate(0%)'} : {}}
      >
        <SlideshowCard
          slideImages={slideImages}
          textContent={textContent}
          url={url}
          toggleCard={toggleCard}
        />
      </div>
      <div
        className={`${styles.blocker} ${cardState === true ? 'show' : 'hidden'}`}
        onClick={closeElement}
      />
    </div>
  )
}
