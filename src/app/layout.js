import './globals.css'
import { Navbar } from './components/navbar'

export const metadata = {
  title: 'Richard Young',
  description: 'Portfolio for web developer, Richard Young',
  type: 'website',
  authors: [
    {
      name: 'Richard Young',
      url: 'http://richardyoungdev.com/'
    }
  ],
  openGraph: {
    title: 'Richard Young',
    description: 'Portfolio for web developer, Richard Young',
    url: 'http://richardyoungdev.com/',
    siteName: 'Richard Young Portfolio',
    type: 'website',
    author: 'Richard Young',
    images: [
      {
        url: 'http://richardyoungdev.com/homepage_screenshot.png',
        width: 1200,
        height: 630,
        alt: 'Richard Young Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Young',
    description: 'Portfolio for web developer, Richard Young',
    creator: '@RichardYou49157',
    images: ['http://richardyoungdev.com/homepage_screenshot.png']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar
          navItems={[
            'home',
            'about_me',
            'projects',
            'contact'
          ]}
        />
      </body>
    </html>
  )
}
