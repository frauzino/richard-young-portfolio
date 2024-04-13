export function ProjectData() {
  const projects = [
    {
      title: 'Overwise',
      content: `An application for Overwatch players, Overwise allows players to track their performance though a season of competitive play.
        Overwise offers rich data to allow users to see how they are performing by several different metrics, including Hero, map, gamemode and more.
        Overwise is a MERN app, build with Node.js, MongoDB, Express.js, and React.js. It relies on the Overfast API to collect game data, I also
        integrated firebase to simplify login for users. Challenges were finding appropriate data as Overwatch does not have a publicly available API,
        Overfast API offers most data, but not the live competitive season. To get that data I needed to scrape the Overwatch website itself.Another
        issue was managing state for the filters. They needed to be dynamic, and stackable, so it was important to effectively manage state and useEffects.`,
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
      content: `Cafe Pista is a local café here in Montreal.
        I rebuilt their shopify webstore using a modified version of an existing Shopify theme.
        I was the sole developer on this project, but I worked closely with a designer.
        There were several custom components involved including slideshows, multiple styles of collection pages, and timeline.
        The webstore integrates with several Shopify apps for specific functions, such as language translation,
        subscription services and wholesale services. Some of the challenges of this project revolved around integrating these apps,
        other challenges were in responsive styling, and conditional styling, dependant on collection and product.`,
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
      content: `This is stage one in the development of Dish, an app designed to integrate with existing dating apps and help
        ensure safety in the online dating scene. Stage one is primarily designed to collect questionnaire responses from users.
        With this goal I designed a gamification system to encourage users to fill out reports and to invite their friends.
        Under this system users can earn badges, points, and compete against other schools to showcase the school's safety score.
        Challenges of this project revolved mainly around the questionnaire, and ensuring the results were accessible and usable.
        Future goals for this project involve allowing users to get reports on their upcoming date using image matching and AI.`,
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
      content: `Doppel is an AirBnb clone where a user can hire a doppelganger to replace them at an event they don't want to attend.
        Built with 2 team mates under a time crunch this app was a great way to begin live developing with Ruby on Rails.
        Challenges included a live map with clickable pins and scheduling bookings between 2 users.`,
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
      content: `An app for the foraging community to share finds and learn more about local wild edibles.
        This project was built with two team mates under a strict deadline to ensure the app was ready for a live demo.
        Challenges included time management and including a functional map with clickable drop pins, and a web scraping feature
        that could fill the app's index with local plant species.`,
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
