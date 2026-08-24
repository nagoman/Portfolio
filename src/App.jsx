const contact = {
  name: 'Negasa Teferi Kistana',
  title: 'Digital Product Development Officer | Product Owner | Business Analyst',
  subtitle: 'Digital Banking Product Development Officer',
  location: 'Addis Ababa, Ethiopia',
  phone: '+251919275013',
  email: 'nagasatafari2009@gmail.com',
  linkedin: 'www.linkedin.com/in/negasa-teferi-323280207',
  photo: 'https://github.com/nagoman.png?size=512',
};

const competencies = [
  'Digital Banking Product Development',
  'Agile Product Lifecycle Management',
  'Mobile & Internet Banking Platforms',
  'API Development & System Integration',
  'Digital Loan Products: Payday, Salary Advance, MSME',
  'Regulatory Compliance & Risk Monitoring',
  'Interest-Free Banking: IFB / Sharia-Compliant',
  'Customer Experience (UX) Optimization',
  'Business Requirements Document (BRD) Writing',
  'Market & Competitive Analysis',
  'QR Payment Systems & Wallet Integration',
  'Fraud Prevention & Security Awareness',
  'Fintech Integration & Partnerships',
  'Data Analysis & Reporting',
  'KYC & Digital Onboarding Automation',
  'Cross-functional Stakeholder Coordination',
  'UAT Test Case Development',
  'Cybersecurity Fundamentals',
];

const experiences = [
  {
    role: 'Digital Products Development Officer',
    company: 'Awash Bank',
    location: 'Addis Ababa, Ethiopia',
    period: 'December 2023 – Present',
    items: [
      'Develop and manage innovative digital banking products, including mobile banking, internet banking, digital payment solutions, and virtual cards.',
      'Prepare comprehensive Business Requirements Documents (BRDs) for mobile banking, e-wallets, digital loans, IFB products, and virtual cards.',
      'Draft detailed test cases and UAT scenarios to ensure product quality and readiness before launch.',
      'Lead end-to-end product lifecycle management from ideation, design, development, testing, and deployment.',
      'Design and continuously improve digital loan workflows and customer journeys for payday loans, salary advance, merchant loans, e-school payment loans, and microloans.',
      'Implement Sharia-compliant digital products, including e-Murabaha workflows and IFB mobile banking features.',
      'Collaborate with IT, compliance, and business teams to ensure seamless system integration and regulatory adherence.',
      'Coordinate Telebirr integration and microsavings product initiatives; support QR payment and wallet-related product enhancements.',
      "Drive fintech partnerships to expand the bank's digital service ecosystem.",
      'Lead KYC automation and digital onboarding process improvement efforts.',
      'Contribute to MSME, agricultural digital banking, remittance, and virtual card product development.',
      'Optimise digital product performance through data-driven insights and customer feedback analysis.',
    ],
  },
  {
    role: 'Customer Service Officer',
    company: 'Awash Bank',
    location: 'Addis Ababa, Ethiopia',
    period: 'November 2023 – December 2023',
    items: [
      'Assisted customers with mobile banking, internet banking, and digital wallet services.',
      'Troubleshot login issues, transaction failures, and app-related errors for a smoother customer experience.',
      'Guided customers through KYC and digital service activation processes.',
      'Promoted digital adoption through targeted campaigns for mobile app and online banking usage.',
    ],
  },
  {
    role: 'Digital Channel Officer',
    company: 'Digital Banking Channels',
    location: 'Addis Ababa, Ethiopia',
    period: 'August 2021 – October 2023',
    items: [
      'Proposed UI improvements and feature enhancements for digital banking applications.',
      'Ensured digital transactions complied with local banking regulations and security standards.',
      'Assisted customers in navigating KYC and authentication processes for digital channels.',
      'Supported fraud prevention and security awareness initiatives across digital platforms.',
    ],
  },
];

const productFocus = [
  { icon: '📱', title: 'Mobile & Internet Banking', text: 'Customer-facing digital channels, account services, authentication, bill payments, wallets, and transaction journeys.' },
  { icon: '💳', title: 'Digital Loans & Virtual Cards', text: 'Payday loans, salary advance, merchant loans, MSME lending, e-school payment loans, microloans, and virtual card concepts.' },
  { icon: '☪️', title: 'Interest-Free Banking', text: 'IFB/Sharia-compliant product flows, e-Murabaha workflows, and Islamic digital banking service design.' },
  { icon: '🔗', title: 'Fintech Integrations', text: 'Telebirr, QR payments, wallet integrations, partner APIs, payment ecosystem enhancements, and microsavings initiatives.' },
  { icon: '🧾', title: 'Business Analysis', text: 'BRDs, product requirements, process mapping, UAT test cases, stakeholder alignment, and regulatory readiness.' },
  { icon: '🛡️', title: 'Risk, KYC & Security', text: 'Digital onboarding automation, KYC improvements, fraud prevention awareness, compliance monitoring, and cybersecurity fundamentals.' },
];

