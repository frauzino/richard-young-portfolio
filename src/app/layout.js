import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Richard Young',
  description: 'Portfolio for web developer, Richard Young'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children} */}
      <body>{children}
      <div id="foglayer_01" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_02" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_03" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
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
