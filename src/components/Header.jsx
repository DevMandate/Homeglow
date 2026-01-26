import { PhoneCall, Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

const navList = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#tips', label: 'Tips' },
  { href: '#book', label: 'Book Service' },
  { href: '#testimonials', label: 'Testimonials' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Sparkles className="w-8 h-8 text-sky-600" />
          <span className="text-xl font-bold text-sky-600">
            HomeGlow Services
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navList.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-sky-600 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center space-x-2">
          <PhoneCall className="w-5 h-5 text-sky-600" />
          <a
            href="#book"
            className="bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-700 transition text-sm"
          >
            Book Service
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="text-gray-700" />
            ) : (
              <Menu className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-4 py-4 space-y-3 text-gray-700 font-medium">
          {navList.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block hover:text-sky-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
