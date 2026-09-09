# Aleph Innovation Web Platform — Architecture

**Document:** `ALEPH_INNOVATION_WEB_ARCHITECTURE.md`  
**Status:** APPROVED BASELINE  
**Version:** 1.0  
**Date:** 2026-09-09  
**Project:** Aleph Innovation Web Platform  
**Primary domain:** `alephinnovation.com`  
**Hosting target:** SiteGround  
**Development model:** repository-based / software-engineered website  
**Primary language:** English

---

# 1. Purpose

This document defines the architectural baseline for the official Aleph Innovation web platform.

The platform is not intended to be merely a corporate website.

It is designed to evolve into the public digital platform of Aleph Innovation, combining:

- venture presentation;
- engineering documentation;
- project communication;
- technical Wiki;
- interactive applications;
- registered user services;
- research participation;
- community feedback;
- and future funding/support mechanisms.

The website SHALL be developed as software, version-controlled in Git and deployed from a dedicated repository.

SiteGround SHALL primarily provide hosting, domain, DNS, TLS/SSL and infrastructure services.

WordPress MAY remain temporarily available during migration, but the architecture SHALL NOT depend on WordPress visual editing as its primary development model.

---

# 2. Aleph Innovation Mission

Aleph Innovation is an AI venture in formation based in Gozo, Malta, focused on the engineering of Agentic AI systems that combine deterministic software with probabilistic AI.

Its first R&D project, Agentic Portfolio, explores this architecture in the context of investment research, quantitative analysis, portfolio risk and AI-assisted decision support.

Aleph follows an engineering-first and building-in-public approach, documenting architecture, implementation, testing, failures and lessons learned as the project evolves.

**Current status:** pre-incorporation R&D venture.

This statement constitutes the canonical high-level mission statement for the initial website.

---

# 3. Strategic Objectives

The web platform SHALL support five primary objectives.

## 3.1 Explain Aleph Innovation

The site SHALL clearly communicate:

- what Aleph Innovation is;
- why it exists;
- what engineering problems it addresses;
- its Gozo, Malta origin;
- its international/global technological ambition;
- its engineering-first philosophy;
- and its current pre-incorporation R&D status.

## 3.2 Document Real Engineering

The site SHALL expose meaningful technical information rather than functioning exclusively as a marketing website.

Architecture, implementation choices, tests, limitations, failures and lessons learned SHOULD be documented when appropriate.

## 3.3 Present and Document Projects

The site SHALL provide a common platform for Aleph Innovation R&D projects.

Agentic Portfolio is the first substantial implementation, but the information architecture SHALL NOT assume that it will remain the only project.

## 3.4 Enable Controlled User Participation

The architecture SHALL allow future registered users to interact with selected Aleph applications through the browser.

The initial target use case is portfolio analysis using selected capabilities derived from Agentic Portfolio.

## 3.5 Build an R&D Community and Support Base

The platform SHOULD progressively allow:

- technical feedback;
- testing participation;
- collaboration;
- project following;
- voluntary financial support;
- and potentially future investor-oriented communication.

---

# 4. Design Principles

## 4.1 Engineering First

Architecture SHALL take precedence over convenience offered by visual site builders.

The website SHALL be:

- version controlled;
- reproducible;
- testable;
- deployable;
- maintainable;
- modular;
- and documented.

## 4.2 Build in Public

Aleph Innovation SHOULD expose the evolution of its projects where this does not conflict with:

- security;
- privacy;
- intellectual property considerations;
- legal obligations;
- or operational risk.

The platform SHOULD document not only successful outcomes but also relevant engineering decisions, limitations and lessons learned.

## 4.3 Separation of Concerns

The following domains SHALL remain conceptually separated:

1. public corporate content;
2. technical documentation;
3. interactive web applications;
4. authentication and user management;
5. project backends;
6. payment/support infrastructure;
7. underlying R&D repositories.

The website SHALL NOT become a monolithic copy of the underlying projects.

## 4.4 Progressive Complexity

Capabilities SHALL be introduced incrementally.

The first production release SHALL NOT require all long-term functionality to be implemented.

The architecture SHALL nevertheless avoid decisions that make later evolution unnecessarily difficult.

---

# 5. Visual Identity

The visual language SHALL derive directly from the established Aleph Innovation branding.

The reference visual identity includes:

