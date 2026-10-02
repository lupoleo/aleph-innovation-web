---
title: "Contracts & Data Types"
description: "Stage 4.0 domain contracts, identity boundaries, persisted records and lineage across the Agentic Portfolio end-to-end workflow."
project: "agentic-portfolio"
section: "contracts"
status: "published"
updated: "2026-10-02"
order: 30
---

# Contracts & Data Types

Agentic Portfolio Stage 4.0 is connected by **explicit, versioned contracts** rather than by implicit hand-offs between modules.

The contracts define what each lifecycle stage may consume, what it may produce, which identity it refers to, which policy version governed the result and how the result can be traced back to its evidence and portfolio state.

This page describes the public architectural contract model. The executable Python types, accepted checkpoint documents and tests remain the implementation authority.

## Why contracts matter

Agentic Portfolio combines deterministic finance, external data providers, probabilistic AI and human decisions.

Without explicit boundaries, a downstream component could silently reinterpret an upstream result, lose provenance, confuse a proposed state with a real state or treat missing evidence as certainty.

Stage 4.0 therefore treats a contract as more than a data structure. A durable record should preserve enough context to answer:

- **What** object or decision is this?
- **Which subject** does it refer to?
- **Which portfolio snapshot** was current?
- **Which evidence** supported it?
- **Which policy and contract versions** governed it?
- **When** was it produced?
- **Which upstream record** caused it?
- **Can the result be replayed or audited?**

## 1. Identity domains

Stage 4.0 deliberately separates several kinds of identity.

| Identity domain | Canonical representation | Purpose |
| --- | --- | --- |
| Provider listing | `(exchange, provider_symbol)` | Exact acquisition and venue identity |
| Security reference | ISIN when available | Reference-data and cross-listing analysis |
| Market-data instrument | Provider-specific symbol, currently Yahoo | Price and history retrieval |
| Economic risk factor | Canonical underlying or mapped factor | Exposure aggregation and portfolio risk |

These identities are related, but they are not interchangeable.

A Yahoo symbol never replaces the source listing identity. Two venues sharing an ISIN are not automatically equivalent in currency, liquidity, trading calendar or market-data behaviour. A common risk factor may permit exposure aggregation while the original position and listing records remain separate.

The exact source listing identity is therefore preserved throughout the workflow.

## 2. PortfolioSnapshot

`PortfolioSnapshot` represents the authoritative broker-visible portfolio at a specific time.

Conceptually it binds:

```text
PortfolioSnapshot
├── snapshot_id
├── as_of
├── account state
├── cash state
├── positions[]
├── source / provenance
└── integrity identity
```

Fineco remains authoritative for real positions and account state.

A `PortfolioSnapshot` is not mutated by a proposed trade. Simulation creates a separate state.

This produces the invariant:

`REAL ≠ SIMULATED ≠ PROPOSED`

## 3. PortfolioRiskState

`PortfolioRiskState` is the deterministic analytical interpretation of a portfolio snapshot.

It can contain portfolio-level quantitative context such as exposure, concentration, technical/risk measures and the canonical state required by downstream portfolio controls.

The important contract relationship is:

`PortfolioSnapshot → PortfolioRiskState`

The analytical state must remain bound to the snapshot from which it was calculated.

## 4. Scanner listing and eligibility records

The Scanner begins from an exact provider listing and progressively attaches explicit decisions.

The architectural chain is:

```text
Provider Listing
    ↓
Canonical Taxonomy Decision
    ↓
Eligibility Decision
    ↓
Market-Data Mapping
    ↓
Identity / Availability Verification
    ↓
History-Quality Result
    ↓
Candidate Admission
```

Each stage preserves diagnostics rather than collapsing the entire Scanner into one Boolean.

### Eligibility states

A listing receives an explicit eligibility result such as:

- `ELIGIBLE`
- `INELIGIBLE`
- `REVIEW_REQUIRED`

### History routes

History evaluation produces an explicit route such as:

- `STANDARD`
- `RECENT_LISTING`
- `BLOCKED`

A recent listing is not inferred merely because its available history is short. Its distinct route requires reviewed listing-start evidence.

## 5. Scanner Candidate Set

The **Scanner Candidate Set** contains listings admissible for new-opportunity research.

A candidate retains the decisions that led to admission, including listing identity, provider fields, taxonomy, eligibility, market-data mapping, verification, history route, liquidity result, policy versions, source timestamps and degradation/review diagnostics.

This makes candidate admission reproducible and auditable.

## 6. Portfolio Watch Set

The **Portfolio Watch Set** represents current real positions requiring monitoring or research.

It is deliberately different from the Scanner Candidate Set.

An existing position remains in the Watch Set even when:

- its instrument class is not eligible for new Scanner admission;
- its venue is unsupported for new candidates;
- it requires a portfolio-specific market-data resolver;
- the appropriate action is monitoring, reduction, exit or hedge rather than a new entry.

The contract therefore prevents new-entry policy from making an existing exposure invisible.

## 7. Research Watch Universe

The Research Watch Universe is the auditable union:

