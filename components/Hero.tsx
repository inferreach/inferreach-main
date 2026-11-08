'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Database, ShieldCheck, CalendarCheck, RefreshCw } from 'lucide-react'

const activities = [
  { text: "Enriched 120 records via Clay waterfall", icon: Database, color: "text-blue-400" },
  { text: "Verified 450 emails (0.2% bounce rate)", icon: ShieldCheck, color: "text-green-400" },
  { text: "Meeting booked with VP Sales @ Acme", icon: CalendarCheck, color: "text-amber-400" },
  { text: "Synced 1,200 records to HubSpot CRM", icon: RefreshCw, color: "text-purple-400" },
]

export default function Hero() {
  const [meetings, setMeetings] = useState(0)
  const [records, setRecords] = useState(0)
  const [activityIndex, setActivityIndex] = useState(0)

  // Count-up animation on load
  useEffect(() => {
    const duration = 2000
    const steps = 50
    const intervalTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easedProgress = 1 - Math.pow(1 - progress, 2)
      setMeetings(Math.floor(47 * easedProgress))
      setRecords(Math.floor(8921 * easedProgress))
      if (currentStep >= steps) clearInterval(timer)
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  // Cycle the live activity feed
  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activities.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = activities[activityIndex].icon

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
                Engine Active
              </div>
              <span className="dashboard-growth">+2x Reply Rate</span>
            </div>
            
            <div className="dashboard-metrics">
              <div className="dash-metric">
                <div className="dash-label">Meetings Booked</div>
                <div className="dash-value">{meetings}</div>
              </div>
              <div className="dash-metric">
                <div className="dash-label">Clean Records</div>
                <div className="dash-value">{records.toLocaleString()}</div>
              </div>
            </div>

            {/* Animated Line Chart */}
            <div className="chart-container">
              <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="sparkline">
                <defs>
                  <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffb454" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ffb454" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 0 80 C 50 80, 50 40, 100 40 C 150 40, 150 60, 200 60 C 250 60, 250 20, 300 20 C 350 20, 350 40, 400 30 L 400 100 L 0 100 Z"
                  fill="url(#lineGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                />
                <motion.path
                  d="M 0 80 C 50 80, 50 40, 100 40 C 150 40, 150 60, 200 60 C 250 60, 250 20, 300 20 C 350 20, 350 40, 400 30"
                  fill="none"
                  stroke="#ffb454"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                />
              </svg>
            </div>

            {/* Flowing Live Activity Feed */}
            <div className="activity-feed">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activityIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="activity-item"
                >
                  <CurrentIcon size={16} className={activities[activityIndex].color} />
                  <span>{activities[activityIndex].text}</span>
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}