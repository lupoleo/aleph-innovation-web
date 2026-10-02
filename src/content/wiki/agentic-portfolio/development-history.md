---
title: "Development History"
description: "Engineering evolution of Agentic Portfolio from the Stage 2.5 deterministic analytical foundation through the Stage 3 CIO layer to the Stage 4.0 auditable end-to-end agentic workflow."
project: "agentic-portfolio"
section: "development-history"
status: "published"
updated: "2026-10-02"
order: 60
---

# Development History

Agentic Portfolio did not begin as an autonomous agent.

It evolved incrementally from a deterministic portfolio-analysis engine into a governed decision-support workflow in which quantitative software, evidence-backed AI reasoning, portfolio controls, persistence and human authority are connected through explicit contracts.

The engineering history matters because many Stage 4.0 design choices are the result of problems discovered and resolved in earlier stages.

```text
STAGE 2.5
Deterministic Portfolio Analysis
        ↓
STAGE 3.0
CIO / Research / Scoring / Portfolio Filter
        ↓
STAGE 4.0
True Agentic Portfolio E2E
        ↓
LIVE VALIDATION + SHADOW LEDGER
        ↓
FIRST COMPLETE E2E ACCEPTANCE
```

## Stage 2.5 — Deterministic analytical foundation

Stage 2.5 established the quantitative core.

The central design decision was that portfolio state and financial calculations should remain deterministic and reproducible.

The system ingests the Fineco portfolio, resolves market-data identities, obtains historical data and computes portfolio and position analytics such as technical indicators, volatility, relative volume, momentum, alignment and risk measures.

The Stage 2.5 reporting layer evolved into a multi-sheet analytical workbook including portfolio overview, positions, covariance/risk, benchmarks, multifactor analysis, tail risk and bilingual legends.

The architectural principle established here remains unchanged:

> Python owns deterministic finance.

Stage 2.5 is now `CLOSED / FROZEN` and serves as the quantitative foundation of all later stages.

## Stage 3.0 — From analysis to CIO workflow

Stage 3.0 introduced the idea of a CIO layer above the deterministic analytical engine.

The project moved from:

```text
Portfolio → Analytics → Report
```

toward:

```text
Portfolio
→ Market / Event Intelligence
→ Research
→ Opportunity Scoring
→ Portfolio Controls
→ Proposal
→ Simulation
→ CIO Decision
```

This stage established several architectural elements that remain central today:

- typed domain contracts;
- persisted state;
- explicit portfolio snapshots;
- Research and evidence contracts;
- Opportunity Scoring;
- model-provider abstraction;
- local-model execution;
- Portfolio Filter;
- instrument selection;
- deterministic position sizing;
- TradeProposal;
- portfolio simulation;
- CIO Decision;
- ExecutionPlan;
- manual execution authority.

Stage 3.0 therefore created the principal domain services later connected by Stage 4.0.

## Local AI and model routing

The Stage 3 architecture treated the LLM as a bounded reasoning component rather than the application itself.

A provider boundary allowed the project to experiment with local and external models without changing the domain contracts.

Local execution became an important development path, particularly for Research and semantic validation.

This established another long-lived principle:

```text
MODEL PROVIDER ≠ DOMAIN CONTRACT
```

The model can change. The meaning of Research, Opportunity Scoring or CIO Decision must remain governed by explicit contracts.

## Research and Opportunity Scoring

The Research layer evolved into a structured evidence-processing service.

Rather than asking an LLM directly whether a stock should be bought or sold, the system separates:

```text
Evidence
→ Research
→ Structured interpretation
→ Opportunity Scoring
```

The AI-8C.2 Research and AI-8C.3 Opportunity Scoring contracts were progressively hardened around evidence grounding, schema validation, bounded repair, missing-data semantics and reproducibility.

Both later became frozen Stage 3 contracts, subsequently reopened only through explicit Stage 4 revisions when LIVE evidence demonstrated a real semantic problem.

## Portfolio Filter — PF-1A through PF-1H

The Portfolio Filter introduced the explicit distinction between an attractive opportunity and a portfolio-suitable opportunity.

Its development progressed through PF-1A to PF-1H and closed as a frozen deterministic subsystem.

The filter owns portfolio-aware constraints such as exposure, concentration, correlation/diversification, liquidity compatibility and marginal risk.

By PF-1H, the Portfolio Filter was accepted as a stable downstream boundary.

Its role survives unchanged in Stage 4:

`Opportunity quality ≠ Portfolio suitability`

Stage 4 integrates the frozen filter rather than allowing the orchestration or CIO layer to reinterpret it.

## Transition toward real end-to-end integration

Once the principal CIO components existed independently, the project reached a new engineering problem.