- very dark navy / near-black backgrounds;
- blue and cyan technology accents;
- green-to-blue gradients;
- restrained luminous effects;
- network and graph motifs;
- technological/geometric structures;
- Mediterranean geographic references;
- Gozo coastal architecture;
- and global connectivity imagery.

The website SHOULD visually communicate the concept:

> Advanced technology developed from a small Mediterranean island for a global world.

The site SHALL avoid the visual appearance of:

- generic corporate consulting;
- cryptocurrency marketing;
- speculative investment advertising;
- generic AI stock imagery;
- or an excessively futuristic science-fiction interface.

The aesthetic SHOULD remain technical, elegant, restrained and credible.

---

# 6. Hero Concept

The homepage hero SHALL be visually derived from the established Aleph Innovation banner identity.

The conceptual composition is:

```text
ALEPH INNOVATION
Building Agentic AI Systems
from Gozo, Malta

                    GLOBAL NETWORK
                          ◉
                     🌍
                network / AI graph
                         │
                   Gozo coastline
```

The left-hand visual focus SHOULD communicate identity and mission.

The right-hand visual focus SHOULD communicate the transition:

```text
GOZO
  ↓
ENGINEERING
  ↓
AI SYSTEMS
  ↓
GLOBAL APPLICATION
```

The surrounding page background SHOULD visually merge with the hero instead of producing a hard rectangular banner boundary.

---

# 7. Information Architecture

The initial top-level information architecture SHALL be:

```text
Home
│
├── Mission
├── Paradigm
├── Projects
│   ├── Agentic Portfolio
│   ├── Environmental Monitoring
│   ├── Water & Resource Intelligence
│   └── Future Projects
│
├── Engineering / Wiki
│   └── Agentic Portfolio
│
├── Build in Public
├── Support Aleph
├── About
├── Contact
│
└── User Area
```

Not every logical section MUST correspond to a top-level navigation item.

Navigation SHALL remain concise.

---

# 8. Homepage Architecture

The homepage SHOULD follow the conceptual sequence:

```text
HERO
 ↓
MISSION
 ↓
ALEPH PARADIGM
 ↓
CURRENT PROJECTS
 ↓
AGENTIC PORTFOLIO
 ↓
BUILDING IN PUBLIC
 ↓
FROM GOZO TO GLOBAL SYSTEMS
 ↓
SUPPORT / PARTICIPATE
 ↓
CONTACT
```

The homepage SHALL answer, rapidly:

1. What is Aleph Innovation?
2. What does Aleph build?
3. What makes its approach different?
4. What is being built now?
5. How can somebody inspect the engineering?
6. How can somebody participate or make contact?

---

# 9. Aleph Engineering Paradigm

A prominent section SHALL explain the core Aleph engineering paradigm.

Aleph SHALL NOT present Agentic AI as simply connecting an LLM to tools.

The canonical conceptual model is:

```text
              ┌─────────────────────┐
              │  DETERMINISTIC CORE │
              └──────────┬──────────┘
                         │
              constraints / contracts
                         │
       ┌─────────────────┼─────────────────┐
       │                 │                 │
       ▼                 ▼                 ▼
   AI AGENT A         AI AGENT B       AI AGENT C
   research           critique         alternative
       │                 │                 │
       └────────────┬────┴─────┬───────────┘
                    │
                    ▼
             EVIDENCE / OUTPUTS
                    │
                    ▼
          DETERMINISTIC VALIDATION
                    │
                    ▼
             DECISION LAYER
```

The exact implementation MAY vary by project.

The general principle remains:

> Deterministic software defines contracts, constraints, state and validation. Probabilistic AI contributes interpretation, research, reasoning and candidate decisions inside controlled boundaries.

---

# 10. Deterministic + Probabilistic Architecture

Aleph systems SHOULD explicitly distinguish between:

## Deterministic components

Examples:

- numerical computation;
- data validation;
- schemas;
- contracts;
- state transitions;
- constraints;
- risk limits;
- persistence rules;
- deterministic scoring where appropriate;
- audit trails;
- validation gates.

## Probabilistic components

Examples:

- natural-language reasoning;
- semantic interpretation;
- research synthesis;
- hypothesis generation;
- contextual analysis;
- qualitative scoring;
- competing hypotheses;
- critique.

## Multi-Agent Components

Where useful, multiple AI agents MAY:

- generate competing interpretations;
- critique each other's conclusions;
- validate evidence;
- identify contradictions;
- propose alternatives;
- or perform specialized tasks.

Multi-agent architecture SHALL NOT itself be treated as a guarantee of correctness.

