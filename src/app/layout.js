import './globals.css'
import { Navbar } from './components/navbar'

export const metadata = {
  title: 'Richard Young',
  description: 'Portfolio for web developer, Richard Young',
  type: 'website',
  author: 'Richard Young',
  openGraph: {
    title: 'Richard Young',
    description: 'Portfolio for web developer, Richard Young',
    url: 'http://richardyoungdev.com/',
    siteName: 'Richard Young Portfolio',
    images: [
      {
        url: '../../public/homepage_screenshot.png',
        width: 1200,
        height: 630,
        alt: 'Richard Young Portfolio'
      }
    ]
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