`Scanner Candidate Set ∪ Portfolio Watch Set`

Each member retains provenance indicating whether it is:

- `NEW_CANDIDATE`
- `CURRENT_POSITION`
- both

The union also preserves the distinction between exact listing equality, security equivalence, shared market-data identity and shared economic risk factor.

The Research Watch Universe is the canonical input boundary to Research.

## 8. Evidence records

Research consumes structured evidence rather than untraceable prose.

An evidence record conceptually preserves:

```text
Evidence
├── evidence_id
├── subject identity
├── source identity / URL when applicable
├── provider
├── evidence kind
├── event / publication time
├── retrieval time
├── content or normalized facts
├── quality / relevance
├── semantic tags
└── degradation diagnostics
```

Stage 4.0 can expose evidence kinds including:

`MARKET · TECHNICAL · NEWS · FUNDAMENTAL · ANALYST`

Evidence and AI interpretation remain separate objects.

Missing evidence is represented as missing or degraded evidence; it is never synthesized into a source fact.

## 9. Research

Research transforms validated evidence into a normalized analytical interpretation.

Conceptually:

```text
Research
├── research_id
├── subject
├── evidence references[]
├── research status
├── thesis / interpretation
├── unknowns[]
├── forward_uncertainties[]
├── context gaps[]
├── research confidence
├── contract version
├── prompt / policy version
└── model metadata
```

The exact executable schema is governed by the accepted AI-8C.2 contract.

### Unknowns and forward uncertainties

Stage 4 distinguishes:

`unknowns`

from:

`forward_uncertainties`

An unknown is an as-of fact that exists but is not available in the supplied evidence.

A forward uncertainty is a future outcome that current evidence cannot establish.

This distinction is contractually important because an unknowable future event must not automatically make otherwise complete research incomplete.

## 10. Shared Company Assessment

Stage 4.0 introduces a **shared, direction-free company assessment** for company-frame components.

It is built from Fundamental and Analyst evidence and shared between LONG and SHORT hypotheses for the same listing.

Conceptually:

```text
CompanyAssessment
├── listing identity
├── source evidence IDs
├── fundamental assessment
├── expectations assessment
├── policy version
└── content-addressed identity / cache key
```

This contract prevents the LONG and SHORT paths from independently producing contradictory descriptions of the same company fundamentals.

Directional transformation is applied later by the scoring policy where required.

## 11. Directional Opportunity Score

Opportunity Scoring evaluates a specific directional hypothesis.

The hypothesis direction is explicit:

`LONG | SHORT`

The score remains bound to its own direction and to the Research, technical inputs and shared company assessment from which it was calculated.

Conceptually:

```text
OpportunityScore
├── score_id
├── subject identity
├── direction
├── research reference
├── company-assessment reference
├── canonical technical input
├── component scores
├── raw score
├── score confidence
├── confidence-adjusted score
├── diagnostics
├── scoring policy version
└── model / prompt metadata
```

A score calculated for one direction cannot silently materialize an opportunity for the other direction.

## 12. Scored hypothesis outcome

A directional hypothesis has an explicit outcome even when no opportunity is created.

Examples include successful scoring, research incompleteness, evidence unavailability, processing failure or a materialization-policy rejection.

This distinction is important:

`Scored hypothesis ≠ TradeOpportunity`

A zero-opportunity run is a valid system outcome.

## 13. TradeOpportunity

`TradeOpportunity` is the persisted, broker-independent representation of a directional investment hypothesis that passed the materialization gates.

It is:

- LONG or SHORT;
- bound to an exact subject and market-data identity;
- bound to the relevant portfolio snapshot;
- supported by structured evidence;
- explicit about confidence and uncertainty;
- explicit about horizon and invalidation conditions;
- reproducible from stored inputs and policy versions;
- persisted before downstream selection.

It does **not** choose the final broker instrument, position size or portfolio allocation.

## 14. Shadow Ledger record

The Shadow Ledger receives scored directional hypotheses independently of `TradeOpportunity` materialization.

Its records support outcome measurement such as directional and index-relative return after defined observation horizons.

Conceptually:

```text
ShadowHypothesis
├── source hypothesis / score
├── direction
├── reference observation
├── score bucket
├── 5-session outcome
├── 10-session outcome
└── 20-session outcome
```

The Shadow Ledger is observational.

It has no authority over current opportunity materialization, portfolio filtering, sizing, CIO decisions or execution.

## 15. Operator Selection

Downstream construction requires an explicit selection record.

The selection binds:

```text
OperatorSelection
├── selected opportunity ID
├── selection timestamp
├── operator identity when available
├── source scoring run
├── source portfolio snapshot
├── optional operator note
└── disposition of non-selected opportunities
```

The downstream lifecycle accepts exactly one selected opportunity per evaluation run.

Ranking is not selection.

## 16. Portfolio Filter Result

The frozen Portfolio Filter evaluates the selected opportunity in the context of the real portfolio.

Its result binds the opportunity and portfolio snapshot to explicit portfolio-aware constraints and reasons.

