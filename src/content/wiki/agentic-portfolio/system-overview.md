---
title: "System Overview"
description: "System boundaries, lifecycle, responsibilities and engineering principles of Agentic Portfolio."
project: "agentic-portfolio"
section: "system-overview"
status: "published"
updated: "2026-09-09"
order: 10
---

# System Overview

Agentic Portfolio is an experimental portfolio-analysis and decision-support system designed to explore how deterministic financial software and probabilistic AI can coexist inside an explicit, auditable engineering lifecycle.

The system does **not** treat an LLM as the application. Numerical analysis, portfolio state, constraints, contracts and validation remain explicit software responsibilities. AI is introduced only where interpretation, synthesis or contextual reasoning can add value.

The objective is not autonomous trading. The system produces structured decision support while execution authority remains human.

## System boundary

Agentic Portfolio spans the process from portfolio and market analysis to a broker-ready execution plan.

Inside the system boundary are:

- portfolio ingestion and normalization;
- deterministic quantitative and technical analysis;
- research and evidence acquisition;
- opportunity scoring;
- portfolio-aware opportunity filtering;
- instrument selection and position sizing;
- marginal portfolio-risk assessment;
- portfolio simulation;
- CIO decision support;
- execution-plan construction;
- persistence, provenance and outcome tracking.

Outside the automated authority boundary is the final broker action.

The system may construct an execution instruction, but it does not independently execute a trade. The operator reviews the decision and performs the broker transaction manually.

## Canonical lifecycle

The current lifecycle is:

`SCAN → RESEARCH → OPPORTUNITY SCORING → PORTFOLIO FILTER → INSTRUMENT SELECTION → POSITION SIZING → TRADE PROPOSAL → PORTFOLIO RISK SIMULATION → CIO DECISION → EXECUTION PLAN → MANUAL EXECUTION → OUTCOME`

This sequence is intentional. Each stage answers a different question and owns a different responsibility.

### Scan

Identifies candidate market opportunities or events worthy of further investigation.

A candidate is not yet a trade recommendation.

### Research

Collects and structures evidence relevant to the candidate: market context, company information, catalysts, expectations and other research inputs.

Research evidence is kept distinguishable from model-generated interpretation.

### Opportunity Scoring

Evaluates the opportunity primarily on its **standalone investment characteristics**.

Typical dimensions include thesis quality, catalyst strength, fundamentals, technical conditions and expectations.

The central question is:

> Is this a sufficiently strong opportunity in isolation?

A positive answer does not imply that the opportunity belongs in the current portfolio.

### Portfolio Filter

Evaluates the candidate against the **current portfolio state**.

It considers portfolio directionality, exposure, concentration, liquidity and applicable portfolio constraints.

The central question becomes:

> Is this opportunity desirable for this portfolio now?

This distinction prevents standalone attractiveness from being confused with portfolio suitability.

### Instrument Selection

Maps the approved underlying opportunity to a concrete tradable instrument supported by the broker and strategy.

Instrument properties are explicit inputs rather than assumptions hidden inside the AI layer.

### Position Sizing

Determines a candidate quantity under account liquidity, exposure and risk constraints.

Sizing is a deterministic control responsibility wherever numerical rules can express the constraint.

### Trade Proposal

Consolidates the opportunity, selected instrument, direction, quantity and intended trade parameters into a structured proposal.

The proposal becomes the object evaluated by downstream portfolio simulation and CIO decision logic.

### Portfolio Risk Simulation

Evaluates the exact proposed trade against the portfolio.

The simulation measures the marginal effect of adding the proposed position rather than re-evaluating only the underlying opportunity.

This is the point where the system asks:

> What happens to the portfolio if this exact trade is introduced?

### CIO Decision

Combines the available opportunity, portfolio and simulation evidence into a governed decision-support result.

The CIO layer is not permitted to silently override deterministic constraints or fabricate missing evidence.

### Execution Plan

Transforms an approved decision into a broker-ready manual instruction.

The plan dereferences the selected instrument and consolidates information such as:

- broker;
- underlying;
- exact instrument identifier and description;
- market and currency;
- side;
- quantity;
- order type;
- entry or limit price;
- stop;
- targets;
- intended holding period;
- references to the originating opportunity, proposal and decision.

### Manual Execution

The operator remains the final authority.

Agentic Portfolio currently does not place broker orders autonomously.

This boundary is architectural, not merely a user-interface choice.

### Outcome

Executed decisions can be associated with subsequent outcomes, allowing the system to preserve a history of proposals, decisions, execution and observed results.

Outcome tracking creates the basis for later evaluation and learning without rewriting historical decision context.

## Two engineering layers

Agentic Portfolio deliberately separates two kinds of computation.

### Deterministic software

Deterministic services are used where the same valid inputs should produce reproducible results.

Examples include:

- portfolio ingestion;
- position normalization;
- numerical indicators;
- covariance and portfolio-risk calculations;
- benchmark analysis;
- multi-factor analytics;
- tail-risk analysis;
- portfolio constraints;
- liquidity checks;
- exposure calculations;
- position sizing;
- typed state transitions;
- validation gates.

These responsibilities remain inspectable and testable as conventional software.

### Probabilistic AI

Probabilistic models are used where semantic interpretation or synthesis is useful.

Examples include:

