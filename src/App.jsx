import './App.css'

const NAV_LINKS = [
  { href: '#products', label: 'Products' },
  { href: '#beethoven', label: 'Beethoven' },
  { href: '#platform', label: 'Platform' },
  { href: '#philosophy', label: 'Philosophy' },
]

const PRODUCTS = [
  {
    name: 'ThinkSophia',
    tagline: 'The framework',
    description:
      'An AI system and SaaS framework for building wise, composable intelligence — delivered as a service, designed for trust.',
  },
  {
    name: 'SophiaLLM',
    tagline: 'The mind',
    description:
      'The large language model at the heart of ThinkSophia. Measured, contextual, and naturally wise by design.',
  },
  {
    name: 'Dyadic Social Fabric',
    tagline: 'The connection',
    description:
      'A relational layer where human and machine intelligence meet — one dyad at a time — weaving context into understanding.',
  },
]

const BEETHOVEN = [
  {
    name: 'Beethoven MCP',
    detail: 'Model Context Protocol — the score every instrument reads from.',
  },
  {
    name: 'Beethoven Symphony',
    detail: 'Agentic subagents, conducted in concert.',
  },
  {
    name: 'Beethoven ML',
    detail: 'Machine learning pipelines tuned like sections of an orchestra.',
  },
  {
    name: 'Beethoven Harmonizer',
    detail: 'The framework that resolves every voice into harmony.',
  },
]

const PLATFORM = [
  {
    name: 'SophiaOS',
    detail: 'A custom Linux distribution based on Ubuntu, composed for Sophia.',
  },
  {
    name: 'SophiaWorks',
    detail: 'The workbench for building, conducting, and shipping with Sophia.',
  },
  {
    name: 'Sophia Apps',
    detail: 'Purpose-built applications that run natively on SophiaOS.',
  },
  {
    name: 'Sophia Ontology',
    detail: 'A shared vocabulary of meaning for every layer of the system.',
  },
]

function Nav() {
  return (
    <header className="nav">
      <nav className="nav-inner container" aria-label="Primary">
        <a className="nav-brand" href="#top">
          <span className="nav-mark" aria-hidden="true" />
          ThinkSophia
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn btn-primary btn-sm nav-cta" href="#contact">
          Get started
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <p className="eyebrow animate-in">AI System · SaaS Framework</p>
        <h1 className="animate-in delay-1">
          ThinkSophia.
          <br />
          <span className="text-gradient">Naturally Wise.</span>
        </h1>
        <p className="hero-sub animate-in delay-2">
          One system of intelligence — SophiaLLM, the Beethoven Conductor Suite,
          and SophiaOS — composed to think with you.
        </p>
        <div className="hero-actions animate-in delay-3">
          <a className="btn btn-primary" href="#products">
            Explore the system
          </a>
          <a className="btn btn-ghost" href="#philosophy">
            Our philosophy
          </a>
        </div>
      </div>
    </section>
  )
}

function Card({ name, tagline, description }) {
  return (
    <article className="card">
      <p className="card-tagline">{tagline}</p>
      <h3 className="card-title">{name}</h3>
      <p className="card-body">{description}</p>
    </article>
  )
}

function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <p className="eyebrow">Products</p>
        <h2>A system, not a tool.</h2>
        <p className="section-sub">
          Three layers of one intelligence — framework, model, and the fabric
          that binds them to people.
        </p>
        <div className="grid grid-3">
          {PRODUCTS.map((product) => (
            <Card key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Beethoven() {
  return (
    <section className="section section-alt" id="beethoven">
      <div className="container">
        <p className="eyebrow">Beethoven Conductor Suite</p>
        <h2>Every agent, in concert.</h2>
        <p className="section-sub">
          The Beethoven Conductor Suite orchestrates ThinkSophia&apos;s agentic
          intelligence — from protocol to harmony.
        </p>
        <ul className="feature-list">
          {BEETHOVEN.map((item) => (
            <li className="feature-row" key={item.name}>
              <span className="feature-name">{item.name}</span>
              <span className="feature-detail">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Platform() {
  return (
    <section className="section" id="platform">
      <div className="container">
        <p className="eyebrow">Platform</p>
        <h2>Built on SophiaOS.</h2>
        <p className="section-sub">
          A Linux platform — Ubuntu at its core — where the system, the
          applications, and their meaning live together.
        </p>
        <ul className="feature-list">
          {PLATFORM.map((item) => (
            <li className="feature-row" key={item.name}>
              <span className="feature-name">{item.name}</span>
              <span className="feature-detail">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section className="section section-alt" id="philosophy">
      <div className="container philosophy-inner">
        <p className="eyebrow">Philosophy</p>
        <blockquote className="pull-quote">
          &ldquo;Wisdom is not computed.
          <br />
          It is cultivated.&rdquo;
        </blockquote>
        <p className="section-sub">
          ThinkSophia pairs human and machine in dyads — two minds in
          relationship — so intelligence grows the way understanding does:
          naturally.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-inner">
        <h2>Begin with Sophia.</h2>
        <p className="section-sub">
          Bring naturally wise intelligence to your work.
        </p>
        <a className="btn btn-primary" href="mailto:hello@thinksophia.app">
          hello@thinksophia.app
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">ThinkSophia — Naturally Wise.</p>
        <p className="footer-meta">
          SophiaLLM · Beethoven Conductor Suite · SophiaOS · Dyadic Social
          Fabric
        </p>
        <p className="footer-meta">© 2026 ThinkSophia. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <Beethoven />
        <Platform />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
