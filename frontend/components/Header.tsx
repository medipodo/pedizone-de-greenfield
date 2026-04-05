'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-medical-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl">🦶</span>
            <span className="text-xl font-semibold text-medical-800 group-hover:text-primary-600 transition-colors">
              Pedi<span className="text-primary-600">Zone</span>.de
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-medical-600 hover:text-primary-600 transition-colors"
            >
              Startseite
            </Link>
            <Link 
              href="/wissen" 
              className="text-sm font-medium text-medical-600 hover:text-primary-600 transition-colors"
            >
              Wissen
            </Link>
            <Link 
              href="/wissen/fusspilz" 
              className="text-sm font-medium text-medical-600 hover:text-primary-600 transition-colors"
            >
              Fußpilz
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-medical-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-medical-100">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-sm font-medium text-medical-600 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Startseite
              </Link>
              <Link 
                href="/wissen" 
                className="text-sm font-medium text-medical-600 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wissen
              </Link>
              <Link 
                href="/wissen/fusspilz" 
                className="text-sm font-medium text-medical-600 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fußpilz
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
