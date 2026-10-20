import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Ready to fix your GTM data?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Book a free 30-min audit. No commitment, just insights.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="contact-cta"
        >
          <a href="https://cal.com/inferreach/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book My Free Audit →
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="contact-note"
        >
          Or email us directly at <a href="mailto:hello@inferreach.com">hello@inferreach.com</a>
        </motion.p>
      </div>
    </section>
  )
}