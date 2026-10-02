---
title: "Implementation"
description: "How the Stage 4.0 Agentic Portfolio architecture is implemented as deterministic Python services, bounded AI stages, orchestration, persistence and manual execution."
project: "agentic-portfolio"
section: "implementation"
status: "published"
updated: "2026-10-02"
order: 40
---

# Implementation

Agentic Portfolio Stage 4.0 implements the architecture as a sequence of **bounded services with explicit contracts**, not as one autonomous agent.

The implementation deliberately separates:

- deterministic financial computation;
- external data acquisition;
- probabilistic AI interpretation;
- orchestration and persistence;
- operator-controlled selection;
- human execution.

This page describes the implementation model exposed by the Stage 4.0 architecture. Exact Python modules, function signatures and executable schemas remain governed by the repository, accepted checkpoint documents and tests.

## 1. Implementation topology

The end-to-end implementation can be read as five cooperating layers:

```text
DATA & PORTFOLIO STATE
        ↓
SCANNER & WATCH UNIVERSE
        ↓
RESEARCH & OPPORTUNITY INTELLIGENCE
        ↓
PORTFOLIO CONSTRUCTION & CIO
        ↓
EXECUTION PLAN / HUMAN BOUNDARY
```

Across those layers, orchestration owns control flow and lineage while domain services retain ownership of their own decisions.

The orchestrator does not replace Scanner policy, Portfolio Filter policy, sizing logic or CIO semantics.

## 2. Deterministic Python core

Python owns the parts of the system that must remain reproducible and numerically authoritative.

These responsibilities include:

- broker-data parsing and normalization;
- instrument taxonomy;
- listing and security identity;
- market-data mapping;
- exchange calendars and session logic;
- FX conversion;
- price-history validation;
- technical indicators;
- liquidity measures;
- portfolio analytics;
- exposure and concentration;
- marginal-risk calculations;
- Portfolio Filter gates;
- instrument selection;
- position sizing;
- portfolio simulation;
- persistence validation;
- lineage and integrity checks.

The design rule is simple:

> If conventional software can compute, validate or reproduce a financial fact, the LLM should not become its source of truth.

## 3. Portfolio ingestion and analytical state

The real portfolio path starts from a Fineco snapshot.

The implementation parses the broker-visible account and position state into canonical portfolio records and then runs Portfolio Analysis to derive the deterministic analytical state required downstream.

Conceptually:

```text
Fineco export / snapshot
        ↓
Parsing & normalization
        ↓
PortfolioSnapshot
        ↓
Portfolio Analysis
        ↓
PortfolioRiskState
        ↓
Portfolio Watch Set
```

The snapshot remains immutable as the real-state reference for the run.

Any proposed or simulated state is represented separately.

## 4. Production Scanner

Stage 4.0 replaces a demo-style candidate list with a production Scanner pipeline.

The Scanner implementation operates as explicit gates:

```text
Provider Listing
      ↓
Canonical Taxonomy
      ↓
Instrument Eligibility
      ↓
Market-Data Mapping
      ↓
Identity / Availability Verification
      ↓
History Quality
      ↓
Liquidity
      ↓
Scanner Candidate
```

Each gate emits structured diagnostics.

A pass at one gate does not imply a pass at the next. Unsupported or ambiguous states fail closed or become explicit review states according to policy.

### Provider adapters

Exchange or venue acquisition is isolated behind provider adapters.

A provider is responsible for obtaining listing information and preserving source identity. Provider-specific acquisition behaviour must not leak into downstream portfolio semantics.

### Canonical taxonomy

Provider labels are normalized into a canonical instrument taxonomy before eligibility decisions.

Unknown or ambiguous types are not guessed into a supported class.

### Market-data mapping

A source listing can map to a market-data provider symbol, but that symbol remains a mapping rather than the canonical listing identity.

Mapping is followed by validation before retrieved history is accepted for that listing.

## 5. History and session-aware validation

