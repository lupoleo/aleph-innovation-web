# ADR-002 — Aleph Innovation Visual Design System

## Status

APPROVED

## Date

2026-09-09

## Context

Aleph Innovation requires a coherent visual identity for its public web presence at `alephinnovation.com`.

The website must visually represent the venture's engineering philosophy, geographical origin and international ambition.

The existing Aleph Innovation logo and LinkedIn banner establish the reference visual language.

The banner combines:

- a dark midnight-blue technological background;
- the Aleph Innovation identity;
- green, cyan and electric-blue accents;
- network and graph structures;
- a representation of Gozo/Malta;
- the Mediterranean context;
- a digitally connected globe;
- the message:

  "BUILDING AGENTIC AI SYSTEMS"  
  "FROM GOZO, MALTA"

The website SHALL NOT simply reproduce the LinkedIn banner as a rectangular image placed above unrelated web content.

Instead, the visual language expressed by the banner SHALL become the design language of the entire website.

---

# Decision

Aleph Innovation will use a custom design system implemented primarily through CSS design tokens and reusable Astro components.

The design system SHALL remain lightweight and SHALL NOT depend on a large UI framework for V1.

No Bootstrap, Material UI, Tailwind UI, or similar visual framework is required for the initial implementation.

The visual system will be implemented using:

- semantic HTML;
- modern CSS;
- CSS custom properties;
- reusable Astro components;
- SVG where appropriate;
- responsive layouts;
- progressive enhancement.

JavaScript SHALL only be introduced where actual interaction requires it.

---

# 1. Visual Identity Principles

The Aleph Innovation website SHALL communicate five primary characteristics.

## 1.1 Engineering

The site represents an engineering and R&D venture rather than a generic AI marketing company.

Visual presentation SHOULD therefore emphasize:

- structure;
- systems;
- architecture;
- precision;
- technical depth;
- transparency.

The design SHOULD avoid excessive marketing decoration.

## 1.2 Agentic Intelligence

Visual elements MAY reference:

- networks;
- interacting nodes;
- agents;
- decision paths;
- data flows;
- competing hypotheses;
- deterministic and probabilistic processing.

These elements SHOULD remain subtle and architectural rather than decorative science-fiction imagery.

## 1.3 Gozo Origin

Gozo is part of the identity of Aleph Innovation.

The website SHOULD communicate the idea that globally relevant technology can be engineered from a small Mediterranean island.

Visual references MAY include:

- coastline profiles;
- Mediterranean horizons;
- architectural silhouettes;
- geographic outlines;
- subtle maritime or island abstractions.

These references SHALL NOT turn the website into a tourism-oriented design.

Gozo is the origin of the engineering work, not the product being sold.

## 1.4 Global Reach

The visual language SHOULD connect the local origin of Aleph Innovation with global technological systems.

The globe/network concept used in the existing banner is therefore a canonical visual motif.

The conceptual direction is:

`Gozo -> engineering -> connected systems -> global application`

## 1.5 Building in Public

The site SHALL visually support Aleph Innovation's building-in-public philosophy.

Architecture, code, decisions, experiments, tests, failures and lessons learned SHOULD be presented as first-class information.

Technical documentation SHALL NOT visually appear as secondary or administrative content.

The Wiki is part of the identity of Aleph Innovation.

---

# 2. Primary Colour System

The base visual environment SHALL use a dark technological palette.

Exact values MAY be calibrated during implementation, but the semantic roles defined here SHALL remain stable.

Initial reference tokens:

```css
:root {
  --aleph-bg-deep: #020b18;
  --aleph-bg-primary: #041426;
  --aleph-bg-secondary: #071b30;
  --aleph-surface: #0a2138;
  --aleph-surface-elevated: #0d2944;

  --aleph-text-primary: #f4f7fb;
  --aleph-text-secondary: #aebdcd;
  --aleph-text-muted: #72869b;

  --aleph-green: #55d69e;
  --aleph-cyan: #16c9d8;
  --aleph-blue: #315cff;
  --aleph-blue-bright: #2f83ff;

  --aleph-border: rgba(90, 180, 220, 0.18);
  --aleph-border-strong: rgba(90, 210, 220, 0.32);

  --aleph-glow-green: rgba(85, 214, 158, 0.20);
  --aleph-glow-cyan: rgba(22, 201, 216, 0.18);
  --aleph-glow-blue: rgba(49, 92, 255, 0.22);
}
```

