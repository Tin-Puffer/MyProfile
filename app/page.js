import Image from "next/image";

import {
  certifications,
  education,
  experience,
  flagshipProject,
  profile,
  skills,
} from "./cv-data";
import { GlyphIcon, SalesforceCloud, SimpleBrandIcon } from "./components/icon-mark";
import ParticleBackdrop from "./components/particle-backdrop";
import StickyHeader from "./components/sticky-header";
import TiltCard from "./components/tilt-card";

export default function Home() {
  const [currentRole, previousRole] = experience;
  const heroContactItems = [
    {
      label: "Based in",
      value: "Ho Chi Minh City",
      icon: "map",
      className: "meta-value",
    },
    {
      label: "Reach me",
      value: (
        <>
          tinnc.110300
          <wbr />@gmail.com
        </>
      ),
      icon: "mail",
      className: "meta-value meta-value--email",
    },
    {
      label: "Focus areas",
      value: "Apex, LWC, API integration",
      icon: "badge",
      className: "meta-value",
    },
  ];
  const statIcons = ["sparkles", "award", "workflow"];

  return (
    <main className="site-shell" id="home">
      <ParticleBackdrop />
      <div className="site-content">
        <StickyHeader profile={profile} />

        <section className="hero-block motion-fade">
          <div className="hero-copy">
            <p className="eyebrow">
              {profile.location} / Open to high-impact Salesforce platform roles
            </p>
            <h1>Enterprise Salesforce, built to stay dependable.</h1>
            <p className="hero-lead">{profile.intro}</p>
            <p className="hero-body">{profile.summary}</p>

            <div className="hero-actions">
              <a
                className="button-primary"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <GlyphIcon icon="arrow" className="button-icon" />
                View LinkedIn
              </a>
              <a
                className="button-secondary"
                href="/NguyenChiTin_Salesforce_Developer_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <GlyphIcon icon="award" className="button-icon" />
                Open Resume
              </a>
            </div>

            <div className="hero-contact-grid">
              {heroContactItems.map((item) => (
                <article key={item.label}>
                  <div className="meta-icon-wrap">
                    <GlyphIcon icon={item.icon} className="meta-icon" />
                  </div>
                  <div>
                    <span>{item.label}</span>
                    <strong className={item.className}>{item.value}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <TiltCard as="div" className="portrait-card" maxTilt={5} lift={6}>
              <div className="portrait-topline">
                <span>Current profile</span>
                <strong>Salesforce delivery for operational businesses</strong>
              </div>

              <div className="portrait-frame">
                <Image
                  src="/profile.png"
                  alt="Nguyen Chi Tin portrait"
                  width={1024}
                  height={1536}
                  priority
                  className="portrait-image"
                />
              </div>

              <div className="portrait-footnote">
                <span>Credential strength</span>
                <p>Platform Developer II, plus PD I, JavaScript Developer I, and AI Associate.</p>
              </div>
            </TiltCard>
          </div>
        </section>

      <section className="stat-row motion-fade motion-delay-2">
        {profile.heroStats.map((item, index) => (
          <article key={item.label} className="stat-card">
            <GlyphIcon icon={statIcons[index] || "star"} className="stat-icon" />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="logo-rail motion-fade motion-delay-2" aria-label="Core technology stack">
        <article className="logo-pill">
          <SalesforceCloud className="logo-pill-icon" />
          <span>Salesforce</span>
        </article>
        <article className="logo-pill">
          <SimpleBrandIcon icon="javascript" className="logo-pill-icon" />
          <span>JavaScript</span>
        </article>
        <article className="logo-pill">
          <SimpleBrandIcon icon="typescript" className="logo-pill-icon" />
          <span>TypeScript</span>
        </article>
        <article className="logo-pill">
          <SimpleBrandIcon icon="git" className="logo-pill-icon" />
          <span>Git</span>
        </article>
        <article className="logo-pill">
          <SimpleBrandIcon icon="html5" className="logo-pill-icon" />
          <span>HTML5</span>
        </article>
        <article className="logo-pill">
          <GlyphIcon icon="database" className="logo-pill-icon" />
          <span>NetSuite</span>
        </article>
      </section>

      <section className="content-section motion-fade" id="about">
        <div className="section-intro">
          <p className="eyebrow">Positioning</p>
          <h2>A builder who works where business clarity and platform quality need to meet.</h2>
          <p>
            The strength here is not only technical capability. It is the ability to understand
            operational needs, shape maintainable Salesforce solutions, and carry delivery with a
            high level of ownership.
          </p>
        </div>

        <div className="about-grid">
          <article className="quote-card">
            <span className="card-label">Working approach</span>
            <blockquote>{profile.recruiterPitch}</blockquote>
          </article>

          <div className="principle-stack">
            {profile.operatingPrinciples.map((principle, index) => (
              <article key={principle} className="principle-card">
                <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
                <p>{principle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section motion-fade" id="expertise">
        <div className="section-intro">
          <p className="eyebrow">Expertise</p>
          <h2>Technical depth, implementation discipline, and strong business-facing delivery.</h2>
        </div>

        <div className="expertise-grid">
          {profile.signatureStrengths.map((item, index) => (
            <TiltCard
              as="article"
              key={item.title}
              className="expertise-card"
              maxTilt={4}
              lift={5}
            >
              <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      <TiltCard as="section" className="feature-panel motion-fade" maxTilt={3} lift={4}>
        <div className="feature-header">
          <div>
            <p className="eyebrow">Featured Build</p>
            <h2>{flagshipProject.name}</h2>
          </div>
          <span className="feature-period">{flagshipProject.period}</span>
        </div>

        <p className="feature-role">{flagshipProject.role}</p>
        <p className="feature-summary">{flagshipProject.description}</p>

        <div className="feature-board-grid">
          {flagshipProject.architectureBoards.map((board) => (
            <article key={board.title} className="feature-board">
              <div className="feature-board-icon">
                <GlyphIcon
                  icon={
                    board.label === "Architecture"
                      ? "workflow"
                      : board.label === "Execution"
                        ? "badge"
                        : "shield"
                  }
                  className="feature-glyph"
                />
              </div>
              <span>{board.label}</span>
              <h3>{board.title}</h3>
              <p>{board.text}</p>
            </article>
          ))}
        </div>

        <div className="feature-detail-grid">
          <article className="detail-panel">
            <h3>Execution highlights</h3>
            <ul className="detail-list">
              {flagshipProject.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <h3>Technology footprint</h3>
            <div className="chip-cloud">
              {flagshipProject.technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </div>
      </TiltCard>

      <section className="content-section motion-fade" id="experience">
        <div className="section-intro">
          <p className="eyebrow">Experience</p>
          <h2>Built through logistics operations, enterprise delivery, and integration ownership.</h2>
        </div>

        <div className="experience-grid">
          <TiltCard as="article" className="experience-card" maxTilt={3} lift={4}>
            <div className="experience-head">
              <div>
                <span className="experience-tag">Current</span>
                <h3>{currentRole.company}</h3>
                <p>
                  {currentRole.role} / {currentRole.period}
                </p>
              </div>
              <strong>{currentRole.location}</strong>
            </div>

            <p className="experience-summary">{currentRole.summary}</p>
            <ul className="detail-list">
              {currentRole.highlights.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </TiltCard>

          <TiltCard as="article" className="experience-card" maxTilt={3} lift={4}>
            <div className="experience-head">
              <div>
                <span className="experience-tag">Previous</span>
                <h3>{previousRole.company}</h3>
                <p>
                  {previousRole.role} / {previousRole.period}
                </p>
              </div>
              <strong>{previousRole.location}</strong>
            </div>

            <p className="experience-summary">{previousRole.summary}</p>
            <ul className="detail-list">
              {previousRole.highlights.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </TiltCard>
        </div>
      </section>

      <section className="content-section proof-section motion-fade" id="proof">
        <div className="proof-grid">
          <div className="proof-left">
            <article className="proof-card">
              <div className="section-intro compact">
                <p className="eyebrow">Credentials</p>
                <h2>Certifications that support the level of execution expected.</h2>
              </div>

              <div className="credential-grid">
                {certifications.map((cert) => (
                  <article key={cert.credentialId} className="credential-card">
                    <div className="credential-top">
                      <div className="credential-badge">
                        <GlyphIcon
                          icon={cert.title.includes("Platform Developer II") ? "award" : "badge"}
                          className="credential-glyph"
                        />
                      </div>
                      <div className="credential-brand">
                        <SalesforceCloud className="salesforce-mark" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                    <strong>{cert.title}</strong>
                    <span>{cert.date}</span>
                    <small>Credential ID: {cert.credentialId}</small>
                  </article>
                ))}
              </div>
            </article>

            <article className="proof-card education-card">
              <div className="section-intro compact">
                <p className="eyebrow">Education</p>
                <h2>{education.school}</h2>
              </div>
              <p>{education.degree}</p>
              <span>{education.period}</span>
              <strong>Classification: {education.classification}</strong>
            </article>
          </div>

          <div className="proof-side">
            <article className="proof-card">
              <div className="section-intro compact">
                <p className="eyebrow">Capability Map</p>
                <h2>A clean view of platform, engineering, and integration range.</h2>
              </div>

              <div className="skill-stack">
                {skills.map((group) => (
                  <article key={group.category} className="skill-group">
                    <h3>
                      <GlyphIcon
                        icon={
                          group.category === "Platform"
                            ? "cloud"
                            : group.category === "Engineering"
                              ? "code"
                              : group.category === "Integration"
                                ? "workflow"
                                : "laptop"
                        }
                        className="group-icon"
                      />
                      {group.category}
                    </h3>
                    <div className="chip-cloud">
                      {group.items.map((item) => (
                        <span key={item} className="chip muted">
                          {item.includes("JavaScript") ? (
                            <SimpleBrandIcon icon="javascript" className="chip-brand-icon" />
                          ) : item.includes("TypeScript") ? (
                            <SimpleBrandIcon icon="typescript" className="chip-brand-icon" />
                          ) : item.includes("Git") ? (
                            <SimpleBrandIcon icon="git" className="chip-brand-icon" />
                          ) : item.includes("HTML") ? (
                            <SimpleBrandIcon icon="html5" className="chip-brand-icon" />
                          ) : item.includes("CSS") ? (
                            <SimpleBrandIcon icon="css" className="chip-brand-icon" />
                          ) : item.includes("Salesforce") || item.includes("Lightning") ? (
                            <SalesforceCloud className="chip-brand-icon" />
                          ) : item.includes("NetSuite") ? (
                            <GlyphIcon icon="database" className="chip-brand-icon" />
                          ) : item.includes("REST") || item.includes("SOAP") ? (
                            <GlyphIcon icon="workflow" className="chip-brand-icon" />
                          ) : item.includes("Apex") ? (
                            <GlyphIcon icon="code" className="chip-brand-icon" />
                          ) : item.includes("Visual Studio Code") ? (
                            <GlyphIcon icon="laptop" className="chip-brand-icon" />
                          ) : item.includes("Permission") || item.includes("Administration") ? (
                            <GlyphIcon icon="shield" className="chip-brand-icon" />
                          ) : item.includes("AI-assisted") ? (
                            <GlyphIcon icon="sparkles" className="chip-brand-icon" />
                          ) : (
                            <GlyphIcon icon="star" className="chip-brand-icon" />
                          )}
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="site-footer motion-fade" id="contact">
        <div className="site-footer-copy">
          <p className="eyebrow">Contact</p>
          <h2>Available for Salesforce roles where reliability, scale, and business context matter.</h2>
        </div>

        <div className="site-footer-actions">
          <a className="button-primary" href={`mailto:${profile.email}`}>
            Contact Me
          </a>
          <a className="button-secondary" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
            Call {profile.phone}
          </a>
        </div>
      </footer>
      </div>
    </main>
  );
}