The individual services could be validated, but the complete system still required a production-quality path from an external market universe and the real portfolio through Research and Scoring into the frozen downstream lifecycle.

This became the transition from Stage 3.0 to Stage 4.0.

## Stage 4.0 — True Agentic Portfolio E2E

Stage 4.0 was established as the current end-to-end architecture on **23 September 2026**.

Its purpose is to connect the validated analytical, Scanner, Research, scoring, Portfolio Filter, sizing, simulation and CIO components into one auditable workflow.

The Stage 4 architecture made several boundaries explicit:

```text
REAL PORTFOLIO                         PRODUCTION UNIVERSE
      ↓                                       ↓
Portfolio Watch Set                  Scanner Candidate Set
      └───────────────┬───────────────────────┘
                      ↓
             Research Watch Universe
                      ↓
              Research & Scoring
                      ↓
               TradeOpportunity
                      ↓
             OPERATOR SELECTS ONE
                      ↓
        deterministic downstream chain
                      ↓
               ExecutionPlan
                      ↓
              HUMAN AUTHORITY
```

Stage 4.0 is therefore not simply “more AI”. It is primarily an integration, governance, persistence and validation stage.

## Production exchange universe

A major Stage 4 workstream replaced small or assumed candidate sets with production exchange-universe acquisition.

The E2E-S2.1 series established provider policy and exchange-universe handling.

One visible milestone was the Borsa Italiana FTSE MIB provider, where live parsing and listing validation progressed from zero parsed references, through partial results, to a successful 40-listing universe after the provider correctly handled both Euronext Milan and Euronext STAR Milan listings.

This work reinforced the rule that provider-specific acquisition must be validated before downstream financial semantics are applied.

## E2E-S2.2A — Instrument taxonomy

The next layer normalized provider-specific instrument descriptions into a canonical taxonomy.

The system stopped treating provider labels as sufficient for eligibility.

Unknown or contradictory security forms became explicit review or fail-closed states rather than guessed classifications.

## E2E-S2.2B — Instrument eligibility

Eligibility became an explicit policy decision separate from taxonomy.

This created a stable boundary between:

```text
What is this instrument?
```

and:

```text
Is this instrument admissible as a new candidate?
```

Existing portfolio positions were deliberately not governed by the same visibility rule, because an existing exposure must remain observable even if it would not qualify as a new entry.

## E2E-S2.2C — Market-data mapping and verification

Stage 4 formalized the distinction between source listing identity and market-data-provider identity.

A Yahoo symbol became a mapping, not the canonical security identity.

The mapping must be verified before its history can be used for the source listing.

This work established the multi-layer identity model now used throughout Stage 4.

## E2E-S2.2D — History quality and liquidity

History acceptance became session-aware and policy-driven.

The system distinguishes mature `STANDARD` histories, reviewed `RECENT_LISTING` routes and `BLOCKED` cases.

Short history alone does not imply a recent IPO.

Liquidity is evaluated only after the required identity and history conditions are satisfied.

## E2E-S2.2E — Candidate Set + Portfolio Watch Set

This checkpoint created one of the defining Stage 4 structures: the Research Watch Universe.

The accepted cache-only audit processed:

```text
31,808 eligibility decisions
2 fresh STANDARD candidates
33 non-flat Fineco positions
35 READY Research Watch Universe members
```

The two fresh candidates were `BIT:A2A` and `XETRA:SAP`.

The union preserves provenance:

```text
Scanner Candidate Set ∪ Portfolio Watch Set
```

Existing positions therefore remain visible even when they fail new-entry policy.

## E2E-S2.2F — Scanner-to-Research integration

The next checkpoint connected the immutable Research Watch Universe to Research and Opportunity Scoring.

The accepted universe generated **37 hypotheses**:

- LONG and SHORT hypotheses for the two new candidates;
- 33 portfolio-monitoring hypotheses.

The integration persisted Market Scans, candidates, evidence, Research, scores and per-hypothesis outcomes.

Its bounded LIVE pilot produced no `TradeOpportunity`.

That was accepted as correct behaviour because the A2A LONG and SHORT hypotheses failed closed with incomplete Research.

This checkpoint established an important engineering rule:

> Zero opportunities is a valid result.

## E2E-S2.2G — Full selected-opportunity dry run

Stage 4 then validated the downstream lifecycle independently of the current LIVE opportunity-materialization problem.

Starting from at most one explicitly selected persisted opportunity, the dry run traverses:

```text
Portfolio Filter
→ Instrument Selection
→ Position Sizing
→ TradeProposal
→ Portfolio Simulator V2
→ CIO Decision
→ ExecutionPlan
```

Operator-supplied execution parameters are explicit, persisted and fingerprinted rather than inferred.

The safety invariants remain:

