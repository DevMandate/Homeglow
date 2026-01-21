import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Tips from './components/Tips'
import BookAppointment from './components/BookAppointment'
import Testimonials from './components/Testimonials.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Tips />
      <BookAppointment />
      <Testimonials />
    </div>
  )
}

export default App