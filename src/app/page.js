'use client'

import styles from './home_page.module.scss'
import { Banner } from './components/banner'
import { Navbar } from './components/navbar'
import { Section } from './components/section'
import { ProgressBar } from './components/progress-bar'
import { MobileNav } from './components/mobile-nav'

export default function HomePage() {
  return (
    <div>
      <a id="banner" className='smooth-scroll'/>
      <Banner
        header={'Richard Young'}
        content={'Full Stack Web Developer and Shopify Expert'}
      />
      <MobileNav
        navItems={['About Me', 'Tech Stack', 'Projects', 'Contact']}
      />
      <div className={styles.master_container}>
        <Navbar
          header={'Richard Young'}
          navItems={['About Me', 'Tech Stack', 'Projects', 'Contact']}
          socials={[
            {
              app: 'linkedin',
              url: 'https://www.linkedin.com/in/richard-frauzino-young/'
            },
            {
              app: 'github',
              url: 'https://github.com/frauzino'
            }
          ]}
        />
        <div className={styles.main_content_container}>
          <Section
            header={'About Me'}
            blockType="text"
            textContent={
              <p>
                Hi, I&apos;m Richard, a web developer based in Montreal, Canada.
                <br />
                <br />
                I&apos;m passionate about bringing exciting ideas to life and solving interesting problems
                through robust, maintanable code.
                <br />
                <br />
                As an ex fine dining chef I bring a unique view and attitude to development, I&apos;m comfortable working with
                tight deadlines while delivering an excellent product within budget.
              </p>
            }
          />
          <Section
            header={'Tech Stack'}
            blockType="card"
            cardType='tech'
            cards={[
              {
                title: 'Figma',
                logo: '/figma_logo.png',
                logoAlt: 'Figma Logo',
                content: 'Some text about figma skills here',
                skillLevel: '30',
                startDate: '2022-10-01'
              },
              {
                title: 'Javascript',
                logo: '/javascript_logo.png',
                logoAlt: 'Javascript Logo',
                content: 'Some text about figma skills here',
                skillLevel: 50,
                startDate: '2022-10-01'
              },
              {
                title: 'React',
                logo: '/react_logo.png',
                logoAlt: 'React Logo',
                content: 'Some text about figma skills here',
                skillLevel: 25,
                startDate: '2024-01-01'
              },
              {
                title: 'Ruby on Rails',
                logo: '/ruby_on_rails_logo.png',
                logoAlt: 'Figma Logo',
                content: 'Some text about figma skills here',
                skillLevel: 65,
                startDate: '2022-10-01'
              },
              {
                title: 'Shopify',
                logo: '/shopify_logo.png',
                logoAlt: 'Shopify Logo',
                content: 'Some text about figma skills here',
                skillLevel: 70,
                startDate: '2023-01-01'
              },
              {
                title: 'Python',
                logo: '/python_logo.png',
                logoAlt: 'Python Logo',
                content: 'Some text about figma skills here',
                skillLevel: 10,
                startDate: '2023-01-01'
              },
              {
                title: 'Django',
                logo: '/django_logo.png',
                logoAlt: 'Django Logo',
                content: 'Some text about figma skills here',
                skillLevel: 5,
                startDate: '2023-01-01'
              },
              {
                title: 'CSS',
                logo: '/css3_logo.png',
                logoAlt: 'CSS3 Logo',
                content: 'Some text about figma skills here',
                skillLevel: 75,
                startDate: '2022-10-01'
              },
              {
                title: 'Next.js',
                logo: '/nextjs_logo.svg',
                logoAlt: 'Nextjs Logo',
                content: 'Some text about figma skills here',
                skillLevel: 20,
                startDate: '2024-01-01'
              }

            ]}
          />
          <Section
            header="Projects"
            blockType="card"
            cardType='project'
            cards ={[
              {
                title: 'Cafe Pista',
                subHeading: 'Liquid, Javascript',
                textContent: <p>
                  Cafe Pista is a local café here in Montreal. I rebuilt their shopify webstore using a modified version of
                  an existing Shopify theme. I was the sole developer on this project, but I worked closely with a designer.
                  There were several custom components involved including slideshows, multiple
                  styles of collection pages, and timeline. The webstore integrates with several Shopify apps for specific
                  functions, such as language translation, subscription services and wholesale services. Some of the challenges
                  of this project revolved around integrating these apps, other challenges were in responsive styling, and conditional
                  styling, dependant on collection and product.
                </p>,
                cardImage: '/pista_screenshot_1.png',
                cardImageAlt: 'Homepage for cafepista.com',
                url: 'https://cafepista.com/',
                slideImages: [
                  {
                    image: '/pista_screenshot_1.png',
                    imageAlt: 'cafepista.com homepage'
                  },
                  {
                    image: '/pista_screenshot_2.png',
                    imageAlt: 'Screenshot of coffee collection from cafepista.com'
                  },
                  {
                    image: '/pista_screenshot_3.png',
                    imageAlt: 'Screenshot of coffee product page from cafepista.com'
                  },
                  {
                    image: '/pista_screenshot_4.png',
                    imageAlt: 'Screenshot of "our spaces" page from cafepista.com'
                  },
                  {
                    image: '/pista_screenshot_5.png',
                    imageAlt: 'Screenshot of "our story" page from cafepista.com'
                  },
                  {
                    image: '/pista_screenshot_6.png',
                    imageAlt: 'Screenshot of iced coffee collection from cafepista.com'
                  }
                ]
              },
              {
                title: 'Dish.',
                subHeading: 'Ruby on Rails, javascript',
                textContent: <p>
                  This is stage one in the development of Dish, an app designed to integrate with existing dating apps and help
                  ensure safety in the online dating scene. Stage one is primarily designed to collect questionnaire responses from users.
                  With this goal I designed a gamification system to encourage users to fill out reports and to invite their friends.
                  Under this system users can earn badges, points, and compete against other schools to showcase the school&apos;s
                  safety score. Challenges of this project revolved mainly around the questionnaire, and ensuring the results were
                  accessible and usable. Future goals for this project involve allowing users to get reports on their upcoming date
                  using image matching and AI.
                </p>,
                cardImage: '/dish_screenshot_1.png',
                cardImageAlt: 'Homepage for letsdish.io',
                url: 'http://letsdish.io/',
                slideImages: [
                  {
                    image: '/dish_screenshot_1.png',
                    imageAlt: 'Screenshot of home page from letsdish.io'
                  },
                  {
                    image: '/dish_screenshot_2.png',
                    imageAlt: 'Screenshot of section of home page from letsdish.io'
                  },
                  {
                    image: '/dish_screenshot_3.png',
                    imageAlt: 'Screenshot of Dish Report from letsdish.io'
                  },
                  {
                    image: '/dish_screenshot_4.png',
                    imageAlt: 'Screenshot of leaderboard from letsdish.io'
                  },
                  {
                    image: '/dish_screenshot_5.png',
                    imageAlt: 'Screenshot of campus rankings from letsdish.io'
                  }
                ]
              },
              {
                title: 'Doppel',
                subHeading: 'Ruby on Rails, javascript',
                textContent: <p>
                  Doppel is an AirBnb clone where a user can hire a doppelganger to replace them at an event they don&apos;t want
                  to attend. Built with 2 team mates under a time crunch this app was a great way to begin live developing with
                  Ruby on Rails. Challenges included a live map with clickable pins and scheduling bookings between 2 users.
                </p>,
                cardImage: '/doppel_screenshot_1.png',
                cardImageAlt: 'Homepage for Doppel',
                url: 'https://new-doppel.herokuapp.com/',
                slideImages: [
                  {
                    image: '/doppel_screenshot_1.png',
                    imageAlt: 'Screenshot of home page from Doppel'
                  },
                  {
                    image: '/doppel_screenshot_2.png',
                    imageAlt: 'Screenshot of booking from Doppel'
                  },
                  {
                    image: '/doppel_screenshot_3.png',
                    imageAlt: 'Screenshot of incoming and outgoing bookings from Doppel'
                  }
                ]
              },
              {
                title: 'Foragr',
                subHeading: 'Ruby on Rails, javascript',
                textContent: <p>
                  An app for the foraging community to share finds and learn more about local wild edibles. This project was built with
                  two team mates under a strict deadline to ensure the app was ready for a live demo.
                  Challenges included time management and including a functional map with clickable drop pins, and a web scraping feature
                  that could fill the app&apos;s index with local plant species.
                </p>,
                cardImage: '/foragr_screenshot_1.png',
                cardImageAlt: 'Landing page for Foragr',
                url: 'https://github.com/frauzino/foragr',
                slideImages: [
                  {
                    image: '/foragr_screenshot_1.png',
                    imageAlt: 'Screenshot of landing page from Foragr'
                  },
                  {
                    image: '/foragr_screenshot_2.png',
                    imageAlt: 'Screenshot of several screens of Foragr'
                  },
                  {
                    image: '/foragr_screenshot_3.png',
                    imageAlt: 'Screenshot of homepage and map feature of Foragr',
                    imageFormat: 'mobile'
                  },
                  {
                    image: '/foragr_screenshot_4.png',
                    imageAlt: 'Screenshot of an active cache, featuring map, and images uploaded by users.',
                    imageFormat: 'mobile'
                  },
                  {
                    image: '/foragr_screenshot_5.png',
                    imageAlt: 'Screenshot of saved species feature of Foragr',
                    imageFormat: 'mobile'
                  },
                  {
                    image: '/foragr_screenshot_6.png',
                    imageAlt: 'Screenshot of bookmarking a species in Foragr',
                    imageFormat: 'mobile'
                  }
                ]
              }
            ]}
          />
          <Section
            header="Contact"
            blockType="contact"
            socials={[
              {
                app: 'linkedin',
                url: 'https://www.linkedin.com/in/richard-frauzino-young/'
              },
              {
                app: 'github',
                url: 'https://github.com/frauzino'
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}
