---
title: "Architecture and Validation Gates"
description: "How a sensor reading becomes a public advisory: four gates and five bounded agents."
project: "environmental-monitoring"
section: "architecture"
status: "published"
updated: "2026-10-27"
order: 10
---

# Architecture and Validation Gates

Nothing reaches the public without passing four gates. Every gate result is
stored, so the system can publish its own false-alarm and miss rates.

| Gate | Role | What it checks | Type |
| --- | --- | --- | --- |
| G1 Data | Contracts and quality | Schema, units, ranges, calibration, drift | Deterministic |
| G2 Signal | Baselines and thresholds | Seasonal baselines, EU legal limits, anomaly tests | Deterministic and statistical |
| G3 Evidence | Corroboration | Every claim cites two or more independent records | Agentic, bounded |
| G4 Decision | Human approval | A named operator approves, edits or rejects | Human |

## Sensing layer

Coastal water buoys, sewer level nodes, rain gauges, valley level radars,
air-quality nodes and beach occupancy counters, connected over LoRaWAN.
Low-cost indicators such as turbidity and ammonium detect likely sewage within
minutes; accredited laboratory samples confirm or reject.

## Data layer

PostgreSQL with PostGIS for places and TimescaleDB for time series. Every
reading keeps its raw value, its quality flags and its gate results.

## Agents

Five agents, each with a narrow contract and no authority to publish:

1. **Sentinel** watches signals that passed G2 and opens events.
2. **Evidence** assembles a dossier from sensors, weather, satellite and public records.
3. **Planning watch** links events to planning applications and permits.
4. **Bulletin** drafts advisories in English and Maltese for human review.
5. **Citizen reports** triages photos and reports from residents and visitors.

## Example: a storm night

An illustrative walk-through, not real data:

1. A rain gauge reads above 25 mm/h and a deterministic rule opens an event.
2. The sewer inlet level rises well above its seasonal baseline (G1, G2).
3. A coastal buoy near the outfall records a turbidity spike (G2).
4. The Evidence agent builds a dossier citing three independent records (G3).
5. An operator approves a swim advisory for the affected bay (G4).
6. Accredited samples the next morning confirm or lift the advisory.

## Map

An interactive map of Gozo, built on OpenStreetMap and Overture data with
Copernicus Sentinel-2 imagery, shows risks, sensors, live readings and a daily
swim-risk badge for each beach.

[Open the Gozo Risk Map prototype →](/gozo-risk-map/index.html)
