'use client'

import styles from './projects.module.scss'
import { Slideshow } from '../components/slideshow'
import { Accordion } from '../components/accordion'
import { ProjectData } from '../functions/projects'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Circle } from '../svg_components/circle_svg'
import { LWiggle } from '../svg_components/Lwiggle_svg'
import { SquaredWiggle } from '../svg_components/squared_wiggle_svg'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleAccordionClick = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return(
    <div className='pageContainer'>
      <div className={styles.projectsContainer}>
        <div className={styles.slideshowContainer}>
            <div className={clsx(styles.imagePlaceholder, activeIndex === null && styles.show)}>
              <Circle />
              <LWiggle />
              <SquaredWiggle />
            </div>
          {ProjectData().map(({images}, index) => (
            index === activeIndex && <Slideshow key={`images-project-${index}`} slideImages={images}/>
          ))}
        </div>
        <div className={styles.accordionContainer}>
          {ProjectData().map(({title, content}, index) => (
            <Accordion
              key={`project-${index}`}
              title={title}
              content={content}
              isActive={index === activeIndex}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
