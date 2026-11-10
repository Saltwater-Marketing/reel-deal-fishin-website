// Refresh the Google star rating and review count shown on the site
// (src/_data/reviews.json: "rating" and "count").
//
// Runs once a month from .github/workflows/update-google-reviews.yml, or by hand:
//   GOOGLE_PLACES_API_KEY=... node scripts/update-google-reviews.mjs
//
// Uses one Google Places API (New) Text Search call. Optional: set GOOGLE_PLACE_ID
// to look the business up by ID instead of by name.
// If anything looks wrong it exits without touching the file, so the site keeps
// the last good numbers.
import fs from "node:fs";

const FILE = new URL("../src/_data/reviews.json", import.meta.url);
const QUERY = "Reel Deal Fishin Charters New Smyrna Beach FL";
const NAME_CHECK = /reel deal/i;

const key = process.env.GOOGLE_PLACES_API_KEY;
if (!key) {
  console.error("GOOGLE_PLACES_API_KEY is not set.");
  process.exit(1);
}

async function lookup() {
  const headers = {
    "X-Goog-Api-Key": key,
    "Content-Type": "application/json",
  };
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (placeId) {
    const r = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`, {
      headers: { ...headers, "X-Goog-FieldMask": "id,displayName,rating,userRatingCount" },
    });
    if (!r.ok) throw new Error(`Place Details failed: ${r.status} ${await r.text()}`);
    return r.json();
  }
  const r = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: { ...headers, "X-Goog-FieldMask": "places.id,places.displayName,places.rating,places.userRatingCount" },
    body: JSON.stringify({ textQuery: QUERY, maxResultCount: 5 }),
  });
  if (!r.ok) throw new Error(`Text Search failed: ${r.status} ${await r.text()}`);
  const { places = [] } = await r.json();
  const match = places.find((p) => NAME_CHECK.test(p.displayName?.text || ""));
  if (!match) throw new Error(`No "Reel Deal" listing in results: ${places.map((p) => p.displayName?.text).join(", ")}`);
  return match;
}

const place = await lookup();
const rating = Number(place.rating);
const count = Number(place.userRatingCount);
console.log(`Google: ${place.displayName?.text} (${place.id}) rating=${rating} count=${count}`);

const text = fs.readFileSync(FILE, "utf8");
const oldCount = Number(JSON.parse(text).count);

if (!(rating >= 1 && rating <= 5) || !Number.isInteger(count) || count < 1) {
  console.error("Google returned an unusable rating or count; leaving the site as is.");
  process.exit(1);
}
// Google sometimes removes a few reviews; a big drop means something is off.
if (count < oldCount * 0.9) {
  console.error(`Count dropped from ${oldCount} to ${count}; leaving the site as is. Check the Google listing.`);
  process.exit(1);
}

const updated = text
  .replace(/"rating":\s*"[^"]*"/, `"rating": "${rating.toFixed(1)}"`)
  .replace(/"count":\s*\d+/, `"count": ${count}`);

if (updated === text) {
  console.log("No change.");
} else {
  JSON.parse(updated); // make sure the file is still valid JSON
  fs.writeFileSync(FILE, updated);
  console.log(`Updated reviews.json: ${rating.toFixed(1)} stars, ${count} reviews (was ${oldCount}).`);
}