Outputs SHOULD ultimately be governed by explicit contracts, evidence and deterministic controls where the problem permits them.

---

# 11. Projects

The platform SHALL support multiple projects with different maturity states.

Suggested project states:

```text
IDEA
RESEARCH
PROTOTYPE
ACTIVE R&D
EXPERIMENTAL
BETA
PRODUCTION
ARCHIVED
```

Each project SHOULD expose:

- name;
- problem statement;
- status;
- objectives;
- architecture overview;
- current work;
- documentation;
- public artifacts;
- and participation opportunities where applicable.

---

# 12. Agentic Portfolio

Agentic Portfolio SHALL initially be presented as Aleph Innovation's principal R&D project.

It SHALL be clearly described as an experimental engineering project exploring Agentic AI applied to:

- investment research;
- quantitative analysis;
- market evidence;
- portfolio analysis;
- portfolio risk;
- opportunity assessment;
- portfolio-aware filtering;
- simulation;
- and AI-assisted decision support.

The site SHALL NOT imply guaranteed financial performance.

The site SHALL NOT present experimental AI outputs as financial advice.

Appropriate disclaimers SHALL be included before public interactive functionality is released.

---

# 13. Agentic Portfolio Architecture Presentation

The public documentation SHOULD progressively explain the lifecycle.

A representative architecture is:

```text
SCAN
  ↓
RESEARCH
  ↓
OPPORTUNITY SCORING
  ↓
PORTFOLIO FILTER
  ↓
INSTRUMENT SELECTION
  ↓
POSITION SIZING
  ↓
TRADE PROPOSAL
  ↓
PORTFOLIO RISK SIMULATION
  ↓
CIO DECISION
  ↓
EXECUTION PLAN
  ↓
MANUAL EXECUTION
  ↓
OUTCOME
```

The website documentation SHALL distinguish between:

- deterministic computation;
- AI-assisted reasoning;
- portfolio state;
- market evidence;
- governance;
- and execution.

---

# 14. Engineering Wiki

The platform SHALL include a substantial technical Wiki.

The Wiki is NOT intended to be simplified marketing documentation.

It SHOULD become a public engineering reference for selected Aleph projects.

For Agentic Portfolio, documentation MAY include:

```text
Agentic Portfolio
│
├── Overview
├── Architecture
├── Lifecycle
├── Stage 2.x Quantitative Engine
├── Stage 3 CIO
├── Research Layer
├── Opportunity Scoring
├── Portfolio Filter
├── Portfolio Simulation
├── CIO Decision
├── Execution Plan
│
├── Data Contracts
│   ├── TradeOpportunity
│   ├── PortfolioState
│   ├── PortfolioFitDecision
│   ├── TradeProposal
│   ├── CIO Decision
│   └── ExecutionPlan
│
├── Python Architecture
│   ├── packages
│   ├── modules
│   ├── classes
│   ├── methods
│   └── dependencies
│
├── AI Architecture
│   ├── providers
│   ├── model routing
│   ├── local models
│   ├── cloud models
│   ├── structured generation
│   └── semantic validation
│
├── Testing
│   ├── unit tests
│   ├── regression
│   ├── live validation
│   └── semantic reproducibility
│
└── Lessons Learned
```

---

# 15. Documentation Source of Truth

The website SHALL NOT manually duplicate the complete Agentic Portfolio source repository.

The repositories remain independent.

Conceptually:

```text
agentic-portfolio repository
        │
        │ source / contracts / documentation
        ▼
documentation extraction / publication
        │
        ▼
Aleph Innovation Wiki
```

The exact synchronization mechanism SHALL be defined separately.

Possible mechanisms include:

- generated Markdown;
- build-time synchronization;
- selected repository exports;
- documentation API;
- or Git-based documentation pipelines.

The Agentic Portfolio repository remains the canonical source for implementation-specific documentation.

---

# 16. Future Projects

The initial site MAY expose early project concepts in addition to Agentic Portfolio.

These SHALL be explicitly labelled as exploratory concepts where appropriate.

## 16.1 Environmental Monitoring

Potential areas include:

- environmental sensor networks;
- local environmental indicators;
- weather;
- marine conditions;
- air quality;
- land use;
- anomaly detection;
- AI-assisted environmental interpretation.

Status initially:

`IDEA / EXPLORATORY RESEARCH`

## 16.2 Water & Resource Intelligence

Potential areas include:

