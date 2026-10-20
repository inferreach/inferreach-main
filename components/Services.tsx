import { Search, Settings, RefreshCw, BarChart3, Target } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'GTM Data Health Check',
    description: 'A 5-day deep dive into your Salesforce/HubSpot. We find the duplicates, missing fields, and sync errors silently killing your pipeline.',
    badge: 'fixed',
  },
  {
    icon: Settings,
    title: 'Revenue Systems Implementation',
    description: 'We do the dirty work: deduping the CRM, enriching missing accounts, and setting up automated outbound workflows in Clay or Apollo.',
    badge: 'one-time',
  },
  {
    icon: Target,
    title: 'Outsourced SDR / BDR Engine',
    description: 'Skip the $70k hire. We source the leads, write the sequences, manage the outbound tools, and book qualified meetings directly on your calendar.',
    badge: 'monthly',
  },
  {
    icon: RefreshCw,
    title: 'GTM Data Retainer',
    description: 'Ongoing hygiene for scaling sales teams. We monitor pipeline health, fix routing errors, and update lead scoring models.',
    badge: 'monthly',
  },
  {
    icon: BarChart3,
    title: 'Custom Clay Engine',
    description: 'Build a custom lead-scoring and enrichment engine in Clay to find your exact ICP, so your AEs only talk to qualified buyers.',
    badge: 'one-time',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Turn your GTM data into revenue</h2>
        <p className="section-subtitle">
          From cleaning up the backend to running the outbound frontend. We build the engine and can even drive it for you.
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}