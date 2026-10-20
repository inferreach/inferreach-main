'use client'
import { motion } from 'framer-motion'

export default function Tools() {
  const tools = [
    'Salesforce', 'HubSpot', 'Clay', 'Apollo', 'Outreach',
    'Salesloft', 'Clearbit', 'ZoomInfo', 'Zapier', 'Make',
    'BigQuery', 'Snowflake', 'Looker', 'dbt', 'Fivetran'
  ]

  return (
    <section className="tools">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Built on the tools you already use
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          We plug directly into your existing GTM stack. No forced migrations, no painful software changes.
        </motion.p>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.span 
              key={tool} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="tool-pill"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}