---
title: "Testing & Validation"
description: "Stage 4.0 validation: regression, bounded LIVE testing, persisted evidence, Shadow Ledger measurement and final TradeOpportunity-producing E2E acceptance."
project: "agentic-portfolio"
section: "testing"
status: "published"
updated: "2026-10-02"
order: 50
---

# Testing & Validation

Testing in Agentic Portfolio Stage 4.0 must establish both **software correctness** and **semantic correctness under real data**.

The validation sequence is deliberately layered:

```text
UNIT / CONTRACT TESTS
        ↓
CHECKPOINT REGRESSION
        ↓
FULL OFFLINE REGRESSION
        ↓
CONTROLLED E2E VALIDATION
        ↓
BOUNDED LIVE VALIDATION
        ↓
PERSISTED LIVE EVIDENCE
        ↓
SHADOW LEDGER MEASUREMENT
        ↓
FINAL COMPLETE E2E ACCEPTANCE
```

The objective is not to manufacture a trade. It is to prove that the production chain can create valid `TradeOpportunity` objects **when real evidence satisfies the accepted gates**, then carry one explicitly selected opportunity through the complete downstream lifecycle without automatic broker execution.

## 1. Validation philosophy

For deterministic components, correctness is tested through exact outputs, invariants and reproducibility.

For AI-facing components, valid JSON is not enough. Output must satisfy the semantic contract: evidence grounding, direction, completeness, confidence, citations, company-frame consistency and policy constraints.

For LIVE integration, a run that produces zero opportunities can still be correct.

> Test the contract that should hold, not the outcome we would like to see.

## 2. Deterministic and contract testing

The deterministic layer covers parsing, normalization, instrument taxonomy, eligibility, mapping, listing identity, exchange sessions, history quality, liquidity, portfolio analytics, Portfolio Filter rules, instrument selection, sizing, simulation, persistence, fingerprints, lineage, terminal immutability, replay and idempotency.

These tests are reproducible without depending on live provider behaviour.

## 3. Checkpoint and full regression

Every Stage 4 checkpoint has focused acceptance tests and must preserve the frozen contracts around it.

The current canonical full-regression baseline is:

```text
Linux:   1767 tests + 162 subtests
Windows: 1766 passed + 1 POSIX-only skip
```

The project uses canonical `tests/` collection through `pytest.ini`. The older 1620 count included 18 duplicate collections.

A new Stage 4 block is therefore not accepted merely because its focused tests pass.

## 4. Scanner validation

The production Scanner is tested gate by gate:

```text
Provider acquisition
→ Taxonomy
→ Eligibility
→ Mapping
→ Identity verification
→ History quality
→ Liquidity
→ Candidate admission
```

Validation proves, among other invariants, that exact listing identity survives mapping, unknown instrument types do not become silently eligible, unverified market-data mappings cannot provide accepted history, recent listings require reviewed listing-start evidence, session-aware freshness is used and blocked listings cannot become new candidates.

## 5. Candidate / Watch Universe acceptance

The closed Candidate Set Assembly checkpoint processed **31,808 eligibility decisions**, admitted two fresh `STANDARD` candidates (`BIT:A2A` and `XETRA:SAP`), retained all **33 non-flat Fineco positions**, and assembled **35 READY Research Watch Universe members**.

Its accepted cache-only replay made zero network calls and reproduced the persisted assembly deterministically.

This establishes that current positions remain observable independently of new-entry Scanner eligibility.

## 6. Scanner-to-Research acceptance

The accepted Watch Universe generated **37 hypotheses**: independent LONG and SHORT hypotheses for the two new candidates plus 33 portfolio-monitoring hypotheses.

A cache-only pilot made no provider or LLM calls and preserved retriable `CACHE_ONLY_MISS` states.

The bounded LIVE pilot processed three hypotheses:

- `2BTC.DE` completed as `PORTFOLIO_MONITOR`;
- `A2A.MI` LONG stopped fail-closed with `RESEARCH_NOT_COMPLETE`;
- `A2A.MI` SHORT stopped fail-closed with `RESEARCH_NOT_COMPLETE`.

It created zero `TradeOpportunity` records. That was a valid integration result, not a failed test.

## 7. Resume and terminal-state validation

Resumability is tested explicitly.

Completed hypotheses must not be fetched or inferred again. One accepted resume test deliberately supplied an invalid model name after the workflow was terminal; the model was never called and persisted terminal payloads and timestamps remained unchanged.

Terminal state is therefore an immutable persisted boundary.

## 8. Selected-opportunity downstream dry run

The closed selected-opportunity dry-run checkpoint validates the downstream chain independently of current LIVE materialization:

```text
TradeOpportunity
→ explicit operator input
→ Portfolio Filter
→ Instrument Selection
→ Position Sizing
→ TradeProposal
→ Portfolio Simulator V2
→ CIO Decision
→ ExecutionPlan
```

