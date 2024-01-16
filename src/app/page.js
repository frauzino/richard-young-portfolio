'use client'

import styles from './home_page.module.scss'
import { Banner } from './components/banner'
import { Navbar } from './components/navbar'
import { Section } from './components/section'
import { Button } from './components/button'
import { SlideshowCard } from './components/slideshow-card'

export default function HomePage() {
  return (
    <div>
      <a id="banner" className='smooth-scroll'/>
      <Banner
        header={'Richard Young'}
        content={'Full Stack Web Developer and Shopify Expert'}
      />
      <div className={styles.master_container}>
        <Navbar
          header={'Richard Young'}
          navItems={['About Me', 'Tech Stack', 'Projects', 'Contact']}
        />
        <div className={styles.main_content_container}>
          <Section
            header={'About Me'}
            textContent={
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                ac felis egestas libero convallis pretium eu eget quam. Donec sit
                amet justo vitae odio convallis dapibus. Cras vehicula risus diam,
                <br />
                <br />
                non dictum leo vestibulum nec. Aenean eget maximus nibh. Cras quis
                eros magna. Aenean varius, mauris in pharetra faucibus, est arcu porta elit,
                vehicula bibendum felis neque luctus nunc. Etiam sit amet tristique lacus,
                in interdum justo. Nunc vulputate mauris eget vulputate feugiat. Nam non arcu vitae velit
                <br />
                <br />
                laoreet suscipit. Donec quis mi euismod, dignissim est sollicitudin, interdum massa.
                In auctor lorem urna, nec condimentum dui commodo quis. Vestibulum tempor vitae
                elit vitae varius. Etiam quis massa faucibus, fermentum urna id, viverra arcu.
              </p>
            }
          />
          <Section
            header={'Tech Stack'}
            cardType='tech'
            cards={[
              {
                title: 'Figma',
                logo: '/figma_logo.png',
                logoAlt: 'Figma Logo',
                content: 'Some text about figma skills here'
              },
              {
                title: 'Figma',
                logo: '/figma_logo.png',
                logoAlt: 'Figma Logo',
                content: 'Some text about figma skills here'
              },
              {
                title: 'Figma',
                logo: '/figma_logo.png',
                logoAlt: 'Figma Logo',
                content: 'Some text about figma skills here'
              },
              {
                title: 'Figma',
                logo: '/figma_logo.png',
                logoAlt: 'Figma Logo',
                content: 'Some text about figma skills here'
              },
              {
                title: 'Figma',
                logo: '/figma_logo.png',
                logoAlt: 'Figma Logo',
                content: 'Some text about figma skills here'
              }
            ]}
          />
          <Section
            header="Projects"
            cardType='project'
            cards ={[
              {
                title: 'Cafe Pista',
                subHeading: 'Liquid, Javascript',
                textContent: <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean congue suscipit purus sit amet consequat. Nulla sollicitudin
                  iaculis augue in tristique. Donec in lacinia augue. Orci varius natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Integer in gravida erat.
                </p>,
                cardImage: '/pista_homepage.png',
                cardImageAlt: 'Homepage for cafepista.com',
                url: 'https://cafepista.com/',
                slideImages: [
                  {
                    image: '/pista_homepage.png',
                    imageAlt: 'cafepista.com homepage'
                  },
                  {
                    image: '/mtl_skyline.jpg',
                    imageAlt: 'Montreal skyline at sunrise'
                  }
                ]
              },
              {
                title: 'Cafe Pista',
                subHeading: 'Liquid, javascript',
                textContent: '',
                cardImage: '/pista_homepage.png',
                cardImageAlt: 'Homepage for cafepista.com',
                url: ''
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
