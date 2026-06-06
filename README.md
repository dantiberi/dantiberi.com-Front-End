# dantiberi.com Front-End

Personal professional site for Dan Tiberi (Angular 15).

## Quick start

```bash
npm install --legacy-peer-deps
ng serve
# open http://localhost:4200
```

- `ng build` (or `--configuration production`)
- `ng test`

> Note: This is an older Angular 15 codebase. You may see Node version warnings (current Node 25+ is unsupported by Angular 15). Use an LTS Node 18/20 for best compatibility if issues arise.

## Recent dusting (2026)

- **Weather widget**: Was using Open-Meteo already (excellent free/no-key API for Chicago forecast). The "no longer works" symptom was likely missing loading/error states — the widget would silently show blank cards on any failure. Now has:
  - Loading indicator
  - Error state + Retry button
  - Proper HttpClient (removed `axios` dep)
  - Better code / docs
- **Dark mode**: Replaced the unmaintained `angular-dark-mode` lib + its injected script with a tiny vanilla implementation (localStorage + prefers-color-scheme + early inline script to avoid flash). Removed the dep to reduce future update friction and peer-dep conflicts.
- **Security / deps**: Removed `axios` and `angular-dark-mode`. Ran cleanups. Remaining ~79 advisories (1 critical, ~46 high) are almost all from the EOL Angular 15 + its old build tooling (webpack, etc) and test runners. See `npm audit`.
  - GitHub Dependabot emails are expected until the framework is upgraded.
  - For a static client-side portfolio the practical runtime risk from many of these (e.g. compiler/build-time XSS) is low.
- **Other**: Fixed duplicate `BrowserModule` import, moved Material Symbols stylesheet link to `index.html`, cleaned resume button (still points at old asset — update when you have a fresh PDF), basic spec fixes for new HTTP/dark impls, prod build verified.
- Resume link and Azure blob assets left as-is (you'll want to host a current resume).

## Weather API choice

Using **Open-Meteo** (https://open-meteo.com) — free, no sign-up/key, generous limits, global, historical too. Hard-coded to Chicago to avoid asking for location. If you ever want to change city, edit the URL in `weather.service.ts`.

Good free alternatives if needed later: Visual Crossing (free 1k records/day), or US gov weather.gov for US-only.

## Addressing vulnerabilities long-term

The bulk of the high/critical issues are in `@angular/*` <19/20 ranges (XSS, etc per GH advisories) and dev deps.

Recommended path:
1. Replace any remaining old patterns (the dark lib is already gone — good first step).
2. Run `ng update @angular/core@16 @angular/cli@16` then 17, 18, 19... (or jump with a fresh `ng new` + port the small UI).
3. Migrate off deprecated `browser` builder, consider standalone components, zoneless if desired.
4. After upgrade, `npm audit` should be clean or near-clean.

Because the app is tiny (banner + home + weather + dark toggle), a full modernization is very achievable in a weekend.

## Further help (Angular CLI)

`ng help` or https://angular.io/cli

(Original project generated with Angular CLI 15.2.4.)
