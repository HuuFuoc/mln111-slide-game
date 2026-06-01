# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- BEGIN:superpowers-workflow -->
## Superpowers Workflow (obra/superpowers — manual install)

> Source: https://github.com/obra/superpowers  
> Install method: principles embedded manually (Claude Code plugin marketplace unavailable in this session)

Before touching any file:

1. **Brainstorm** — Clarify goal and scope. Ask what the user is actually trying to achieve.
2. **Spec** — Write a short design in ≤1 screen of text before editing.
3. **Plan** — List every file to change with exact paths and what changes.
4. **Execute** — One task at a time. No blind multi-file sweeps.
5. **Review** — After each group of changes: does output match spec? Any regressions?
6. **Verify** — Run `pnpm lint && pnpm build` before declaring done. If a command cannot run, state why.
7. **No false completions** — Never say "done" without verifiable evidence.

Principles: TDD when applicable · YAGNI always · DRY when it reduces real complexity · Evidence over claims.
<!-- END:superpowers-workflow -->

<!-- BEGIN:taste-skill-design -->
## Taste Skill Design Rules (leonxlnx/taste-skill — manual install)

> Source: https://github.com/leonxlnx/taste-skill  
> Skill: `design-taste-frontend` v2 + `redesign-existing-projects`  
> Install method: principles embedded manually (`npx skills add` not available in this environment)

**Dials for this project:** DESIGN_VARIANCE = 5 · MOTION_INTENSITY = 3 · VISUAL_DENSITY = 3

### Hard bans
- No generic white card grids that repeat identically
- No gradient abuse (purple/blue slop, rainbow borders, multi-stop decorative gradients)
- No uniform font sizes throughout a section
- No equal spacing everywhere — create rhythm with intentional variation
- No identical shadows/borders on every component
- No em-dashes (`—`) in UI labels or button text
- No placeholder or fake content when real data exists
- No "marketing empty" sections (no purpose, no action, just words)

### Visual hierarchy per screen
`heading → context → action → content → secondary info`

### Motion rules
- Default entrance: `opacity + translateY` fade-in (already in AnimatedSection — keep it)
- Hover: one effect only (either shadow lift **or** border lighten, not both at full strength)
- No continuous animations on readable content
- No scroll-jacking

### Color palette — warm academic
| Token | Hex | Use |
|---|---|---|
| `cream` | `#fefae0` | Primary background |
| `cream-warm` | `#faf3d5` | Card backgrounds (replaces cold white) |
| `amber` | `#dda15e` | Secondary accent, decorative |
| `amber-dark` | `#bc6c25` | Primary accent, CTAs |
| `red` | `#bc4749` | Warning mood, critical emphasis |
| `brown-text` | `#5c3d2e` | Body copy |
| `brown-dark` | `#2d1810` | Dark sections |
| `brown-darkest` | `#2B160F` | Darkest bg (key quote, game CTA) |

### Card rules
- Use `bg-[#faf3d5]` not `bg-white` for cards on cream pages
- Border opacity ≥ 45% to be visible
- Key/featured cards must visually dominate secondary cards
- Max 3 identical card styles per page

### Typography
- Section label: `text-xs uppercase tracking-[0.2em] font-bold`
- H2: `text-3xl md:text-5xl font-black leading-tight`
- Body: `text-sm md:text-base leading-relaxed`
- Min contrast: 4.5:1 for all text against its background

### Responsive checkpoints
sm (640px) · md (768px) · lg (1024px) — verify each manually before shipping.
<!-- END:taste-skill-design -->
