import { useState } from 'react';
import styles from './slideshow.module.scss'
import Image from 'next/image'

export function Slideshow(props) {
  const slideImages = props.slideImages

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slideImages.length;
    setCurrentIndex(nextIndex);
  };
  const prevSlide = () => {
    const nextIndex = (currentIndex - 1) % 0;
    setCurrentIndex(nextIndex);
  };

  console.log('index', currentIndex)


  return (
    <div className={styles.slideshow}>
      {slideImages?.map((slide, index) => (
        <Image
          key={`slide-${index}`}
          className={`${styles.slideImage} ${index === currentIndex ? `${styles.active}` : ''}`}
          src={slide.image}
          alt={slide.imageAlt}
          width={800}
          height={600}
        />
      ))}
      <div className={styles.left_wrapper} onClick={prevSlide}>
        <Image
          className={styles.left}
          src='/base_chevron_left.svg'
          alt="Left chevron"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.right_wrapper} onClick={nextSlide}>
      <Image
          className={styles.left}
          src='/base_chevron_right.svg'
          alt="Right chevron"
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}