- water availability;
- desalination;
- reservoir/resource monitoring;
- consumption;
- agricultural water requirements;
- resource forecasting;
- climate-related constraints.

Status initially:

`IDEA / EXPLORATORY RESEARCH`

## 16.3 Local Agriculture Resource Intelligence

Potential areas include:

- irrigation requirements;
- environmental conditions;
- crop/resource planning;
- resource optimization;
- forecasting;
- local resilience.

These concepts SHALL NOT be presented as committed products until substantive R&D begins.

---

# 17. Build in Public

A dedicated section SHOULD document project evolution.

Content MAY include:

- architecture milestones;
- development notes;
- technical articles;
- design decisions;
- model experiments;
- testing milestones;
- failures;
- lessons learned;
- releases;
- GitHub references;
- and selected LinkedIn publications.

The website SHOULD progressively become the durable canonical location for technical material, while social networks provide distribution and discussion.

---

# 18. Repository Boundaries

The initial repositories SHALL remain separate.

```text
agentic_portfolio_stage3...
        │
        └── Portfolio/CIO engine

aleph-innovation-web
        │
        └── Public web platform
```

The web repository SHALL NOT directly absorb the Agentic Portfolio codebase.

Future integration SHOULD occur through an explicit application boundary such as:

```text
Browser
   │
   ▼
Aleph Web Application
   │
   ▼
Authenticated API
   │
   ▼
Agentic Portfolio Service
```

This preserves independent:

- release cycles;
- testing;
- security boundaries;
- deployment;
- and project governance.

---

# 19. Future Registered User Area

The architecture SHALL support a future authenticated user area.

Potential capabilities include:

```text
USER
 │
 ├── Account
 ├── Portfolio Analysis
 ├── Analysis History
 ├── Feedback
 ├── Research Participation
 └── Support History
```

This functionality SHALL NOT be required for the initial public website release.

---

# 20. Portfolio Analysis Service

A future browser-based portfolio analysis capability is strategically important.

Its purpose includes:

1. providing useful analytical functionality;
2. expanding the diversity of real-world portfolios used to test the analysis engine;
3. gathering structured feedback;
4. improving robustness;
5. validating assumptions across heterogeneous portfolios.

The initial public capability SHOULD expose only a controlled subset of Agentic Portfolio.

The preferred first candidate is Stage 2.x-style portfolio analysis.

The full CIO workflow SHALL NOT automatically be exposed to public users.

---

# 21. Portfolio Analysis Security Boundary

User portfolio data SHALL be treated as sensitive financial information.

The public web application SHALL NOT directly execute arbitrary repository code.

The preferred architecture is:

```text
Browser
   │ HTTPS
   ▼
Web Frontend
   │
   ▼
Authenticated API
   │
   ▼
Input Validation
   │
   ▼
Isolated Analysis Service
   │
   ▼
Agentic Portfolio Analysis Engine
   │
   ▼
Sanitized Results
   │
   ▼
User
```

Uploads SHALL be:

- validated;
- size limited;
- type restricted;
- sanitized where appropriate;
- isolated from executable paths;
- and subject to retention policy.

---

# 22. User Research Programme

Registered portfolio-analysis users MAY optionally participate in an R&D feedback programme.

Participation SHALL be explicit.

Potential information collected MAY include:

- analysis success/failure;
- anonymized portfolio characteristics;
- processing diagnostics;
- user feedback;
- software errors;
- performance metrics.

The system SHALL distinguish operationally required processing from optional research consent.

No portfolio data SHALL be reused for unrelated research without an appropriate legal basis and explicit disclosure.

---

# 23. Authentication

Authentication SHALL eventually support:

- registration;
- login;
- logout;
- email verification;
- password reset;
- session management;
- account deletion;
- consent management.

Possible later capabilities MAY include:

- social login;
- MFA;
- passwordless authentication.

Authentication technology SHALL be selected through a separate Architecture Decision Record.

---

# 24. Persistence

Public static content SHOULD require minimal persistence.

Future dynamic capabilities MAY require persistence for:

```text
users
user_profiles
consents
analysis_jobs
analysis_results
feedback
supporters
donations
transactions
audit_events
```

Financial and user data SHALL NOT be stored in WordPress tables merely for implementation convenience unless explicitly justified by a later architecture decision.

---

# 25. Support Aleph

The platform SHOULD eventually allow individuals to financially support Aleph Innovation.

This functionality SHALL initially be described as:

**Support Aleph**

