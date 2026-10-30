import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={20} />
          <div>
            <span>© {new Date().getFullYear()} InferReach. All rights reserved.</span>
            <br />
            <span style={{ fontSize: '0.75rem', color: '#71717a' }}>
              Kathmandu, Nepal • hello@inferreach.com
            </span>
          </div>
        </div>
        
        <div className="footer-links">
          <a href="https://linkedin.com/company/inferreach" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:hello@inferreach.com">Email Us</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  )
}