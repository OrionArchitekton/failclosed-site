import { ProductData } from './types';

const GITHUB = 'https://github.com/OrionArchitekton/failclosed';
const RELEASE = 'https://github.com/OrionArchitekton/failclosed/releases/tag/v0.2.0';
const SCAN = 'https://danmercede.com';

/**
 * Single source of truth for the failclosed microsite.
 *
 * All copy is GROUNDED in the real repo (README.md, pyproject.toml, the status
 * codes, and the v0.2.0 GitHub release). failclosed is a runnable CLI gate
 * (Python 3.9+, gh CLI); no fabricated metrics — the demo shows its real
 * status-code behavior on an illustrative review.
 */
export const PRODUCT_DATA: ProductData = {
  name: 'failclosed',
  tagline:
    'Fail-closed merge admission control for agent-written code — run the LLM reviewer, distrust its verdict, and refuse to merge when governance can’t be deterministically evaluated.',
  credibility:
    'Open source (MIT) · Python 3.9+ · One path, no advisory fallback · CI-gating · Self-contained.',
  canonical: 'https://www.danmercede.com/works/failclosed/',
  metaDescription:
    'failclosed is a local-first, MIT-licensed gate for agent-written code: it runs an LLM reviewer, then refuses to report MERGE_READY when the reviewer output is unparseable, schema-invalid, or self-contradictory. Enforcement precedes the merge decision — a merge that can proceed when governance cannot be evaluated is not governed. Python 3.9+ and the gh CLI; reviewer is a configurable command seam.',

  problem: {
    heading: 'The problem',
    body:
      'AI coding agents write and merge code faster than review can govern it. Most LLM-review tools relay the model’s own verdict: when the model says “looks good,” the change is treated as mergeable. That is advisory governance — it fails open. When the reviewer’s output is truncated, malformed, or self-contradictory (a “fix” verdict where no finding cites a file), an advisory tool defaults to letting the merge through. The reviewer becomes a single point of silent failure precisely when its output is least trustworthy.',
  },

  whatItDoes: {
    heading: 'What it does',
    body:
      'failclosed runs an LLM reviewer and then refuses to trust its verdict. The output passes through a hardened parser, and a gate refuses to report MERGE_READY when the result is unparseable, schema-invalid, or self-contradictory. Enforcement precedes the merge decision: when the review cannot be deterministically evaluated, the merge does not proceed. It runs one path, with no advisory fallback — wait for review bots, run a standard then adversarial reviewer pass, parse, fail-closed gate, emit structured fix requests, resolve bot threads, and report a deterministic status.',
  },

  cta: {
    primaryLabel: 'View on GitHub',
    primaryUrl: GITHUB,
    secondaryLabel: 'Read the v0.2.0 release',
    secondaryUrl: RELEASE,
  },

  quickstart: {
    heading: 'Quickstart',
    intro:
      'Requires Python 3.9+ and the gh CLI (authenticated). Reviewer overrides via failclosed.toml require Python 3.11+. Self-contained — no file outside the repo is required to run.',
    blocks: [
      {
        title: 'Clone',
        command: ['git clone https://github.com/OrionArchitekton/failclosed', 'cd failclosed'].join('\n'),
      },
      {
        title: 'Describe the push, then run the gate',
        note: 'reviewer command is a configurable seam',
        command: [
          "cat > ctx.json <<'JSON'",
          '{ "repo_root": "/path/to/repo", "branch": "feature-x", "sha": "abc1234" }',
          'JSON',
          'python run_review_pipeline.py --context ctx.json --json',
        ].join('\n'),
      },
      {
        title: 'Dry-run (no fixes written, no threads resolved)',
        command: ['python run_review_pipeline.py --context ctx.json --json --dry-run'].join('\n'),
      },
    ],
  },

  // The deterministic gate output — verified against README status codes.
  commands: [
    {
      name: 'MERGE_READY',
      description:
        'Reviewer output parsed and clean; no open fixes or threads. The only status that clears the gate.',
    },
    {
      name: 'FINDINGS_REMAIN',
      description:
        'Fixes outstanding — or a review phase failed to evaluate (unparseable, schema-invalid, or self-contradictory). Fail-closed: the merge is blocked.',
    },
    {
      name: 'THREADS_UNRESOLVED',
      description:
        'Bot review threads are still open. The merge does not proceed until they resolve.',
    },
    {
      name: 'BOTS_PENDING',
      description:
        'The push is too recent for review bots to have landed (non-blocking mode) — re-run after the bot-wait window.',
    },
  ],

  demo: {
    heading: 'Demo',
    intro:
      'Wire it from a post-push git hook or a GitHub Action. The deterministic status is the signal a merge gate consumes — MERGE_READY is the only status that clears it. (Illustrative review; the status-code behavior is the tool’s real one.)',
    lines: [
      { kind: 'comment', text: '# Run the gate after a push to a PR branch' },
      { kind: 'command', text: 'python run_review_pipeline.py --context ctx.json --json' },
      { kind: 'output', text: 'reviewer: standard pass → adversarial pass', tone: 'muted' },
      { kind: 'output', text: 'parse: reviewer returned a `fix` verdict with no finding citing a file' },
      { kind: 'output', text: '       → parse_error: review could not be deterministically evaluated', tone: 'muted' },
      { kind: 'output', text: 'STATUS=FINDINGS_REMAIN  (fail-closed — merge blocked)', tone: 'fail' },
      { kind: 'output', text: '' },
      { kind: 'comment', text: '# Clean run — output parses, no open fixes or threads' },
      { kind: 'command', text: 'python run_review_pipeline.py --context ctx.json --json' },
      { kind: 'output', text: 'STATUS=MERGE_READY  (the only status that clears the gate)', tone: 'ok' },
    ],
  },

  differentiators: {
    heading: 'Why it is different',
    points: [
      {
        title: 'Fails closed, not open',
        body:
          'Most LLM-review tools relay the model’s verdict — when it says “looks good,” the merge proceeds, even on truncated or contradictory output. failclosed refuses MERGE_READY whenever the review can’t be deterministically evaluated. Enforcement precedes the merge decision.',
      },
      {
        title: 'The reviewer is a seam, not a vendor',
        body:
          'reviewer_command receives the review prompt on stdin and returns output on stdout — structured JSON, JSON-in-prose, or rendered text. Any command honoring the contract works. The product is not the reviewer; it is the gate that distrusts it.',
      },
      {
        title: 'Deterministic and self-contained',
        body:
          'Python 3.9+ and the gh CLI; no file outside the repo is required to run. One path, no advisory fallback. The deterministic status is exactly what a merge gate (a post-push hook or CI job) consumes.',
      },
      {
        title: 'A narrow, runnable demonstration',
        body:
          'A small proof of one principle: governance evaluated deterministically, before state mutation, in a fail-closed configuration — applied here to the merge boundary. The same model across an agent stack is the Runtime Governance Readiness Scan.',
      },
    ],
  },

  links: [
    { label: 'GitHub repository', url: GITHUB, primary: true },
    { label: 'v0.2.0 release', url: RELEASE, primary: true },
    { label: 'Runtime Governance Readiness Scan', url: SCAN },
    { label: 'Dan Mercede', url: 'https://www.danmercede.com' },
  ],

  footerNote: 'MIT licensed. Built by Dan Mercede.',
};
