'use client'
import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    { 
      title: '1. Data Engineering', 
      desc: 'We clean your CRM, deduplicate records, and fix field governance so your reps finally trust the data.' 
    },
    { 
      title: '2. Data Waterfall', 
      desc: 'We build custom Clay/Apollo waterfall enrichments to find verified emails and ensure 0% bounce rates.' 
    },
    { 
      title: '3. Managed Outbound', 
      desc: 'We act as your outsourced SDR team, launching high-touch, zero-bounce outreach sequences.' 
    },
    { 
      title: '4. Pipeline Generation', 
      desc: 'We handle the replies and book qualified meetings directly on your AEs\' calendars.' 
    },
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
          We solve the hardest part of outbound: data quality and email deliverability.
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