History quality is evaluated using exchange-session semantics rather than raw calendar-day assumptions.

The implementation distinguishes at least:

- `STANDARD`
- `RECENT_LISTING`
- `BLOCKED`

A `RECENT_LISTING` route requires reviewed evidence of the listing start. Short history alone is not sufficient.

This protects the system from interpreting missing history as legitimate listing age without evidence.

## 6. Portfolio Watch Set and Research Watch Universe

Current positions are processed separately from new Scanner candidates.

The implementation creates:

```text
Scanner Candidate Set
          \
           → Research Watch Universe
          /
Portfolio Watch Set
```

The merge preserves provenance and exact identity.

This means an existing portfolio position can remain under research even when it would fail the policy for admission as a new trade candidate.

## 7. Evidence acquisition

Research operates on structured evidence acquired for each member of the Research Watch Universe.

Evidence channels can include:

```text
MARKET
TECHNICAL
NEWS
FUNDAMENTAL
ANALYST
```

Acquisition and interpretation are separate implementation responsibilities.

Provider failures are recorded explicitly. A failed source does not silently remove the subject from the research universe.

Evidence records preserve enough source and timestamp information for downstream audit and replay.

## 8. Research service

The Research service is one of the bounded AI stages.

Its job is to interpret supplied evidence and return a normalized structured result under a validated contract.

The implementation pattern is:

```text
Canonical subject context
        +
Validated evidence
        +
Research contract / policy
        ↓
LLM
        ↓
Structured output
        ↓
Deterministic validation
        ↓
Accepted / repaired / partial / failed result
```

The model does not receive authority over portfolio state or deterministic finance.

### Repair and fail-closed behaviour

Malformed or incomplete AI output is not silently accepted.

The Research implementation can use bounded repair paths where permitted by the contract. If required information cannot be grounded or repaired, the result remains partial or fails closed.

This preserves the distinction between model fluency and contract validity.

## 9. Research completeness

The implementation distinguishes missing as-of information from future uncertainty.

`unknowns` contain facts that existed at the evidence date but were not available in the supplied evidence.

`forward_uncertainties` contain future outcomes that cannot yet be known.

Completeness logic therefore evaluates missing evidence without treating every future uncertainty as a research failure.

## 10. Shared Company Assessment

Stage 4.0 implements FUNDAMENTAL and EXPECTATIONS as a shared company-frame assessment.

For a listing, the company assessment is produced once and can be reused by both directional hypotheses.

Conceptually:

```text
Fundamental evidence
        +
Analyst / expectations evidence
        ↓
Shared Company Assessment
        ├──→ LONG scoring
        └──→ SHORT scoring
```

The assessment itself is direction-free.

Where the scoring model requires directional transformation, that transformation is deterministic.

This avoids independent LONG and SHORT LLM calls generating incompatible descriptions of the same company fundamentals.

## 11. Directional Opportunity Scoring

Opportunity Scoring is explicitly directional.

For each eligible hypothesis:

```text
Research
+ Technical context
+ Shared Company Assessment
+ Direction: LONG or SHORT
        ↓
Opportunity Scoring
        ↓
Raw score
+ score confidence
+ confidence-adjusted score
+ diagnostics
```

The implementation preserves direction in the persisted score identity.

A LONG score cannot silently become a SHORT opportunity and vice versa.

## 12. Materialization

Scoring and opportunity creation are separate operations.

A scored directional hypothesis must satisfy the active materialization policy before a `TradeOpportunity` is persisted.

Therefore:

```text
Scored hypothesis
      ↓
Materialization gate
      ├── PASS → TradeOpportunity
      └── NO PASS → explicit non-materialization
```

Zero materialized opportunities is a valid run outcome.

The system must not weaken thresholds merely to force an opportunity to exist.

## 13. Shadow Ledger

The Shadow Ledger runs beside the opportunity-materialization path.

A directional hypothesis with a confidence-adjusted score can be recorded even if it does not become a `TradeOpportunity`.

