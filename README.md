# annika-linke.de 2023

Next.js static site build with sanity.io.

## Content

- Sanity Studio https://next-js-portfolio.sanity.studio/desk/project
- Sketch https://drive.google.com/open?id=1tqrhXukbxoFq_uXyqdUtaPGab7hfb9mL&usp=drive_fs

## Deployment

- Netlify Continuous Deployment https://app.netlify.com/sites/profound-monstera-c42283/overview
- Publishing content on Sanity Studio should trigger the webhook to build the main branch (try manually hitting deploy if this is not working)

## Sanity in VS-Code:

Workspace Settings: "eslint.workingDirectories": ["./app", "./sanity"]

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Develop Sanity

```bash
cd /sanity
yarn install
yarn run dev
# when done
yarn run deploy
# will deploy it to the studio cloud

## Notes

I updated sanity studio to the newest version, but only the cms part (/sanity). If the frontend is not working, I should update sanity there as well.
```
