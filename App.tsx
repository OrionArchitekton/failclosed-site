import { ProductDemo } from './ProductDemo';
import React, { useState, useEffect } from 'react';
import { PRODUCT_DATA } from './constants';
import type { DemoLine } from './types';

const SectionTitle: React.FC<{ index: string; title: string; id?: string }> = ({
  index,
  title,
  id,
}) => (
  <div className="mb-5 border-b border-[#334155] pb-3">
    <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#F0975A]">
      <span aria-hidden="true">Section {index}</span>
    </p>
    <h2
      id={id}
      className="mt-1 font-display text-2xl font-bold tracking-tight text-[#F8FAFC] sm:text-3xl"
    >
      {title}
    </h2>
  </div>
);

/** Copy-pasteable command block with a copy button (no-JS safe: renders disabled without JS). */
const CommandBlock: React.FC<{ title: string; note?: string; command: string }> = ({
  title,
  note,
  command,
}) => {
  const [copied, setCopied] = useState(false);
  const [copyReady, setCopyReady] = useState(false);

  useEffect(() => setCopyReady(Boolean(navigator.clipboard)), []);

  const copy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(command).then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      });
    }
  };

  return (
    <div className="rounded-lg border border-[#334155] bg-[#07143A] p-4 sm:p-5">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-[#F8FAFC]">{title}</span>
        {note && <span className="font-mono text-xs text-[#94A3B8]">{note}</span>}
      </div>
      <div className="relative">
        <pre
          tabIndex={0}
          className="overflow-x-auto rounded-md border border-[#334155] bg-[#020B29] p-4 pr-20 font-mono text-[13px] leading-relaxed text-[#F8FAFC]"
        >
          <code>{command}</code>
        </pre>
        <button
          type="button"
          onClick={copy}
          disabled={!copyReady}
          aria-disabled={!copyReady}
          className="no-print absolute top-2 right-2 inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-[#64748B] bg-[#0E1F4F] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#F8FAFC] transition-colors hover:border-[#F0975A] hover:text-[#FFC08B] disabled:cursor-not-allowed disabled:opacity-60"
          aria-label={`Copy command: ${title}`}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

const demoLineClass = (line: DemoLine): string => {
  if (line.kind === 'comment') return 'text-[#94A3B8]';
  if (line.kind === 'command') return 'text-[#F8FAFC] font-medium';
  if (line.tone === 'ok') return 'text-[#4ADE80] font-semibold';
  if (line.tone === 'fail') return 'text-[#F87171] font-semibold';
  if (line.tone === 'muted') return 'text-[#CBD5E1]';
  return 'text-[#E2E8F0]';
};

const statusToneClass = (name: string): string => {
  if (name === 'MERGE_READY') return 'border-[#4ADE80] bg-[#0E1F4F] text-[#4ADE80]';
  if (name === 'FINDINGS_REMAIN') return 'border-[#F87171] bg-[#0E1F4F] text-[#F87171]';
  return 'border-[#FBBF24] bg-[#0E1F4F] text-[#FBBF24]';
};

const CHAPTERS = [
  { id: 'overview', numeral: '00', label: 'Specification Lead' },
  { id: 'problem', numeral: '01', label: 'The Problem' },
  { id: 'demo-media', numeral: '02', label: 'Recorded Product Demo' },
  { id: 'walkthrough', numeral: '03', label: 'Gate Walkthrough' },
  { id: 'quickstart', numeral: '04', label: 'Quickstart' },
  { id: 'status-codes', numeral: '05', label: 'Status Codes' },
  { id: 'differentiators', numeral: '06', label: 'Why It Is Different' },
];

const App: React.FC = () => {
  const {
    name,
    tagline,
    credibility,
    family,
    problem,
    whatItDoes,
    cta,
    quickstart,
    commands,
    demo,
    differentiators,
    links,
    footerNote,
  } = PRODUCT_DATA;

  return (
    <div className="min-h-screen bg-[#020B29] text-[#F8FAFC] selection:bg-[#E68249] selection:text-[#020B29]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[#E68249] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#020B29] focus:no-underline"
      >
        Skip to main content
      </a>

      <header className="border-b border-[#334155] bg-[#020B29]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.danmercede.com/works"
              className="inline-flex min-h-[44px] items-center font-mono text-xs uppercase tracking-[0.16em] text-[#F0975A] hover:text-[#FFC08B] hover:underline"
            >
              danmercede.com / works
            </a>
            <span className="hidden text-[#64748B] sm:inline" aria-hidden="true">
              /
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-[#94A3B8]">
              Technical Monograph
            </span>
          </div>
          <p className="text-xs leading-relaxed text-[#CBD5E1]">
            {family.prefix}{' '}
            <a
              className="text-[#F0975A] underline underline-offset-4 hover:text-[#FFC08B]"
              href={family.url}
            >
              {family.name}
            </a>
            . {family.description}{' '}
            <a
              className="text-[#F0975A] underline underline-offset-4 hover:text-[#FFC08B]"
              href={family.workflowUrl}
            >
              {family.workflowLabel}
            </a>
            .
          </p>
        </div>
      </header>

      <main
        id="main-content"
        tabIndex={-1}
        className="mx-auto max-w-6xl px-5 py-10 md:px-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
      >
        <article className="space-y-12 lg:col-span-8 lg:col-start-5 lg:row-start-1">
          <section id="overview" className="border-b border-[#334155] pb-8">
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-[#F0975A]">
              OPEN SOURCE · MIT · GATE SPECIFICATION
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-[#F8FAFC] sm:text-5xl">
              {name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#E2E8F0] sm:text-xl">
              {tagline}
            </p>
            <p className="mt-3 font-mono text-xs leading-relaxed text-[#94A3B8]">
              {credibility}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={cta.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-[#E68249] px-5 py-2.5 text-sm font-semibold text-[#020B29] transition-colors hover:bg-[#F0975A]"
              >
                {cta.primaryLabel}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href={cta.secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#64748B] bg-[#07143A] px-5 py-2.5 text-sm font-medium text-[#F8FAFC] transition-colors hover:border-[#F0975A] hover:text-[#FFC08B]"
              >
                {cta.secondaryLabel}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </section>

          <section id="problem" aria-labelledby="heading-problem">
            <SectionTitle index="01" title={problem.heading} id="heading-problem" />
            <p className="text-base leading-relaxed text-[#E2E8F0]">{problem.body}</p>
            <div className="mt-5 rounded-lg border border-[#334155] bg-[#07143A] p-5">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[#F0975A]">
                {whatItDoes.heading}
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-[#F8FAFC]">
                {whatItDoes.body}
              </p>
            </div>
          </section>

          <div id="demo-media">
            <ProductDemo />
          </div>

          <section id="walkthrough" aria-labelledby="heading-walkthrough">
            <SectionTitle index="03" title={demo.heading} id="heading-walkthrough" />
            <p className="mb-4 text-sm leading-relaxed text-[#CBD5E1]">{demo.intro}</p>
            <div className="overflow-hidden rounded-lg border border-[#334155] bg-[#07143A]">
              <div className="no-print flex items-center gap-1.5 border-b border-[#334155] bg-[#0E1F4F] px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-[#64748B]" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-[#64748B]" aria-hidden="true" />
                <span className="h-3 w-3 rounded-full bg-[#64748B]" aria-hidden="true" />
                <span className="ml-2 font-mono text-xs text-[#CBD5E1]">
                  run_review_pipeline.py
                </span>
              </div>
              <pre
                tabIndex={0}
                className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed"
              >
                {demo.lines.map((line, idx) => (
                  <div key={idx} className={demoLineClass(line)}>
                    {line.kind === 'command' && !line.text.startsWith('  ') ? (
                      <span className="select-none text-[#94A3B8]" aria-hidden="true">
                        ${' '}
                      </span>
                    ) : null}
                    {line.text || '\u00A0'}
                  </div>
                ))}
              </pre>
            </div>
          </section>

          <section id="quickstart" aria-labelledby="heading-quickstart">
            <SectionTitle index="04" title={quickstart.heading} id="heading-quickstart" />
            <p className="mb-5 text-sm leading-relaxed text-[#CBD5E1]">{quickstart.intro}</p>
            <div className="space-y-4">
              {quickstart.blocks.map((block) => (
                <CommandBlock
                  key={block.title}
                  title={block.title}
                  note={block.note}
                  command={block.command}
                />
              ))}
            </div>
          </section>

          <section id="status-codes" aria-labelledby="heading-status-codes">
            <SectionTitle index="05" title="Status codes" id="heading-status-codes" />
            <dl className="space-y-3">
              {commands.map((cmd) => (
                <div
                  key={cmd.name}
                  className="flex flex-col gap-2 rounded-lg border border-[#334155] bg-[#07143A] p-4 sm:flex-row sm:items-start sm:gap-6"
                >
                  <dt className="shrink-0 sm:w-48">
                    <span
                      className={`inline-block rounded border px-2.5 py-1 font-mono text-xs font-semibold ${statusToneClass(cmd.name)}`}
                    >
                      {cmd.name}
                    </span>
                  </dt>
                  <dd className="text-sm leading-relaxed text-[#E2E8F0]">{cmd.description}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="differentiators" aria-labelledby="heading-differentiators">
            <SectionTitle
              index="06"
              title={differentiators.heading}
              id="heading-differentiators"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {differentiators.points.map((point) => (
                <div
                  key={point.title}
                  className="rounded-lg border border-[#334155] bg-[#07143A] p-5"
                >
                  <h3 className="font-display text-lg font-bold text-[#F8FAFC]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#CBD5E1]">{point.body}</p>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
          <nav
            aria-label="Specification rail"
            className="rounded-lg border border-[#334155] bg-[#07143A] p-5 lg:sticky lg:top-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#F0975A]">
              Specification Rail
            </p>
            <p className="mt-1 font-mono text-xs text-[#94A3B8]">
              MIT · Python 3.9+ · gh CLI
            </p>
            <ol className="mt-4 space-y-1">
              {CHAPTERS.map((ch) => (
                <li key={ch.id}>
                  <a
                    href={`#${ch.id}`}
                    className="flex min-h-[44px] items-center gap-3 rounded px-2 text-sm text-[#CBD5E1] transition-colors hover:bg-[#0E1F4F] hover:text-[#FFC08B]"
                  >
                    <span className="font-mono text-xs text-[#F0975A]">{ch.numeral}</span>
                    <span>{ch.label}</span>
                  </a>
                </li>
              ))}
            </ol>

            <div className="mt-6 border-t border-[#334155] pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[#94A3B8]">
                Deterministic Gate Outputs
              </p>
              <ul className="mt-3 space-y-2 font-mono text-xs">
                {commands.map((cmd) => (
                  <li key={cmd.name} className="flex items-center justify-between gap-2">
                    <span
                      className={`rounded border px-2 py-0.5 text-[11px] font-semibold ${statusToneClass(cmd.name)}`}
                    >
                      {cmd.name}
                    </span>
                    <span className="text-[#94A3B8]">
                      {cmd.name === 'MERGE_READY' ? 'Clear' : 'Block'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>
      </main>

      <footer className="mt-16 border-t border-[#334155] bg-[#020B29]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 font-mono text-xs text-[#94A3B8] md:px-8">
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-6">
            {links.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center text-[#E2E8F0] underline decoration-[#64748B] underline-offset-4 transition-colors hover:text-[#FFC08B] hover:decoration-[#F0975A]"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <p>{footerNote}</p>
            <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Dan Mercede</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
