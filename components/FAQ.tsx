export default function FAQ() {
  const faqs = [
    {
      q: 'How does the Outsourced SDR/BDR model work?',
      a: 'Instead of you hiring and training a $70k junior rep, we act as your dedicated sales development team. We use the clean data infrastructure we build to source leads, write the sequences, manage the outbound tools, handle the inbox replies, and book qualified demos directly onto your AEs calendars. You just show up and close.'
    },
    {
      q: 'How do you send outbound emails without ruining our domain reputation?',
      a: 'We never send cold emails from your primary domain (e.g., yourcompany.com). We purchase secondary lookalike domains (e.g., yourcompany.co or getyourcompany.com), set up the proper DNS records, warm them up over 2-3 weeks, and manage the entire infrastructure for you.'
    },
    {
      q: 'How much does an engagement cost?',
      a: 'Because every company\'s data mess and outbound needs are different, we don\'t do one-size-fits-all pricing. Our data implementations are fixed-price projects starting around $5k, and our ongoing SDR retainers are monthly. Book a free audit and we\'ll give you a custom quote based on your exact needs.'
    },
    {
      q: 'Do we have to sign a long-term contract?',
      a: 'No. The initial data audit and implementation are one-time projects with no long-term commitment. If you choose to move forward with the Outsourced SDR engine, we work on a month-to-month basis after a 30-day initial trial period to ensure we are a good fit.'
    },
    {
      q: 'How long until we see results?',
      a: 'The initial data audit takes 5 days. CRM cleanup and implementation range from 1–3 weeks. If you choose the outsourced SDR engine, we typically start booking meetings within 2-3 weeks of the initial setup (as we need time to warm up the email domains).'
    },
    {
      q: 'Do you work with our existing tools?',
      a: 'Yes. We work with Salesforce, HubSpot, Clay, Apollo, Outreach, Salesloft, and virtually every major GTM tool. We plug into what you already use — no forced migrations or painful software changes for your team.'
    },
    {
      q: 'What if we don\'t have a RevOps or data team?',
      a: 'That\'s exactly who we built InferReach for. We handle all the technical heavy lifting. Once the system is built, we provide documentation and training so your sales team can maintain it. You don\'t need to hire a full-time data engineer.'
    },
    {
      q: 'Is the initial audit really free?',
      a: 'Yes. It\'s a 30-minute strategy call followed by a 2-hour technical review of your CRM and outbound tools. We will identify at least 3 quick wins you can act on immediately — whether you decide to hire us or not.'
    },
  ]

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-subtitle">Everything you need to know before booking a call.</p>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q} className="faq-item">
              <summary className="faq-question">
                {item.q}
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}