# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Landing-page image credits

- `public/hero-construction-tower.jpg` is from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:High_Rise_Apartment_Buildings_Under_Construction_-_panoramio.jpg), by agracier - NO VIEWS, licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/). The page uses a CSS crop.
- `public/hero-residential-dusk.jpg` is from [Unsplash](https://images.unsplash.com/photo-1600585154340-be6161a56a0c) under the [Unsplash License](https://unsplash.com/license).

## Build and deploy to InfinityFree

1. From `frontend`, run `npm run build`.
2. In InfinityFree File Manager, upload the **contents** of `frontend/dist/` into the domain's `htdocs/` directory. Keep the generated `assets/` directory and all files from `public/` copied into `dist/`.
3. Upload the complete sibling `backend/` directory into `htdocs/backend/`, including `.htaccess`, `api/`, `config/`, and `helpers/`. Do not upload the frontend source tree or `node_modules/`.
4. In `backend/config/database.php`, configure the MySQL host, database name, username, and password using the values provided in the InfinityFree control panel. Keep those credentials private; do not put them in frontend environment variables or commit them.
5. Confirm PHP and MySQL are available on the hosting plan, create/import the SevenCore schema from `backend/migrations/` as applicable, and ensure PHP can write to `backend/uploads/progress/` for photo uploads.
6. Visit `https://sevencore.page.gd/backend/api/health` (or the site's active HTTP scheme) to confirm the API router responds with JSON. `GET /backend/api/auth/me` should return JSON with HTTP 401 when no session is signed in; after a valid login it should return the authenticated user. A hosting 404 page or redirect means the backend files or rewrite rule are not deployed at the expected path.

The production frontend defaults to the same-origin `/backend/api` path. For a different backend path, set `VITE_API_BASE_URL` at build time; in PowerShell, for example: `$env:VITE_API_BASE_URL='/backend/api'; npm run build`. The local Vite server uses `/api` and proxies requests to the XAMPP backend configured in `vite.config.js`.

The backend's `.htaccess` routes `/backend/api/...` requests through `backend/api/index.php`. If the host does not support Apache `mod_rewrite` or `.htaccess`, the API routes cannot be served using this router until URL rewriting is enabled or the hosting configuration is changed. The backend includes CORS handling for the site origin and answers `OPTIONS` preflight requests; same-origin deployment is preferred for PHP session-cookie authentication.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
