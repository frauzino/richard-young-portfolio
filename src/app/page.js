import styles from './home_page.module.scss'
import { Banner } from './components/banner'
import { Navbar } from './components/navbar'
import { Section } from './components/section'

export default function HomePage() {
  return (
    <div>
      <Banner
        header={'Richard Young'}
        content={'Full Stack Web Developer and Shopify Expert'}
      />
      <div className={styles.master_container}>
        <Navbar
          header={'Richard Young'}
          navItems={['About', 'Tech Stack', 'Projects', 'Contact']}
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
            cards={[
              {
                title: 'Figma',
                logo: '/figma_logo.png',
                logoAlt: 'Figma Logo',
                content: 'Some text about figma skills here'
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
