# failclosed-site

Vite/React microsite for the `failclosed` project page at
`https://www.danmercede.com/works/failclosed/`.

## Role

This repo owns the marketing/presentation surface for `failclosed`: layout,
copy, metadata, static assets, and Vercel routing/cache config. The source
project owns the Python tool, release flow, and CI behavior.

## Source Of Truth

- Product repo: `../failclosed`
- Site copy: `constants.ts`
- Metadata: `index.html`
- Routing/cache: `vercel.json`

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Boundaries

Keep claims grounded in the source project README, pyproject metadata, and
released behavior. Do not change the fail-closed review tool from this repo.
