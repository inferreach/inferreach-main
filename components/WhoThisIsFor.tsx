export default function WhoThisIsFor() {
  const fits = [
    'B2B SaaS companies between $1M and $10M ARR',
    'Seed to Series A stage, scaling the sales team',
    'Using Salesforce OR HubSpot, but the data is messy',
    'Founders who need to book meetings without hiring a $70k SDR',
    'VP of Sales looking to outsource outbound to a reliable partner',
  ]
  const notFits = [
    'Enterprise companies with an in-house RevOps/Data team',
    'Pre-revenue startups without a defined sales process',
    'Companies looking for a cheap one-off data cleanup',
  ]

  return (
    <section className="who-for">
      <div className="container">
        <h2 className="section-title">We work best with a specific type of team</h2>
        <p className="section-subtitle">
          If your go-to-market motion is outgrowing your data infrastructure, you're in the right place.
        </p>

        <div className="who-grid">
          <div className="who-col who-yes">
            <h3>Perfect fit</h3>
            <ul>
              {fits.map((item) => (
                <li key={item}>
                  <span className="icon-yes">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="who-col who-no">
            <h3>Not a fit</h3>
            <ul>
              {notFits.map((item) => (
                <li key={item}>
                  <span className="icon-no">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}