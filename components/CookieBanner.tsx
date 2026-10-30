'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setIsVisible(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner">
      <p>
        We use essential cookies to make this site work. By using our site, you consent to our{' '}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <button onClick={acceptCookies} className="cookie-btn">Accept</button>
    </div>
  )
}