```text
broker_orders_submitted = 0
portfolio_mutations = 0
automatic_executions = 0
```

This proved that the downstream chain can be exercised without granting the software execution authority.

## E2E-S2.2H — Portfolio instrument coverage

The next corrective checkpoint strengthened the real-portfolio analytical boundary.

Its closure evidence covered all **41 Fineco position identities**, with **37 direct histories** and **four reviewed leveraged proxies**.

The refreshed Portfolio Analysis preserved the Fineco accounting gross exposure and persisted a new authoritative `PortfolioSnapshot`.

The complete regression at that checkpoint reached **1,532 tests and 162 subtests**.

This restored the First Complete Stage 4 E2E Target as the next major objective.

## E2E-S4.0A — First Complete E2E Target

E2E-S4.0A is the active Stage 4 integration and acceptance checkpoint.

It introduced an orchestration layer under `app/e2e`.

The orchestrator adds:

- run and stage manifests;
- deterministic fingerprints;
- SQLite persistence;
- lineage;
- resumability;
- terminal immutability;
- explicit hand-off validation;
- operator-waiting states;
- acceptance evidence.

It does not duplicate domain decisions.

The existing Portfolio Analysis, Scanner, Research, Portfolio Filter and downstream services remain authoritative for their own contracts.

## Controlled and real-current-data tracks

The Stage 4 E2E target deliberately uses two validation tracks.

The **controlled track** proves that the full chain can traverse using real business services with fixtures only at external-provider boundaries.

The **real-current-data track** validates production behaviour and may legitimately block, remain partial or create zero opportunities.

Both must preserve zero broker orders, zero portfolio mutations and zero automatic executions.

## E2E-S4.0A.1 — Bounded candidate replenishment

Early real directional validation on A2A and SAP stopped fail-closed because available Research evidence was incomplete.

Rather than lowering evidence standards, Stage 4 introduced bounded candidate replenishment.

The system can advance through the canonical unattempted Scanner frontier when all current hypotheses are terminal and no selectable opportunity exists.

The LIVE budget is bounded:

```text
≤ 2 listings per wave
LONG / SHORT symmetry
≤ 5 waves
1 transient retry
append-only wave evidence
```

The first selectable opportunity stops replenishment and returns control to the operator.

The objective is broader evidence coverage, not repeated attempts until a trade appears.

## LIVE integration defects

The first LIVE replenishment attempt exposed an adapter defect: the planner consumed `resolved_symbol`, while the frozen mapping audit publishes `yahoo_symbol`.

The correction was made at the adapter boundary without changing the frozen Scanner contracts.

This became characteristic of Stage 4 development:

```text
LIVE evidence
→ locate exact contract boundary
→ fix implementation
→ preserve frozen semantics
→ focused tests
→ full regression
→ new LIVE validation
```

## Research Evidence Completion Bridge

LIVE Stage 4 evidence showed that Research rarely reached `COMPLETE`.

One discovered cause was structural: Stage 2 already computed deterministic 20-session annualized volatility, but the canonical technical contract did not carry it into Research.

This triggered the explicit reopening of a frozen contract rather than an informal workaround.

The resulting AI-8C.3-R1 contract added canonical technical volatility without changing scoring thresholds.

Further LIVE work showed that many remaining “unknowns” were not missing present facts at all, but future uncertainties.

This led to the Research revisions:

```text
AI-8C.2-R1
AI-8C.2-R2
AI-8C.2-R3
```

The revisions separated missing as-of facts from forward uncertainties, refined context-gap and confidence semantics and aligned fundamental freshness with reporting cycles.

## Directional Opportunity Scoring

LIVE validation also exposed a more fundamental scoring problem: scoring had not been sufficiently directional.

AI-8C.3-R2 reopened the scoring contract so that the score explicitly measures support for the hypothesis direction.

LONG and SHORT became first-class scoring identities.

A fail-closed direction gate prevents a score computed for one direction from materializing an opportunity for the other.

The accepted LIVE run produced the first `COMPLETE` Research and first fully `SCORED` Stage 4 hypothesis: `BAMI.MI NEW_SHORT`, with confidence-adjusted score **56.6**, below the unchanged materialization threshold.

## Company-frame scoring

Directional scoring revealed another semantic issue.

FUNDAMENTAL and EXPECTATIONS describe the company before they describe a direction. Independent LONG and SHORT model calls could therefore create inconsistent company assessments.

AI-8C.3-R2.1 first introduced deterministic mirroring for company-frame components.

AI-8C.3-R2.2 then established the stronger architecture used today:

```text
Fundamental + Analyst evidence
        ↓
Shared direction-free Company Assessment
        ├──→ LONG scoring
        └──→ SHORT scoring
```