These values are initial engineering values rather than immutable branding constants.

Visual calibration against the canonical logo/banner asset SHALL be performed during WEB-1B implementation.

---

# 3. Gradient Language

Gradients are a core part of the Aleph identity.

The canonical direction is:

`green -> cyan -> electric blue`

Example:

```css
--aleph-gradient-primary:
  linear-gradient(
    90deg,
    var(--aleph-green),
    var(--aleph-cyan),
    var(--aleph-blue)
  );
```

Gradients MAY be used for:

- accent lines;
- selected borders;
- section separators;
- selected typography;
- active navigation states;
- buttons;
- diagrams;
- restrained glow effects.

Large areas of highly saturated gradient SHALL be avoided.

The dark background remains dominant.

---

# 4. Background System

The website SHALL appear as a continuous visual environment.

Sections SHOULD NOT look like independent white or coloured rectangles stacked vertically.

The primary page background SHALL use deep navy tones with subtle transitions.

Background decoration MAY contain:

- faint network lines;
- geometric grids;
- hexagonal structures;
- node patterns;
- radial glows;
- horizon-like gradients.

Decoration SHALL remain subordinate to content.

Text readability always has priority.

The visual transition from the homepage hero to subsequent sections SHOULD appear continuous.

---

# 5. Typography

Typography SHALL prioritize readability, engineering character and long-form technical documentation.

The initial system SHOULD prefer locally available or privacy-safe web fonts.

Two functional roles SHALL exist.

## Interface / Editorial

Used for:

- navigation;
- headings;
- body text;
- project descriptions;
- homepage content.

Preferred character:

- geometric;
- modern;
- highly readable;
- restrained.

## Technical / Monospace

Used for:

- code;
- contracts;
- class names;
- method names;
- CLI examples;
- architecture identifiers;
- data structures.

The implementation MAY initially use a system font stack to avoid external dependencies.

Example:

```css
--font-sans:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;

--font-mono:
  "Cascadia Code",
  "SFMono-Regular",
  Consolas,
  "Liberation Mono",
  monospace;
```

External font loading SHALL NOT be required for V1.

---

# 6. Typography Hierarchy

The website SHALL define a clear hierarchy.

Approximate roles:

- Display / Hero;
- H1;
- H2;
- H3;
- Body Large;
- Body;
- Small;
- Technical Label;
- Code.

Hero typography SHOULD be visually strong but SHALL NOT dominate the entire viewport unnecessarily.

Long technical Wiki pages SHALL prioritize comfortable reading density.

---

# 7. Spacing System

Spacing SHALL use a consistent token-based scale.

