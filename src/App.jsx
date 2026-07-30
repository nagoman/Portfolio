const portfolioItems = [
  { icon: '💳', title: 'Digital Lending', text: 'Salary Advance, Payday Loans, Merchant Loans, School Financing, BNPL, and Micro Lending.' },
  { icon: '📱', title: 'Mobile Banking', text: 'Awash Birr Pro, wallet services, wallet-to-bank transfers, utility payments, QR payments, onboarding, and bill payments.' },
  { icon: '🖥️', title: 'Internet Banking', text: 'Personal and corporate internet banking, transaction management, authentication, OTP, beneficiaries, and account services.' },
  { icon: '🔗', title: 'Payment Integrations', text: 'Telebirr, Safaricom, digital bill payments, payment gateways, and third-party REST API integrations.' },
  { icon: '🏦', title: 'Digital Savings', text: 'Micro savings, goal-based savings, challenge savings, and deposit campaign features.' },
  { icon: '🌾', title: 'Agriculture & Trade', text: 'Farmer digital services, SACCO integration, digital KYC, and cooperative banking journeys.' },
  { icon: '☪️', title: 'Interest-Free Banking', text: 'Digital Murabaha, Islamic banking services, and Sharia-compliant digital product experiences.' },
];

const skillGroups = [
  ['Core Competencies', ['Product Ownership', 'Digital Product Management', 'Product Strategy', 'Agile & Scrum', 'Business Analysis', 'Product Discovery', 'Requirements Engineering', 'User Stories', 'Backlog Management', 'Customer Journey Mapping', 'UX Improvement', 'UAT']],
  ['Technical Skills', ['Core Banking Systems', 'Digital Banking Platforms', 'REST APIs', 'JSON', 'Postman', 'SQL', 'Jira', 'Confluence', 'Figma', 'Draw.io', 'Microsoft Visio', 'Microsoft Office']],
  ['Leadership Strengths', ['Strategic Product Thinking', 'Strong Leadership', 'Product Vision', 'Analytical Thinking', 'Problem Solving', 'Decision Making', 'Innovation', 'Stakeholder Communication', 'Product Delivery', 'Team Collaboration', 'Adaptability', 'Critical Thinking']],
  ['Banking Domain Expertise', ['Mobile Banking', 'Internet Banking', 'Digital Wallets', 'Payment Systems', 'Merchant Payments', 'QR Payments', 'Digital Lending', 'Interest-Free Banking', 'API Integration', 'Risk & Compliance', 'Data Analysis', 'Digital Transformation']],
];

