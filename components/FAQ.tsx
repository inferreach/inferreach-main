'use client'
import { motion } from 'framer-motion'

export default function FAQ() {
  const faqs = [
    {
      q: 'How does the Outsourced SDR/BDR model work?',
      a: 'Instead of hiring and training a junior rep, we act as your sales development team. We use the clean data infrastructure we build to run outbound campaigns, handle the inbox replies, and book qualified demos directly onto your AEs calendars.'
    },
    {
      q: 'Do you use our email domains or yours?',
      a: 'We set up secondary domains for you (to protect your main domain), warm them up, and manage the entire infrastructure. Your emails will look like they come from your company, but the heavy lifting is done by us.'
    },
    {
      q: 'How long does a typical engagement take?',
      a: 'The initial data audit takes 5 days. Implementation ranges from 1–3 weeks. If you choose the outsourced SDR engine, we typically start booking meetings within 2-3 weeks of initial setup.'
    },
    {
      q: 'Do you work with our existing tools?',
      a: 'Yes. We work with Salesforce, HubSpot, Clay, Apollo, Outreach, and virtually every major GTM tool. We plug into what you already use — no forced migrations.'
    },
    {
      q: 'What if we don\'t have a data team?',
      a: 'That\'s exactly who we built InferReach for. We handle the technical work and train your team to maintain it after we\'re done. No data engineer required on your side.'
    },
    {
      q: 'Is the free audit really free?',
      a: 'Yes. A 30-minute call + a 2-hour review of your CRM. We identify 3 quick wins you can act on immediately — whether or not you hire us.'
    },
  ]

  return (
    <section id="faq" className="faq">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Frequently asked questions
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Everything you need to know before booking a call.
        </motion.p>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <motion.details 
              key={item.q} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="faq-item"
            >
              <summary className="faq-question">
                {item.q}
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}