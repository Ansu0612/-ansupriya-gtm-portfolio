import { playbookTopics } from '../data/social.js'

export default function Playbook() {
  return (
    <section id="playbook">
      <span className="eyebrow">📖 GTM Playbook</span>
      <h2 className="section-title">How I think about GTM</h2>

      <div className="playbook-list">
        {playbookTopics.map((topic) => (
          <details className="playbook-item" key={topic.title}>
            <summary>{topic.title}</summary>
            <p className="playbook-body">{topic.body}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
