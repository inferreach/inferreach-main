import { motion } from 'framer-motion'

export default function Guarantee() {
  return (
    <section className="guarantee">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="guarantee-card"
        >
          <div className="guarantee-icon">🛡️</div>
          <h2 className="guarantee-title">Our guarantee</h2>
          <p className="guarantee-text">
            If your free 15-minute audit doesn't surface at least <strong>3 actionable issues</strong> in your GTM data — you don't pay a thing, and you keep the notes.
          </p>
          <p className="guarantee-subtext">
            No contracts. No pressure. Just value on the first call.
          </p>
        </motion.div>
      </div>
    </section>
  )
}