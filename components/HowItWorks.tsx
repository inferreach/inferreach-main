export default function HowItWorks() {
  const steps = [
    { title: '1. Fix the Data', desc: 'We audit and clean your CRM, removing duplicates and enriching missing fields.' },
    { title: '2. Define the ICP', desc: 'We build a highly targeted list of your ideal buyers using custom Clay engines.' },
    { title: '3. Execute Outbound', desc: 'We set up the domains, warm them up, and launch hyper-personalized campaigns.' },
    { title: '4. Book Meetings', desc: 'We handle replies and objections, booking qualified demos directly on your calendar.' },
  ]

  return (
    <section id="process" className="how-it-works">
      <div className="container">
        <h2 className="section-title">From messy CRM to booked meetings</h2>
        <p className="section-subtitle">
          Whether you just want the data cleaned up or want us to run the whole outbound engine.
        </p>

        <div className="steps">
          {steps.map((step) => (
            <div key={step.title} className="step">
              <div className="step-number">{step.title.charAt(0)}</div>
              <h4>{step.title.slice(3)}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}