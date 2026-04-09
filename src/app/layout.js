import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'TextUtils',
  description: 'Text manipulation and analysis tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
      </body>
    </html>
  )
}