The implementation then measures outcomes after defined observation horizons.

```text
Directional score
      ↓
Shadow Ledger
      ↓
5 / 10 / 20 session observations
      ↓
Outcome evidence
```

The ledger has no decision authority.

It exists to accumulate empirical evidence before scoring thresholds or related policy are changed.

## 14. Persist-before-select

Stage 4.0 persists opportunities before operator selection.

This creates an important implementation boundary:

```text
Opportunity Scoring
      ↓
0..N persisted TradeOpportunity
      ↓
Operator Selection
      ↓
ONE selected opportunity
```

The orchestrator cannot treat the highest-ranked opportunity as implicitly selected.

Selection is a separate auditable event.

## 15. Frozen Portfolio Filter integration

The selected opportunity is passed into the already validated Portfolio Filter.

The Stage 4 orchestrator integrates the filter rather than reimplementing its policy.

The filter owns portfolio-aware decisions involving exposure, concentration, correlation, diversification, liquidity/history compatibility, marginal risk and explicit rejection reasons.

A failed deterministic filter result cannot be overridden by downstream AI reasoning.

## 16. Instrument Selection

Only after the opportunity passes the Portfolio Filter does the implementation resolve the exact tradable instrument.

This separation matters because an economic opportunity and its broker implementation are different objects.

Instrument Selection must preserve:

- the opportunity being implemented;
- the chosen instrument identity;
- the implementation route;
- relevant constraints;
- compatibility with downstream sizing and simulation.

## 17. Position Sizing

Position Sizing remains deterministic.

The sizing engine consumes the selected opportunity, exact instrument, real portfolio state and applicable constraints.

It returns a proposed quantity rather than mutating the portfolio.

The LLM may explain the result, but it does not own the arithmetic.

## 18. TradeProposal construction

The system then builds the exact `TradeProposal`.

The proposal combines:

```text
Selected TradeOpportunity
+ Portfolio Filter result
+ Instrument
+ Position Size
+ Reference price
+ Costs / constraints
        ↓
TradeProposal
```

The proposal is persisted as a proposed action.

It is neither an executed order nor a real position.

## 19. Portfolio Simulator V2

Portfolio Simulator V2 applies the exact proposal to a copy of the authoritative portfolio snapshot.

Implementation semantics:

```text
REAL snapshot
      │
      ├────────────── remains unchanged
      │
      + TradeProposal
      ↓
SIMULATED post-trade state
      ↓
Pre / Post comparison
```

The simulator evaluates the marginal effect of the proposed trade on the portfolio.

This allows the CIO stage to reason about the exact trade rather than the opportunity in isolation.

## 20. CIO Decision Engine

The CIO stage is a bounded reasoning component.

Its implementation receives canonical, validated inputs including the proposal, simulation, research evidence, deterministic constraints and unresolved risks.

The model may reason about thesis quality, catalysts, counter-thesis and qualitative trade-offs.

It may not:

- override failed deterministic gates;
- fabricate missing data;
- change position size;
- mutate the real portfolio;
- infer broker execution.

The structured CIO result is validated before it can progress.

## 21. ExecutionPlan

An approved CIO result can be transformed into an `ExecutionPlan`.

The plan contains the information required for manual broker execution, but the implementation stops before order submission.

```text
APPROVED CIO Decision
        ↓
ExecutionPlan
        ↓
END OF SOFTWARE AUTHORITY
```

There is no broker-order API in the Stage 4.0 authority model.

## 22. Manual execution and reconciliation

The operator may execute, modify or ignore the plan.

The system does not infer the result from its own proposal.

A later Fineco snapshot provides the next authoritative real state.

Reconciliation can then distinguish:

- executed as planned;
- partially executed;
- executed differently;
- not executed;
- unresolved.

Observed outcomes, rather than assumed fills, become the basis for later reporting and learning.

## 23. Orchestration

Stage 4.0 introduces an orchestration layer that connects the frozen and validated domain components.

