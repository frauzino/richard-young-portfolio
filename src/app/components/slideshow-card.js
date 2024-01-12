import { Button } from './button'
import { Slideshow } from './slideshow'
import styles from './slideshow-card.module.scss'

export function SlideshowCard(props) {
  const slideImages = props.slideImages
  const textContent = props.textContent
  const url = props.url
  return (
    <div className={styles.card}>
      <div className={styles.slideshow_container}>
        <Slideshow
          slideImages={slideImages}
        />
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.text_content_container}>{textContent}</div>
        <div className={styles.button_container}>
          <Button
            buttonText='Visit'
            url={url}
          />
        </div>
      </div>
    </div>
  )
}
