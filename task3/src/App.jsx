import Navbar  from './components/Navbar'
import Home    from './components/Home'
import About   from './components/About'
import Member  from './components/Member'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Member />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