Initial reference:

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-24: 6rem;
--space-32: 8rem;
```

Arbitrary one-off spacing values SHOULD be avoided where possible.

---

# 8. Layout System

The public website SHALL use a responsive content container.

Reference:

```css
--content-max: 1200px;
--content-wide: 1440px;
--content-reading: 820px;
```

Three principal layout modes SHALL exist:

1. standard content;
2. wide visual/architecture content;
3. technical reading content.

Wiki pages SHOULD use the technical reading layout.

Architecture diagrams MAY use the wide layout.

---

# 9. Responsive Design

The website SHALL be designed mobile-first and SHALL support at least:

- mobile;
- tablet;
- desktop;
- wide desktop.

No essential content SHALL depend on desktop-only interaction.

Navigation SHALL collapse appropriately on narrow screens.

Architecture diagrams SHALL remain understandable on small screens through responsive scaling, controlled scrolling or alternate representation.

---

# 10. Accessibility

Accessibility is a system requirement rather than a later enhancement.

The implementation SHALL provide:

- semantic HTML;
- keyboard-accessible navigation;
- visible focus states;
- sufficient colour contrast;
- meaningful heading hierarchy;
- alt text for informative images;
- decorative-image exclusion from accessibility trees;
- reduced-motion support.

The design SHALL respect:

```css
@media (prefers-reduced-motion: reduce)
```

Animations SHALL NOT be required to understand content.

---

# 11. Motion

Motion MAY be used sparingly.

Permitted examples:

- subtle node movement;
- restrained glow transitions;
- small hover transitions;
- diagram emphasis;
- navigation transitions.

The website SHALL NOT use:

- continuous distracting animation;
- excessive parallax;
- autoplay video backgrounds;
- animation that materially increases CPU/GPU consumption without informational value.

The default visual impression SHOULD be calm, technical and precise.

---

# 12. Header

The global header SHALL contain:

- Aleph Innovation identity/logo;
- Projects;
- Paradigm;
- Wiki;
- About;
- Support;
- Contact.

A future authenticated application entry MAY be represented as:

- Portfolio Lab;
- Sign In.

The application entry SHALL remain visually distinguishable from normal public navigation.

The header SHOULD become compact while scrolling but SHOULD NOT require complex JavaScript for V1.

---

# 13. Homepage Hero

The homepage hero SHALL establish within seconds:

1. what Aleph Innovation is;
2. where it is based;
3. what it builds;
4. how its engineering philosophy differs.

Primary identity:

**ALEPH INNOVATION**

Primary proposition:

**Building Agentic AI Systems**

Geographic statement:

**From Gozo, Malta**

The hero SHALL visually connect Gozo with a global network.

The existing LinkedIn banner is the canonical visual reference.

The hero MAY reuse appropriately prepared graphical assets derived from the brand artwork, but SHALL NOT simply embed the entire social-media banner as the page layout.

The implementation SHOULD reconstruct the composition using independent layers wherever practical:

- identity;
- textual content;
- Gozo visual;
- globe/network visual;
- background system.

This allows responsive behaviour and visual continuity with the rest of the page.

---

# 14. Mission Section

The homepage SHALL prominently communicate the canonical Aleph Innovation mission:

> Aleph Innovation is an AI venture in formation based in Gozo, Malta, focused on the engineering of Agentic AI systems that combine deterministic software with probabilistic AI.

The expanded mission SHALL explain:

- engineering-first development;
- deterministic software;
- probabilistic AI;
- agentic systems;
- R&D;
- building in public.

The current venture status SHALL remain transparent:

**Pre-incorporation R&D venture.**

---

# 15. Paradigm Visual Language

The Aleph Innovation Paradigm is a primary conceptual asset.

It SHALL receive prominent visual treatment.

The core model SHALL communicate interaction between:

```text
DETERMINISTIC SOFTWARE
        |
        v
PROBABILISTIC AI / LLM
        |
        v
SPECIALIZED / COMPETING AGENTS
        |
        v
VALIDATION / CONSTRAINTS
        |
        v