LIVE acceptance confirmed that LONG/SHORT pairs shared one company assessment and that the required directional transformations were consistent.

SHORT materialization was re-enabled by operator decision on **30 September 2026**.

## LIVE robustness — 1 October 2026

The first LIVE run after SHORT re-enablement exposed several model-output defects:

- null company-frame component after repair;
- confidence on a percentage scale;
- missing technical rationale with invalid citations.

These defects were handled deterministically without changing the investment score.

The subsequent LIVE validation on **1 October 2026** reached:

```text
processing failures = 0
wave retries = 0
Research COMPLETE = 4 / 8
```

Both LONG and SHORT flowed through the same accepted gates.

The complete hypotheses still remained below the materialization threshold.

## E2E-S4.0B — Shadow Ledger

At this point the engineering question changed.

The production chain was running, but observed confidence-adjusted scores were generally below the gate:

```text
observed range ≈ 49–59
materialization gate = 60
confidence gate = 0.40
```

Rather than lowering the threshold to force a `TradeOpportunity`, Stage 4 introduced the **Shadow Ledger**.

Every directional hypothesis with a confidence-adjusted score is persisted separately in:

```text
data/state/shadow_ledger.db
```

The ledger measures directional and index-relative outcomes after:

```text
5 sessions
10 sessions
20 sessions
```

It has no decision authority.

Its purpose is to accumulate empirical evidence before any threshold change is considered.

## Validation harness and current regression baseline

Stage 4 LIVE and offline validation are now organized through:

```text
scripts/Invoke-Stage4Validation.ps1
```

with CI support through `offline-regression`.

The current architecture records the canonical regression baseline as:

```text
Linux:   1767 tests + 162 subtests
Windows: 1766 passed + 1 POSIX-only skip
```

This baseline includes the contract revisions and LIVE-hardening work completed through 1 October 2026.

## Current state — 2 October 2026

The Stage 4 architecture is active.

The checkpoint map currently stands at:

```text
Stage 2.5 quantitative foundation        CLOSED / FROZEN
AI-8C.2 Research contracts               CLOSED / FROZEN · revised & accepted LIVE
AI-8C.3 Opportunity Scoring              CLOSED / FROZEN · revised & accepted LIVE
PF-1A → PF-1H Portfolio Filter           CLOSED / FROZEN

E2E-S2.1 exchange/provider policy        CLOSED
E2E-S2.2A instrument taxonomy            CLOSED
E2E-S2.2B instrument eligibility         CLOSED
E2E-S2.2C mapping & verification         CLOSED
E2E-S2.2D history & liquidity            CLOSED
E2E-S2.2E Candidate / Watch assembly     CLOSED
E2E-S2.2F Scanner → Research             CLOSED
E2E-S2.2G selected-opportunity dry run   CLOSED
E2E-S2.2H portfolio coverage             CLOSED

E2E-S4.0A.3 evidence completion bridge   CLOSED
Stage 4 validation harness               IN USE
E2E-S4.0B Shadow Ledger                  IMPLEMENTED · COLLECTING EVIDENCE
E2E-S4.0A First Complete E2E Target      IN PROGRESS
```

The live chain now reaches Research and directional Opportunity Scoring without processing failures.

No live Stage 4 `TradeOpportunity` has yet passed the accepted materialization gate. That is an empirical state of the current evidence, not a reason to manufacture a successful result.

## The next milestone

The immediate engineering sequence is:

```text
LIVE hypotheses
        ↓
Shadow Ledger persistence
        ↓
5 / 10 / 20-session outcome evidence
        ↓
evidence-based policy assessment
        ↓
first legitimate TradeOpportunity
        ↓
explicit operator selection
        ↓
complete Stage 4 E2E acceptance
```

The final E2E target must demonstrate one authoritative portfolio snapshot, an accepted production Scanner universe, a persisted Research Watch Universe, multiple researched hypotheses, persisted opportunities where supported, one explicit operator selection, Portfolio Filter, instrument and sizing, TradeProposal, before/after simulation, CIO Decision, ExecutionPlan or explicit rejection, zero broker mutation and a complete replayable audit chain.

A final rejection remains a valid E2E result if it is correct, explicit and reproducible.

## What changed across the stages

The evolution can be summarized as:

```text
STAGE 2.5
"Can the portfolio be measured deterministically?"

STAGE 3.0
"Can evidence-backed AI reasoning be integrated with deterministic
portfolio controls?"

STAGE 4.0
"Can the entire workflow run on real inputs with explicit contracts,
persistence, replay, LIVE validation and human authority?"
```

The project has therefore moved from analytics, to bounded intelligence, to auditable orchestration.

The central engineering principle has remained stable throughout:

> Increase agentic capability without making state, evidence, policy or authority implicit.