Every stage records identities, fingerprints, reason codes and diagnostics. A deterministic policy block prevents later stages from running.

Acceptance requires:

```text
broker_orders_submitted = 0
portfolio_mutations = 0
automatic_executions = 0
```

## 9. Stage 4.0 orchestration validation

The active E2E-S4.0A checkpoint validates the true Stage 4 orchestration layer.

It tests immutable run/stage manifests, deterministic fingerprints, SQLite persistence, cache-mode identity, terminal immutability, restart-safe lineage, resumability, explicit hand-off IDs, operator-waiting states and fail-closed compatibility checks.

The orchestrator owns control flow, lineage and safety validation. It does not duplicate domain decisions.

## 10. Two acceptance tracks

E2E-S4.0A uses two complementary tracks.

### Real-current-data track

Uses current production inputs and may legitimately wait, block, remain partial or produce zero opportunities.

### Deterministic controlled track

Traverses the complete lifecycle using real business services with controlled fixtures only at external-provider boundaries.

Both tracks must prove zero broker orders, zero portfolio mutations and zero automatic executions.

## 11. Bounded LIVE candidate replenishment

Stage 4 added bounded replenishment after real A2A and SAP directional validation failed closed because evidence was incomplete.

When all current directional hypotheses are terminal and no selectable opportunity exists, the system advances through the canonical unattempted Scanner frontier.

The LIVE budget is bounded:

- maximum two listings per wave;
- symmetric LONG and SHORT hypotheses;
- maximum five waves;
- one transient retry;
- append-only persisted wave evidence.

Terminal investment-quality exclusions advance the frontier. The first selectable `TradeOpportunity` stops replenishment and returns control to explicit operator selection.

The purpose is broader production validation, not repeated attempts until a trade happens to appear.

## 12. LIVE defects as acceptance evidence

LIVE runs expose integration defects that fixture-only testing can miss.

For example, the first LIVE replenishment attempt stopped before wave creation because the planner consumed `resolved_symbol` while the frozen mapping audit publishes `yahoo_symbol`.

The adapter boundary was corrected without changing the frozen Scanner contracts.

The validation pattern is:

```text
LIVE defect
→ identify contract boundary
→ correct implementation / adapter
→ preserve frozen semantics
→ focused validation
→ full regression
```

## 13. Research contract revisions validated LIVE

Stage 4 LIVE testing led to explicit, versioned Research revisions:

```text
AI-8C.2-R1
AI-8C.2-R2
AI-8C.2-R3
```

These revisions refined evidence completion and the distinction between missing as-of facts and future uncertainty.

They were governed contract changes with new acceptance evidence, not silent prompt tuning.

## 14. Opportunity Scoring revisions validated LIVE

Opportunity Scoring likewise progressed through:

```text
AI-8C.3-R1
AI-8C.3-R2
AI-8C.3-R2.1
AI-8C.3-R2.2
```

The accepted scoring path is directional and supports LONG and SHORT under the same materialization policy.

R2.2 introduced the shared company assessment. LIVE acceptance confirmed that LONG/SHORT pairs used the same company assessment and that the required directional company-frame values were exact mirrors.

## 15. SHORT live validation

SHORT materialization was re-enabled by operator decision on 2026-09-30.

A `NEW_SHORT` can materialize only with:

- `COMPLETE` Research;
- a directional score computed for SHORT;
- company-frame components from the shared assessment;
- the unchanged materialization gates.

A code-level switch can suspend SHORT materialization again.

SHORT is therefore an explicit tested policy path, not an inferred inversion of LONG.

## 16. Processing-failure investigation

The first LIVE run after SHORT re-enablement exposed model-output defects including a null company-frame component after repair, confidence expressed on a percentage scale, and a missing technical rationale with invalid citations.

The implementation was hardened to tolerate these cases deterministically **without changing any score**.

The subsequent LIVE validation on 2026-10-01 reported:

```text
processing failures = 0
wave retries = 0
Research COMPLETE = 4 / 8
```

All complete hypotheses remained below the materialization threshold.

This is an important distinction: processing robustness was improved without manipulating investment scores.

## 17. Current LIVE scoring evidence

At the current Stage 4 baseline, the LIVE chain runs end to end without processing failures.

Approximately half of the researched directional hypotheses reach `COMPLETE` Research with HIGH evidence quality and a full score, for LONG and SHORT alike.

Observed confidence-adjusted scores remain below the accepted materialization gate, in the documented range of approximately **49–59**.

The gates remain:

```text
confidence-adjusted score ≥ 60
score confidence ≥ 0.40
```

No live Stage 4 `TradeOpportunity` has therefore yet been created by the production chain.

That is not treated as a software failure.

## 18. Why the gate is not changed merely to obtain an opportunity

