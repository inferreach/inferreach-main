import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | InferReach',
}

export default function Privacy() {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        <Link href="/" className="legal-back">← Back to home</Link>
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: October 29, 2026</p>

        <div className="legal-body">
          <p>
            InferReach ("we", "us", "our") respects your privacy. This policy explains what
            information we collect, how we use it, and the choices you have.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect information in two ways:</p>
          <ul>
            <li><strong>Directly from you:</strong> Your name, email address, and company name when you book a call via Cal.com or email us directly.</li>
            <li><strong>Automatically:</strong> Basic, anonymized analytics data (IP address, browser type) via Cloudflare to ensure the site functions securely.</li>
          </ul>

          <h2>2. Cookies & Tracking (Cookie Policy)</h2>
          <p>
            We use strictly necessary cookies to ensure the website functions properly. We use Cal.com for scheduling, which may set functional cookies to remember your details. We do not use invasive third-party tracking or advertising SDKs. You can disable cookies in your browser settings, but some site features may break.
          </p>

          <h2>3. Data Deletion & Your Rights</h2>
          <p>
            You have the right to access, correct, or request the permanent deletion of your personal data at any time. To request data deletion, please email us directly at <a href="mailto:hello@inferreach.com">hello@inferreach.com</a> and we will process your request within 7 business days.
          </p>

          <h2>4. Children's Privacy (Age Consent)</h2>
          <p>
            Our services are intended for B2B business use. We do not knowingly collect personal information from children under the age of 16. If you believe we have inadvertently collected such information, please contact us immediately so we can delete it.
          </p>

          <h2>5. Third-Party Services</h2>
          <p>
            We use trusted third-party tools (Cal.com for scheduling, Cloudflare for hosting, Resend for email). These tools only receive the minimum data necessary to perform their functions.
          </p>

          <h2>6. Contact</h2>
          <p>
            Questions? Email us at <a href="mailto:hello@inferreach.com" className="legal-link">hello@inferreach.com</a>.
          </p>
        </div>
      </div>
    </main>
  )
}