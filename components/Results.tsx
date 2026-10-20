'use client'
import { motion } from 'framer-motion'

export default function Results() {
  const stats = [
    { value: '20-30%', label: 'Of pipeline lost to bad CRM data' },
    { value: '5 Days', label: 'To complete a full GTM Data Audit' },
    { value: '2-3 Wks', label: 'To deploy your automated outbound engine' },
    { value: '100%', label: 'Focus on revenue, not data cleaning' },
  ]

  return (
    <section className="results">
      <div className="container">
        <div className="results-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="result-card"
            >
              <div className="result-value">{stat.value}</div>
              <div className="result-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}