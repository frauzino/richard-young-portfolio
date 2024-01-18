import styles from './banner.module.scss'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export function Banner(props) {
  const header = props.header
  const content = props.content

  return (
    <div className={styles.banner_container}>
      <MouseParallaxContainer
        className={styles.banner}
        resetOnLeave
      >
        <MouseParallaxChild
          className={styles.parallax_banner}
          factorX={.03}
          factorY={.01}
        />
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
        >
          <div className={styles.banner__text_box}>
            <h1 className={styles.text_box__header}>{header}</h1>
            <p className={styles.text_box__content}>{content}</p>
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  )
}
