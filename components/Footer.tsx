import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={20} />
          <span>© {new Date().getFullYear()} InferReach. All rights reserved.</span>
        </div>
        
        <div className="footer-links">
          <a href="https://linkedin.com/company/inferreach" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:hello@inferreach.com">
            Email Us
          </a>
          <Link href="/privacy">
            Privacy
          </Link>
          <Link href="/terms">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}