import { gtmOperatingSystem } from '../data/skills.js'

export default function GTMOS() {
  return (
    <section id="operating-system">
      <span className="eyebrow">System</span>
      <h2 className="section-title">My GTM Operating System</h2>

      <div className="os-flow">
        {gtmOperatingSystem.map((node, i) => (
          <span key={node} style={{ display: 'contents' }}>
            <span className="os-node">{node}</span>
            {i < gtmOperatingSystem.length - 1 && <span className="os-arrow">→</span>}
          </span>
        ))}
      </div>

      <p className="os-note">
        I don't treat GTM as a collection of disconnected activities. <strong>I think in systems.</strong>
      </p>
    </section>
  )
}
