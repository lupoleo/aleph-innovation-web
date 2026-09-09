# ADR-001 — Public Web Stack

**Status:** APPROVED  
**Date:** 2026-09-09  
**Decision:** Astro

## Context

Aleph Innovation requires a repository-controlled public website and
engineering Wiki.

The public website is architecturally separated from the future Python
compute layer used by Agentic Portfolio.

Primary requirements:

- excellent static-site performance;
- strong SEO;
- Markdown/MDX technical documentation;
- component-based UI;
- minimal client-side JavaScript;
- responsive custom design;
- Git/GitHub workflow;
- SiteGround deployment;
- future integration with independent APIs;
- no dependency on WordPress page builders.

## Alternatives

### Astro

Advantages:

- static-first architecture;
- excellent fit for corporate + documentation content;
- Markdown/MDX support;
- component architecture;
- minimal JavaScript shipped by default;
- supports selective interactive components;
- straightforward static production build;
- does not force the future CIO backend into the frontend architecture.

Disadvantages:

- future authenticated applications will require a separate backend/API;
- smaller ecosystem than React/Next.js.

### Next.js

Advantages:

- mature React ecosystem;
- strong full-stack capabilities;
- authentication and dynamic application patterns;
- server-side rendering.

Disadvantages:

- unnecessary complexity for the initial public website;
- larger runtime and dependency surface;
- tighter coupling between frontend and server application concerns;
- less aligned with the desired separation between public site and
  Agentic Portfolio compute.

### Static HTML/CSS/JavaScript

Advantages:

- minimal runtime;
- maximum hosting compatibility;
- very small attack surface.

Disadvantages:

- weaker component/content architecture;
- Wiki maintenance becomes cumbersome;
- more manual build tooling;
- poorer long-term maintainability.

### Custom PHP

Advantages:

- excellent traditional SiteGround compatibility;
- server-side capabilities available.

Disadvantages:

- provides little value for the predominantly static public site;
- introduces unnecessary server-side execution;
- not aligned with the Python service architecture planned for
  Agentic Portfolio.

## Decision

Use **Astro** for the Aleph Innovation public website and engineering Wiki.

Architecture:

    Browser
       |
       v
    Astro Public Platform
       |
       +-- Corporate Website
       +-- Projects
       +-- Engineering Wiki
       +-- Build in Public
       |
       | future HTTPS API
       v
    Independent Application Services
       |
       v
    Agentic Portfolio Python Services

The Astro application SHALL NOT contain or directly execute the
Agentic Portfolio Python codebase.

Agentic Portfolio remains an independent repository and compute service.

## Rendering Strategy

The initial website SHALL be static-first.

Static generation is preferred for:

- Home
- Paradigm
- Projects
- Agentic Portfolio documentation
- Wiki
- About
- Contact information
- Build in Public

Interactive functionality SHALL be introduced selectively.

User authentication, portfolio uploads and Agentic Portfolio execution
belong to a separate application/service architecture.

## Runtime

Development and builds SHALL use an even-numbered supported Node.js
LTS release.

Initial target:

Node.js 22 LTS, version >= 22.12.

The project SHALL include a runtime-version declaration such as:

    .nvmrc

and/or:

    package.json -> engines

to reduce environment drift.

## Hosting

SiteGround remains the initial production hosting provider.

The public Astro site SHOULD be deployable as static production
artifacts whenever possible.

A persistent Node.js production server SHALL NOT be required for V1
unless a later architecture decision explicitly introduces one.

## Consequences

Positive:

- very lightweight production website;
- strong separation from CIO compute;
- excellent documentation architecture;
- low hosting complexity;
- strong performance;
- low attack surface;
- easy future migration between hosting providers.

Trade-off:

Dynamic application capabilities require explicit backend services
rather than being silently added to the public-site framework.

This trade-off is intentional.

## Status

APPROVED.