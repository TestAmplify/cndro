import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { 
  Menu, 
  X, 
  Moon,
  Sun
} from 'lucide-react'
import cndroLogo from '../assets/cndro-logo.png'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src={cndroLogo} alt="CNDRO" className="h-8 w-8" />
                <span className="text-xl font-bold text-primary">CNDRO</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/services') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/app-development" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/app-development') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                App Development
              </Link>
              <Link 
                to="/opportunities" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/opportunities') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Opportunities Hub
              </Link>
              <Link 
                to="/blog" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/blog') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-primary' : 'hover:text-primary'
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="h-9 w-9"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button className="hidden md:inline-flex btn-gradient">Let's Talk</Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <Link 
                  to="/" 
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive('/') ? 'text-primary' : 'hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive('/about') ? 'text-primary' : 'hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive('/services') ? 'text-primary' : 'hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/app-development" 
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive('/app-development') ? 'text-primary' : 'hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  App Development
                </Link>
                <Link 
                  to="/opportunities" 
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive('/opportunities') ? 'text-primary' : 'hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Opportunities Hub
                </Link>
                <Link 
                  to="/blog" 
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive('/blog') ? 'text-primary' : 'hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive('/contact') ? 'text-primary' : 'hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <div className="px-3 py-2">
                  <Button className="w-full btn-gradient">Let's Talk</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">CNDRO</div>
              <p className="text-muted-foreground">
                Software engineering firm providing support to individuals and businesses using engineering principles to solve problems and meet user needs.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/app-development" className="hover:text-primary transition-colors">App Development</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Data Analytics</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Consulting</Link></li>
                <li><Link to="/opportunities" className="hover:text-primary transition-colors">Training</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/opportunities" className="hover:text-primary transition-colors">Opportunities Hub</Link></li>
                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 CNDRO LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

