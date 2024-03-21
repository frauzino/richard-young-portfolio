import styles from './project-card-2.module.scss'
import { SlideshowCard } from './slideshow-card';
import { useState } from 'react';
import localFont from 'next/font/local';
import clsx from 'clsx';

const contourGenerator = localFont({src: '../../../public/fonts/contour-generator.regular.otf'})

export function ProjectCardMetal(props) {
  const title = props.title
  const subHeading = props.subHeading
  const cardImage = props.cardImage
  const cardImageAlt = props.cardImageAlt
  const textContent = props.textContent
  const url = props.url
  const slideImages = props.slideImages

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

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card} onClick={openElement}>
        <h2 className={clsx(styles.card_title, contourGenerator.className)}>{title}</h2>
        <p className={styles.card_subheading}>{subHeading}</p>
        <div className={styles.gloss}></div>
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