rather than investment.

Until an appropriate corporate/legal framework exists, the website SHALL NOT imply that financial support grants:

- equity;
- securities;
- ownership;
- profit participation;
- governance rights;
- or investment returns.

---

# 26. Donation / Support Models

Potential support modes include:

## Anonymous support

The supporter provides the minimum information required by the payment processor and applicable law.

## Identified support

A registered or identified supporter MAY voluntarily provide:

- name;
- email;
- contact information;
- message;
- consent preferences.

Where legally appropriate, Aleph MAY persist a transaction reference associated with the supporter.

Sensitive payment credentials SHALL NOT be stored by Aleph.

---

# 27. Payments

Payment processing SHALL be delegated to a regulated external payment provider.

Potential future providers MAY include:

- Revolut Business / Merchant services;
- Stripe;
- PayPal;
- or another suitable provider.

The architecture SHOULD prefer:

```text
Aleph website
     │
     ▼
Payment Provider
     │
     ▼
Hosted / secure payment flow
     │
     ▼
Payment confirmation / webhook
     │
     ▼
Aleph transaction record
```

Aleph SHALL NOT directly store:

- card numbers;
- CVV;
- payment authentication secrets.

A personal bank transfer workflow SHALL NOT be treated as the target production architecture.

Payment architecture SHALL be revisited when the venture's legal entity and financial arrangements are finalized.

---

# 28. GDPR and Privacy

Because Aleph Innovation operates from Malta/EU, GDPR SHALL be treated as an architectural requirement rather than an afterthought.

The platform SHALL support, where applicable:

- informed consent;
- purpose limitation;
- data minimization;
- retention policies;
- right of access;
- correction;
- deletion;
- account deletion;
- privacy notices;
- cookie management;
- auditability.

Special care SHALL be taken with portfolio information because it may reveal financial circumstances even when not legally classified as a special category of personal data.

---

# 29. Security Principles

The platform SHALL follow at least these principles:

- HTTPS everywhere;
- secure headers;
- input validation;
- output encoding;
- least privilege;
- secure authentication;
- secret isolation;
- no secrets in Git;
- dependency management;
- upload restrictions;
- server-side authorization;
- logging without unnecessary sensitive data;
- backup;
- restore capability;
- rate limiting for exposed APIs;
- CSRF protection where applicable;
- XSS mitigation;
- SQL injection protection;
- dependency vulnerability monitoring.

Security controls SHALL evolve proportionally with the functionality exposed.

---

# 30. Contact Architecture

The website SHALL expose a Contact section.

Primary public email:

`info@alephinnovation.com`

The contact section SHOULD eventually support:

- general enquiries;
- technical collaboration;
- research participation;
- project proposals;
- supporter/investor enquiries.

Public presentation SHALL clearly state that Aleph Innovation is currently a venture in formation / pre-incorporation R&D initiative until incorporation occurs.

---

# 31. Technology Architecture

The final web stack SHALL be selected through an explicit architecture decision.

The target logical architecture is:

```text
                INTERNET
                    │
                  HTTPS
                    │
                    ▼
             WEB FRONTEND
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
 STATIC/PUBLIC CONTENT      APPLICATION API
        │                       │
        │                 authentication
        │                 persistence
        │                 application logic
        │                       │
        │                       ▼
        │              PROJECT SERVICES
        │                       │
        └──────────────► Agentic Portfolio
```

The public corporate website SHOULD remain as static/server-rendered as practical.

Dynamic application capabilities SHOULD be isolated behind APIs/services.

---

# 32. WordPress Position

WordPress currently exists as part of the legacy site.

It SHALL NOT define the future architecture.

Possible migration strategies include:

1. complete replacement;
2. temporary coexistence;
3. WordPress retained only for selected content management;
4. headless WordPress;
5. eventual removal.

The preferred long-term direction is a repository-controlled web platform rather than page-builder-driven development.

No legacy WordPress business logic SHALL automatically be migrated.

Legacy content SHALL be migrated only when explicitly valuable.

---

# 33. SiteGround Role

SiteGround SHALL initially provide:

- domain registration;
- DNS;
- SSL/TLS;
- hosting;
- backups;
- web serving infrastructure;
- and potentially application/runtime services supported by the selected plan.

Current domain:

`alephinnovation.com`

Current nameservers:

```text
ns1.siteground.net
ns2.siteground.net
```

HTTPS SHALL be enforced.

Deployment SHALL be designed around the capabilities actually available on the SiteGround hosting plan.

