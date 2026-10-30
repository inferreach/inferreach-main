'use client'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    { title: '1. Discovery & Scope', desc: 'We figure out if you need a Lead Gen Sprint, an SDR Pod, or Data Engineering.' },
    { title: '2. Data & Access', desc: 'You provide access to your CRM (HubSpot/Salesforce) and we establish email infrastructure.' },
    { title: '3. Execution', desc: 'We build lists, clean the CRM, set up Clay enrichment, and launch sequences.' },
    { title: '4. Booked Meetings', desc: 'We manage the replies and book qualified demos directly onto your AEs calendars.' },
  ]

  return (
    <section id="process" className="how-it-works">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          How we work together
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          A streamlined process that goes from messy data to booked meetings.
        </motion.p>

        <div className="steps">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="step"
            >
              <div className="step-number">{index + 1}</div>
              <h4>{step.title.slice(3)}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}