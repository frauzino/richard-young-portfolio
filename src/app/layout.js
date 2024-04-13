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
      <body className={inter.className}>{children}
      <div className='backgroundTexture' />
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
