import './globals.css'
import { Navbar } from './components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Task Management</title>
      </head>

      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
