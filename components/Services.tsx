'use client'
import { motion } from 'framer-motion'
import { Target, Send, Database } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'GTM Data Engineering',
    description: 'Cleaning up your CRM and automating data waterfalls with Clay. We build the verification infrastructure to guarantee 0% bounce rates and total deliverability protection.',
    badge: 'Scaling teams',
  },
  {
    icon: Send,
    title: 'Outsourced SDR / BDR Pod',
    description: 'A managed outbound service to book meetings for your Account Executives. We use your clean data to run zero-bounce, high-touch outreach and pipeline generation.',
    badge: 'Immediate pipeline',
  },
  {
    icon: Target,
    title: 'Lead Generation Sprint',
    description: 'A fixed-scope, 1-week project to build a highly targeted prospect list. We deliver 500 to 1,000 verified leads using custom data waterfalls based on your ICP.',
    badge: 'Testing a market',
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
          From data infrastructure to full-scale pipeline generation. We build the engine and drive it.
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