The architecture MAY later evolve to separate frontend, API and compute infrastructure if Agentic Portfolio workloads exceed shared-hosting capabilities.

---

# 34. Compute Separation

The public website and AI compute SHOULD be treated as distinct workloads.

The long-term architecture MAY therefore become:

```text
alephinnovation.com
        │
        ▼
SiteGround / Web Layer
        │
        ▼
Secure API
        │
        ├── conventional backend services
        │
        └── AI / analysis infrastructure
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      Local Models        Cloud Models
```

The website SHALL NOT assume that computationally intensive AI inference runs on SiteGround.

---

# 35. Local and Cloud AI

Aleph projects MAY use both local and cloud models.

The website documentation SHOULD explain this architectural choice.

A representative architecture is:

```text
                 MODEL ROUTER
                /            \
               /              \
        LOCAL MODEL        CLOUD MODEL
        privacy            capability
        low cost           scale
        control            specialized models
```

Model choice SHOULD be driven by engineering requirements rather than branding or model popularity.

---

# 36. Repository Architecture

Initial repository:

```text
aleph-innovation-web/
│
├── README.md
├── ALEPH_INNOVATION_WEB_ARCHITECTURE.md
├── .gitignore
│
├── docs/
│   ├── architecture/
│   ├── decisions/
│   └── wiki/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── brand/
│
├── src/
│
├── tests/
│
└── scripts/
```

This is a logical baseline.

Exact framework-specific directories SHALL be introduced only after the stack is selected.

---

# 37. Architecture Decision Records

Significant implementation decisions SHALL be recorded under:

```text
docs/decisions/
```

Suggested ADRs:

```text
ADR-001-web-stack.md
ADR-002-siteground-deployment.md
ADR-003-content-and-wiki.md
ADR-004-authentication.md
ADR-005-persistence.md
ADR-006-agentic-portfolio-integration.md
ADR-007-payment-provider.md
ADR-008-user-portfolio-data-retention.md
```

This avoids embedding every implementation decision permanently into this baseline document.

---

# 38. Environment Separation

The project SHOULD eventually distinguish:

```text
LOCAL
DEVELOPMENT
STAGING
PRODUCTION
```

Production deployment SHALL NOT depend on manually modifying files directly on the server as the normal release mechanism.

Emergency server-side changes, if ever required, SHOULD be reconciled back into Git immediately.

---

# 39. Git Strategy

The repository SHALL use Git from project inception.

Initial branch:

`main`

The `main` branch SHOULD remain deployable.

Development MAY later use:

```text
main
feature/*
fix/*
docs/*
```

The repository SHALL NOT contain:

- passwords;
- API keys;
- private certificates;
- payment secrets;
- database credentials;
- production `.env` files.

---

# 40. GitHub

A dedicated GitHub repository SHOULD be created for the web platform.

Recommended repository name:

`aleph-innovation-web`

The repository SHALL remain separate from Agentic Portfolio.

Public/private status SHALL be decided separately based on which implementation and infrastructure details are appropriate to expose.

Public engineering documentation MAY be published independently of sensitive operational configuration.

---

# 41. Deployment Philosophy

The target deployment lifecycle is:

```text
CODE
  ↓
LOCAL TEST
  ↓
GIT COMMIT
  ↓
GITHUB
  ↓
BUILD / VALIDATION
  ↓
DEPLOY
  ↓
SITEGROUND
  ↓
alephinnovation.com
```

Direct production editing SHOULD progressively disappear from the normal workflow.

---

# 42. Testing

The website SHOULD eventually include automated tests appropriate to the selected stack.

Potential layers include:

```text
linting
format validation
unit tests
component tests
API tests
integration tests
security checks
build validation
deployment smoke tests
```

Critical user flows SHOULD be covered once implemented:

```text
homepage loads
navigation works
contact works
registration works
login works
portfolio upload validation works
analysis request works
analysis result renders
support flow redirects correctly
```

---

# 43. Observability

As dynamic functionality grows, the platform SHOULD provide:

- structured logs;
- error tracking;
- request correlation;
- performance metrics;
- analysis job diagnostics;
- deployment health checks.

Logs SHALL avoid unnecessary personal or portfolio information.

---

# 44. Accessibility

The website SHOULD target modern accessibility standards, including:

- semantic HTML;
- keyboard navigation;
- sufficient contrast;
- responsive typography;
- alternative text;
- visible focus states;
- accessible forms.

