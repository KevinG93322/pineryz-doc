# PineryZ Docs

Public documentation site for [PineryZ](https://pineryz.com), intended to deploy at **https://docs.pineryz.com**.

Built with [Nextra 4](https://nextra.site) and the Docs theme.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Edit Markdown/MDX under `content/`. Sidebar order is controlled by `content/_meta.js`.

## Deploy to docs.pineryz.com

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com) (or Netlify / Cloudflare Pages).
3. Framework preset: **Next.js**. Build command: `npm run build`.
4. In the host dashboard, add the custom domain `docs.pineryz.com`.
5. At your DNS provider, add the CNAME (or A/ALIAS) record Vercel shows for `docs`.
6. Confirm the marketing site Docs link still points to `https://docs.pineryz.com`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local docs server |
| `npm run build` | Production build + Pagefind search index |
| `npm start` | Serve the production build |