DECISION SUPPORT
```

The final diagrams SHALL be more sophisticated than this textual representation.

The visual language SHOULD emphasize that deterministic and probabilistic components cooperate rather than one replacing the other.

Competing agents MAY represent:

- alternative hypotheses;
- independent assessments;
- adversarial review;
- specialized domain reasoning.

Human decision authority SHALL remain visible where applicable.

---

# 16. Project Cards

Projects SHALL use a common visual component.

Each project card SHOULD support:

- project name;
- domain;
- lifecycle status;
- short description;
- architecture tags;
- documentation link;
- repository link where public;
- optional demo/application link.

Status examples:

- ACTIVE R&D
- CONCEPT
- EXPLORATORY
- VALIDATION
- ARCHIVED

Agentic Portfolio SHALL be visually identified as the first active R&D project.

Future concepts MAY include:

- environmental monitoring;
- water resource monitoring;
- agricultural resource intelligence.

Concept-stage projects SHALL be clearly labelled as concepts.

The website SHALL NOT imply that concept projects already exist as working systems.

---

# 17. Technical Wiki

The Wiki SHALL share the Aleph visual identity while prioritizing technical readability.

It SHOULD support:

- hierarchical navigation;
- breadcrumbs;
- table of contents;
- code blocks;
- architecture diagrams;
- ADRs;
- contracts;
- data types;
- Python classes;
- Python methods;
- testing strategy;
- validation results;
- known limitations;
- development history.

Code blocks SHALL use a restrained dark technical surface.

The Wiki SHOULD visually resemble engineering documentation rather than a marketing site.

---

# 18. Cards and Surfaces

Cards SHALL use dark elevated surfaces.

Reference:

```css
.aleph-card {
  background:
    linear-gradient(
      180deg,
      rgba(13, 41, 68, 0.82),
      rgba(7, 27, 48, 0.82)
    );

  border: 1px solid var(--aleph-border);
  border-radius: 1rem;
}
```

Cards MAY use subtle glow on hover.

Heavy glassmorphism SHALL be avoided.

Transparency SHOULD remain restrained.

---

# 19. Buttons

Three semantic button levels SHALL exist.

## Primary

For important actions.

Examples:

- Explore Agentic Portfolio;
- Enter Portfolio Lab.

## Secondary

For navigation or supporting actions.

Examples:

- Read the Wiki;
- View Architecture.

## Text / Technical Link

For documentation navigation.

Buttons SHALL use consistent focus and hover states.

Primary actions MAY use the canonical Aleph gradient.

---

# 20. Iconography

Icons SHOULD use a consistent line-based visual style.

Random emoji SHALL NOT be used as primary interface iconography.

Icons SHALL remain secondary to textual meaning.

Custom SVG icons MAY be introduced for core Aleph concepts.

---

# 21. Diagrams

Architecture diagrams are first-class website content.

They SHOULD use the Aleph palette and SHOULD be renderable as:

- SVG;
- HTML/CSS;
- generated static diagrams.

Diagrams SHOULD NOT depend exclusively on raster screenshots.

Whenever practical, source-controlled diagram definitions SHOULD be preferred.

---

# 22. Image Policy

Images SHALL serve an informational or identity function.

Preferred imagery:

- Aleph identity artwork;
- Gozo-related visual abstractions;
- technical diagrams;
- project-specific scientific or engineering imagery.

Generic stock photographs of:

- robots;
- glowing humanoid AI figures;
- random server rooms;
- people pointing at holograms;

SHOULD NOT be used as primary visual identity.

The site SHOULD look like Aleph Innovation rather than a generic AI consultancy template.

---

# 23. Visual Representation of Gozo

The Gozo visual motif SHOULD preferably be implemented as a reusable asset.

Potential implementation:

```text
public/
  brand/
    aleph-logo.svg
    aleph-mark.svg
    gozo-network.svg
    global-network.svg
```

The exact asset structure MAY evolve.

Brand assets SHALL remain separate from generic page content.

---

# 24. Public Site vs Application UI

The public website and future Portfolio Lab SHALL share:

- colour tokens;
- typography;
- identity;
- basic controls.

However, Portfolio Lab SHALL use a denser application-oriented interface.

The marketing/editorial public site SHALL NOT dictate the information density of the portfolio analysis application.

This distinction is intentional.

---

# 25. Funding / Support Visual Treatment

The Support section SHALL be professional and transparent.

It SHALL NOT use aggressive crowdfunding visual patterns.

Support messaging SHOULD emphasize:

- independent R&D;
- building in public;
- infrastructure costs;
- testing;
- research;
- development.

Financial support SHALL NOT visually imply investment ownership, equity or financial return unless a future legally compliant investment structure is explicitly introduced.

---

# 26. Contact

The canonical public contact email is:

`info@alephinnovation.com`

Contact presentation SHALL use the same visual system as the rest of the website.

A contact form MAY be introduced later.

Direct email contact SHALL remain available.

---

# 27. Design Tokens

The design system SHALL centralize reusable values.

Expected implementation structure:

```text
src/
  styles/
    tokens.css
    global.css
    typography.css
    components.css
