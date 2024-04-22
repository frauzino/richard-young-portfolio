import './globals.css'
import { Navbar } from './components/navbar'
import logo from '../../public/logo.svg'

export const metadata = {
  title: 'Richard Young',
  description: 'Portfolio for web developer, Richard Young'
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
