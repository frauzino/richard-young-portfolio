'use client'

import styles from './projects.module.scss'
import { Slideshow } from '../components/slideshow'
import { Accordion } from '../components/accordion'
import { ProjectData } from '../functions/projects'
import { useState } from 'react'
import clsx from 'clsx'
import { Circle } from '../svg_components/circle_svg'
import { LWiggle } from '../svg_components/Lwiggle_svg'
import { SquaredWiggle } from '../svg_components/squared_wiggle_svg'
import localFont from 'next/font/local'

const rocketeers = localFont({src: '../../../public/fonts/Rocketeers.otf'})

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
          {ProjectData().map((project, index) => (
            index === activeIndex &&
            <div key={`images-project-${index}`} className={styles.slideshowWrapper}>
              <Slideshow slideImages={project.images}/>
              <div className={styles.toolsContainer}>
                <ul className={styles.tools}>
                  {project.content.tools.map((item, index) => (
                    <li key={`tool-${index}`} className={rocketeers.className}>
                      {`${item}${index != project.content.tools.length - 1 ? ' |' : ''}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.accordionContainer}>
          {ProjectData().map((project, index) => (
            <Accordion
              key={`project-${index}`}
              title={project.title}
              url={project.url}
              content={project.content}
              isActive={index === activeIndex}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