```

The exact file decomposition MAY evolve during implementation.

Semantic tokens SHALL be preferred over component-specific magic values.

Example:

```css
--color-background-primary
--color-surface-primary
--color-text-primary
--color-accent-primary
```

These MAY internally reference Aleph brand tokens.

---

# 28. Component Architecture

Expected initial reusable components include:

```text
src/components/
  Header.astro
  Footer.astro
  Hero.astro
  SectionHeader.astro
  ProjectCard.astro
  ParadigmDiagram.astro
  StatusBadge.astro
  Button.astro
```

Additional components SHALL be introduced when repeated UI behaviour justifies them.

Premature component fragmentation SHOULD be avoided.

---

# 29. Performance

Visual identity SHALL NOT materially compromise performance.

The implementation SHOULD:

- minimize JavaScript;
- optimize raster assets;
- prefer SVG for diagrams and line artwork;
- lazy-load below-the-fold images;
- avoid unnecessary client hydration;
- use static rendering by default.

A visually sophisticated site does not require a heavy runtime.

---

# 30. SEO and Semantic Structure

Visual implementation SHALL preserve semantic document structure.

The homepage SHALL contain one canonical H1.

Sections SHALL use logical heading hierarchy.

Visual styling SHALL NOT determine semantic element choice.

Structured metadata MAY be introduced separately.

---

# 31. Canonical Homepage Visual Flow

The initial homepage SHOULD approximately follow:

```text
GLOBAL HEADER

HERO
Aleph Innovation
Building Agentic AI Systems
From Gozo, Malta
Gozo -> Global Network visual

MISSION
What Aleph Innovation is

PARADIGM
Deterministic Software
+
Probabilistic AI
+
Specialized / Competing Agents
+
Validation & Constraints

PROJECTS
Agentic Portfolio
Environmental Monitoring
Water Resources
Agricultural Intelligence

BUILDING IN PUBLIC
Architecture
Implementation
Testing
Failures
Lessons Learned

WIKI / ENGINEERING
Technical documentation entry point

SUPPORT
Support independent R&D

CONTACT

GLOBAL FOOTER
```

This sequence MAY evolve after real content is implemented.

---

# 32. Anti-Patterns

The implementation SHALL avoid:

- generic AI startup templates;
- excessive neon effects;
- large animated backgrounds;
- unnecessary JavaScript;
- visual framework lock-in;
- stock AI imagery;
- fake metrics;
- fake customer logos;
- invented testimonials;
- invented project maturity;
- excessive marketing language;
- hiding the venture's pre-incorporation status;
- presenting experimental software as financial advice.

---

# 33. Relationship to ADR-001

ADR-001 defines the public web technology stack.

ADR-002 defines the visual system implemented on that stack.

ADR-002 SHALL NOT introduce requirements that contradict the static-first architecture defined by ADR-001.

Visual sophistication SHALL therefore be achieved primarily through:

- HTML;
- CSS;
- SVG;
- static assets;
- limited client-side JavaScript.

---

# 34. Consequences

## Positive

- strong visual continuity with existing Aleph identity;
- distinctive appearance;
- lightweight implementation;
- high performance;
- strong compatibility with static SiteGround deployment;
- reusable visual language across public site and Wiki;
- clear separation between identity and application UI;
- maintainable CSS architecture.

## Trade-offs

- custom visual implementation requires more initial engineering work than adopting a generic UI framework;
- custom diagrams and visual assets require explicit maintenance;
- responsive reconstruction of the banner identity requires design work.

These trade-offs are accepted because visual identity is considered a strategic part of the Aleph Innovation public presence.

---

# 35. Implementation Gate

Implementation of WEB-1B SHALL be considered successful when:

1. global design tokens exist;
2. the dark Aleph background system is implemented;
3. typography hierarchy is implemented;
4. reusable buttons/cards/surfaces exist;
5. header and footer share the visual system;
6. the homepage hero visually aligns with the canonical Aleph artwork;
7. mobile and desktop layouts are functional;
8. production static build succeeds;
9. no unnecessary client-side framework is introduced;
10. accessibility fundamentals are preserved.

---

## Status

APPROVED
