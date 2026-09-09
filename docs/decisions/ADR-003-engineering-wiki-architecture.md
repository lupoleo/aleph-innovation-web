# ADR-003 — Engineering Wiki Architecture

## Status

## Status

ACCEPTED

## Date

2026-09-09

## Context

The Aleph Innovation public website has completed its first implementation
milestone with WEB-1B.

The website now establishes:

- the Aleph Innovation visual identity;
- the engineering-first positioning;
- the Aleph Paradigm;
- the initial project presentation;
- the Building in Public principle;
- the Engineering Wiki as a first-class part of the public presence.

The next architectural step is to turn the Engineering Wiki from a homepage
concept into a real documentation system.

The first documented project SHALL be Agentic Portfolio.

The Wiki must serve two related but distinct purposes:

1. explain Aleph Innovation engineering work to technical readers;
2. expose enough implementation detail to make architectural decisions,
   contracts, validation methods and development history inspectable.

The Wiki SHALL NOT become a duplicate of the source-code repository.

---

# Decision

Aleph Innovation SHALL implement the Engineering Wiki as a statically generated
documentation system inside the `aleph-innovation-web` Astro application.

Documentation content SHALL primarily be authored in Markdown or MDX and
rendered through reusable Astro documentation layouts and components.

The public website repository and the Agentic Portfolio software repository
SHALL remain separate.

The website repository is responsible for:

- public documentation;
- information architecture;
- architectural explanations;
- diagrams;
- selected contracts and schemas;
- development history;
- validation summaries;
- links to public source code.

The Agentic Portfolio repository remains responsible for:

- executable Python source code;
- tests;
- runtime configuration;
- package structure;
- implementation-specific artifacts;
- source-controlled software history.

The Wiki SHALL link to source code where useful rather than copying large
amounts of implementation code into the website repository.

---

# 1. Repository Boundary

Two independent repositories SHALL be maintained.

## Public website and Wiki

Repository:

`lupoleo/aleph-innovation-web`

Responsibilities:

- Aleph Innovation public website;
- Engineering Wiki;
- project documentation;
- architectural diagrams;
- public technical narrative;
- selected engineering artifacts.

## Agentic Portfolio software

Repository:

`lupoleo/agentic_portfolio_stage2_5`

Responsibilities:

- Python implementation;
- deterministic portfolio-analysis engine;
- Stage 3 CIO implementation where publicly available;
- automated tests;
- executable tooling;
- software releases.

The Wiki SHALL reference the software repository through stable public links.

---

# 2. Information Architecture

The canonical Wiki root SHALL be:

`/wiki/`

The first project namespace SHALL be:

`/wiki/agentic-portfolio/`

Initial structure:

```text
/wiki/
    index

/wiki/agentic-portfolio/
    index
    system-overview
    architecture
    contracts
    implementation
    testing
    development-history