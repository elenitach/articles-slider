import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ subsets: ['latin', 'cyrillic'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
