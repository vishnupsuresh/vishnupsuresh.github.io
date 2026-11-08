# Vishnu Suresh: Portfolio

Personal site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Deploy

1. Push this folder to a repo named `vishnupsuresh.github.io`.
2. Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` rebuilds and deploys automatically.

## Add a project

Create `src/content/projects/my-project.md`:

```md
---
title: My Project
summary: One line for the card.
date: Spring 2027
tags: [Python]
repo: https://github.com/vishnupsuresh/my-project
order: 5
---

Write the project page in Markdown here.
```

It appears at `/projects/my-project/` and in the project lists.

## Files to edit

| File | What |
|---|---|
| `astro.config.mjs` | Your site URL |
| `src/pages/index.astro` | About, experience, leadership, links |
| `src/content/projects/*.md` | One file per project |
| `public/resume.pdf` | Your resume (add this) |