The orchestrator owns:

- stage sequencing;
- explicit input/output hand-offs;
- run identity;
- persistence checkpoints;
- lineage;
- failure propagation;
- resume/replay coordination;
- operator-selection boundaries;
- authority-boundary enforcement.

The orchestrator does **not** own:

- Scanner eligibility policy;
- Portfolio Filter policy;
- position-sizing finance;
- portfolio-simulation mathematics;
- CIO semantic policy.

Those remain domain responsibilities.

## 24. Persistence model

Durable persistence is part of the implementation, not an afterthought.

The lifecycle can persist records along the chain:

```text
listing
→ evidence
→ research
→ score
→ opportunity
→ selection
→ filter
→ instrument
→ size
→ proposal
→ simulation
→ CIO decision
→ execution plan
→ observed outcome
```

Persisted records carry stable identifiers and version information sufficient to support lineage and replay.

## 25. Replay and idempotency

A persisted Stage 4 run should be reproducible from canonical inputs without hidden dependence on process memory.

Replay uses stored state, policy versions and immutable inputs where available.

The implementation must distinguish replay from a new live run. A replay must not accidentally:

- reacquire evidence as if it were historical evidence;
- create duplicate opportunities;
- duplicate operator selections;
- mutate real state;
- create a second execution outcome for the same observed event.

Idempotency is therefore part of orchestration safety.

## 26. Provider and model boundaries

External providers and LLMs sit behind explicit interfaces.

Provider-specific failures must become explicit diagnostics rather than uncontrolled exceptions leaking across the entire pipeline.

Likewise, model choice is separated from domain contracts.

A local or routed model may change while the Research or CIO contract remains stable.

This supports experimentation without making the model provider itself the architecture.

## 27. Local AI execution

Stage 4.0 can execute bounded AI stages through the local model-provider path.

Local execution is useful for:

- privacy and control;
- repeatable development;
- provider independence;
- cost containment;
- model-routing experiments.

But local execution does not relax validation.

A local model is subject to the same schema, grounding, completeness and fail-closed rules as any external provider.

## 28. Failure semantics in implementation

Failures are represented as typed states wherever the architecture requires downstream policy to reason about them.

Examples:

```text
Provider unavailable
→ degraded acquisition state

Unknown instrument type
→ REVIEW_REQUIRED / fail closed

Unverified market-data identity
→ history rejected

Insufficient history
→ BLOCKED

Research output invalid
→ repair / partial / failed

No materialization
→ valid zero-opportunity result

Portfolio Filter rejection
→ downstream construction stops

Simulation failure
→ no CIO approval path

Execution not observed
→ no inferred portfolio mutation
```

The implementation prefers explicit partial truth to fabricated completeness.

## 29. Testing as part of implementation

The implementation model assumes validation at several levels:

- unit tests for deterministic functions;
- contract/schema tests;
- provider/parser tests;
- regression tests;
- semantic validation for AI-facing stages;
- live-path validation;
- end-to-end orchestration tests;
- replay and persistence tests.

For probabilistic components, successful JSON parsing is not sufficient. The content must also satisfy the semantic contract.

## 30. Implementation authority

The Engineering Wiki explains the architecture and implementation model publicly.

It is not the executable specification.

When there is a discrepancy, implementation authority remains with:

1. current Stage 4.0 architecture and accepted checkpoint documents;
2. frozen contracts and policy definitions;
3. executable Python code;
4. automated and live acceptance evidence.

The Wiki should evolve with those artifacts, but it should not silently invent implementation detail that the repository does not support.

## Current implementation direction

Stage 4.0 is an integration phase.

The major analytical, Scanner, Research, scoring and Portfolio Filter capabilities are being connected into the true end-to-end lifecycle while preserving the boundaries that made the individual components testable.

The engineering objective is not maximum autonomy.

It is **controlled autonomy with explicit state, evidence, policy, lineage and human authority**.

