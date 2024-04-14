export function ProjectData() {
  const projects = [
    {
      title: 'Overwise',
      url: 'https://www.overwise-gg.com/',
      content: {
        summary: `An application for Overwatch players, Overwise allows players to track their performance though multiple seasons of competitive play.
          Overwise offers rich data to allow users to see how they are performing by several different metrics, including Hero, map, gamemode and more.`,
        features: [
          'Login using Firebase; users can create an account or link their Google account.',
          'Track your matches by inputting match results.',
          'Filter matches to display rich data for performance tracking.'
        ],
        tools: [
          'Node.js',
          'MongoDB',
          'React.js',
          'Express.js',
          'Firebase'
        ]
      },
      images: [
        {
          image: '/overwise_screenshot_1.png',
          imageAlt: 'Overwise landing page'
        },
        {
          image: '/overwise_screenshot_2.png',
          imageAlt: 'Overwise hero usage data'
        },
        {
          image: '/overwise_screenshot_3.png',
          imageAlt: 'Overwise maps played data'
        },
        {
          image: '/overwise_screenshot_4.png',
          imageAlt: 'Overwise login screen using firebase'
        }
      ]
    },
    {
      title: 'Cafe Pista',
      url: 'https://cafepista.com/',
      content: {
        summary: `A Shopify webstore for a group of local Montréal Cafés. This project required working closely with a web designer
          and developing several custom pages and components as well as integrating the webstore with several 3rd party apps. In the past year
          the new webstore has seen a 15% increase in sales and an 11% increase in conversion rate.`,
        features:[
          'Buy products online.',
          'Monthly subscription service.',
          'Wholesale support for commercial accounts.'
        ],
        tools: [
          'Shopify',
          'Liquid',
          'JavaScript',
          'jQuery'
        ]
      },
      images: [
        {
          image: '/pista_screenshot_1.webp',
          imageAlt: ''
        },
        {
          image: '/pista_screenshot_2.webp',
          imageAlt: ''
        },
        {
          image: '/pista_screenshot_3.webp',
          imageAlt: ''
        },
        {
          image: '/pista_screenshot_4.webp',
          imageAlt: ''
        },
        {
          image: '/pista_screenshot_5.webp',
          imageAlt: ''
        },
        {
          image: '/pista_screenshot_6.webp',
          imageAlt: ''
        },
      ]
    },
    {
      title: 'Dish',
      url: 'https://letsdish.io/',
      content: {
        summary: `A companion app for existing dating apps, Dish's goal is to help reduce toxicity and promote safe encounters in the online dating community.
          Dish is currently in the funding stage, as such the current version is primarily focused at getting Dish Reports. Towards that end we designed a gamifaction
          system including points and collectible badges to encourage completing Dish Reports and inviting friends.`,
        features: [
          'Fill out Dish Reports, an objective review of your date.',
          'Facial detection and matching to avoid fraudulent reports.',
          'Earn collectible badges, compare your personal and university campus score in leaderboards.'
        ],
        tools: [
          'Ruby on Rails',
          'PostgreSQL',
          'JavaScript',
          'Figma'
        ]
      },
      images: [
        {
          image: '/dish_screenshot_1.webp',
          imageAlt: 'Dish homescreen'
        },
        {
          image: '/dish_screenshot_2.webp',
          imageAlt: 'Dish submit a date feature'
        },
        {
          image: '/dish_screenshot_3.webp',
          imageAlt: 'Dish report screen'
        },
        {
          image: '/dish_screenshot_4.webp',
          imageAlt: 'Dish users leaderboard'
        },
        {
          image: '/dish_screenshot_5.webp',
          imageAlt: 'Dish schools ranking'
        }
      ]
    },
    {
      title: 'Doppel',
      url: 'https://new-doppel.herokuapp.com/',
      content: {
        summary: `Doppel is an AirBnb clone where a user can hire a doppelganger to replace them at an event they don't want to attend.
          Built with 2 team mates under a time crunch this app was a great way to begin live developing with Ruby on Rails.`,
        features: [
          'Live area map.',
          'Inititate and track bookings.'
        ],
        tools: [
          'Ruby on Rails',
          'Figma',
          'JavaScript',
        ],
      },
      images: [
        {
          image: '/doppel_screenshot_1.webp',
          imageAlt: 'Doppel home page'
        },
        {
          image: '/doppel_screenshot_2.webp',
          imageAlt: 'Doppel booking page'
        },
        {
          image: '/doppel_screenshot_3.webp',
          imageAlt: 'Doppel bookings manager page'
        }
      ]
    },
    {
      title: 'Foragr',
      url: 'https://foragr.herokuapp.com/',
      content: {
        summary: `An app for the foraging community to share finds and learn more about local wild edibles.
          This project was built with two team mates under a strict deadline to ensure the app was ready for a live demo.
          Challenges included time management and including a functional map with clickable drop pins, and a web scraping feature
          that could fill the app's index with local plant species.`,
        features: [
          'Live area map with clickable pins.',
          'Bookmark caches or species to save them.',
          'Share finds with other users.',
          'Species index sourced via web scraper.'
        ],
        tools: [
          'Ruby on Rails',
          'JavaScript',
          'PostgreSQL',
          'Figma',
          'Bootstrap'
        ]
      },
      images: [
        {
          image: '/foragr_screenshot_1.webp',
          imageAlt: 'Foragr landing page'
        },
        {
          image: '/foragr_screenshot_2.webp',
          imageAlt: 'Selection of Foragr screens'
        },
        {
          image: '/foragr_screenshot_3.webp',
          imageAlt: 'Foragr home/map'
        },
        {
          image: '/foragr_screenshot_4.webp',
          imageAlt: 'Foragr showing an open cache'
        },
        {
          image: '/foragr_screenshot_5.webp',
          imageAlt: 'Foragr showing saved species'
        },
        {
          image: '/foragr_screenshot_6.webp',
          imageAlt: 'Foragr showing the species page'
        }
      ]
    }
  ]

  return projects
}
