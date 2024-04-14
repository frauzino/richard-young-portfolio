'use client'

import styles from './about_me.module.scss'
import clsx from 'clsx'
import Image from 'next/image'
import localFont from 'next/font/local'
import Techs from '../functions/techs'
import { saveAs } from 'file-saver'

const rocketeers = localFont({src: '../../../public/fonts/Rocketeers.otf'})

export default function AboutMe() {
  const saveFile = () => {
    saveAs(
      '/Richard_Young_CV.pdf',
      '/Richard_Young_CV.pdf'
    )
  }

  return(
    <div className='pageContainer'>
      <div className={styles.aboutMeContainer}>
        <div className={styles.textContainer}>
          Hi, I'm Richard, a web developer based in Montreal, Canada.
          I'm a full stack developer with a background in fine dining and pastry.
          I approach any project with enthusiasm and an eye for detail.
          I pride myself on writing clear, maintainable code using modular components, primarily in Ruby on Rails and React.js.
          I'm also an avid gardener, with a collection of over 100 tropical houseplants and a small urban vegetable garden in the summer.
          I appreciate taking on new, creative challenges where I can learn and continue to grow as a developer.
          <div className={styles.downloadWrapper}>
            <Image
              className='download-arrow'
              src='/download_arrow.svg'
              alt='download icon'
              width={35}
              height={35}
            />
            <h3 className={clsx(styles.link, rocketeers.className)} onClick={saveFile}>Download My CV</h3>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h2 className={clsx(styles.sectionHeader, rocketeers.className)} >My Technical Skills</h2>
          <div className={styles.iconsContainer}>
            {Techs().map((tech, index) => (
              <div className={clsx(styles.icon_wrapper, 'tooltip')}>
                <Image
                  key={`tech-${index}`}
                  className={clsx(styles.icon)}
                  src={tech.src}
                  alt={tech.alt}
                  width={100}
                  height={100}
                />
                <span className='tooltip-text'>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