Visual sophistication SHALL NOT compromise usability.

---

# 45. Responsive Design

The website SHALL support:

- desktop;
- tablet;
- mobile.

The visual identity SHALL remain recognizable across viewport sizes.

The hero SHALL degrade gracefully rather than relying on a fixed desktop banner image.

---

# 46. Performance

The public website SHOULD remain lightweight.

The architecture SHOULD prefer:

- optimized assets;
- modern image formats;
- lazy loading where appropriate;
- minimal client-side JavaScript for static content;
- caching;
- compression;
- CDN capability where useful.

Interactive AI functionality SHALL be isolated from ordinary page delivery performance.

---

# 47. SEO and Structured Content

Public pages SHOULD expose appropriate:

- page titles;
- descriptions;
- canonical URLs;
- Open Graph metadata;
- social preview metadata;
- sitemap;
- robots configuration;
- structured data where useful.

Technical Wiki content SHOULD use stable URLs.

---

# 48. Relationship with LinkedIn

The Aleph Innovation LinkedIn page remains an important communication channel.

The relationship SHOULD evolve toward:

```text
Aleph Website
     │
     ├── canonical project information
     ├── technical documentation
     └── durable articles
             │
             ▼
LinkedIn
     │
     └── distribution / discussion / visibility
```

The website SHOULD therefore become the durable knowledge base.

LinkedIn SHOULD primarily amplify developments and direct interested readers toward deeper material.

---

# 49. Initial Release Scope — V1

The first release SHOULD deliberately remain limited.

## V1 MUST include

- new Aleph visual identity;
- responsive homepage;
- mission;
- Aleph Paradigm;
- project overview;
- Agentic Portfolio presentation;
- future project concepts;
- Build in Public concept;
- About;
- Contact;
- links to relevant public resources;
- HTTPS;
- production deployment.

## V1 SHOULD include

- initial engineering Wiki structure;
- initial Agentic Portfolio architecture documentation;
- GitHub integration/links.

## V1 SHALL NOT require

- user authentication;
- portfolio upload;
- live Agentic Portfolio execution;
- donations/payments;
- databases;
- investor management.

Those belong to later increments.

---

# 50. Phase 2 — Engineering Knowledge Platform

Phase 2 SHOULD expand:

- Agentic Portfolio Wiki;
- architecture diagrams;
- data contracts;
- Python module/class documentation;
- test documentation;
- model architecture;
- release history;
- Build in Public content.

---

# 51. Phase 3 — Registered Research Users

Phase 3 MAY introduce:

- registration;
- authentication;
- user profile;
- consent management;
- portfolio upload;
- controlled portfolio analysis;
- result visualization;
- feedback;
- test programme participation.

This phase SHALL require a dedicated security/privacy review before production deployment.

---

# 52. Phase 4 — Support Infrastructure

Phase 4 MAY introduce:

- Support Aleph;
- payment provider integration;
- anonymous support;
- identified supporters;
- transaction references;
- supporter history;
- appropriate legal/privacy documentation.

This SHALL occur only after the legal and financial model is sufficiently defined.

---

# 53. Phase 5 — Multi-Project Platform

Longer term:

```text
Aleph Innovation
        │
        ├── Agentic Portfolio
        │
        ├── Environmental Intelligence
        │
        ├── Water / Resource Intelligence
        │
        ├── Agricultural Intelligence
        │
        └── future Agentic AI systems
```

The web architecture SHALL allow each project to develop its own:

- documentation;
- application;
- API;
- research programme;
- community.

---

# 54. Explicit Non-Goals

The initial project is NOT intended to become:

- a generic WordPress corporate template;
- an AI consulting brochure;
- an automated trading platform;
- a broker;
- an investment advisory service;
- a crowdfunding investment platform;
- a social network;
- or a monolithic replacement for project repositories.

These boundaries MAY be reconsidered only through explicit future architectural and legal decisions.

---

# 55. Architectural Invariants

The following principles are considered architectural invariants unless explicitly revised.

### INV-01 — Repository Separation

Aleph Web and Agentic Portfolio remain separate repositories.

### INV-02 — Source Control

Production website source is version controlled.

### INV-03 — Engineering First

The website is developed primarily as software rather than through visual page editing.

### INV-04 — Deterministic / Probabilistic Separation

Aleph technical communication clearly distinguishes deterministic computation from probabilistic AI.

### INV-05 — AI Governance

