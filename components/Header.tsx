import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Logo size={32} className="logo-mark" />
          <span className="logo-text">InferReach</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#why">Who it's for</a>
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#faq">FAQ</a>
          <a href="https://cal.com/inferreach/30min" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Book a call
          </a>
        </nav>

        {/* Mobile CTA (Hidden on Desktop) */}
        <a 
          href="https://cal.com/inferreach/30min" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-outline mobile-cta"
        >
          Book Call
        </a>
      </div>
    </header>
  )
}