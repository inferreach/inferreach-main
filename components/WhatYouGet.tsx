'use client'

import { motion } from 'framer-motion'

export default function WhatYouGet() {
  const deliverables = [
    'Full CRM data quality audit (duplicates, gaps, stale records)',
    'Enrichment gap analysis with provider recommendations',
    'Tool integration map (Salesforce ↔ marketing ↔ sales engagement)',
    'Interviews with 2–3 of your sales reps',
    '10-page written report with 5–10 specific fixes',
    'Prioritized roadmap with effort + impact estimates',
    'Live walkthrough call to review findings',
    '30-day follow-up check-in'
  ]

  return (
    <section className="what-you-get">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          What you actually get
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Every GTM Data Health Check includes these deliverables — no surprises.
        </motion.p>

        <div className="deliverables-grid">
          {deliverables.map((item, index) => (
            <motion.div 
              key={item} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="deliverable-item"
            >
              <span className="check">✓</span>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}