# Reel Deal Fishin' Charters website

Static site for www.reeldealfishin.com, built with Eleventy and hosted on Netlify. Moved off Wix in November 2026.

## Where things live

- `src/_data/site.json` — phone, email, booking link, Google Tag Manager ID, chat widget ID, menu
- `src/_data/trips.json` — the six trip cards (name, photo, one line, Vallypro booking link)
- `src/_data/faqs.json` — the FAQ page (also feeds its FAQ schema)
- `src/*.md` and `src/*.njk` — one file per page; the SEO title and meta description are at the top of each
- `src/fishing-reports/*.md` — one file per monthly report (Capt. Chad Knight byline)
- `src/images/` — WebP photos pulled from the old Wix site
- `netlify.toml` — build settings and every 301 redirect from the old Wix URLs

## URLs

Pages are built as `inshore.html` etc. Netlify serves them at the same addresses the Wix site used (`/inshore`, `/about`), so nothing changes for Google. Canonicals and the sitemap use those clean addresses.

## Adding a fishing report

Copy the latest file in `src/fishing-reports/`, rename it `new-smyrna-beach-fishing-report-<month>-<year>.md`, update the date, titles, photos and text. One report a month, only from Capt. Chad's real trip notes (SWM Fishing Report Playbook v3).

## Tracking and tools

- Google Tag Manager GTM-TJHXV5NR (it loads GA4 G-8JG9Z386NG and Google Ads AW-16937881099). GA4 is not loaded separately, so pageviews are not double counted.
- LeadConnector chat widget 688d34bb2b9a7f80ecd9cfe6
- Contact form uses Netlify Forms. In Netlify, go to Forms → contact → notifications and send them to chad@reeldealfishin.com.
- Booking links go to Vallypro (book.vallypro.com/p/reel-deal-fishin).

## Build

`npm install` then `npm run build` (output in `_site`). Netlify runs this automatically on every push to `main`.

## Test deploys stay out of Google

Every page gets `noindex` unless Netlify builds in production with the primary domain set to www.reeldealfishin.com (see `src/_data/build.js`). The *.netlify.app preview can be shared and tested safely. After the domain is connected, trigger one more deploy so the live site builds as indexable, then check the home page source for no `noindex`.
