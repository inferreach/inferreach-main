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
            GTM Data Engineering for B2B SaaS
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Stop letting messy CRM data kill your Series A pipeline.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Built for Seed to Series A SaaS teams (10–100 employees). We clean up your Salesforce/HubSpot, automate your outbound, and can even <strong>replace your SDR/BDR team</strong> to book meetings for you.
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
                Live Engine
              </div>
              <span className="dashboard-growth">+24.7%</span>
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
            {/* Fixed Bar Chart using inline styles */}
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