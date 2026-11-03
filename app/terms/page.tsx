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
        <p className="legal-updated">Last updated: November 3, 2026</p>

        <div className="legal-body">
          <p>
            These Terms of Service govern your use of InferReach&rsquo;s website and services. By engaging our services, you agree to these Terms.
          </p>

          <h2>1. Business Information</h2>
          <p>
            InferReach is a GTM Data Engineering and Managed Outbound consultancy. You can contact us at:
            <br />Email: <a href="mailto:hello@inferreach.com" className="legal-link">hello@inferreach.com</a>
            <br />Location: Kathmandu, Nepal
          </p>

          <h2>2. Services & Pricing</h2>
          <p>
            We provide Lead Generation Sprints, Managed Outbound Pods, and GTM Data Engineering services. <strong>No hidden fees.</strong> All pricing is transparent and agreed upon in a written Statement of Work (SOW) before any work begins. Final pricing depends on the scope of your project and required data infrastructure.
          </p>

          <h2>3. Refund & Cancellation Policy</h2>
          <p>
            <strong>Lead Generation Sprints & Data Engineering:</strong> Because these require immediate time, resource allocation, and API usage, they are non-refundable once the project kickoff has occurred.
          </p>
          <p>
            <strong>Managed Outbound Pods (Retainers):</strong> Monthly retainers can be cancelled at any time with a 14-day written notice. We do not offer prorated refunds for partial months.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>To ensure maximum deliverability and pipeline generation, you agree to:</p>
          <ul>
            <li>Provide timely access to necessary CRM systems (e.g., Salesforce, HubSpot) and communication tools.</li>
            <li>Designate a point of contact for weekly campaign and data alignment.</li>
            <li>Ensure your email sending infrastructure complies with our recommended deliverability protocols.</li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, InferReach&rsquo;s total liability is limited to the fees paid for the specific engagement. We are not liable for indirect or consequential damages, including lost revenue or lost data.
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