The absence of a materialized opportunity creates a policy question, not an automatic justification for lowering the threshold.

Stage 4 does not tune the 60 / 0.40 gates merely because recent LIVE scores have fallen below them.

Instead, it first accumulates empirical outcome evidence.

That is the role of the Shadow Ledger.

## 19. Shadow Ledger

E2E-S4.0B introduced the separate persisted Shadow Ledger on 2026-10-01.

Every directional hypothesis with a confidence-adjusted score is recorded in:

```text
data/state/shadow_ledger.db
```

The database is git-ignored and separate from portfolio, opportunity and execution persistence.

Records can be added automatically after each validation-harness `Live` level or through the Shadow Ledger tooling.

The ledger reads source databases read-only and has **no effect on current portfolio decisions**.

## 20. Persisted outcome measurement

The Shadow Ledger measures directional and index-relative outcomes after:

```text
5 sessions
10 sessions
20 sessions
```

The reference is the last close before the evaluation day.

Reports can group results by confidence-adjusted score.

This allows threshold policy to be evaluated empirically rather than changed because a small number of LIVE runs happened not to cross the gate.

## 21. Shadow Ledger has no decision authority

The ledger cannot create a `TradeOpportunity`, lower a threshold, select an opportunity, alter Portfolio Filter results, change sizing, influence the current CIO decision, create an ExecutionPlan or mutate the portfolio.

Any later threshold change remains an explicit versioned policy decision requiring its own tests and acceptance evidence.

## 22. Validation harness

The Stage 4 validation harness is:

```text
scripts/Invoke-Stage4Validation.ps1
```

and the CI path includes:

```text
offline-regression
```

LIVE validation is therefore part of a repeatable validation workflow rather than an informal manual experiment.

Its persisted results also feed the Shadow Ledger where applicable.

## 23. Evidence before the final E2E test

The Stage 4 sequence deliberately places LIVE evidence and Shadow Ledger measurement before any evidence-driven threshold decision and before claiming final E2E acceptance.

The intended progression is:

```text
LIVE Research + Directional Scoring
        ↓
Persist scored hypotheses
        ↓
Shadow Ledger
        ↓
Measure 5 / 10 / 20-session outcomes
        ↓
Analyse score buckets and directional quality
        ↓
Keep policy OR approve a versioned policy revision
        ↓
Legitimate TradeOpportunity materializes
        ↓
Explicit operator selection
        ↓
FINAL COMPLETE E2E TEST
```

The Shadow Ledger is therefore not ancillary reporting. It is the empirical validation layer used before deciding whether the current scoring/materialization policy itself requires revision.

## 24. First Complete Stage 4.0 E2E Target

The final E2E acceptance target must demonstrate:

1. one authoritative Fineco snapshot;
2. one accepted production Scanner universe;
3. one persisted Research Watch Universe;
4. Research and scoring for multiple members;
5. persisted `TradeOpportunity` objects where evidence supports them;
6. one explicit operator selection;
7. one frozen Portfolio Filter result;
8. one deterministic instrument and sizing decision;
9. one `TradeProposal`;
10. one before/after portfolio simulation;
11. one CIO decision;
12. one `ExecutionPlan` or explicit rejection;
13. no broker mutation;
14. a complete replayable audit chain.

A final rejection is still a valid E2E result if it is correct, explicit and reproducible.

The current missing production milestone occurs earlier: the first LIVE directional hypothesis that legitimately passes the `TradeOpportunity` materialization gate.

## 25. Current validation status

```text
Quantitative foundation                 CLOSED / FROZEN
Research & evidence contracts           CLOSED / FROZEN · revised & accepted LIVE
Opportunity Scoring contracts           CLOSED / FROZEN · revised & accepted LIVE
Portfolio Filter                        CLOSED / FROZEN
Production Scanner checkpoints          CLOSED
Candidate / Watch Set assembly          CLOSED
Scanner → Research integration          CLOSED
Selected-opportunity dry run            CLOSED
Instrument coverage / risk adapters     CLOSED
Research evidence completion bridge     CLOSED
Validation harness                      IN USE
Shadow Ledger                           IMPLEMENTED · COLLECTING EVIDENCE
First Complete Stage 4.0 E2E Target     IN PROGRESS
```

The production chain is live-capable through Research and Opportunity Scoring for both LONG and SHORT.

The next empirical milestone is to accumulate persisted LIVE outcome evidence and obtain a legitimately materialized `TradeOpportunity`, after which the complete selected-opportunity E2E chain can be exercised under the accepted contracts.

## Testing principle

Agentic Portfolio treats validation evidence as part of the product.

The project does not ask only:

> Did the code run?

It asks:

> Can every important result be reproduced, traced to its evidence, evaluated against the policy that governed it, and distinguished from an outcome the system merely hoped to produce?

That is the standard required before Stage 4.0 can be considered complete.