const responsibilities = [
  'Define product vision and objectives for digital banking capabilities.',
  'Gather and analyse business requirements, then create BRDs, PRDs, and user stories.',
  'Design customer journeys, workflows, and prioritised product backlogs.',
  'Coordinate developers, UI/UX designers, QA teams, vendors, and business stakeholders.',
  'Lead demonstrations, UAT, production validation, release support, KPI monitoring, and customer feedback analysis.',
];

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="hero" id="top">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top">NTK</a>
          <div className="nav-links">
            <a href="#profile">Profile</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#skills">Skills</a>
            <a href="#timeline">Timeline</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="cover page-section">
          <div className="cover-copy">
            <p className="eyebrow">Executive Digital Banking Portfolio</p>
            <h1>Negasa Teferi Kistana</h1>
            <h2>Digital Banking Product Owner | Digital Product Development Specialist | FinTech & Banking Innovation Professional</h2>
            <p className="lead">Building scalable digital financial products across mobile banking, internet banking, lending, payments, wallets, APIs, and customer-centric banking transformation.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Connect <span aria-hidden="true">→</span></a>
              <a className="button secondary" href="#portfolio">View Product Portfolio</a>
            </div>
          </div>
          <aside className="executive-card" aria-label="Executive snapshot">
            <span className="card-icon" aria-hidden="true">🚀</span>
            <h3>Product Leadership Focus</h3>
            <p>International Product Owner / Product Manager ready to lead enterprise-scale banking and fintech innovation.</p>
            <ul>
              <li><span>✓</span> Digital Banking</li>
              <li><span>✓</span> FinTech Products</li>
              <li><span>✓</span> Agile Delivery</li>
              <li><span>✓</span> API Integrations</li>
            </ul>
          </aside>
        </section>
      </header>

      <main>
        <section className="page-section grid-two" id="profile">
          <div>
            <SectionHeader eyebrow="Professional Profile" title="Digital product specialist translating banking strategy into customer value." />
            <p>An experienced Digital Banking Product Development Specialist with expertise in designing, developing, and delivering innovative digital financial products. Strong background in Product Ownership, Business Analysis, Agile product development, digital transformation, API integrations, mobile banking, Internet Banking, digital lending, and payment ecosystems.</p>
            <p>Experienced in bridging business objectives with technology solutions while delivering customer-centric products that improve operational efficiency and digital adoption.</p>
          </div>
          <div className="objective-card">
            <span className="panel-icon" aria-hidden="true">🎯</span>
            <h3>Career Objective</h3>
            <p>To become a globally recognised Product Owner and Product Manager leading digital banking and fintech innovation by building scalable financial products through technology and data-driven decision-making.</p>
          </div>
        </section>

        <section className="page-section summary-strip" aria-label="Career summary">
          <article><span className="summary-icon" aria-hidden="true">🏢</span><strong>Industry</strong><span>Banking, FinTech, Digital Payments, Financial Services</span></article>
          <article><span className="summary-icon" aria-hidden="true">🏛️</span><strong>Current Role</strong><span>Digital Products Development Officer, Awash Bank PLC</span></article>
          <article><span className="summary-icon" aria-hidden="true">📈</span><strong>Product Impact</strong><span>Product discovery, delivery, adoption, UAT, release support, KPI monitoring</span></article>
        </section>

        <section className="page-section" id="portfolio">
          <SectionHeader eyebrow="Product Portfolio" title="Digital banking products across the customer lifecycle.">A recruiter-friendly view of products, integrations, and digital banking channels delivered across the ecosystem.</SectionHeader>
          <div className="portfolio-grid">
            {portfolioItems.map(({ icon, title, text }) => (
              <article className="portfolio-card" key={title}>
                <span className="portfolio-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section grid-two" id="projects">
          <div>
            <SectionHeader eyebrow="Key Projects & Responsibilities" title="From discovery to launch and optimisation." />
            <ul className="check-list">
              {responsibilities.map((item) => <li key={item}><span aria-hidden="true">✓</span> {item}</li>)}
            </ul>
          </div>
          <div className="framework-card">
            <span className="panel-icon" aria-hidden="true">🛡️</span>
            <h3>Product Management Framework</h3>
            <ol>
              <li>Discover customer and business needs.</li>
              <li>Define strategy, outcomes, and success metrics.</li>
              <li>Prioritise backlog by value, risk, feasibility, and compliance.</li>
              <li>Deliver through Agile Scrum and cross-functional execution.</li>
              <li>Measure adoption, performance, feedback, and continuous improvement.</li>
            </ol>
          </div>
        </section>

        <section className="page-section" id="skills">
          <SectionHeader eyebrow="Skills & Domain Expertise" title="Executive product skill set for global fintech and banking teams." />
          <div className="skills-layout">
            {skillGroups.map(([title, skills]) => (
              <div className="skill-panel" key={title}>
                <h3>{title}</h3>
                <div className="tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="page-section achievements" id="achievements">
          <SectionHeader eyebrow="Achievements" title="Achievement-focused contribution themes." />
          <div className="achievement-grid">
            <article><strong>Digital Adoption</strong><span>Enhanced multi-channel digital banking capabilities that support customer onboarding, payments, transfers, and self-service.</span></article>
            <article><strong>Product Delivery</strong><span>Converted business needs into structured requirements, user stories, UAT plans, and production-ready releases.</span></article>
            <article><strong>FinTech Integration</strong><span>Supported partner integrations and API-enabled services across payment, wallet, and banking ecosystems.</span></article>
          </div>
        </section>

        <section className="page-section timeline" id="timeline">
          <SectionHeader eyebrow="Professional Timeline" title="Career and capability growth." />
          <div className="timeline-item"><span>Current</span><div><h3>Digital Products Development Officer — Awash Bank PLC</h3><p>Designing, analysing, developing, testing, and enhancing digital banking products across customer channels.</p></div></div>
          <div className="timeline-item"><span>Next</span><div><h3>International Product Owner / Product Manager</h3><p>Career goal: lead enterprise-scale digital banking and fintech products for global financial institutions and technology companies.</p></div></div>
        </section>

        <section className="page-section grid-two" id="education">
          <div className="plain-card"><h2>Education</h2><p>Education details available upon request. Add degree, institution, and graduation year here.</p></div>
          <div className="plain-card"><h2>Certifications</h2><p>Placeholder for certifications such as CSPO, PSPO, Scrum Master, Product Management, Agile, API, Data Analytics, or Digital Banking credentials.</p></div>
        </section>

        <section className="page-section closing" id="contact">
          <SectionHeader eyebrow="Contact Information" title="Ready to lead digital banking innovation at international scale.">Negasa Teferi Kistana is positioned for Product Owner, Product Manager, Senior Digital Banking Product Manager, and FinTech innovation leadership opportunities with international banks, payment networks, and digital-first financial institutions.</SectionHeader>
          <div className="contact-grid">
            <a href="mailto:your.email@example.com"><span>✉️</span> your.email@example.com</a>
            <a href="tel:+251000000000"><span>☎️</span> +251 000 000 000</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><span>🌐</span> LinkedIn Profile</a>
            <span><span>📍</span> Open to international opportunities</span>
          </div>
        </section>
      </main>
    </div>
  );
}

