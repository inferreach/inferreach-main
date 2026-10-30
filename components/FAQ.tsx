'use client'
import { motion } from 'framer-motion'

export default function FAQ() {
  const faqs = [
    {
      q: 'How much do your services cost?',
      a: 'Because we offer everything from one-off Lead Generation Sprints to ongoing GTM Data Engineering and Outsourced SDR retainers, pricing depends entirely on the scope of your project. Book a free discovery call and we will send over a custom proposal based on your exact needs.'
    },
    {
      q: 'What exactly is the Lead Generation Sprint?',
      a: 'It is a fixed-scope, 1-week project designed for teams testing a new market. We build a highly targeted prospect list of 500 to 1,000 verified leads based on your specific ICP, geography, and tech stack signals. You get Company Name, Website, Decision-Maker Name, Title, Verified Business Email, and LinkedIn URL.'
    },
    {
      q: 'How does the Outsourced SDR/BDR Pod work?',
      a: 'Instead of you hiring and training a $70k junior rep, we act as your dedicated sales development team. We handle ICP refinement, list building, multi-channel sequences, campaign management, and meeting booking directly onto your AEs calendars.'
    },
    {
      q: 'How do you send outbound emails without ruining our domain reputation?',
      a: 'We never send cold emails from your primary domain (e.g., yourcompany.com). We purchase secondary lookalike domains (e.g., yourcompany.co or getyourcompany.io), set up the proper DNS records, warm them up over 2-3 weeks, and manage the entire infrastructure for you.'
    },
    {
      q: 'Do we have to sign a long-term contract?',
      a: 'No. The Lead Generation Sprint and Data Engineering setup are one-time projects with no long-term commitment. If you choose to move forward with the Outsourced SDR pod or a Data Retainer, we work on a month-to-month basis after a 30-day initial trial period to ensure we are a good fit.'
    },
    {
      q: 'How long until we see results?',
      a: 'Lead Generation Sprints take exactly 5 business days from project kickoff. CRM cleanup and Data Engineering implementation range from 1–3 weeks. If you choose the outsourced SDR pod, we typically start booking meetings within 2-3 weeks of the initial setup (as we need time to warm up the email domains).'
    },
    {
      q: 'Do you work with our existing tools?',
      a: 'Yes. We work with Salesforce, HubSpot, Clay, Apollo, Outreach, Salesloft, and virtually every major GTM tool. We plug into what you already use — no forced migrations.'
    },
    {
      q: 'What if we don\'t have a data team?',
      a: 'That\'s exactly who we built InferReach for. We handle all the technical heavy lifting. Once the system is built, we provide documentation and training so your sales team can maintain it. You don\'t need to hire a full-time data engineer.'
    }
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