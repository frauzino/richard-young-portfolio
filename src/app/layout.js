import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const cocomat = localFont({ src: '../../public/fonts/cocomat.ultralight.ttf' })


export const metadata = {
  title: 'Richard Young',
  description: 'Portfolio for web developer, Richard Young',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cocomat.className}>{children}</body>
      {/* <body className={sacramento.className}>{children}</body> */}
    </html>
  )
}
