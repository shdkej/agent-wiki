# Portfolio

- 원본: `source/shdkej-content/Portfolio.md`
- Status: deepened mapped note
- 역할: 원본 만다라트 노드와 1:1 대응하는 관리 노트

## 핵심 주장
This note is not just a resume. It presents a professional identity: use minimalist thinking, automation, and infrastructure judgment to remove friction so other people can build faster and more safely. The repeated value is not raw complexity, but deliberate simplification that still scales.

## Why this node matters
- It is a root-level category node for how technical work, execution style, and impact are framed.
- It shows which outcomes the author counts as meaningful: throughput, stability, deployability, cost control, and operator clarity.
- It reveals a durable preference for systems that reduce recurring human burden rather than heroic one-off fixes.

## Durable capabilities surfaced by the source

### 1. Infrastructure is treated as an enabler of developer focus
The opening frame is consistent across projects: good operations work disappears into a stable, automated environment where developers can stay close to product work.

### 2. Scale problems are solved by redesigning flow, not only tuning parts
The strongest examples are about rethinking architecture boundaries:
- splitting work across Lambda invocations instead of forcing one function to do too much
- choosing Kinesis after comparing queue characteristics
- redesigning deployment and environment workflows instead of accepting manual branching pain

### 3. Operational safety matters as much as speed
Several projects optimize velocity, but always with safeguards:
- deployment only after batch interruption checks
- staged cluster migration rather than brittle in-place upgrade assumptions
- automatic night shutdown with explicit restart structure
- observability improvements to shorten failure diagnosis

### 4. Reusable systems beat repeated manual effort
The note keeps converting repeated chores into repeatable mechanisms:
- GitOps deployment flows
- Slack deployment automation
- Helm-based site rollout patterns
- Cron-based cost scheduling
- tracing dashboards and standardized troubleshooting views

## Project pattern map

### High-throughput messaging architecture
This project highlights a recurring strength: identify the real bottleneck, then redesign execution shape.
- bottleneck: socket and throughput limits in a single execution path
- move: pipeline-style Lambda fan-out and Kinesis-based flow design
- durable lesson: scale often comes from matching workload shape to platform behavior, not from pushing harder on the same path

### EKS upgrade and platform migration
This section is less about version numbers than about platform stewardship.
- the author accepts migration as a multi-constraint coordination task
- compatibility, networking, certificates, namespace behavior, and policy drift are all treated as part of one operational surface
- durable lesson: infrastructure modernization is successful when hidden integration edges are anticipated, not when the main upgrade step alone succeeds

### Slack deployment automation and vertical-site rollout
These two cases belong together because both turn deployment from specialist work into shared team capability.
- one reduces environment friction for developers
- the other standardizes expansion to new sites
- durable lesson: platform work has leverage when it makes organizational repetition cheaper and safer

### Cost and observability work
The scheduler and logging sections show another recurring orientation: optimize what continues to hurt over time.
- night shutdown converts predictable idle time into savings
- traceable logs convert debugging chaos into guided inspection
- durable lesson: mature infra work improves both money flow and attention flow

## 숨은 패턴s across the note

### Minimalism as systems design
The stated minimalist philosophy is not aesthetic only. In practice it means:
- remove avoidable steps
- reduce manual branching and coordination burden
- keep only the infrastructure complexity that earns its keep
- favor mechanisms that developers can actually operate

### Platform thinking over ticket-by-ticket execution
Even when examples are project-specific, the note keeps pushing toward shared internal platforms, standard flows, and reusable deployment shapes.

### Evidence-minded decision making
Multiple sections mention comparison, validation, testing, cost analysis, or documentation. The pattern is to justify infrastructure choices through tradeoff reading rather than tool fashion.

## Tensions worth preserving
- simplification vs oversimplification
- speed vs rollback safety
- flexibility for developers vs centralized platform control
- cloud convenience vs cost discipline
- automation leverage vs hidden operational coupling

These tensions matter because the source note does not argue for blind automation. It argues for controlled simplification.

## Cleaning decisions in this mapped page
- Reframed the source from a long achievement list into a clearer capability map while preserving the original topic.
- Grouped related projects by durable operating pattern so the note is easier to scan and reuse.
- Reduced repetition across automation, deployment, and optimization examples without erasing concrete achievements.
- Kept the page inside the Portfolio boundary: this remains a professional profile node, not a generic DevOps handbook.

## Future-relevant links
- [[../Fundamental/Architecture]]
- [[../Deep Knowledge/Infra]]
- [[../Deep Knowledge/Cloud]]
- [[../Communication/Teamwork]]
- [[../Meta/Developer]]

## Follow-up questions
- Which projects best show the author's design taste, not just delivery record?
- Where does minimalism create real leverage, and where might it hide maintenance risk?
- Which portfolio stories could be turned into separate synthesis notes about platform leverage, safe automation, or cost-aware systems design?
