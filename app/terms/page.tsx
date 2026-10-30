import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | InferReach',
}

export default function Terms() {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        <Link href="/" className="legal-back">← Back to home</Link>
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-updated">Last updated: October 29, 2026</p>

        <div className="legal-body">
          <p>
            These Terms of Service govern your use of InferReach's website and services. By engaging our services, you agree to these Terms.
          </p>

          <h2>1. Business Information</h2>
          <p>
            InferReach is a GTM Data Engineering consultancy. You can contact us at:<br/>
            Email: <a href="mailto:hello@inferreach.com" className="legal-link">hello@inferreach.com</a><br/>
            Location: Kathmandu, Nepal
          </p>

          <h2>2. Services & Pricing</h2>
          <p>
            We provide data audits, CRM cleanup, and outsourced SDR services. <strong>No hidden fees.</strong> All pricing is transparent and agreed upon in a written Statement of Work (SOW) before any work begins. Final pricing depends on the scope of your project.
          </p>

          <h2>3. Refund & Cancellation Policy</h2>
          <p>
            <strong>Data Audits:</strong> Because our audits require immediate time and resource allocation, they are non-refundable once the audit process has begun.<br/>
            <strong>Retainers (SDR/Monthly):</strong> Monthly retainers can be cancelled at any time with a 14-day written notice. We do not offer prorated refunds for partial months.
          </p>

          <h2>4. Client Responsibilities</h2>
          <ul>
            <li>Provide timely access to necessary CRM systems (Salesforce/HubSpot).</li>
            <li>Designate a point of contact for coordination.</li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, InferReach's total liability is limited to the fees paid for the specific engagement. We are not liable for indirect or consequential damages.
          </p>

          <h2>6. Contact</h2>
          <p>
            For any legal inquiries, email <a href="mailto:hello@inferreach.com" className="legal-link">hello@inferreach.com</a>.
          </p>
        </div>
      </div>
    </main>
  )
}