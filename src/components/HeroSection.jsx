import Character from './Character.jsx'
import { skillCategories } from '../data/skills.js'

const QUESTS = [
  'Turn data into actionable GTM insights',
  'Define and refine ICPs',
  'Research and prioritize accounts',
  'Identify buying signals',
  'Build GTM systems',
  'Design ABM and outbound workflows',
  'Connect activity to pipeline',
  'Measure what matters',
]

export default function HeroSection() {
  return (
    <section id="home">
      <div className="hero">
        <div>
          <span className="hero-kicker">GTM ENGINEER</span>
          <h1 className="hero-title">I turn data, research and market signals into GTM systems.</h1>
          <p className="hero-copy">
            I started in B2B SaaS sales, moved into revenue and data, worked across data and research,
            and now build systems that connect ICP, account intelligence, buying signals, activation and pipeline.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="#quests">Enter My GTM World →</a>
            <a className="btn" href="#quests">View My Quests →</a>
            <a className="btn btn-ghost" href="#contact">Connect →</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <Character size={260} glow="pink" />
          </div>
        </div>
      </div>

      <div className="hud-row">
        <div className="panel">
          <div className="panel-title">QUEST LOG</div>
          <ul className="quest-list">
            {QUESTS.map((q) => (
              <li key={q}><span className="quest-check">☑</span> {q}</li>
            ))}
            <li className="locked"><span className="quest-locked-mark">☐</span> Next level...</li>
          </ul>
        </div>

        <div className="panel">
          <div className="panel-title">PLAYER PROFILE</div>
          <div className="stat-grid">
            <div className="stat-block">
              <span className="stat-label">Class</span>
              <span className="stat-value">GTM Engineer</span>
            </div>
            <div className="stat-block">
              <span className="stat-label">Experience</span>
              <span className="stat-value">3+ Years</span>
            </div>
            <div className="stat-block" style={{ gridColumn: '1 / -1' }}>
              <span className="stat-label">Core Mode</span>
              <span className="stat-value">Revenue + Data + Research + GTM</span>
            </div>
            <div className="stat-block" style={{ gridColumn: '1 / -1' }}>
              <span className="stat-label">Current Quest</span>
              <span className="stat-value">Building repeatable GTM systems</span>
            </div>
          </div>

          <div className="meter-row">
            {skillCategories.slice(0, 5).map((cat) => {
              const top = cat.skills[0]
              const levelIdx = { FOUNDATION: 1, STRONG: 3, ADVANCED: 4 }[top.level] || 1
              return (
                <div className="meter" key={cat.name}>
                  <span className="meter-name">{cat.name}</span>
                  <div className="meter-track">
                    {[0, 1, 2, 3].map((i) => (
                      <span key={i} className={`meter-seg ${i < levelIdx ? 'filled' : ''}`} />
                    ))}
                  </div>
                  <span className="meter-tag">{top.level}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
