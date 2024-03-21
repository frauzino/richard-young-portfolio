import styles from './banner_2.module.scss'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import clsx from 'clsx';
import localFont from 'next/font/local'
import { useEffect, useState } from 'react';

const shadeBlue = localFont({ src: '../../../public/fonts/shade-blue.regular.ttf' })

export function BannerNew(props) {
  const header = props.header
  const content = props.content

  const shadowLimit = 600;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const updateShadow = (evX, evY) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const center = { x: w / 2, y: h / 2 };

    let shadowX = (center.x - evX) / 30;
    let shadowY = (center.y - evY) / 30;

    shadowX = Math.max(Math.min(shadowX, shadowLimit), -shadowLimit);
    shadowY = Math.max(Math.min(shadowY, shadowLimit), -shadowLimit);

    return {
      x: Math.ceil(shadowX),
      y: Math.ceil(shadowY),
    };
  };

  useEffect(() => {
    const moveEvent = 'ontouchstart' in document.documentElement ? 'touchmove' : 'mousemove';

    const handleMove = (event) => {
      const evX = moveEvent === 'touchmove' ? event.touches[0].clientX : event.clientX;
      const evY = moveEvent === 'touchmove' ? event.touches[0].clientY : event.clientY;

      setPosition(updateShadow(evX, evY));
    };

    window.addEventListener(moveEvent, handleMove);

    return () => {
      window.removeEventListener(moveEvent, handleMove);
    };
  }, []);

  const shadowStyle = {
    textShadow: `0px 0px 0px #d9d9d9,
                 0px 0px 7px #d9d9d9,
                 0px 0px 15px #0fa,
                 ${position.x}px ${position.y}px 42px #0fa,
                 ${position.x}px ${position.y}px 82px #0fa,
                 ${position.x}px ${position.y}px 92px #0fa,
                 ${position.x}px ${position.y}px 102px #0fa,
                 ${position.x}px ${position.y}px 151px #0fa`,
    transform: `skew(${position.x / 50}deg, ${position.y / 50}deg)`
  };

  return (
    <div className={styles.banner_container}>
      <MouseParallaxContainer
        className={styles.banner}
        resetOnLeave
        inverted
      >
        <MouseParallaxChild
          className={styles.parallax_banner}
          factorX={0}
          factorY={0}
        />
        <MouseParallaxChild
          factorX={0}
          factorY={0}
        >
          <div className={styles.banner__text_box}>
            <h1 className={clsx(styles.text_box__header, shadeBlue.className)} title={header} style={shadowStyle}>{header}</h1>
            <p className={clsx(styles.text_box__content, shadeBlue.className)} title={content} style={shadowStyle}>{content}</p>
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  )
}
