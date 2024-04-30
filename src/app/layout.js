import './globals.css'
import { Navbar } from './components/navbar'

export const metadata = {
  title: 'Richard Young',
  description: 'Portfolio for web developer, Richard Young'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark'>
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
