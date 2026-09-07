import { useState } from 'react'
import { troubleshootingScenarios } from '../data/troubleshooting.js'

function TroubleCard({ scenario }) {
  const [open, setOpen] = useState(false)
  return (
    <button
      type="button"
      className="trouble-card"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      style={{ textAlign: 'left', width: '100%', border: '2px solid var(--panel-border)' }}
    >
      <div className="trouble-symptom">"{scenario.symptom}"</div>
      <div className="trouble-flow">
        {scenario.investigate.map((s, i) => (
          <span key={s}>{s}{i < scenario.investigate.length - 1 && ' → '}</span>
        ))}
      </div>
      {open && (
        <div className="trouble-detail">
          <div><strong>Hypothesis:</strong> {scenario.detail.hypothesis}</div>
          <div><strong>Evidence:</strong> {scenario.detail.evidence}</div>
          <div><strong>Root cause:</strong> {scenario.detail.rootCause}</div>
          <div><strong>Experiment:</strong> {scenario.detail.experiment}</div>
        </div>
      )}
      <div className="trouble-toggle">{open ? '– Collapse' : '+ Investigate'}</div>
    </button>
  )
}

export default function TroubleshootingLab() {
  return (
    <section id="troubleshooting">
      <span className="eyebrow">🛠 GTM Troubleshooting Lab</span>
      <h2 className="section-title">Symptom → Hypothesis → Root Cause</h2>
      <p className="section-sub">How I diagnose a GTM motion before touching the fix.</p>

      <div className="trouble-grid">
        {troubleshootingScenarios.map((s) => <TroubleCard scenario={s} key={s.symptom} />)}
      </div>
    </section>
  )
}
