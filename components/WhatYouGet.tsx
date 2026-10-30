'use client'
import { motion } from 'framer-motion'

export default function WhatYouGet() {
  const deliverables = [
    '500 to 1,000 verified leads per sprint',
    'Company Name, Website, and LinkedIn URLs',
    'Decision-Maker Name, Title, and Verified Email',
    'CRM deduplication and field governance',
    'Clay waterfall enrichment setup',
    'Outbound automation workflows',
    'Custom reporting dashboards for your reps',
    'Multi-channel sequence building & management',
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
          Depending on the scope of your project, here are the assets and data infrastructure we deliver.
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