- interpreting research evidence;
- extracting semantic factors;
- evaluating thesis and catalyst context;
- comparing competing interpretations;
- generating structured assessments from evidence;
- supporting CIO-level reasoning.

AI output is treated as **probabilistic evidence or assessment**, not verified truth.

Where a factor is not supported by canonical input, the architecture can require it to remain unscored rather than encouraging the model to infer a value.

## Stage 2.x analytical foundation

The deterministic analytical foundation originated in the Stage 2.x portfolio-analysis engine.

It ingests portfolio data and produces quantitative portfolio context including technical and risk information.

The analytical layer includes capabilities such as:

- historical market-data normalization;
- moving averages;
- RSI;
- volatility;
- average volume and relative volume;
- trend classification;
- momentum assessment;
- technical-risk assessment;
- position alignment;
- covariance and portfolio-risk analysis;
- benchmark analysis;
- multi-factor analysis;
- tail-risk analysis.

This layer provides numerical context to the higher-level CIO architecture.

The intent is to avoid asking an LLM to reconstruct calculations that deterministic software can perform more reliably.

## Stage 3 CIO layer

Stage 3 extends the analytical engine into an event-driven decision-support architecture.

Its responsibilities include:

1. detecting or receiving candidate opportunities;
2. gathering research evidence;
3. producing structured opportunity assessments;
4. evaluating portfolio fit;
5. constructing an exact trade proposal;
6. simulating its portfolio impact;
7. supporting a governed CIO decision;
8. generating a manual execution plan;
9. recording outcomes.

The Stage 3 architecture therefore operates over explicit domain objects rather than an unstructured conversational chain.

## Contracts between stages

Lifecycle stages communicate through structured contracts.

This is a central design decision.

A downstream service should not need to infer what an upstream model "probably meant." Required fields, provenance, status and validation state are represented explicitly.

Contracts provide boundaries for:

- input eligibility;
- required and optional information;
- nullability;
- provenance;
- deterministic constraints;
- validation;
- persistence;
- downstream ownership.

This makes it possible to test the system at service boundaries rather than relying only on end-to-end model behaviour.

## Evidence and provenance

Evidence provenance is part of system state.

The architecture distinguishes between:

- externally retrieved evidence;
- canonical deterministic analytical inputs;
- normalized research context;
- model-generated interpretation;
- deterministic portfolio state;
- validation and decision results.

This separation matters because an AI-generated statement must not silently become equivalent to retrieved evidence or deterministic numerical truth.

## Fail-closed behaviour

Where required information is absent, invalid or semantically unsupported, the preferred behaviour is to stop, downgrade or explicitly mark the result as incomplete.

The system should not repair uncertainty by inventing certainty.

Examples of fail-closed design include:

- rejecting structurally incomplete model output;
- preserving required null values for unsupported factors;
- preventing missing evidence from becoming fabricated evidence;
- applying deterministic portfolio constraints independently of AI preference;
- refusing downstream progression when a required contract is invalid.

## Validation philosophy

Agentic Portfolio uses more than one category of testing.

### Conventional software testing

Deterministic code and service boundaries are protected with unit, integration and regression tests.

These tests validate contracts, transformations, numerical logic and lifecycle behaviour.

### Semantic validation

Probabilistic components require additional acceptance criteria.

A response can be syntactically valid JSON and still be semantically poor.

Semantic validation therefore evaluates properties such as:

- evidence coverage;
- scorability;
- factor completeness;
- evidence tagging;
- research presence;
- calibration;
- reproducibility across repeated runs;
- behaviour when canonical context does not support a score.

The objective is not to make probabilistic output deterministic. It is to make its operating boundaries measurable.

## Local and routed AI execution

The architecture supports a provider abstraction rather than binding the system to a single model vendor.

Local inference is useful for high-volume or privacy-sensitive tasks, while external models can be routed selectively when their capabilities justify the additional dependency or cost.

The provider boundary is therefore an engineering abstraction, not a model-specific architecture.

Model choice can evolve without changing ownership of deterministic calculations, portfolio constraints or human execution authority.

## Human authority

Human authority is deliberately preserved at the execution boundary.

The system can:

- analyze;
- research;
- score;
- filter;
- simulate;
- recommend;
- construct an execution plan.

The system does not currently have authority to submit the final broker order.

This design keeps the distinction between **decision support** and **autonomous financial execution** explicit.

## System invariants

Several invariants summarize the architecture:

1. Deterministic calculations remain deterministic.
2. Probabilistic output is never silently promoted to verified truth.
3. Standalone opportunity quality and portfolio suitability are separate decisions.
4. Exact trade simulation occurs after instrument selection and sizing.
5. Portfolio constraints cannot be overridden merely because an AI assessment is positive.
6. Evidence provenance must remain inspectable.
7. Missing required information must not be fabricated.
8. Execution authority remains human.
9. Historical decision context should remain reproducible and auditable.
10. Architecture and implementation are expected to evolve, but changes should remain visible.

## Current maturity

Agentic Portfolio is an active R&D system.

Its architecture is intentionally being documented while implementation progresses. Some lifecycle areas are mature and regression-tested; others remain under active development.

For that reason, this Wiki should be read as a versioned engineering record rather than as a claim that the system is a finished investment product.

The executable repository remains the source of truth for implemented behaviour.