AI-generated outputs are subject to explicit contracts, validation and governance where appropriate.

### INV-06 — Security Boundary

Public web requests SHALL NOT obtain uncontrolled access to Agentic Portfolio execution.

### INV-07 — Sensitive Data

Portfolio and user data receive explicit security and retention treatment.

### INV-08 — Payment Delegation

Sensitive payment processing is delegated to regulated providers.

### INV-09 — No Financial Performance Claims

Agentic Portfolio is presented as R&D / decision-support technology rather than a source of guaranteed returns.

### INV-10 — Build in Public

Technical transparency remains part of Aleph Innovation's identity.

### INV-11 — Gozo Identity

Gozo, Malta remains a meaningful component of the venture identity without limiting the global scope of the projects.

### INV-12 — Incremental Delivery

Public website functionality is introduced through controlled increments rather than a single monolithic release.

---

# 56. Target Conceptual Architecture

The long-term conceptual platform is:

```text
                         ┌──────────────────────┐
                         │      INTERNET        │
                         └──────────┬───────────┘
                                    │
                                  HTTPS
                                    │
                                    ▼
                    ┌───────────────────────────┐
                    │   ALEPHINNOVATION.COM     │
                    │                           │
                    │   Public Web Platform     │
                    └─────────────┬─────────────┘
                                  │
             ┌────────────────────┼────────────────────┐
             │                    │                    │
             ▼                    ▼                    ▼
        PUBLIC SITE          ENGINEERING WIKI       USER AREA
             │                    │                    │
             │                    │                    ▼
             │                    │              AUTHENTICATION
             │                    │                    │
             │                    │                    ▼
             │                    │             APPLICATION API
             │                    │                    │
             │                    │         ┌──────────┴──────────┐
             │                    │         │                     │
             │                    │         ▼                     ▼
             │                    │    PERSISTENCE          PROJECT SERVICES
             │                    │                               │
             │                    │                               ▼
             │                    └────────────────────► AGENTIC PORTFOLIO
             │                                                    │
             │                                             ┌──────┴──────┐
             │                                             │             │
             │                                             ▼             ▼
             │                                       DETERMINISTIC      AI
             │                                           CORE          LAYER
             │                                                           │
             │                                                    ┌──────┴──────┐
             │                                                    ▼             ▼
             │                                               LOCAL AI       CLOUD AI
             │
             └───────────────────────────────────────────────────────────────
```

---

# 57. Immediate Implementation Sequence

Following approval of this architecture, implementation SHALL proceed approximately as follows:

```text
ARCH-1   Freeze architecture baseline
   ↓
ARCH-2   Select web technology stack
   ↓
ARCH-3   Define repository structure
   ↓
ARCH-4   Define design system
   ↓
ARCH-5   Implement homepage shell
   ↓
ARCH-6   Implement mission + paradigm
   ↓
ARCH-7   Implement project model
   ↓
ARCH-8   Implement Agentic Portfolio presentation
   ↓
ARCH-9   Establish Wiki architecture
   ↓
ARCH-10 Responsive/accessibility pass
   ↓
ARCH-11 Test/build pipeline
   ↓
ARCH-12 SiteGround deployment pipeline
   ↓
ARCH-13 Production cutover
```

Authentication, portfolio analysis and payment infrastructure SHALL follow as independent later workstreams.

---

# 58. Next Architecture Decision

The first Architecture Decision Record SHALL be:

`docs/decisions/ADR-001-web-stack.md`

It SHALL evaluate the technology stack against at least:

- SiteGround compatibility;
- repository-based development;
- static/server-rendered performance;
- Wiki/documentation support;
- future authentication;
- future APIs;
- future Agentic Portfolio integration;
- maintainability;
- testing;
- deployment complexity;
- local Windows development;
- GitHub integration;
- migration away from legacy WordPress.

No application framework SHALL be considered architecturally selected until ADR-001 is approved.

---

# 59. Architecture Baseline

This document establishes the initial architecture baseline for Aleph Innovation Web Platform.

It defines:

- product intent;
- information architecture;
- visual direction;
- engineering philosophy;
- repository boundaries;
- security boundaries;
- future application architecture;
- documentation strategy;
- user participation model;
- funding direction;
- deployment philosophy;
- and phased delivery.

Implementation details MAY evolve through Architecture Decision Records.

The architectural invariants defined above SHALL remain stable unless explicitly reviewed and amended.

---

**END OF ARCHITECTURE BASELINE v1.0**