import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/navbar'
import logo from '../../public/logo.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Richard Young',
  description: 'Portfolio for web developer, Richard Young',
  icons: {
    icon: logo
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <div className='fogwrapper'>
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