const capabilityPillars = [
  {
    number: '01',
    icon: '◈',
    title: 'Product Strategy & Ownership',
    text: 'Translate banking priorities into a clear product vision, prioritised backlog, measurable outcomes, and release-ready roadmaps.',
    skills: ['Product Vision', 'Discovery & Roadmaps', 'Backlog Prioritisation', 'Agile Delivery'],
  },
  {
    number: '02',
    icon: '⌁',
    title: 'Business Analysis & Delivery',
    text: 'Turn complex needs into usable requirements, customer journeys, integration specifications, test scenarios, and dependable launches.',
    skills: ['BRD & PRD Writing', 'User Stories', 'UAT & Quality Assurance', 'API & Process Mapping'],
  },
  {
    number: '03',
    icon: '✦',
    title: 'Digital Banking Innovation',
    text: 'Create secure, inclusive financial experiences across mobile channels, digital lending, IFB products, wallets, payments, and fintech ecosystems.',
    skills: ['Mobile & Internet Banking', 'Digital Lending', 'Payments & Wallets', 'IFB / Sharia-Compliant Products'],
  },
];

const education = [
  'Master of Science – Information Technology, Ambo University, School of Informatics & Electrical Engineering, 2025',
  'Bachelor of Science – Information Technology, Haramaya University, College of Computing and Informatics, 2021',
];

const certifications = [
  'Emerging Technologies in Digital Banking & Payments – NBE',
  'CISSP – Certified Information Systems Security Professional',
  'CISCO Networking – Four Consecutive Courses',
  'CCNA 200-301 Network Fundamentals',
  'Project Management 101 (PMP)',
  'Introduction to Six Sigma',
  'Data Analysis Fundamentals',
  'Fundamentals of AI',
  'Android Developer Fundamentals',
  'Programming Fundamentals',
];

