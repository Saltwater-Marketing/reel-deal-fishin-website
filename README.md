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

Then link the new report from the trip page it covers (the inshore, redfish, nearshore or shark page), in a sentence about that month. Keep each trip page to its 2 or 3 most relevant reports; drop the oldest link when you add a new one.

## Tracking and tools

- Google Tag Manager GTM-TJHXV5NR (it loads GA4 G-8JG9Z386NG and Google Ads AW-16937881099). GA4 is not loaded separately, so pageviews are not double counted.
- LeadConnector chat widget 688d34bb2b9a7f80ecd9cfe6
- Contact form uses Netlify Forms. In Netlify, go to Forms → contact → notifications and send them to chad@reeldealfishin.com.
- Booking links go to Vallypro (book.vallypro.com/p/reel-deal-fishin).

## Build

`npm install` then `npm run build` (output in `_site`). Netlify runs this automatically on every push to `main`.

## Test deploys stay out of Google

Every page gets `noindex` unless Netlify builds in production with the primary domain set to www.reeldealfishin.com (see `src/_data/build.js`). The *.netlify.app preview can be shared and tested safely. After the domain is connected, trigger one more deploy so the live site builds as indexable, then check the home page source for no `noindex`.

## Domain and DNS (launched November 2026)

- reeldealfishin.com is registered at GoDaddy, and its DNS is managed at GoDaddy (moved off Wix's nameservers at launch).
- `@` A record → `75.2.60.5` (Netlify); `www` CNAME → `reel-deal-fishin-website.netlify.app`. www is the primary domain.
- Email is Microsoft 365 bought through GoDaddy: keep the MX (`reeldealfishin-com.mail.protection.outlook.com`), SPF, `NETORGFT…onmicrosoft.com` TXT and `_dmarc` records when touching DNS.
- The three `google-site-verification` TXT records keep Search Console verified.

## Google rating and review count

The "5.0 · N Google reviews" line comes from `rating` and `count` in `src/_data/reviews.json`. A GitHub Action (`.github/workflows/update-google-reviews.yml`) refreshes them on the 1st of every month from the Google Places API and commits the change, which republishes the site. It needs the repo secret `GOOGLE_PLACES_API_KEY`. To run it now: GitHub → Actions → "Update Google review count" → Run workflow. If Google's numbers look wrong (e.g. a big drop), it leaves the site unchanged and the run shows as failed.
