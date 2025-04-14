import Image from "next/image"
import { BlogPostLayout } from "@/components/blog-post-layout"

export default function DigitalConsciousnessPage() {
  return (
    <BlogPostLayout
      title="Digital Consciousness: Philosophical Implications of Uploaded Minds"
      date="April 7, 2025"
      readTime="6 min read"
      category="PHILOSOPHY"
      coverImage="/neon-ghost.png"
      authorImage="/neon-cityscape-portrait.png"
      authorName="Dr. Eliza Nexus"
    >
      <p className="text-xl text-zinc-300 mb-8 leading-relaxed">
        As we approach the technological singularity, the possibility of uploading human consciousness into digital
        substrates raises profound questions about identity, continuity, and what it truly means to be sentient in a
        post-biological world.
      </p>

      <h2>The Metaphysics of Digital Minds</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
        molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus
        molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
        iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
      </p>

      <figure>
        <Image
          src="/cyber-mindscape.png"
          alt="Digital consciousness visualization"
          width={800}
          height={400}
          className="rounded-lg"
        />
        <figcaption>Fig 1: Topological mapping of a digitized consciousness</figcaption>
      </figure>

      <p>
        Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget
        odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
      </p>

      <blockquote>
        {`"If consciousness can be reduced to information processing, then what prevents us from creating true artificial
        consciousness? And if we can create it, what rights should it have?"`}
      </blockquote>

      <h3>The Ship of Theseus Problem</h3>
      <p>
        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra
        vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
      </p>

      <div className="data-terminal mb-8">
        <div className="data-terminal-header">
          <div className="data-terminal-dots">
            <div className="data-terminal-dot bg-red-500"></div>
            <div className="data-terminal-dot bg-yellow-500"></div>
            <div className="data-terminal-dot bg-green-500"></div>
          </div>
          <div className="data-terminal-title">CONSCIOUSNESS.TRANSFER.LOG</div>
        </div>
        <div className="data-terminal-content">
          <div className="data-terminal-line">
            <span className="data-terminal-prompt">$</span>
            <span>consciousness --scan --resolution=quantum</span>
          </div>
          <div className="data-terminal-line">
            <span>Scanning neural patterns...</span>
          </div>
          <div className="data-terminal-line">
            <span>Quantum state captured: 99.97% fidelity</span>
          </div>
          <div className="data-terminal-line">
            <span className="data-terminal-prompt">$</span>
            <span>consciousness --transfer --target=quantum-substrate</span>
          </div>
          <div className="data-terminal-line">
            <span>Transfer complete. Identity continuity: UNCERTAIN</span>
          </div>
          <div className="data-terminal-line">
            <span>Philosophical status: PARADOXICAL</span>
          </div>
        </div>
      </div>

      <h2>Consciousness as Information</h2>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
        ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
      </p>

      <h3>The Substrate Independence Thesis</h3>
      <p>
        Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque
        egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
        porttitor, facilisis luctus, metus.
      </p>

      <div className="tech-specs">
        <div className="tech-spec">
          <div className="tech-spec-label">CONSCIOUSNESS RESOLUTION</div>
          <div className="tech-spec-value">10^27 qubits</div>
        </div>
        <div className="tech-spec">
          <div className="tech-spec-label">SUBJECTIVE TIME DILATION</div>
          <div className="tech-spec-value">1:1000 ratio</div>
        </div>
        <div className="tech-spec">
          <div className="tech-spec-label">QUALIA SIMULATION</div>
          <div className="tech-spec-value">97.3% fidelity</div>
        </div>
        <div className="tech-spec">
          <div className="tech-spec-label">EXISTENTIAL CONTINUITY</div>
          <div className="tech-spec-value">PHILOSOPHICAL QUESTION</div>
        </div>
      </div>

      <p>
        Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque
        egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo. Cras iaculis ultricies nulla.
        Donec quis dui at dolor tempor interdum.
      </p>

      <h2>The Ethics of Digital Sentience</h2>
      <p>
        Fusce sagittis, libero non molestie mollis, magna orci ultrices dolor, at vulputate neque nulla lacinia eros.
        Sed id ligula quis est convallis tempor. Curabitur lacinia pulvinar nibh. Nam a sapien. Aliquam erat volutpat.
        Vestibulum dui sem, pulvinar sed, imperdiet nec, iaculis nec, leo.
      </p>

      <ul>
        <li>Rights of digital entities with human-equivalent consciousness</li>
        <li>The problem of infinite copies and identity</li>
        <li>Digital suffering and the ethics of simulation</li>
        <li>Consent issues in consciousness transfer</li>
        <li>The right to digital death and deletion</li>
      </ul>

      <p>
        Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum
        sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod
        lacus luctus magna.
      </p>

      <p>
        Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.
        Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede
        facilisis laoreet.
      </p>
    </BlogPostLayout>
  )
}