const languages = [
  ['Afaan Oromoo', 'C2 Native', '100%'],
  ['Amharic', 'C1 Advanced / Fluent', '90%'],
  ['English', 'C1 Advanced / Professional', '90%'],
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
            <a href="#summary"><span aria-hidden="true">📌</span> Summary</a>
            <a href="#experience"><span aria-hidden="true">💼</span> Experience</a>
            <a href="#products"><span aria-hidden="true">🚀</span> Products</a>
            <a href="#skills"><span aria-hidden="true">🧠</span> Skills</a>
            <a href="#contact"><span aria-hidden="true">☎️</span> Contact</a>
          </div>
        </nav>

        <section className="cover page-section">
          <div className="cover-copy">
            <p className="eyebrow">Executive Digital Banking CV Portfolio</p>
            <h1>{contact.name}</h1>
            <h2>{contact.title}</h2>
            <p className="lead">5 years of progressive banking experience across digital product development, product ownership, business analysis, fintech integrations, and customer-centric digital transformation.</p>
            <div className="hero-actions">
              <a className="button primary" href={`mailto:${contact.email}`}>Email Negasa <span aria-hidden="true">→</span></a>
              <a className="button secondary" href="#experience">View Experience</a>
            </div>
          </div>
          <aside className="executive-card" aria-label="Executive profile and contact snapshot">
            <div className="profile-photo-wrap">
              <img
                className="profile-photo"
                src={contact.photo}
                alt={`Professional portrait of ${contact.name}`}
                onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.nextElementSibling.hidden = false; }}
              />
              <span className="photo-fallback" hidden aria-hidden="true">NTK</span>
              <span className="availability-badge"><i aria-hidden="true" />Open to global opportunities</span>
            </div>
            <p className="profile-label">Digital Banking & FinTech</p>
            <h3>{contact.subtitle}</h3>
            <ul className="contact-list">
              <li><span>📍</span>{contact.location}</li>
              <li><span>📞</span><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
              <li><span>📧</span><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><span>🔗</span><a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer">{contact.linkedin}</a></li>
            </ul>
          </aside>
        </section>
      </header>

      <main>
        <section className="page-section grid-two" id="summary">
          <div>
            <SectionHeader eyebrow="Professional Summary" title="Digital product development, product ownership, and business analysis for modern banking." />
            <p>Results-driven Digital Banking Product Development Officer with 5 years of progressive experience in the banking sector. Specialises in digital financial services, mobile banking, interest-free (IFB/Sharia-compliant) products, fintech integrations, and customer-centric product innovation.</p>
            <p>Proven expertise in writing comprehensive BRDs and UAT test cases, managing end-to-end product lifecycles, and driving digital transformation across retail, MSME, and enterprise banking segments. Passionate about financial inclusion and leveraging technology to deliver measurable customer value.</p>
          </div>
          <div className="objective-card">
            <span className="panel-icon" aria-hidden="true">🎯</span>
            <h3>Target Roles</h3>
            <p>Digital Product Development Specialist, Product Owner, Product Manager, Business Analyst, Digital Banking Product Manager, and FinTech Product Lead.</p>
          </div>
        </section>

        <section className="page-section summary-strip" aria-label="Career highlights">
          <article><span className="summary-icon" aria-hidden="true">5+</span><strong>Years Experience</strong><span>Progressive digital banking and customer service experience.</span></article>
          <article><span className="summary-icon" aria-hidden="true">BRD</span><strong>Business Analysis</strong><span>Requirements, UAT test cases, process flows, and launch readiness.</span></article>
          <article><span className="summary-icon" aria-hidden="true">API</span><strong>Digital Integration</strong><span>Wallets, QR payments, fintech partners, and system integration.</span></article>
        </section>

        <section className="page-section" id="experience">
          <SectionHeader eyebrow="Professional Experience" title="Banking experience across product delivery, channels, and customer adoption." />
          <div className="experience-stack">
            {experiences.map((experience) => (
              <article className="experience-card" key={`${experience.role}-${experience.period}`}>
                <div className="experience-meta">
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.company} | {experience.location}</p>
                  </div>
                  <span>{experience.period}</span>
                </div>
                <ul className="check-list">
                  {experience.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section" id="products">
          <SectionHeader eyebrow="Product Portfolio" title="Digital banking, fintech, IFB, lending, and business analysis portfolio." />
          <div className="portfolio-grid">
            {productFocus.map(({ icon, title, text }) => (
              <article className="portfolio-card" key={title}>
                <span className="portfolio-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-section capabilities-section" id="skills">
          <SectionHeader eyebrow="Executive Capabilities" title="Digital banking leadership, translated into exceptional product delivery.">
            A focused blend of product ownership, business analysis, and digital banking expertise—designed to move financial products from opportunity to trusted customer value.
          </SectionHeader>
          <div className="capability-grid">
            {capabilityPillars.map(({ number, icon, title, text, skills }) => (
              <article className="capability-card" key={title}>
                <div className="capability-topline"><span>{number}</span><b aria-hidden="true">{icon}</b></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="competency-ledger" aria-label="Complete competency list">
            <p>Complete expertise</p>
            <div className="competency-grid">
              {competencies.map((skill) => <span key={skill}>▸ {skill}</span>)}
            </div>
          </div>
        </section>

        <section className="page-section grid-two" id="education">
          <div className="plain-card">
            <h2>Education</h2>
            <ul className="simple-list">{education.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="plain-card">
            <h2>Certifications & Training</h2>
            <ul className="simple-list two-column">{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="page-section grid-two" id="languages">
          <div>
            <SectionHeader eyebrow="Languages" title="Multilingual communication for diverse banking customers and teams." />
            <div className="language-stack">
              {languages.map(([language, level, width]) => (
                <div className="language-row" key={language}>
                  <div><strong>{language}</strong><span>{level}</span></div>
                  <div className="bar"><span style={{ width }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="framework-card">
            <span className="panel-icon" aria-hidden="true">🤝</span>
            <h3>Reference</h3>
            <p><strong>Mikiyasa Adefris</strong><br />Manager, Digital Product Development Division</p>
            <p><a href="tel:0913153900">0913153900</a></p>
          </div>
        </section>

        <section className="page-section closing" id="contact">
          <SectionHeader eyebrow="Contact Information" title="Available for digital product development, product owner, and business analyst opportunities.">Negasa Teferi Kistana combines banking domain knowledge, product ownership, BRD/UAT discipline, fintech integration experience, and digital transformation execution.</SectionHeader>
          <div className="contact-grid">
            <a href={`mailto:${contact.email}`}><span>📧</span>{contact.email}</a>
            <a href={`tel:${contact.phone}`}><span>📞</span>{contact.phone}</a>
            <a href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer"><span>🔗</span>{contact.linkedin}</a>
            <span><span>📍</span>{contact.location}</span>
          </div>
        </section>
      </main>
    </div>
  );
}
