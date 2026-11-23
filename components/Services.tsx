'use client'
import { motion } from 'framer-motion'
import { Target, Send, Database } from 'lucide-react'

const services = [
  {
    icon: Database,
    title: 'GTM Data Engineering',
    tag: 'Scaling Teams',
    pricePrefix: 'Starting at',
    priceAmount: '$2,500',
    priceSuffix: '(One-time setup)',
    description: 'Cleaning up your CRM and automating data waterfalls with Clay. We build the verification infrastructure to drastically reduce bounce rates and protect your domain reputation.',
  },
  {
    icon: Send,
    title: 'Outsourced SDR / BDR Pod',
    tag: 'Immediate Pipeline',
    pricePrefix: 'Starting at',
    priceAmount: '$3,500',
    priceSuffix: '/ month',
    description: 'A managed outbound service to book meetings for your Account Executives. We use your clean data to run high-touch, highly targeted outreach and pipeline generation.',
  },
  {
    icon: Target,
    title: 'Lead Generation Sprint',
    tag: 'Testing a Market',
    pricePrefix: 'Starting at',
    priceAmount: '$1,500',
    priceSuffix: '(2-week pilot)',
    description: 'A fixed-scope project to build a highly targeted prospect list. We deliver 500 to 1,000 verified leads using custom data waterfalls based on your ICP.',
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
                </h3>
                <span className="service-badge">{service.tag}</span>
                
                {/* New Pricing Block */}
                <div className="service-price-block">
                  <span className="price-prefix">{service.pricePrefix}</span>
                  <div className="price-main">
                    <span className="price-amount">{service.priceAmount}</span>
                    <span className="price-suffix">{service.priceSuffix}</span>
                  </div>
                </div>

                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}