The filter may consider exposure, concentration, marginal risk, correlation/diversification, liquidity/history requirements and long/short compatibility.

The important semantic boundary is:

`TradeOpportunity → Portfolio Filter Result`

not:

`highest-ranked score → automatic allocation`

## 17. Instrument Selection

Instrument Selection resolves how the selected economic opportunity would actually be represented as a tradable instrument.

The result remains explicit about instrument identity and implementation.

Stage 4 supports direct equity and approved derivative representations only through explicit contracts. Broker-specific leveraged products require their corresponding risk and execution semantics.

Instrument Selection precedes Position Sizing.

## 18. Position Sizing

Position Sizing is deterministic.

It consumes the selected opportunity, approved instrument representation, portfolio state and applicable risk constraints and produces the proposed size.

The LLM does not calculate the final quantity.

This boundary keeps portfolio arithmetic and capital constraints reproducible.

## 19. TradeProposal

`TradeProposal` is the structured representation of the exact proposed trade.

It records information such as:

```text
TradeProposal
├── opportunity reference
├── instrument
├── side
├── quantity
├── reference price
├── notional
├── costs
├── rationale
└── constraints
```

The proposal is still not a real portfolio mutation.

It is the exact object evaluated by Portfolio Simulator V2.

## 20. Simulation

Portfolio Simulator V2 applies the `TradeProposal` to a copy of the authoritative portfolio snapshot.

The simulation records the before/after relationship:

```text
REAL PortfolioSnapshot
        +
TradeProposal
        ↓
SIMULATED Portfolio State
        ↓
Pre-trade / Post-trade Metrics
```

The original real snapshot remains unchanged.

A simulation failure cannot produce CIO approval or an execution plan.

## 21. CIO Decision

The CIO Decision binds qualitative reasoning to deterministic portfolio evidence.

Conceptually it links:

```text
TradeProposal
+ Simulation
+ Evidence / Research
+ Deterministic constraints
+ Unresolved risks
        ↓
CIO Decision
```

Decision states are governed by the canonical implementation contract and may include outcomes such as:

- `APPROVE`
- `REJECT`
- `REVIEW_REQUIRED`
- `BLOCKED`

The CIO cannot silently override deterministic failures.

## 22. ExecutionPlan

An approved CIO decision may produce an `ExecutionPlan`.

The plan represents the final software-controlled instruction boundary.

It is not a broker order.

The architecture explicitly preserves:

`CIO Decision → ExecutionPlan → HUMAN AUTHORITY`

No software stage may infer that the plan was executed.

## 23. Execution Outcome

After manual execution, a later authoritative Fineco snapshot provides the real observed state.

The execution outcome may link the actual broker-visible result back to the plan.

The system must preserve distinctions between:

- executed;
- partially executed;
- executed differently from the plan;
- not executed;
- not yet reconciled.

Learning and reporting use observed outcomes rather than assumed fills.

## 24. Canonical persistence chain

Stage 4.0 persistence connects the principal records through explicit lineage:

```text
PortfolioSnapshot
      │
      ├──→ PortfolioRiskState
      │
Production Listing
      ↓
Scanner Decisions
      ↓
Scanner Candidate Set ─────┐
                           ├──→ Research Watch Universe
Portfolio Watch Set ───────┘
                           ↓
                        Evidence
                           ↓
                        Research
                           ↓
                Shared Company Assessment
                           +
                Directional Opportunity Score
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
       TradeOpportunity           Shadow Ledger
              ↓
       Operator Selection
              ↓
     Portfolio Filter Result
              ↓
      Instrument Selection
              ↓
        Position Sizing
              ↓
         TradeProposal
              ↓
          Simulation
              ↓
        CIO Decision
              ↓
        ExecutionPlan
              ↓
        HUMAN EXECUTION
              ↓
New Authoritative PortfolioSnapshot
              ↓
       Execution Outcome
```

The lineage allows a downstream decision to be traced back to the exact portfolio state, listing, evidence, policies and calculations that produced it.

## 25. Versioning and governance

Persisted outputs carry contract and policy versions where required.

Frozen contracts do not change silently.

When a frozen contract must be reopened, Stage 4 governance requires an explicit reason, impact analysis, migration strategy, updated tests, acceptance evidence and a version change visible in persisted outputs.

This is particularly important for AI-facing contracts because a prompt or semantic interpretation change can alter system behaviour even when the Python function signature remains unchanged.

## 26. Contract design principles

The Stage 4 contract system follows a small set of durable rules:

1. **Identity is explicit.**
2. **Real and proposed state never collapse.**
3. **Evidence and interpretation are separate.**
4. **Unknown is represented as unknown.**
5. **Direction is explicit for investment hypotheses.**
6. **AI output is schema-validated.**
7. **Deterministic finance remains deterministic.**
8. **Every important transition preserves provenance.**
9. **Policy and contract versions travel with persisted outputs.**
10. **Replay must not depend on hidden process memory.**
11. **Human selection is a persisted event.**
12. **An execution plan is not an execution.**

These contracts are what allow Agentic Portfolio to use probabilistic reasoning without making the overall system probabilistically defined.
