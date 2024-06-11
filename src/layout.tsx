import 'tailwindcss/tailwind.css'
import React from 'react'
import Nav from './component/nav.tsx'
import Footer from './component/footer.tsx'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<div className="flex flex-col m-0" style={{ width: '1920px' }} >
    <html  >
    <header>
  <Nav/>
  </header>
    <main className="flex-grow flex flex-col justify-center items-center" style={{ height: '850px' , width: '1920px' }}>{children}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </html>
 
  </div>)
}