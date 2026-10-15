# Personal Portfolio

A simple static portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Content lives in project files — no database, CMS, or auth.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

| What | Where |
| --- | --- |
| Name, bio, social links | [`data/profile.ts`](data/profile.ts) |
| Projects | [`data/projects.ts`](data/projects.ts) |
| Screenshots | [`public/projects/`](public/projects/) |

Replace the placeholder SVGs with your own images (PNG/JPG/WebP) and update the `image` paths in `data/projects.ts`.

## Deploy on Vercel

1. Push this repo to GitHub (already set up if you followed the project setup).
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the GitHub repository.
3. Keep the **Next.js** preset (auto-detected). No env vars needed.
4. Click **Deploy**. You get a `*.vercel.app` URL.
5. Optional: add a custom domain under **Project → Settings → Domains**.

Every push to `main` triggers a new production deploy.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
