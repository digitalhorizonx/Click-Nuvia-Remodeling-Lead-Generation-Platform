import { LeadWizard } from "@/components/lead-wizard";
import { ArrowRight, BadgeCheck, Bath, ChefHat, CheckCircle2, Clock3, Hammer, Home as HomeIcon, MapPin, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  { icon: ChefHat, title: "Kitchen Remodeling", text: "Create a smarter, more beautiful kitchen designed around the way your household actually lives." },
  { icon: Bath, title: "Bathroom Remodeling", text: "Upgrade comfort, storage, finishes and functionality with a bathroom plan built for daily use." },
  { icon: HomeIcon, title: "Whole-Home Remodeling", text: "Reimagine multiple rooms with one coordinated scope, design direction and remodeling plan." },
  { icon: Hammer, title: "Room Additions & ADUs", text: "Add flexible living space for family, work, guests or rental potential with a project-specific consultation." },
];

const faqs = [
  ["Is the estimate request free?", "Yes. Starting your request is free and there is no obligation to move forward with a project."],
  ["What happens after I submit?", "We review your project details and route the request to the appropriate remodeling contact for your service area."],
  ["What types of projects can I request?", "Kitchen, bathroom, whole-home, room addition, ADU, exterior and other residential remodeling projects can all be submitted."],
  ["How soon will someone contact me?", "Qualified requests are prioritized based on project readiness, location and scope. A representative will follow up using the contact details you provide."],
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav">
        <a className="brand" href="#top" aria-label="Click Nuvia Remodeling home">CLICK <span>NUVIA</span></a>
        <div className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="nav-cta" href="#estimate">Get a free estimate</a>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">HOME REMODELING, MADE SIMPLE</p>
          <h1>Turn your next remodel into a plan you can <em>move forward with.</em></h1>
          <p className="lede">Tell us what you want to improve. Click Nuvia helps homeowners start the conversation with qualified remodeling professionals for kitchens, bathrooms, additions and full-home projects.</p>
          <div className="hero-actions">
            <a className="primary" href="#estimate">Start my free estimate <ArrowRight size={18}/></a>
            <a className="secondary" href="#services">Explore services</a>
          </div>
          <div className="trust">
            <span><ShieldCheck/> No obligation</span>
            <span><Clock3/> About 60 seconds</span>
            <span><BadgeCheck/> Project qualification</span>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Modern remodeled home interior">
          <div className="hero-badge"><Sparkles size={16}/><span>Designed around your goals</span></div>
          <div className="project-card"><small>START HERE</small><strong>Tell us about your project</strong><span>Get matched based on scope, ZIP code and timeline.</span></div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Why homeowners use Click Nuvia">
        <div><strong>One request</strong><span>Share the core project details once.</span></div>
        <div><strong>Better qualification</strong><span>Scope, budget and timeline help route the right lead.</span></div>
        <div><strong>Faster next step</strong><span>Move from browsing to a real remodeling conversation.</span></div>
      </section>

      <section id="services" className="services section-shell">
        <div className="section-heading">
          <div><p className="eyebrow">REMODELING SERVICES</p><h2>Start with the project you have in mind.</h2></div>
          <p>Whether you are updating one room or reworking the entire home, the first step is defining the scope clearly enough to connect you with the right next conversation.</p>
        </div>
        <div className="service-grid">
          {services.map(({icon: Icon,title,text}) => <article key={title}><Icon/><h3>{title}</h3><p>{text}</p><a href="#estimate">Request an estimate <ArrowRight size={16}/></a></article>)}
        </div>
      </section>

      <section id="process" className="steps section-shell">
        <p className="eyebrow">HOW IT WORKS</p>
        <h2>A shorter path from idea to next step.</h2>
        <div className="step-grid">
          {[
            ["01","Share your project","Choose the remodeling type, location, timing and expected investment range."],
            ["02","We qualify the request","Your details help determine project fit and the right follow-up path."],
            ["03","Connect and plan","Discuss your goals, options, timeline and estimate with a remodeling contact."],
          ].map(x => <article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}
        </div>
      </section>

      <section className="decision-band">
        <div className="decision-image" role="img" aria-label="Finished kitchen remodeling project" />
        <div className="decision-copy">
          <p className="eyebrow">A BETTER FIRST CONVERSATION</p>
          <h2>Good remodeling starts with a clear brief.</h2>
          <p>Our request flow captures the information contractors normally need at the beginning, so the follow-up can focus on your actual project instead of repeating basic questions.</p>
          <ul>
            <li><CheckCircle2/> Project type and ZIP code</li>
            <li><CheckCircle2/> Ownership and desired timeline</li>
            <li><CheckCircle2/> Budget range and contact details</li>
          </ul>
          <a className="primary light" href="#estimate">Describe my project <ArrowRight size={18}/></a>
        </div>
      </section>

      <section className="location-section section-shell">
        <div><p className="eyebrow">LOCAL PROJECT MATCHING</p><h2>Your ZIP code helps us route the request correctly.</h2></div>
        <div className="location-card"><MapPin/><div><strong>Service-area based</strong><p>Availability depends on project type and location. Enter your ZIP code in the estimate flow to begin qualification.</p></div></div>
      </section>

      <section id="estimate" className="estimate">
        <div className="estimate-copy">
          <p className="eyebrow">FREE PROJECT REQUEST</p>
          <h2>Tell us what you want to remodel.</h2>
          <p>Complete the short project questionnaire. Your information is used to evaluate and follow up on your remodeling request.</p>
          <div className="estimate-points"><span><ShieldCheck/> No purchase required</span><span><Clock3/> Takes about a minute</span><span><BadgeCheck/> Secure project intake</span></div>
        </div>
        <LeadWizard/>
      </section>

      <section id="faq" className="faq section-shell">
        <div className="section-heading"><div><p className="eyebrow">COMMON QUESTIONS</p><h2>What to know before you submit.</h2></div></div>
        <div className="faq-grid">{faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </section>

      <section className="final-cta section-shell">
        <div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Your project can start with one minute of details.</h2></div>
        <a className="primary" href="#estimate">Get my free estimate <ArrowRight size={18}/></a>
      </section>

      <footer>
        <div><a className="brand" href="#top">CLICK <span>NUVIA</span></a><p>Home remodeling project acquisition and qualification.</p></div>
        <div className="footer-links"><a href="#services">Services</a><a href="#process">How it works</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
        <p>© 2026 Click Nuvia. All rights reserved.</p>
      </footer>
    </main>
  );
}
