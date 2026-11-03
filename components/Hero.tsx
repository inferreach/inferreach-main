'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge"
          >
            Managed Outbound & GTM Infrastructure
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Managed Outbound Pods & <br className="hidden md:block" />
            GTM Data Engineering <br className="hidden md:block" />
            for B2B SaaS.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We build custom data pipelines, automate email verification waterfalls, and execute high-touch outbound so your sales team only talks to qualified prospects.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hero-actions"
          >
            <a href="https://cal.com/inferreach/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a Free Data Audit
            </a>
            <a href="#services" className="btn-secondary">
              See how it works
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="live-dashboard"
          >
            <div className="dashboard-header">
              <div className="dashboard-live">
                <span className="live-pulse"></span>
                Deliverability Protected
              </div>
              <span className="dashboard-growth">+2x Reply Rate</span>
            </div>
            <div className="dashboard-metrics">
              <div className="dash-metric">
                <div className="dash-label">Meetings Booked</div>
                <div className="dash-value">47</div>
              </div>
              <div className="dash-metric">
                <div className="dash-label">Clean Records</div>
                <div className="dash-value">8,921</div>
              </div>
            </div>
            <div className="chart-bars">
              {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                <div key={i} className="bar-wrap">
                  <div 
                    className="bar" 
                    style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }} 
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}