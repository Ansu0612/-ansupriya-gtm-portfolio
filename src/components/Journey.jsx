import { journeyLevels, currentLevel } from '../data/journey.js'

export default function Journey() {
  return (
    <section id="journey">
      <span className="eyebrow">Player Journey</span>
      <h2 className="section-title">Four Levels, One Skill Set</h2>
      <p className="section-sub">
        Sales, revenue, research and GTM engineering — not disconnected career changes, but one skill set built in stages.
      </p>

      <div className="journey-track">
        {journeyLevels.map((lvl) => (
          <div className="journey-level" key={lvl.level}>
            <div className="journey-marker">{lvl.level}</div>
            <div className="journey-body">
              <div className="journey-org">{lvl.org}</div>
              <div className="journey-theme">{lvl.theme}</div>
              {lvl.roles.map((role) => (
                <div key={role.title} style={{ marginBottom: 18 }}>
                  <div className="journey-role">{role.title} · {role.company} · {role.dates}</div>
                  <ul className="journey-points">
                    {role.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="journey-current">
        <span className="eyebrow" style={{ marginBottom: 10 }}>{currentLevel.level}</span>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--cream)' }}>{currentLevel.title}</h3>
        <p style={{ marginTop: 10, color: 'var(--text-muted)' }}>{currentLevel.copy}</p>
      </div>
    </section>
  )
}
