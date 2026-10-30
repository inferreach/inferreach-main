'use client'
import { motion } from 'framer-motion'
import { Target, Send, Database } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: 'Lead Generation Sprint',
    description: 'A fixed-scope, 1-week project to build a highly targeted prospect list. We deliver 500 to 1,000 verified leads based on your specific ICP, geography, and tech stack signals.',
    badge: 'Testing a new market',
  },
  {
    icon: Send,
    title: 'Outsourced SDR / BDR Pod',
    description: 'A managed outbound service to book meetings for your Account Executives while you search for full-time hires. We handle ICP refinement, list building, multi-channel sequences, and campaign management.',
    badge: 'Immediate pipeline',
  },
  {
    icon: Database,
    title: 'GTM Data Engineering',
    description: 'Cleaning up your CRM, automating enrichment with Clay, and building reporting dashboards so your reps trust the data. We handle the deduplication, governance, and workflows.',
    badge: 'Scaling teams',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Core Offers
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          From testing a new market to scaling your outbound engine, we build the data infrastructure that drives revenue.
        </motion.p>

        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card"
            >
              <div className="service-icon">
                <service.icon size={24} />
              </div>
              <div>
                <h3>
                  {service.title}
                  <span className="service-badge">{service.badge}</span>
                </h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}