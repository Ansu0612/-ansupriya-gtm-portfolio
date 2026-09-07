import { skillCategories } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="power-ups">
      <span className="eyebrow">⚡ GTM Power-Ups</span>
      <h2 className="section-title">What I bring to the build</h2>

      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div className="skill-card" key={cat.name}>
            <div className="skill-cat">{cat.name}</div>
            {cat.skills.map((s) => (
              <div className="skill-item" key={s.name}>
                <span>{s.name}</span>
                <span className={`skill-level ${s.level.toLowerCase()}`}>{s.level}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
