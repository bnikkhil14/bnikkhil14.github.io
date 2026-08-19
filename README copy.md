# Nikhil Kumar Bodige — Portfolio

Personal portfolio site for Nikhil Kumar Bodige, Cloud/DevOps Engineer.
Built as a plain static site (HTML/CSS/JS) — no build step, deploys directly on GitHub Pages.

**Live site:** https://<your-github-username>.github.io/<repo-name>/

## Structure

```
.
├── index.html              # all page content
├── assets/
│   ├── css/style.css       # design system + layout
│   └── js/main.js          # nav toggle, scroll-spy, footer year
└── README.md
```

## Deploy on GitHub Pages

1. Create a new repo on GitHub (e.g. `portfolio` or `<username>.github.io` for a root domain).
2. Push these files to the `main` branch.
3. In the repo: **Settings → Pages → Source** → select `main` branch, `/ (root)` folder → **Save**.
4. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

## Before you publish

- [ ] Update the **GitHub link** in `index.html` (search for `id="githubLink"`) with your actual GitHub profile URL.
- [ ] Double check the phone/email/LinkedIn links in the contact section.
- [ ] Optional: add a `CNAME` file if you're pointing a custom domain at this repo.
- [ ] Optional: add a resume PDF to the repo and link it from the hero buttons.

## Adding this to LinkedIn

Once deployed, add the live GitHub Pages URL under your LinkedIn profile's **Featured** section or as a link under **Contact info**.
