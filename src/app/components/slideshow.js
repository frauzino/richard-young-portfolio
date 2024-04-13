import { useState } from 'react';
import styles from './slideshow.module.scss'
import Image from 'next/image'
import clsx from 'clsx'

export function Slideshow(props) {
  const slideImages = props.slideImages

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slideImages.length;
    setCurrentIndex(newIndex);
  };
  const prevSlide = () => {
    const newIndex = currentIndex > 0 ? (currentIndex - 1) : slideImages.length - 1;
    setCurrentIndex(newIndex);
  };

  setInterval(() => {
    nextSlide()
  }, 5000);

  return (
    <div className={styles.slideshow}>
      {slideImages?.map((slide, index) => (
        <Image
          key={`slide-${index}`}
          className={clsx(styles.slideImage, index === currentIndex ? styles.active : '')}
          loading='lazy'
          src={slide.image}
          alt={slide.imageAlt}
          width={1000}
          height={1000}
          style={slide.imageFormat == 'mobile' ? {objectFit: 'contain'} : {objectFit: 'cover'}}
        />
      ))}
      {/* <div className={styles.left_wrapper} onClick={prevSlide}>
        <Image
          className={styles.left}
          loading='lazy'
          src='/base_chevron_left.svg'
          alt="Left chevron"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.right_wrapper} onClick={nextSlide}>
      <Image
          className={styles.left}
          loading='lazy'
          src='/base_chevron_right.svg'
          alt="Right chevron"
          width={50}
          height={50}
        />
      </div> */}
    </div>
  )
}
