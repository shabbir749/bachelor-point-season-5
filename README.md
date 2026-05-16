# Video Hub — GitHub Pages site

This is a minimal static site that lists videos serially for use as a GitHub Pages-hosted Telegram Mini App.

How to use
- Edit `index.html` to change the site title and update the `href` for the Telegram link.
- Edit `videos.json` to add your video entries in the desired order. Each entry should include `title`, `url`, and optional `copyright` and `developed_by`.
- Push this repository to GitHub and enable GitHub Pages (branch `main` / folder `/`).

Notes
- You can use YouTube links (they will be embedded) or direct video file URLs (served via a third-party host).
- To use inside a Telegram Mini App, point the mini app to the GitHub Pages URL.
