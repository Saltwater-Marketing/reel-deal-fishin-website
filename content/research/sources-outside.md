# Reel Deal Fishin' Charters: off-site source material

Collected 2026-11-09. Read-only: nothing was posted, submitted or signed up for. Working files (raw HTML/JSON/text) are in `/tmp/claude-0/-home-user-reel-deal-fishin-website/4a209f90-7e55-5002-a3c8-1336ba540d82/scratchpad/outside/`.

Labels used for each item:
- **[CAPTAIN]**: written by Chad or the business (own listing text, own booking system, own posts, own video descriptions).
- **[CUSTOMER]**: a review.
- **[PLATFORM]**: written by the booking platform or another third party, or a structured field the platform fills in.
- **[SNIPPET-UNVERIFIED]**: seen only in a search-engine summary because the page itself is gone or blocked. Don't use these as fact without confirming.

FishingBooker text was pulled through a summarising fetch tool that caps quotes at about 125 characters, so FishingBooker review texts are **excerpts or paraphrases, not full verbatim text**. Everything else below was extracted from raw HTML/JSON and is verbatim.

---

## 1. Source inventory

| Source | URL | Status (2026-11-09) | What's there | Reviews / rating |
|---|---|---|---|---|
| FishingBooker (old ID in brief) | https://fishingbooker.com/charters/view/38327 | **404 Not Found** (listing gone or moved) | n/a | Search snippet: "5.0/5 (7 reviews)" [SNIPPET-UNVERIFIED] |
| **FishingBooker (current listing)** | https://fishingbooker.com/charters/view/38272 | Live (Cloudflare blocks the browser; read via fetch tool) | Platform-written description, 4 trips with prices, boat specs, crew, policies, 10 visible reviews | **5.0 (64 reviews)**, "Angler's Choice" award |
| Captain Experiences | https://captainexperiences.com/guides/reel-deal-fishin-charters | Live | Captain-written bio, Q&A, 3 trips with full price matrices, boat, amenities and policies, fishing reports, 8 reviews | **5.0, 8 reviews** (trip cards show "100% (22)") |
| CE trip pages | /trip/6298/inshore-fishing-adventure, /trip/6303/shark-fishing-experience (titled "Nearshore Fishing Experiences"), /trip/6317/shark-fishing-experience | Live | Per-trip descriptions, prices, policies | same 8 |
| **Vally booking (Chad's own booking system, linked from reeldealfishin.com)** | https://book.vallypro.com/p/reel-deal-fishin | Live | 6 active trips with captain-entered descriptions, start times, durations, prices, group-size surcharges, meeting address | none |
| FishAnywhere | https://fishanywhere.com/charters-guides/reel-deal-fishin-charters | Live | Description, 6 trips with prices and times, inclusions, safety gear, address | **5, 1 review** |
| Facebook page | https://www.facebook.com/people/Reel-Deal-Fishin-Charters/61561362689008/ | Public parts visible without login | Intro, About (address, service area), 3 recent posts, 9 recommendations | **100% recommend (9 reviews)**; 16K followers |
| YouTube @chadknight9239 | https://www.youtube.com/@chadknight9239 (channel ID UCF0a2__2U-kAQPyXHg1l-WA) | Live | Channel name "baseball boy for no reason", 383 subscribers, **351 uploads** (5 long videos + 346 Shorts) | n/a |
| Google (via the live site's CommonNinja widget) | widget API entity for Google place `0x88e729a87a8ccc73:0xb9365efe5438b2d0` | Live widget | **5.0, 234 reviews**, but the widget record was last synced **2026-03-30** and stores only 5 review texts | 234 @ 5.0 (as of 2026-03-30 sync) |
| FOX 35 Orlando | https://www.fox35orlando.com/news/why-millions-leaping-fish-jumping-florida-boats (mirror: wogx.com) | Live | Mullet-run story interviewing Chad | n/a |
| BoatBooker | https://boatbooker.com/charters/view/40602 | **404** ("This page has set sail") | n/a | n/a |
| Guidesly | https://guidesly.com/book-a-guide/guide-details/Reel-Deal-Fishin-Charters | **404** | Snippets only: "founded in 2024 by a seasoned commercial fisherman with over 15 years of experience", Port Orange, FL. Review counts quoted by search engines varied (1 / 163 / 181), so they are unreliable | [SNIPPET-UNVERIFIED] |
| BaitYourHook | https://baityourhook.com/listing/2706, /2707, operator page /reel-deal-fishin-charters-operator-1062 | **All 404** | Snippets only: "22 ft sundance", "operator since 2024", "1 customer review", 2707 = "Inshore Fishing Experience" (redfish, trout, flounder) | [SNIPPET-UNVERIFIED] |
| Yelp | https://www.yelp.com/biz/reel-deal-fishin-charters-new-smyrna-beach-2 | Blocked (403) | Search-result title: "66 Photos - 1 Review - 170 N Causeway, New Smyrna Beach" | 1 review [SNIPPET-UNVERIFIED] |
| Tripadvisor | n/a | **No listing found** (the Tripadvisor hits are other "Reel Deal" businesses in Cape Cod and Riviera Beach) | n/a | n/a |
| Giftly / MapQuest | giftly.com/gift-card/reel-deal-fishin-charters-new-smyrna-beach-2; mapquest.com/us/florida/reel-deal-fishin-charters-691382792 | Not opened | Directory entries at "170 N Causeway, New Smyrna Beach, FL 32169" | n/a |
| Wayback Machine | web.archive.org snapshots exist for FB 38327 (2025-06-12), Guidesly (2026-01-18), BYH 2706 (2025-08-15), 2707 (2024-10-15) | **Blocked from this environment** (connection reset) | Possible way to recover the dead listings if someone can open them in a normal browser | n/a |

---

## 2. Facts by topic

### Captain & story
- [CAPTAIN] Captain Experiences bio (https://captainexperiences.com/guides/reel-deal-fishin-charters), verbatim:
  > "Based out of beautiful New Smyrna Beach, We offers unparalleled fishing adventures in one of Florida's prime fishing locations. With over 15 years of commercial fishing experience, our journey into guiding began with a passion for sharing the thrill of fishing and the beauty of the ocean with others.
  > Our style is a perfect blend of professional expertise and friendly, personalized service. We pride ourselves on our extensive local knowledge and commitment to creating memorable, tailored experiences for each of our guests. Unlike other charters, we focus on smaller, more intimate groups, ensuring personalized attention and a better chance for each guest to reel in a great catch.
  > When you book with us, expect top-notch equipment, comfortable boats, and expert guidance throughout your trip. We target a variety of species, from redfish and trout inshore to the thrill of shark fishing in the offshore waters. Our guides are not only skilled fishermen but also passionate about teaching and sharing their knowledge, ensuring an educational and exciting experience for anglers of all levels.
  > Join us for a fishing adventure that combines excitement, expertise, and exceptional service. We look forward to creating unforgettable memories with you on the water."
- [CAPTAIN] CE "Rapid Fire Guide Q & A", verbatim answers:
  - Biggest fish: "500lb swordfish"
  - Cooking for friends: "Fish fry"
  - Favorite band: "Elevation worship"
  - Drink of choice: "Water"
  - Last Halloween costume: "Nothing"
  - Wants for Christmas: "Nothing just as long as the kids are happy."
  - How he got started guiding: "All friends and family wanting to go fill the freezer"
  - What makes him different: "15 years of commerical fishing knowledge"
- [PLATFORM] CE guide tags: "Independent Guide · Talkative · Laid-back · Instructional · Beginner Oriented · Comfortable · Quality".
- [CAPTAIN] FishingBooker captain bio (38272): "Commercial fisherman since 2010 to present. Join me for a fun fishing experience!" [PLATFORM] The listing also says "14 years of experience", identity and credentials verified, usually responds within about an hour, member since 2024.
- [CAPTAIN] Facebook Intro: "Welcome to Reel Deal Fishin Charters! With over 20 years of commercial fishing experience, our founder ensures every trip is top-notch. We offer expert guidance, quality equipment, and affordable rates. Join us for an unforgettable fishing adventure!"
- [CAPTAIN] YouTube description ("Hooked Up in Daytona Beach – Sharks & Reds", 2025-09-06): "Join Captain Chad Knight, a U.S. Coast Guard-licensed captain with years of commercial fishing and charter experience, as he takes you out of Daytona Beach to target sharks, bull reds, snook, flounder, and more."
- [PLATFORM] FishAnywhere: "Captain Chad Knight is passionate about fishing and loves sharing his knowledge and skills with all of his clients. He is dedicated to providing an unforgettable fishing experience that will have you coming back year after year!"
- [SNIPPET-UNVERIFIED] Guidesly: "founded in 2024 by a seasoned commercial fisherman with over 15 years of experience."
- [CUSTOMER] Family detail: Kevin Michalec (FishingBooker, 2025-04-03) mentions a free bakery gift (cupcakes) from the captain's wife's bakery (paraphrased by the fetch tool).

### Falon and other crew
- [PLATFORM] FishingBooker 38272 crew list: "Falon M. - Captain", "Matt M. - Captain".
- [CUSTOMER] Roger Alan Burrow (FishingBooker, 2026-01-24, NEARSHORE Am Trip): "had a great day captain falon was very friendly and knowledgeable kept us on fish the whole time."
- [CUSTOMER] Eric Verlinde (FishingBooker, 2025-12-27, INSHORE FISHING 7:00 AM): "Captain Chris was awesome and had us on fish during the whole trip." (So a "Captain Chris" has also run trips.)
- [PLATFORM] CE trip pages show two-boat pricing for groups over 5–6 people, which implies a second boat or captain is available (see prices).
- No off-site bio of Falon was found. The Falon bio is only on the live site, which is outside this scope.

### Boat & gear
- [PLATFORM] FishingBooker 38272: "Boat category: Skiffs and flats boats · Capacity: 6 persons · Boat length: 22 ft · Year built: 2003 · Restored in: 2023 · Boat manufacturer: Sundance · Boat type: Skiff · Engine model: Suzuki · Powered by: 1 x 150HP · Max cruising speed: 35 knots". Amenities per the fetch tool: GPS, fishfinder, live bait well, multimedia system, wireless trolling motor, ice box. Listing text: "You'll step aboard a 22' Sundance skiff that holds up to 6 passengers."
- [PLATFORM] Captain Experiences (all 3 trips): "Boat Type: Bay Boat · Boat Manufacturer: Sundance · Year Built: 2008 · Boat Length: 22'". "No, this boat does not have a bathroom on board." "This boat is federally permitted to go deep offshore."
- [PLATFORM] FishAnywhere: "Your adventure with Reel Deal Fishin Charters will take place on a 22' center console that's powered by a 250HP Yamaha engine. This comfortable vessel can accommodate up to 6 guests and uses up to date marine technology to get your rods bending." Safety: "Life Jackets · Fire Extinguishers · First-aid Equipment · Cpr-trained Crew · Flares". Navigation: "Gps · Fish Finder".
- [SNIPPET-UNVERIFIED] BoatBooker (dead): "beautifully restored 2008 Sundance SVT22 Skiff".
- [CAPTAIN] YouTube (gigging): "Using hand-built halogen lights and multi-prong spears".
- [CUSTOMER] chaland lizewski (Google): "He also had enough rods to keep us going when lines snapped due to getting snagged up!"

### Inshore
- [CAPTAIN] Vally "Inshore Fishing Charter", from $475: "Embark on the ultimate Inshore Fishing Adventure in ponce Inlet aboard our comfortable boat, accommodating up to 6 guests. Experience the thrill of reeling in the big one with our expert fishing guides, who will take you to the best spots to catch a variety of fish species. Whether you're a seasoned angler or a novice, our action-packed 4 to 6-hour morning on the water promises unforgettable memories with friends and family. Book now and make your next fishing trip an adventure to remember! Book your adventure today and reel in the excitement!"
- [CAPTAIN] CE "Inshore Fishing Adventure" (#6298): "Experience the thrill of inshore fishing in New Smyrna Beach! Our inshore fishing charters are perfect for anglers of all skill levels, offering the chance to catch species such as redfish, trout, flounder, and snook in the calm, sheltered waters near the coastline. Our experienced guides take you to the best fishing spots, sharing their extensive local knowledge and providing top-notch equipment. Our comfortable, well-equipped boats ensure a safe and enjoyable trip. With personalized service and a focus on creating unforgettable experiences, we stand out from the rest. Book with us for a fishing adventure filled with excitement, beautiful scenery, and memorable catches." Water: Inshore, Jetty, Flats. Species: Flounder, Jack Crevalle, Ladyfish, Redfish, Sheepshead, Snook, Speckled Trout. Technique: Live Bait Fishing. Areas fished: **Indian River Lagoon, Halifax River**.
- [CAPTAIN] FishAnywhere inshore trips: "Experience the thrill of reeling in the big one on our Inshore Fishing Adventure! Our expert fishing guides will take you to the best spots to catch a variety of fish species. Get ready for an action-packed morning on the water as you create unforgettable memories with friends and family."

### Nearshore
- [CAPTAIN] Vally "Nearshore Fishing Charter", from $550: "Set sail on a thrilling Nearshore Fishing Expedition in Ponce Inlet venturing out up to 6 miles with our experienced fishing guide service. Enjoy the excitement of reeling in a variety of fish species while exploring the bountiful waters off the coast. Our expert guides will lead you to the best spots for a successful and unforgettable 4-6 hour fishing trip. Departing at 7am, this adventure promises action, camaraderie, and memories that will last a lifetime. Don't miss out—book your expedition today and discover the thrill of nearshore fishing in NSB!"
- [CAPTAIN] FishAnywhere "Nearshore Fishing Out 5 Miles": "Embark on an exciting nearshore fishing adventure out to 5 miles with our experienced fishing guide service! Enjoy the thrill of reeling in a variety of fish species as you explore the bountiful waters. Let us show you the best spots for a successful and unforgettable fishing trip!"
- [PLATFORM] CE "Nearshore Fishing Experiences" (#6303): Water: Nearshore, Jetty. Species: Barracuda, Blacktip Shark, Flounder, Kingfish, Redfish, Weakfish. Techniques: Bottom, Cut Bait, Trolling. "This trip is not suited for those with disabilities." Note: this trip's CE description text is a shark-trip description. It begins "Join Captain Chad for an exhilarating shark fishing adventure off the waters near New Smyrna Beach, where coastal structure, inlets, and nearshore currents create prime hunting grounds…" and says "Whether anchored near structure or drifting along productive edges, the goal is to stay where the sharks are actively feeding."

### Shark
- [CAPTAIN] Vally "Shark Fishing Charter", from $575, displayed "Available at: May 1 - Nov 1": "Embark on the adventure of a lifetime with our Ultimate Shark Fishing Experience! Our expert fishing guides will take you to the best shark fishing spots, giving you the chance to reel in these magnificent creatures. Get ready for an adrenaline-pumping day on the water like no other."
- [CAPTAIN] CE "Shark Fishing Experience" (#6317), verbatim excerpts: "New Smyrna Beach, known as one of the most active shark fishing destinations in the world." "Depending on conditions, anglers may encounter a variety of shark species including blacktips, hammerheads, and other coastal sharks that patrol these productive waters. New Smyrna Beach offers a unique combination of inlets, surf zones, and nearshore structure where bait concentrates and larger predators actively hunt." "Top-quality gear is provided, along with hands-on instruction throughout the trip. Captain Chad ensures anglers are comfortable with equipment and prepared for every stage of the fight, from the initial hookset to landing and safely releasing these powerful fish." "…opportunities to see dolphins, seabirds, and other marine life throughout the day." "This is a true shark fishing adventure in the "shark bite capital of the world,"…". Species: Blacktip, Bonnethead, Bull, Hammerhead, Lemon Shark. "This trip requires an average level of physical activity."
- [PLATFORM] FishingBooker: "Shark Fishing Am" 3 hr, 8:00 AM, US $500 (entire boat, 2 people), "May 1 - Oct 15"; "Shark Fishing Afternoon" 3 hr, 12:00 PM, US $575 (up to 4), May 1 – Oct 15. Species chips: "Jack Crevalle, Tarpon, Redfish, Tripletail, +6".
- [CAPTAIN] FishAnywhere "Shark Fishing Experience Half-day Am": "Embark on the adventure of a lifetime with our Ultimate Shark Fishing Experience! Our expert fishing guides will take you to the best shark fishing spots, where you'll have the chance to reel in these incredible creatures. Get ready for an adrenaline-pumping day on the water like no other".

### Dolphins / manatees, and the sunset cruise
- [CAPTAIN] Vally "Dolphins, Manatees, and More Tour New Smyrna Beach", from $375, 2 hr, 9:00 AM: "Embark on a breathtaking adventure with our fishing guide service, Dolphins, Manatees, and More. Explore the pristine waters of our coastal paradise while encountering majestic dolphins, gentle manatees, and a variety of other marine wildlife. Our experienced guides will ensure a memorable and educational experience for all, providing insights into the rich marine ecosystem. Additional time can be added up to 24 hours before the trip for an extra fee. Book your Coastal Wildlife Adventure today and experience the wonder of dolphins, manatees, and more!"
- [CAPTAIN] FishAnywhere has the same trip at $250 (2 hr, 9–11am, up to 3 guests, +$50 each, max 6).
- [CAPTAIN] Vally "Sunset cruise" (Tour), from $275, 2 hr, 7:00 PM: "Relax and unwind on a scenic 2-hour sunset cruise through the calm waters of New Smyrna Beach. As the sun dips low over the horizon, enjoy breathtaking views of the Indian River Lagoon, mangrove shorelines, and local wildlife—including dolphins, manatees, and a variety of birds. Perfect for couples, families, or anyone looking to soak in the natural beauty of Florida's coast. Bring your favorite snacks and drinks, sit back, and let the vibrant sky do the rest. This peaceful cruise is a picture-perfect way to end your day on the water."
- [CUSTOMER] Color in the Water (FB, 2024-12-02): "He saw how much we loved seeing the dolphins, so he switched things up and we went dolphin "chasing", to see them play and jump."

### Flounder gigging
- [CAPTAIN] Vally "Flounder Gigging", from $700: "Experience the thrill of gigging for Flounder and Sheepshead in New Smyrna Beach with Reel Deal Fishin Charters! Under the cover of night, we'll navigate the shallow waters, using specialized lights to spot and spear these prized fish. This hands-on, traditional fishing method offers an exciting and unique adventure, perfect for those looking to try something different. With expert guidance and the serene beauty of the nighttime coast, our gigging trips promise an unforgettable experience."
- [CAPTAIN] YouTube, "Flounder Gigging Charter | Guided Night Trips in New Smyrna & Daytona" (2025-08-18): "Capt. Chad is one of the only guides in the New Smyrna and Daytona Beach area offering flounder gigging trips. This rare nighttime charter takes you into shallow inland water with halogen lights and spears, hunting fish the old-school way. No crowds. No offshore pounding. Just quiet water, glowing fish, and a captain who knows where to find them. … Gear and license included".
- [CAPTAIN] YouTube, "Flounder Gigging from New Smyrna Beach to Jacksonville" (2025-08-22): "Using hand-built halogen lights and multi-prong spears, you'll stalk fish in the shallows under the stars — no rods, no bait, no sunscreen required. This is one of Florida's most unique after-dark adventures, and Capt. Chad is one of the only guides in the Daytona area who does it right. … Great for families, beginners, and bucket list hunters".
- [CAPTAIN] YouTube, "Flounder Gigging at Night | New Smyrna Beach's Hidden Fishing Adventure" (2025-08-24): "Join Capt. Chad in the shallow backwaters of New Smyrna Beach for an unforgettable night of flounder gigging — a hands-on hunt with lights and spears. ✅ No rods. No bait. No sunburn. ✅ Family friendly and beginner safe".
- [PLATFORM] FishingBooker lists "flounder gigging" as a technique.

### Bioluminescence, boat training
- **No off-site source mentions either.** They are not on Vally, CE, FishingBooker, FishAnywhere, Facebook's public posts or the YouTube descriptions.

### Night snook fishing (from recent posts)
- [CAPTAIN] Facebook post, 2026-11-03: "THE SNOOK BITE WAS ON FIRE LAST NIGHT! Who says the fishing stops when the sun goes down?! We had an absolute blast putting some beautiful snook in the boat! … And how about this young angler?! Putting in work and showing the grown-ups how it's done! … New Smyrna Beach | Daytona Beach | Edgewater | St. Augustine".

### Areas
- [PLATFORM] CE "Areas Fished": Indian River Lagoon, Halifax River. Start location "New Smyrna Beach, Florida", and "Your guide can be flexible with your start location." CE lists the guide base as **Port Orange, FL**. CE photo locations: Port Orange, New Smyrna Beach, Daytona Beach.
- [CAPTAIN] Vally: inshore and nearshore trips are "in Ponce Inlet". Meeting location: "170 Causeway N, New Smyrna beach Fl 32169".
- [CAPTAIN] Facebook service area: "New Smyrna Beach, FL · Edgewater, FL · Port Orange, FL · Oak Hill, FL · Daytona Beach, FL". Address: "164 Causeway N, New Smyrna Beach, FL 32169". Posts sign off "New Smyrna Beach | Daytona Beach | Edgewater" (one adds "St. Augustine").
- [PLATFORM] FishingBooker meeting point: "Dunlawton Avenue 93, Port Orange, FL 32127". Listing location line: "Port Orange, FL". One reviewer reportedly mentioned confusion between two similar addresses (fetch-tool paraphrase).
- [PLATFORM] FishAnywhere: "170 Causeway N New Smyrna Beach, FL". The description ends "…on Florida's Space Coast!"
- [CAPTAIN] YouTube: "Based in New Smyrna Beach, serving Daytona Beach too". Long-video titles mention Daytona Beach, Jacksonville (gigging), the Florida Keys / Seven Mile Bridge and Alligator Reef (personal trips).
- [CAPTAIN] FOX 35: Chad describes mullet leaping into boats at **Ponce Inlet**. Story filed from the Indian River Lagoon.

### Seasons
- Shark: Vally shows "May 1 - Nov 1". The raw Vally config has the 8am slot running from month index 5, day 1 to month index 10, day 1 (0-indexed, that is Jun 1–Nov 1), and the noon and 6-hr slots ending on month index 9, day 31. FishingBooker says May 1 – Oct 15. Treat the season window as unconfirmed.
- All other Vally trips are "All Year". Vally blocks Sundays (restrictedDays [0]) for most trips; inshore 6-hr and shark noon/6-hr slots allow Sunday.
- [CAPTAIN] CE fishing report (Mid September 2026): "Also record numbers of reds being caught this morning 4 hr trip we landed 75 red fish".
- [CAPTAIN] FOX 35 (Sept 2026): the fall mullet run "Makes fishing phenomenal right now."
- [CAPTAIN] FB 2026-11-04: "THE SNOOK & REDFISH BITE IS ON FIRE!"
- [CUSTOMER] Google, March 2026: sheepshead limits (David Nugent: "3 man limit of sheep head"; Erin Duhr: "1 away from limit").

### Prices, durations, policies

**Vally (Chad's own booking engine; the most authoritative current pricing) [CAPTAIN]:**

| Trip | Start | Duration | Base price | Group-size surcharge |
|---|---|---|---|---|
| Nearshore Fishing Charter | 7:00 AM | 4 hr | $550 | 1–3 incl.; 4 +$50, 5 +$100, 6 +$150 |
| Nearshore Fishing Charter | 7:00 AM | 6 hr | $750 | same |
| Inshore Fishing Charter | 7:00 AM | 4 hr | $475 | 1–2 incl.; 3 +$25, 4 +$50, 5 +$75, 6 +$125 |
| Inshore Fishing Charter | 11:30 AM | 4 hr | $575 | same |
| Inshore Fishing Charter | 6:00 AM | 6 hr | $575 (as configured) | same |
| Shark Fishing Charter | 8:00 AM | 3 hr | $575 | 1–3 incl.; 4 +$50, 5 +$75, 6 +$125 |
| Shark Fishing Charter | 12:00 PM | 3 hr | $575 | same |
| Shark Fishing Charter | 8:00 AM | 6 hr | $750 | same |
| Dolphins, Manatees & More | 9:00 AM | 2 hr | $375 | flat for 1–6 |
| Flounder Gigging | 8:00 PM | 4 hr | $700 | 1–4 incl.; 5 +$50, 6 +$100; max 6 |
| Flounder Gigging | 8:30 PM | 6 hr | $850 | same |
| Flounder Gigging | 8:00 PM | 8 hr | $1,100 | same |
| Sunset cruise | 7:00 PM | 2 hr | $275 | flat for 1–6 |

Vally "What's Included" for fishing trips: "A knowledgeable and experienced captain · All necessary gear · Fish cleaning" (the dolphin tour lists no fish cleaning). "What to Bring": "Any drinks you would like to have · Any food you want to eat during the trip · Sunscreen (no spray) · Sun protective clothing (hat, buff, hooded sun shirts, etc.) · Polarized sunglasses". No deposit or cancellation policy is set in Vally.

**Captain Experiences [PLATFORM pricing fields]:**
- Inshore #6298 (1–12 people, 4–6 hrs). 4 hr: $600 for 1–3, $800 for 4–6, $1,600 for 7–12 (two boats). 6 hr: $800 / $900 / $1,800. 40% deposit. Cancel up to 3 days before. Disability friendly.
- Nearshore #6303 (1–10 people). 4 hr: $600 for 1–3, $700 for 4–5, $1,200 for 6 (two boats), $1,400 for 7–10. 6 hr: $800 / $1,000 / $1,600 / $2,000. 40% deposit. Cancel up to 1 day before.
- Shark #6317 (1–10 people, 3 hr): $550 for 1–2, $600 for 3–5, $1,200 for 6–10 (two boats). 30% deposit. Cancel up to 3 days before.
- All CE trips: "All rods, reels, and tackle are included." "This guide will clean your catch for you." Beer: "Feel free to enjoy responsibly, but please no glass." "You can play your own bluetooth music." "Live bait is included for this trip." "You won't lose your deposit if the trip is canceled due to weather." "This trip can cater to small children." "Please provide your own food / snacks." CE price range in schema: "$550 - $2000".

**FishingBooker 38272 [PLATFORM]:** Shark Fishing Am 3h 8:00 AM $500 (2 ppl). INSHORE FISHING 4h 6:00/10:30 AM $525 (up to 3). Shark Fishing Afternoon 3h 12:00 PM $575 (up to 4). NEARSHORE Am Trip 4h 7:00 AM $600 (up to 3). Extra-person fees per the fetch tool: +$50 after 2 or 3 people, +$75 after 4 on the PM shark trip. Cancellation: "Free cancellation up to 3 days prior to trip. If you cancel or modify your booking later, or fail to show up, you'll forfeit 100% of what you've paid." Included: "Rods, reels & tackle · Live bait · Catch cleaning & filleting · Fishing license is included which contains a snook and lobster stamp". Payment: full online, or 30% deposit online with the balance in cash to the captain. Kids welcome; "Children must wear life vests". "Alcohol is allowed."

**FishAnywhere [CAPTAIN trip text, PLATFORM fields]:** Dolphins, Manatees and More $250 (2h, 9–11am). Inshore Half-day AM $500 (4h, 7–11am). Inshore Half-day PM $500 (3h, 12–3pm). Shark Half-day AM $550 (3h, 8–11am; +$75 per guest over 3, max 4). Inshore Full-day AM $800 (6h, 6am–12pm, "most popular"). Nearshore Out 5 Miles $850 (6h, 6am–12pm, includes 2 guests). All others include 3 guests, +$50 each, max 6. Deposits $35–$119, "Deposit refundable up to 3 Days before the trip". Mon–Sat. "Children as young as 5 and anglers of all skill levels are warmly welcomed". Included: "Catch Cleaning & Filleting · Fishing License · Fresh or Live Bait · Rods Reels Terminal Tackle · Drinks". Also says "You'll need to bring drinks (no glass bottles), snacks…", which contradicts "Drinks" being included. Weather: "You will receive a refund for any weather cancellation, or you can choose to reschedule your trip for a different date."

### Notable trips & catches (dated)
- 2026-09 (mid), CE fishing report [CAPTAIN]: "Also record numbers of reds being caught this morning 4 hr trip we landed 75 red fish".
- 2026-09-14, FOX 35: mullet run and boats getting fish jumping in at Ponce Inlet (see Press).
- 2026-11-02/03, FB [CAPTAIN]: night snook trip, "young angler" outfishing the adults.
- 2026-11-04, FB [CAPTAIN]: snook and redfish trip ("From screaming drags to bent rods, it was one fish after another").
- 2026-03-24, Google [CUSTOMER]: 3-man sheepshead limit (David Nugent).
- 2025-06-27, FishingBooker [CUSTOMER, paraphrase]: James Wagar's son caught a 20 lb redfish on the Shark Fishing Am trip.
- 2025-04-03, FishingBooker [CUSTOMER, paraphrase]: Kevin Michalec's group caught about 45 fish and saw dolphins and sea turtles.
- 2026-08-18, CE [CUSTOMER]: Ellen M., "a bunch of fish and 3 sharks".
- [CAPTAIN] Biggest fish: "500lb swordfish" (CE Q&A).
- CE photo-gallery dates: 2024-07-25 (Port Orange), 2024-11-13, 2025-05-31, 2025-06-03, 2025-08-14 (Daytona Beach), 2025-11-04. CE report photo batches: Early Nov 2026 (11/03–11/04), Mid Sep 2026, Mid Aug 2026.

### Press, licenses, awards
- **FOX 35 Orlando**, "Why millions of leaping fish are jumping into Florida boats". Deck: "Annual mullet migration fuels fishing frenzy along Central Florida coast". By Esther Bower. Published **2026-09-14** 22:50 ET. URL: https://www.fox35orlando.com/news/why-millions-leaping-fish-jumping-florida-boats (also on wogx.com). Dateline NEW SMYRNA BEACH; reported from the Indian River Lagoon. Also features Blair Wiggins (Blair Wiggins Outdoors). About Chad (article text, verbatim):
  - "Reel Deal Fishin Charters owner Chad Knight said prey fish like snook and tarpon are crowding the school, forcing the mullet to jump into boats to avoid being eaten." (The article calls snook and tarpon "prey fish"; they are the predators.)
  - "Knight said business is booming at his charter company after social media clips of the flying fish went viral, bringing out crowd numbers looking to hook big game."
  - Direct quotes from Chad: **"Makes fishing phenomenal right now,"** and onlookers can watch from elevated piers **"up and down the coast really."**
- No other news coverage was found (News-Journal, Observer, Hometown News, WESH, WFTV, ClickOrlando all searched).
- License: [CAPTAIN] YouTube: "U.S. Coast Guard-licensed captain". [PLATFORM] CE: "This boat is federally permitted to go deep offshore." [PLATFORM] FishingBooker: identity and credentials verified. A search snippet of the live site's /about page says "50-Ton Master License" and "moved to Florida from Tennessee at age 11"; that is the live site, outside this scope, and was not verified here.
- Award: FishingBooker **"Angler's Choice"** ("given to listings that consistently deliver a high-quality service and earn great reviews from customers").

---

## 3. Customer reviews

### Google (5 stored texts; total 234 @ 5.0 as of the widget's 2026-03-30 sync). Verbatim from widget API
1. **Sydney H.**, 2026-03-28, 5★: "I was treated with great care and had so much fun! I felt safe and had a blast!"
2. **Todd B.**, 2026-03-27, 5★: "My father and I went out with Chad and had a excellent fishing trip. I recommend Chad. He is very knowledgeable and knows where to go and how to put the fish in the boat. Thanks Chad for an excellent day. You can contact Chad at real deal fishing charters. From Edgewater, Florida."
3. **Chaland L.**, 2026-03-27, 5★: "Captain Chad was excellent! Very friendly and knowledgeable. We had a group of 5 and he was very efficient with getting everyone bait. He also had enough rods to keep us going when lines snapped due to getting snagged up! Definitely recommend!"
4. **David N.**, 2026-03-24, 5★: "Had a blast with capt Chad we got are 3 man limit of sheep head. Highly recommend well continue to come back"
5. **Erin D.**, 2026-03-22, 5★: "Took us right to them. 1 away from limit. Thanks Capt Chad."

### Facebook recommendations (9 of 9, 100% recommend). Verbatim
1. **Ricky C.**, 2026-07-06: "Captain Chad with Reel Deal Fishing Charters is absolutely top-notch! He was friendly, knowledgeable, and worked hard to make sure everyone had a great time and stayed on fish. Whether you're an experienced fisherman or taking your family out for a fun day on the water, Captain Chad makes the trip enjoyable from start to finish. We had an incredible time making memories and catching fish. You can tell Captain Chad truly loves what he does and goes above and beyond for his customers. If you're looking for a fishing charter in New Smyrna Beach, I highly recommend Reel Deal Fishing Charters. We'll definitely be booking another trip!"
2. **Sydney H.**, 2026-05-30 (shark): "We had so much fun shark fishing! Chad was so accommodating and helped some of us who had never touched a fishing pole before get a couple of fish haha! 10/10 recommend!!"
3. **Lana H.**, 2026-05-30 (shark): "What an incredible experience! Chad made the whole trip fun, exciting, and unforgettable. From the moment we left the dock to the last fish of the day, everyone had an amazing time. The shark action was nonstop, and the memories we made will last a lifetime. If you're in the area and looking for a great day on the water, I can't recommend Chad and Reel Deal Fishin' Charters enough!"
4. **Sean M.**, 2026-04-03: "Captain Chad was awesome put us in a great spot for a great experience with my son."
5. **Joel & Shawna K.** ("Joel N Shawna Krugjohann"), 2025-06-26: "We had a blast out on the water with Reel Deal Fishin Charters! Chad was super patient and helpful the whole time, and we even caught fish! Highly recommend if you're looking for a fun and stress-free fishing trip. Can't wait to book with him again!"
6. **"Sindos Searty"** (display name), 2025-03-25: "Chad at Reel Deal fishing was amazing. He was knowledgeable and kind to my kids and I during our Florida fishing excursion. He helped us catch all the fish and taught us a lot about fishing in the Atlantic Ocean. Thank you Chad for a wonderful experience."
7. **Winter & Jimmy M.** ("Winter N Jimmy McNair"), 2025-02-25: "We had the opportunity to go out with Captain Chad of Reel Deal fishing charters and had an amazing time. Not only did we have fun, but we caught a lot of fish, and fish that we could take home and eat. I highly recommend you book a charter with Captain Chad @ Reel Deal Fishing Charters."
8. **"Color in the Water"** (page name), 2024-12-02: "Highly recommend Captain Chad. He took me and my husband and four sons out, and gave us a wonderful first time ocean fishing experience. If you want to experience ocean fishing with an experienced captain, you will be more than pleased. Plenty of poles, constant refresh of fresh bait, helpful tips, and he took us to multiple locations for the best luck possible. He saw how much we loved seeing the dolphins, so he switched things up and we went dolphin "chasing", to see them play and jump. Then he even let my boys take the wheel for a bit so they got to feel like big shots! I couldn't imagine a better experience on the water…thanks Captain Chad for an awesome day!"
9. **Lorenzo J.**, 2024-09-06: "you will have a wonderful time and Chad is a awesome man and he will do his best to insure you feel comfortable and he will help you in anyway possible.. please give him a try and you will be glad you did..." (Page replied: "Thank you")

### Captain Experiences (8 of 8, all 5★ "Verified Review"). Verbatim from schema.org data
1. **Ellen M.**, 2026-08-18, Shark Fishing Experience: "Captain Chad was absolutely amazing! We caught a bunch of fish and 3 sharks! It was so much fun, definitely would do this again with Captain Chad!"
2. **Cherie L.**, 2026-07-25, Nearshore Fishing Experiences: "We loved Captain Chad! Fabulous experience all around!"
3. **Keith M.**, 2026-06-01: "I booked a trip with Chad told him I had 3 boys 8,10 and 15. He was great and patient with them helping with bait and tangles. He put us on the fish quickly. He asked them if they would like to Shark fish of course they said yes. I will book with Chad next time we are there for sure."
4. **Michael S.**, 2026-04-09: "Chad was fantastic. My kids enjoyed him as the guide."
5. **Gary B.**, 2025-11-04: "Captain Chad was awesome, great laughs amazing trip. I definitely recommend. He made sure we had a great experience"
6. **David K.**, 2025-07-21, Nearshore Fishing Experiences: "We thoroughly enjoyed our trip with Captain Chad. He was knowledgeable, knew where the fish were, and he was fun to hangout with. He went out of his way to make our trip memorable and to meet our goals. We plan to make this an annual trip with Captain Chad."
7. **Darla M.**, 2025-07-11: "Our experience with Chad was amazing! Our family of 5 (ranging from 8yrs old to 53 years old) had a wonderful experience! He was especially great with my 8yr old….extremely patient and kind! We caught all kinds of fish and were able to see lots of birds and dolphins! I can't say enough about him and our experience. This excursion will definitely become an annual fishing trip!"
8. **Brad D.**, 2025-05-25: "Trip was Excellent! Knew where fish were and put us on them first thing out of the gate! Would recommend to anyone looking to be exhausted from fighting the catch."

### FishAnywhere (1 of 1). Verbatim, no name or date shown
- Trip "Nearshore Fishing Out 5 Miles", 5★: "Awesome trip! Captain Chad took us out to a great spot and we started catching fish right away. Great day!"

### FishingBooker 38272 (10 of 64 visible). **Excerpts or paraphrases from a summarising fetch tool, not full verbatim.** Quoted text is the opening words as returned; re-pull full text before quoting on the site.
1. **Ronnie J.**, 2026-07-27, INSHORE FISHING (11:30 AM), 5 adults + 1 child: "Chad was an amazing Captain and made sure that all the family was engaged and catching fish...we thoroughly enjoyed…" (paraphrase of the rest: steered away from a storm and finished filleting in the rain).
2. **Malissa C.**, 2026-07-15, INSHORE FISHING, 5 adults + 3 children: "Chad made the experience hands down the best. He was amazing with the kids, so patient, answered every question…" (rest: kept lines baited; the kids want to go back).
3. **Eric E.**, 2026-06-26, NEARSHORE Am Trip, 2 adults: "Captain Chad was great on this nearshore trip and put us on some flounder during our mid-day trip. They take a litlle…" (rest: taught technique for flounder).
4. **John G.**, 2026-06-22, INSHORE FISHING (5:00 PM), 6 adults + 3 children: "Awesome Captain put us on some big fish 10 min into the trip !" (paraphrase: repeat customer, "Best Trip Yet").
5. **Roger B.**, 2026-01-24, NEARSHORE Am Trip, 2 adults: "had a great day captain falon was very friendly and knowledgeable kept us on fish the whole time."
6. **Eric V.**, 2025-12-27, INSHORE FISHING (7:00 AM), 5 adults + 1 child: "Captain Chris was awesome and had us on fish during the whole trip."
7. **Kevin M.**, 2025-04-03, INSHORE FISHING (7:00 AM), 3 adults: opening "We were originally planning to do a Head Boat trip, for the day we were in Daytona Beach, but it sold out before we…". A second pull returned "Great charter, great captain, a great day on the water for my kids and I!! Highly Recommended!" (possibly the title). Paraphrase: private charter with his two daughters, about 45 fish, dolphins and sea turtles, free cupcakes from the captain's wife's bakery.
8. **James W.**, 2025-06-27, Shark Fishing Am, 2 adults: "Captain Chad!! Was Amazing!! Communicated very well before we even got to the boat! Once on the boat, he was very…" (rest: son caught a 20 lb redfish).
9. **Kathleen F.**, 2025-08-04, "2 hour pm", 4 adults + 2 children: "I really appreciated the guide as I could tell he wanted us to have a good experience. I felt that he really went above and…" (rest: they forgot a cooler, so he cleaned and iced the fish for a restaurant to cook; birthday trip).
10. **Melissa K.**, 2025-07-26, INSHORE FISHING (7:00 AM), 4 adults: "We were in Orlando for a basketball tournament and ended up with a lot more free time than expected. We booked last…" (rest: shark fishing, teens loved it).
- The remaining 54 FishingBooker reviews could not be reached. Review pagination and the /reviews/ pages return 403 or ignore the page parameter.

### Yelp (1), Guidesly, BaitYourHook (1)
- Texts are not retrievable (blocked or 404).

**Total verbatim reviews captured: 23** (5 Google + 9 Facebook + 8 CE + 1 FishAnywhere), plus 10 FishingBooker excerpts.

---

## 4. Conflicts and gaps

### Conflicts
- **Years of experience:** "over 15 years of commercial fishing" (CE, captain-written) vs "over 20 years of commercial fishing experience" (Facebook intro) vs "Commercial fisherman since 2010" / "14 years of experience" (FishingBooker). Guidesly snippet: "over 15 years".
- **Boat:** 22' Sundance on every platform, but:
  - year: 2003, restored 2023 (FishingBooker) vs 2008 (CE; BoatBooker snippet "2008 Sundance SVT22")
  - type: skiff (FB) vs bay boat (CE) vs center console (FishAnywhere)
  - engine: 1×150HP Suzuki (FB) vs 250HP Yamaha (FishAnywhere)
- **Address / departure point:** 170 Causeway N, NSB 32169 (Vally, FishAnywhere, Yelp/MapQuest/Giftly) vs **164** Causeway N (Facebook) vs 163 Causeway North (FishingBooker destination-page snippet) vs **93 Dunlawton Ave, Port Orange 32127** (FishingBooker meeting point). CE base is Port Orange. Vally trip text says inshore and nearshore are "in Ponce Inlet".
- **Prices** (cheapest per trip, by source):
  - Inshore 4 hr: Vally $475 / FB $525 / FishAnywhere $500 / CE $600
  - Nearshore 4 hr: Vally $550 / FB $600 / CE $600. Nearshore 6 hr: Vally $750 / FishAnywhere $850 / CE $800.
  - Shark 3 hr: Vally $575 / FB $500 (AM) and $575 (PM) / FishAnywhere $550 / CE $550
  - Dolphin tour: Vally $375 / FishAnywhere $250
- **Nearshore distance:** "up to 6 miles" (Vally) vs "Out 5 Miles" (FishAnywhere).
- **Shark season:** May 1 – Nov 1 (Vally display) vs May 1 – Oct 15 (FishingBooker). The raw Vally config looks like Jun 1–Nov 1.
- **Max group:** 6 per boat (Vally, FB, FishAnywhere) vs CE allowing 10–12 "(two boats)". FishAnywhere's shark trip is max 4.
- **Cancellation:** 3 days (FB, FishAnywhere, CE inshore and shark) vs 1 day (CE nearshore). Deposit 30% (FB, CE shark) vs 40% (CE inshore and nearshore) vs fixed $35–$119 (FishAnywhere).
- **Drinks:** FishAnywhere lists them both as included and as bring-your-own. Vally and CE say bring your own food and drinks.
- **Fishing license included:** FishingBooker and FishAnywhere say yes (FB adds "contains a snook and lobster stamp"), YouTube gigging says "Gear and license included". Vally doesn't mention it.
- **CE mislabelling:** trip #6303 has a shark URL slug and a shark description but is titled "Nearshore Fishing Experiences".
- **Review counts by platform:** Google widget 234 (stale, Mar 2026), FB 9, CE 8, FishingBooker 64, FishAnywhere 1, Yelp 1. The old FishingBooker 38327 showed 7 per snippet.

### Gaps
- No current Google review count beyond the widget's 234 @ 5.0. That record was **synced 2026-03-30**, so the real count is likely higher now. Google Maps is not reachable by automation.
- FishingBooker: 54 of 64 reviews and full verbatim texts were not reachable (Cloudflare and 403). Re-pulling from a normal browser would recover them, along with the dead 38327 listing (also in Wayback, 2025-06-12).
- BoatBooker, Guidesly and BaitYourHook listings are gone (404). Wayback snapshots exist but archive.org is blocked here.
- No Tripadvisor listing exists. Yelp's 1 review is unreadable here.
- No off-site source for **bioluminescence** or **boat training** trips.
- No off-site Falon bio. Who "Matt M." and "Captain Chris" are is unexplained.
- YouTube Shorts (346) are untitled (titles are just dates) and have no descriptions, so their content can't be read from text. Only the 5 long videos have usable titles and descriptions.
- Facebook: only the 3 most recent posts are visible without login. The reels show view counts (up to about 5K) but no captions.
- The CE fishing reports are photo galleries; the only text is the "75 red fish" line.
- No press beyond FOX 35 (Sept 14, 2026).

---

## 5. YouTube channel: every upload

Channel: https://www.youtube.com/@chadknight9239, display name "baseball boy for no reason", 383 subscribers, 351 uploads (5 videos + 346 Shorts). No channel description. Shorts are titled with their date and have no descriptions. Total Shorts views about 124.5K. The most-viewed Shorts are 2.7K (June 17, 2026), 2.5K (Mar 19 and Mar 16, 2026), 2.3K (Jan 20, 2026) and 2.1K (Apr 3, 2026). Non-date Short titles: "another banger" (Apr 11, 2026, 261 views), "#speechtosong reverse", "#DreamScreenAI", and "Nothing like diving into Alligator Reef and coming face-to-face with a nurse shark." (oldest). The Shorts run Nov 2025 to Nov 7, 2026.

**Long videos (with descriptions):**
1. "Asher putting in work under the Seven Mile Bridge! Tight lines and good times in the Florida Keys". Oct 4, 2025, 23 views. No description.
2. "Hooked Up in Daytona Beach – Sharks & Reds". Sep 6, 2025, 22 views. [CAPTAIN] "Welcome to Daytona Beach Sharks & Reds – your front-row seat to the ultimate inshore and nearshore fishing action! From heart-pounding shark hookups to drag-screaming redfish battles, every trip is packed with big bites, family fun, and unforgettable memories. Join Captain Chad Knight, a U.S. Coast Guard-licensed captain with years of commercial fishing and charter experience, as he takes you out of Daytona Beach to target sharks, bull reds, snook, flounder, and more. Whether it's chasing predators, exploring Florida's beautiful waterways, or teaching kids to fish, this channel brings you right on the deck with us. 📲 Book your next adventure with Reel Deal Fishin' Charters: 👉 www.ReelDealFishin.com 📞 Call/Text: 386-853-4814 Stay tuned for weekly fishing videos, gear tips, and trip highlights. Don't forget to subscribe, hit the 🔔 bell, and come ride the tide with us in Daytona Beach"
3. "Flounder Gigging at Night | New Smyrna Beach's Hidden Fishing Adventure". Aug 24, 2025, 89 views. Description is quoted under Flounder gigging.
4. "Flounder Gigging from New Smyrna Beach to Jacksonville | Reel Deal Fishin' Charters". Aug 22, 2025, 31 views. Description is quoted under Flounder gigging. It also says: "Ready to try a fishing trip unlike anything you've done before?"
5. "Flounder Gigging Charter | Guided Night Trips in New Smyrna & Daytona". Aug 18, 2025, 44 views. Description is quoted under Flounder gigging.

**Full list (all 351):**

| # | Type | Title (as published) | Upload date | Views | URL |
|---|---|---|---|---|---|
| 1 | video | Asher putting in work under the Seven Mile Bridge! Tight lines and good times in the Florida Keys | Oct 4, 2025 | 23 views | https://www.youtube.com/watch?v=eNDZHQQa6Fw |
| 2 | video | Hooked Up in Daytona Beach – Sharks & Reds | Sep 6, 2025 | 22 views | https://www.youtube.com/watch?v=H73RmX4SPi0 |
| 3 | video | Flounder Gigging at Night / New Smyrna Beach’s Hidden Fishing Adventure | Aug 24, 2025 | 89 views | https://www.youtube.com/watch?v=A2Iq-y-w7R4 |
| 4 | video | Flounder Gigging from New Smyrna Beach to Jacksonville / Reel Deal Fishin’ Charters | Aug 22, 2025 | 31 views | https://www.youtube.com/watch?v=yu32HqLMbhU |
| 5 | video | Flounder Gigging Charter / Guided Night Trips in New Smyrna & Daytona | Aug 18, 2025 | 44 views | https://www.youtube.com/watch?v=xFV18zlMAPM |
| 6 | short | November 7, 2026 | Nov 7, 2026 | 3 views | https://www.youtube.com/shorts/dxztwxSt6NU |
| 7 | short | November 5, 2026 | Nov 5, 2026 | 5 views | https://www.youtube.com/shorts/17JCUfH4UmU |
| 8 | short | November 5, 2026 | Nov 5, 2026 | 7 views | https://www.youtube.com/shorts/D9HcOFME7Mo |
| 9 | short | November 5, 2026 | Nov 5, 2026 | 6 views | https://www.youtube.com/shorts/3hLdAUAbdPE |
| 10 | short | November 5, 2026 | Nov 5, 2026 | 15 views | https://www.youtube.com/shorts/EEQVOqxjx1c |
| 11 | short | November 5, 2026 | Nov 5, 2026 | 9 views | https://www.youtube.com/shorts/8RkJyQz4p1Q |
| 12 | short | November 5, 2026 | Nov 5, 2026 | 137 views | https://www.youtube.com/shorts/XZU4_PAxCJU |
| 13 | short | November 4, 2026 | Nov 4, 2026 | 154 views | https://www.youtube.com/shorts/yZT7RTQVG0A |
| 14 | short | November 1, 2026 | Nov 1, 2026 | 15 views | https://www.youtube.com/shorts/BW2IjCqGqzw |
| 15 | short | October 26, 2026 | Oct 26, 2026 | 13 views | https://www.youtube.com/shorts/bIyX1Vlt07M |
| 16 | short | October 23, 2026 | Oct 23, 2026 | 105 views | https://www.youtube.com/shorts/DWDI2I_Djp8 |
| 17 | short | October 20, 2026 | Oct 20, 2026 | 21 views | https://www.youtube.com/shorts/LRWJ2fV_7lI |
| 18 | short | September 30, 2026 | Sep 30, 2026 | 1,172 views | https://www.youtube.com/shorts/p7UcJUjpXUQ |
| 19 | short | September 30, 2026 | Sep 30, 2026 | 1,308 views | https://www.youtube.com/shorts/5XGjMiA3g4s |
| 20 | short | September 26, 2026 | Sep 26, 2026 | 1,157 views | https://www.youtube.com/shorts/liECXTrozTc |
| 21 | short | September 25, 2026 | Sep 25, 2026 | 1,227 views | https://www.youtube.com/shorts/POAl4IHKqFU |
| 22 | short | September 25, 2026 | Sep 25, 2026 | 1,462 views | https://www.youtube.com/shorts/InI8lTIkxZ0 |
| 23 | short | September 13, 2026 | Sep 12, 2026 | 1,256 views | https://www.youtube.com/shorts/SOMSm1HTT6U |
| 24 | short | September 11, 2026 | Sep 11, 2026 | 1,087 views | https://www.youtube.com/shorts/kgzRItzlO10 |
| 25 | short | September 11, 2026 | Sep 11, 2026 | 141 views | https://www.youtube.com/shorts/7YnXIRw2pOU |
| 26 | short | September 11, 2026 | Sep 11, 2026 | 198 views | https://www.youtube.com/shorts/rIvATjz8sbw |
| 27 | short | September 11, 2026 | Sep 11, 2026 | 1,279 views | https://www.youtube.com/shorts/VVOWXuWFAbM |
| 28 | short | September 8, 2026 | Sep 8, 2026 | 97 views | https://www.youtube.com/shorts/WjKr6k-4GjU |
| 29 | short | September 8, 2026 | Sep 8, 2026 | 1,262 views | https://www.youtube.com/shorts/rkd6HvjyqNM |
| 30 | short | September 8, 2026 | Sep 8, 2026 | 1,404 views | https://www.youtube.com/shorts/ah3SeYD9LRE |
| 31 | short | September 7, 2026 | Sep 7, 2026 | 62 views | https://www.youtube.com/shorts/cQIdbSZONCU |
| 32 | short | September 7, 2026 | Sep 7, 2026 | 1,144 views | https://www.youtube.com/shorts/P-Giv1m7xCA |
| 33 | short | September 7, 2026 | Sep 7, 2026 | 1,198 views | https://www.youtube.com/shorts/yyS35LmnDJ0 |
| 34 | short | September 2, 2026 | Sep 2, 2026 | 859 views | https://www.youtube.com/shorts/yCLURrKyIPY |
| 35 | short | August 23, 2026 | Aug 23, 2026 | 1,156 views | https://www.youtube.com/shorts/_AEUVRuZQO8 |
| 36 | short | August 13, 2026 | Aug 13, 2026 | 1,660 views | https://www.youtube.com/shorts/_3_HiXuAiY8 |
| 37 | short | August 13, 2026 | Aug 13, 2026 | 1,213 views | https://www.youtube.com/shorts/YDhLMUsiPwk |
| 38 | short | August 13, 2026 | Aug 13, 2026 | 756 views | https://www.youtube.com/shorts/Dd4B95OQ06E |
| 39 | short | August 13, 2026 | Aug 13, 2026 | 999 views | https://www.youtube.com/shorts/1147hxBsXno |
| 40 | short | August 11, 2026 | Aug 11, 2026 | 151 views | https://www.youtube.com/shorts/JROgNPRikTY |
| 41 | short | August 10, 2026 | Aug 10, 2026 | 1,585 views | https://www.youtube.com/shorts/iHaQn9GM4HQ |
| 42 | short | August 9, 2026 | Aug 9, 2026 | 1,377 views | https://www.youtube.com/shorts/Ke1BIQolWzQ |
| 43 | short | August 9, 2026 | Aug 9, 2026 | 199 views | https://www.youtube.com/shorts/PQt_blkGSMw |
| 44 | short | August 9, 2026 | Aug 9, 2026 | 288 views | https://www.youtube.com/shorts/rSjru2xJCXw |
| 45 | short | August 8, 2026 | Aug 8, 2026 | 1,496 views | https://www.youtube.com/shorts/Z_BYpHlCYhk |
| 46 | short | August 7, 2026 | Aug 7, 2026 | 357 views | https://www.youtube.com/shorts/TTMMg80URyY |
| 47 | short | July 18, 2026 | Jul 18, 2026 | 489 views | https://www.youtube.com/shorts/fEGiEFRdirA |
| 48 | short | July 14, 2026 | Jul 14, 2026 | 192 views | https://www.youtube.com/shorts/kuYRBIpJJeY |
| 49 | short | July 12, 2026 | Jul 12, 2026 | 1,655 views | https://www.youtube.com/shorts/slogYb72g_w |
| 50 | short | July 12, 2026 | Jul 12, 2026 | 469 views | https://www.youtube.com/shorts/nxzlLJvFU0Y |
| 51 | short | July 12, 2026 | Jul 12, 2026 | 1,655 views | https://www.youtube.com/shorts/e9grrnei39Q |
| 52 | short | July 10, 2026 | Jul 10, 2026 | 1,625 views | https://www.youtube.com/shorts/IRJZXTzsmvc |
| 53 | short | July 6, 2026 | Jul 6, 2026 | 210 views | https://www.youtube.com/shorts/Vt1iG5vWXWY |
| 54 | short | July 5, 2026 | Jul 4, 2026 | 728 views | https://www.youtube.com/shorts/_aEdeRDtEBI |
| 55 | short | July 2, 2026 | Jul 2, 2026 | 23 views | https://www.youtube.com/shorts/amYZcdb_Fek |
| 56 | short | July 1, 2026 | Jul 1, 2026 | 18 views | https://www.youtube.com/shorts/DXpxzSHnJYU |
| 57 | short | July 1, 2026 | Jul 1, 2026 | 20 views | https://www.youtube.com/shorts/1JXgJx2JCAY |
| 58 | short | July 1, 2026 | Jul 1, 2026 | 15 views | https://www.youtube.com/shorts/xg6Gj8jj7Y8 |
| 59 | short | July 1, 2026 | Jul 1, 2026 | 13 views | https://www.youtube.com/shorts/4omAFV7MtF0 |
| 60 | short | June 30, 2026 | Jun 30, 2026 | 17 views | https://www.youtube.com/shorts/XR3XL9qNKA0 |
| 61 | short | June 25, 2026 | Jun 25, 2026 | 687 views | https://www.youtube.com/shorts/EabhQ9gOm-U |
| 62 | short | June 25, 2026 | Jun 25, 2026 | 1,174 views | https://www.youtube.com/shorts/HUC4CTTx5d0 |
| 63 | short | June 22, 2026 | Jun 22, 2026 | 731 views | https://www.youtube.com/shorts/bYIu_7QIR-0 |
| 64 | short | June 19, 2026 | Jun 19, 2026 | 30 views | https://www.youtube.com/shorts/_lEqZQ_u95o |
| 65 | short | June 18, 2026 | Jun 18, 2026 | 798 views | https://www.youtube.com/shorts/DqqZejCXHd0 |
| 66 | short | June 18, 2026 | Jun 17, 2026 | 656 views | https://www.youtube.com/shorts/VtAqLjchUOY |
| 67 | short | June 17, 2026 | Jun 17, 2026 | 933 views | https://www.youtube.com/shorts/Z0iRKoC3RhI |
| 68 | short | June 17, 2026 | Jun 17, 2026 | 2,704 views | https://www.youtube.com/shorts/FkyHjA4vZfA |
| 69 | short | June 16, 2026 | Jun 16, 2026 | 1,167 views | https://www.youtube.com/shorts/RQeiqZSx8Jg |
| 70 | short | June 15, 2026 | Jun 15, 2026 | 1,224 views | https://www.youtube.com/shorts/ebV64DmnJnE |
| 71 | short | June 15, 2026 | Jun 15, 2026 | 985 views | https://www.youtube.com/shorts/n64hHjjOUbA |
| 72 | short | June 13, 2026 | Jun 13, 2026 | 100 views | https://www.youtube.com/shorts/-q7ZnjLnEIE |
| 73 | short | June 4, 2026 | Jun 4, 2026 | 1,127 views | https://www.youtube.com/shorts/9A_UnCVfZdE |
| 74 | short | May 18, 2026 | May 18, 2026 | 919 views | https://www.youtube.com/shorts/wL8YsNikFAQ |
| 75 | short | May 15, 2026 | May 15, 2026 | 1,578 views | https://www.youtube.com/shorts/mbpSvEoJF2A |
| 76 | short | May 6, 2026 | May 6, 2026 | 1,627 views | https://www.youtube.com/shorts/3FZ5OUgtxBU |
| 77 | short | May 5, 2026 | May 5, 2026 | 1,212 views | https://www.youtube.com/shorts/Gvvfzl5LwU0 |
| 78 | short | April 26, 2026 | Apr 26, 2026 | 1,434 views | https://www.youtube.com/shorts/OBTRNVo4_jU |
| 79 | short | April 26, 2026 | Apr 26, 2026 | 102 views | https://www.youtube.com/shorts/LHhC1oT5IYA |
| 80 | short | April 26, 2026 | Apr 26, 2026 | 1,133 views | https://www.youtube.com/shorts/My_thvza4us |
| 81 | short | April 25, 2026 | Apr 25, 2026 | 16 views | https://www.youtube.com/shorts/nKopBye7AjM |
| 82 | short | April 25, 2026 | Apr 25, 2026 | 75 views | https://www.youtube.com/shorts/CFJ8xhQEafg |
| 83 | short | April 25, 2026 | Apr 25, 2026 | 966 views | https://www.youtube.com/shorts/L4a-Kha-990 |
| 84 | short | April 25, 2026 | Apr 25, 2026 | 71 views | https://www.youtube.com/shorts/zn-FT0kXwJk |
| 85 | short | April 24, 2026 | Apr 24, 2026 | 106 views | https://www.youtube.com/shorts/6P69ddBh_2g |
| 86 | short | April 20, 2026 | Apr 20, 2026 | 1,335 views | https://www.youtube.com/shorts/2lB0zKOWkp0 |
| 87 | short | April 19, 2026 | Apr 19, 2026 | 971 views | https://www.youtube.com/shorts/rDdFcnhnn4I |
| 88 | short | April 18, 2026 | Apr 18, 2026 | 146 views | https://www.youtube.com/shorts/1VvH0kk3tQE |
| 89 | short | April 18, 2026 | Apr 18, 2026 | 842 views | https://www.youtube.com/shorts/7DLyjhrS03g |
| 90 | short | April 18, 2026 | Apr 18, 2026 | 387 views | https://www.youtube.com/shorts/O7l_Pg5w7JQ |
| 91 | short | April 18, 2026 | Apr 18, 2026 | 44 views | https://www.youtube.com/shorts/TatQoMI759E |
| 92 | short | April 18, 2026 | Apr 18, 2026 | 128 views | https://www.youtube.com/shorts/iXxlXYwf5yU |
| 93 | short | April 18, 2026 | Apr 18, 2026 | 295 views | https://www.youtube.com/shorts/EDgtRIYnrok |
| 94 | short | April 18, 2026 | Apr 18, 2026 | 151 views | https://www.youtube.com/shorts/qcjryCyKGaA |
| 95 | short | April 18, 2026 | Apr 18, 2026 | 700 views | https://www.youtube.com/shorts/dZB_0RwvaeE |
| 96 | short | April 18, 2026 | Apr 18, 2026 | 812 views | https://www.youtube.com/shorts/4y-2zDmaH44 |
| 97 | short | April 18, 2026 | Apr 18, 2026 | 414 views | https://www.youtube.com/shorts/a22OMEfC8fs |
| 98 | short | April 17, 2026 | Apr 17, 2026 | 41 views | https://www.youtube.com/shorts/VnHIBRSVoSI |
| 99 | short | April 14, 2026 | Apr 14, 2026 | 24 views | https://www.youtube.com/shorts/kwdnQSx_Bzs |
| 100 | short | April 14, 2026 | Apr 14, 2026 | 1,887 views | https://www.youtube.com/shorts/vndaNO78D_E |
| 101 | short | April 14, 2026 | Apr 14, 2026 | 742 views | https://www.youtube.com/shorts/DbDCYdY1HQg |
| 102 | short | April 14, 2026 | Apr 14, 2026 | 1,160 views | https://www.youtube.com/shorts/VRrdYptGmgU |
| 103 | short | April 14, 2026 | Apr 14, 2026 | 197 views | https://www.youtube.com/shorts/pIhouYSoR5Y |
| 104 | short | April 14, 2026 | Apr 14, 2026 | 46 views | https://www.youtube.com/shorts/DPGTBy6xjd0 |
| 105 | short | April 14, 2026 | Apr 14, 2026 | 829 views | https://www.youtube.com/shorts/38DhpUc_gUg |
| 106 | short | April 14, 2026 | Apr 14, 2026 | 1,397 views | https://www.youtube.com/shorts/7oWEXV-wJt4 |
| 107 | short | April 14, 2026 | Apr 14, 2026 | 955 views | https://www.youtube.com/shorts/5GpQGHUmAtI |
| 108 | short | April 12, 2026 | Apr 12, 2026 | 1,137 views | https://www.youtube.com/shorts/QKtnoEXlyYI |
| 109 | short | April 12, 2026 | Apr 12, 2026 | 1,256 views | https://www.youtube.com/shorts/EjDyPCuCEec |
| 110 | short | April 12, 2026 | Apr 12, 2026 | 47 views | https://www.youtube.com/shorts/xhvlchS7ey0 |
| 111 | short | April 11, 2026 | Apr 11, 2026 | 41 views | https://www.youtube.com/shorts/wrnEYeZ4K84 |
| 112 | short | another banger | Apr 11, 2026 | 261 views | https://www.youtube.com/shorts/WanLS0YJQUM |
| 113 | short | April 11, 2026 | Apr 11, 2026 | 1,457 views | https://www.youtube.com/shorts/uLPN8qT97wU |
| 114 | short | April 11, 2026 | Apr 11, 2026 | 36 views | https://www.youtube.com/shorts/3TsX7m-Es2M |
| 115 | short | April 11, 2026 | Apr 11, 2026 | 1,049 views | https://www.youtube.com/shorts/FYDLVuzGQNs |
| 116 | short | April 11, 2026 | Apr 10, 2026 | 793 views | https://www.youtube.com/shorts/K3fZ3zIijPY |
| 117 | short | April 10, 2026 | Apr 10, 2026 | 21 views | https://www.youtube.com/shorts/DDHusdSd-Nk |
| 118 | short | April 9, 2026 | Apr 9, 2026 | 1,017 views | https://www.youtube.com/shorts/IO6vx_vwib0 |
| 119 | short | April 9, 2026 | Apr 9, 2026 | 776 views | https://www.youtube.com/shorts/5FMtOfmZoR4 |
| 120 | short | April 9, 2026 | Apr 9, 2026 | 181 views | https://www.youtube.com/shorts/78t1LtPuYqE |
| 121 | short | April 9, 2026 | Apr 9, 2026 | 56 views | https://www.youtube.com/shorts/LS3mPmLkhRM |
| 122 | short | April 6, 2026 | Apr 6, 2026 | 1,209 views | https://www.youtube.com/shorts/55Mie8SNH5M |
| 123 | short | April 6, 2026 | Apr 6, 2026 | 35 views | https://www.youtube.com/shorts/hlL5-a1oCC8 |
| 124 | short | April 5, 2026 | Apr 5, 2026 | 123 views | https://www.youtube.com/shorts/65ZtWIfrzsE |
| 125 | short | April 4, 2026 | Apr 4, 2026 | 20 views | https://www.youtube.com/shorts/7rbNxjJU5Iw |
| 126 | short | April 4, 2026 | Apr 4, 2026 | 31 views | https://www.youtube.com/shorts/mfXGCnvSXlU |
| 127 | short | April 4, 2026 | Apr 4, 2026 | 13 views | https://www.youtube.com/shorts/R_nMDJdsBak |
| 128 | short | April 3, 2026 | Apr 3, 2026 | 16 views | https://www.youtube.com/shorts/fUlGiAzJppQ |
| 129 | short | April 3, 2026 | Apr 3, 2026 | 13 views | https://www.youtube.com/shorts/toxWodiH-qE |
| 130 | short | April 3, 2026 | Apr 3, 2026 | 20 views | https://www.youtube.com/shorts/waO3UM7wQ58 |
| 131 | short | April 3, 2026 | Apr 3, 2026 | 13 views | https://www.youtube.com/shorts/T5PNT4-Tz14 |
| 132 | short | April 3, 2026 | Apr 3, 2026 | 15 views | https://www.youtube.com/shorts/PkekIdJYPNo |
| 133 | short | April 3, 2026 | Apr 3, 2026 | 13 views | https://www.youtube.com/shorts/LeAhqwCY_z4 |
| 134 | short | April 3, 2026 | Apr 3, 2026 | 13 views | https://www.youtube.com/shorts/m4qobEWEQbA |
| 135 | short | April 3, 2026 | Apr 3, 2026 | 49 views | https://www.youtube.com/shorts/N7-4qytqEWA |
| 136 | short | April 3, 2026 | Apr 3, 2026 | 2,137 views | https://www.youtube.com/shorts/Iou6OXluN7w |
| 137 | short | April 2, 2026 | Apr 2, 2026 | 1,964 views | https://www.youtube.com/shorts/vYIp22IDfbA |
| 138 | short | April 1, 2026 | Apr 1, 2026 | 21 views | https://www.youtube.com/shorts/T4LVpZXDcDk |
| 139 | short | March 29, 2026 | Mar 29, 2026 | 22 views | https://www.youtube.com/shorts/K0tFpEZFAy8 |
| 140 | short | March 29, 2026 | Mar 29, 2026 | 1,828 views | https://www.youtube.com/shorts/eMWFyL_Mf1Q |
| 141 | short | March 26, 2026 | Mar 26, 2026 | 31 views | https://www.youtube.com/shorts/SwHhoJjHuxo |
| 142 | short | March 25, 2026 | Mar 25, 2026 | 1,113 views | https://www.youtube.com/shorts/dCJqktwVulg |
| 143 | short | March 25, 2026 | Mar 25, 2026 | 22 views | https://www.youtube.com/shorts/wn0pB-qMrqM |
| 144 | short | March 23, 2026 | Mar 23, 2026 | 19 views | https://www.youtube.com/shorts/ngL1b19W2YA |
| 145 | short | March 22, 2026 | Mar 22, 2026 | 76 views | https://www.youtube.com/shorts/aXxlZVAqg5E |
| 146 | short | March 22, 2026 | Mar 22, 2026 | 22 views | https://www.youtube.com/shorts/vO8cxMeLa48 |
| 147 | short | March 21, 2026 | Mar 21, 2026 | 126 views | https://www.youtube.com/shorts/ky_p8qdENTI |
| 148 | short | March 20, 2026 | Mar 20, 2026 | 19 views | https://www.youtube.com/shorts/Aav8YjK-xMQ |
| 149 | short | March 20, 2026 | Mar 20, 2026 | 1,522 views | https://www.youtube.com/shorts/gu4BwwkIdoo |
| 150 | short | March 19, 2026 | Mar 19, 2026 | 445 views | https://www.youtube.com/shorts/EyjUxrrUV5A |
| 151 | short | March 19, 2026 | Mar 19, 2026 | 15 views | https://www.youtube.com/shorts/tKbEKtrd8jY |
| 152 | short | March 19, 2026 | Mar 19, 2026 | 11 views | https://www.youtube.com/shorts/XHcu52A0IeY |
| 153 | short | March 19, 2026 | Mar 19, 2026 | 1,342 views | https://www.youtube.com/shorts/mGlETfsKmLQ |
| 154 | short | March 19, 2026 | Mar 19, 2026 | 1,258 views | https://www.youtube.com/shorts/FKApZhuaeoc |
| 155 | short | March 19, 2026 | Mar 19, 2026 | 2,509 views | https://www.youtube.com/shorts/dLBBfvFhRNs |
| 156 | short | March 17, 2026 | Mar 17, 2026 | 20 views | https://www.youtube.com/shorts/Lr6uKGkv_UQ |
| 157 | short | March 17, 2026 | Mar 17, 2026 | 14 views | https://www.youtube.com/shorts/7RFXj9k1Jy4 |
| 158 | short | March 17, 2026 | Mar 17, 2026 | 14 views | https://www.youtube.com/shorts/Zn9o91EnvO4 |
| 159 | short | March 17, 2026 | Mar 17, 2026 | 13 views | https://www.youtube.com/shorts/49gfRY4UOgk |
| 160 | short | March 17, 2026 | Mar 17, 2026 | 15 views | https://www.youtube.com/shorts/RgY_kLw2tb4 |
| 161 | short | March 17, 2026 | Mar 17, 2026 | 11 views | https://www.youtube.com/shorts/TmjXEBfX5_o |
| 162 | short | March 16, 2026 | Mar 16, 2026 | 16 views | https://www.youtube.com/shorts/UfdEgwZY7ys |
| 163 | short | March 16, 2026 | Mar 16, 2026 | 268 views | https://www.youtube.com/shorts/TW9nslGCWOU |
| 164 | short | March 16, 2026 | Mar 16, 2026 | 2,514 views | https://www.youtube.com/shorts/O_7HDfffb50 |
| 165 | short | March 16, 2026 | Mar 16, 2026 | 13 views | https://www.youtube.com/shorts/e7ZwokCEwTk |
| 166 | short | March 16, 2026 | Mar 16, 2026 | 14 views | https://www.youtube.com/shorts/H1Z7acIssg4 |
| 167 | short | March 16, 2026 | Mar 16, 2026 | 19 views | https://www.youtube.com/shorts/HWydqYdDdMI |
| 168 | short | March 16, 2026 | Mar 16, 2026 | 8 views | https://www.youtube.com/shorts/_8WZ6y6z5iI |
| 169 | short | March 16, 2026 | Mar 16, 2026 | 8 views | https://www.youtube.com/shorts/DP2Aqj9O2dg |
| 170 | short | March 15, 2026 | Mar 15, 2026 | 9 views | https://www.youtube.com/shorts/EHRzgixru7Y |
| 171 | short | March 15, 2026 | Mar 15, 2026 | 10 views | https://www.youtube.com/shorts/bXi-PhHMYNQ |
| 172 | short | March 15, 2026 | Mar 15, 2026 | 20 views | https://www.youtube.com/shorts/Di8Z3XcJJFU |
| 173 | short | March 15, 2026 | Mar 15, 2026 | 253 views | https://www.youtube.com/shorts/glfSBeLhHMA |
| 174 | short | March 15, 2026 | Mar 15, 2026 | 9 views | https://www.youtube.com/shorts/Q7SGbZ6B278 |
| 175 | short | March 15, 2026 | Mar 15, 2026 | 14 views | https://www.youtube.com/shorts/gZDF1RZQ1f0 |
| 176 | short | March 15, 2026 | Mar 15, 2026 | 2,029 views | https://www.youtube.com/shorts/bvlWXCSGlbc |
| 177 | short | March 14, 2026 | Mar 14, 2026 | 18 views | https://www.youtube.com/shorts/Pt05vYqZF3A |
| 178 | short | March 14, 2026 | Mar 14, 2026 | 1,739 views | https://www.youtube.com/shorts/E6WioZCNQkY |
| 179 | short | March 14, 2026 | Mar 14, 2026 | 25 views | https://www.youtube.com/shorts/sbUnSlKIr1A |
| 180 | short | March 14, 2026 | Mar 14, 2026 | 2,060 views | https://www.youtube.com/shorts/uatcXpSmngY |
| 181 | short | March 7, 2026 | Mar 7, 2026 | 19 views | https://www.youtube.com/shorts/w-zPk0FQOls |
| 182 | short | March 7, 2026 | Mar 7, 2026 | 15 views | https://www.youtube.com/shorts/IW7gObclBIU |
| 183 | short | March 7, 2026 | Mar 7, 2026 | 16 views | https://www.youtube.com/shorts/T8y0O5KZszk |
| 184 | short | March 7, 2026 | Mar 7, 2026 | 477 views | https://www.youtube.com/shorts/odvbm2vPn0w |
| 185 | short | March 7, 2026 | Mar 7, 2026 | 303 views | https://www.youtube.com/shorts/jNmBw_u7iCo |
| 186 | short | February 21, 2026 | Feb 21, 2026 | 214 views | https://www.youtube.com/shorts/9bmoIK9N1pM |
| 187 | short | February 18, 2026 | Feb 18, 2026 | 298 views | https://www.youtube.com/shorts/B44DQTW4NhA |
| 188 | short | February 18, 2026 | Feb 18, 2026 | 710 views | https://www.youtube.com/shorts/d5E_gbKsTr8 |
| 189 | short | February 15, 2026 | Feb 15, 2026 | 917 views | https://www.youtube.com/shorts/kwm5q72z7ko |
| 190 | short | February 14, 2026 | Feb 14, 2026 | 48 views | https://www.youtube.com/shorts/TGElp8gm_GQ |
| 191 | short | February 12, 2026 | Feb 12, 2026 | 13 views | https://www.youtube.com/shorts/FLH7hzHhbCc |
| 192 | short | February 12, 2026 | Feb 12, 2026 | 15 views | https://www.youtube.com/shorts/2EFwp8dghzY |
| 193 | short | February 12, 2026 | Feb 12, 2026 | 9 views | https://www.youtube.com/shorts/VSsR1ReMm8M |
| 194 | short | February 12, 2026 | Feb 12, 2026 | 7 views | https://www.youtube.com/shorts/VeztTkEYsUA |
| 195 | short | February 12, 2026 | Feb 12, 2026 | 8 views | https://www.youtube.com/shorts/garuYoM4sGQ |
| 196 | short | February 9, 2026 | Feb 9, 2026 | 1,178 views | https://www.youtube.com/shorts/kEGg596zqes |
| 197 | short | February 9, 2026 | Feb 9, 2026 | 4 views | https://www.youtube.com/shorts/MpQbHlcLrRg |
| 198 | short | February 8, 2026 | Feb 8, 2026 | 1,066 views | https://www.youtube.com/shorts/BsVl7CwBOYI |
| 199 | short | February 8, 2026 | Feb 8, 2026 | 21 views | https://www.youtube.com/shorts/wxrfnQzOBQc |
| 200 | short | February 8, 2026 | Feb 8, 2026 | 1,212 views | https://www.youtube.com/shorts/GPoaEYBYjm0 |
| 201 | short | February 8, 2026 | Feb 8, 2026 | 13 views | https://www.youtube.com/shorts/bzx5sXC-SM0 |
| 202 | short | February 7, 2026 | Feb 7, 2026 | 15 views | https://www.youtube.com/shorts/IX-i1B-jtco |
| 203 | short | February 6, 2026 | Feb 6, 2026 | 8 views | https://www.youtube.com/shorts/FGjwVMgM5ts |
| 204 | short | February 6, 2026 | Feb 6, 2026 | 10 views | https://www.youtube.com/shorts/cHBabIsxYI0 |
| 205 | short | February 6, 2026 | Feb 6, 2026 | 9 views | https://www.youtube.com/shorts/zYxdNtqwOoQ |
| 206 | short | February 5, 2026 | Feb 5, 2026 | 8 views | https://www.youtube.com/shorts/x4JXvoJ4Qhg |
| 207 | short | February 5, 2026 | Feb 5, 2026 | 8 views | https://www.youtube.com/shorts/2vN6Tnn9kkc |
| 208 | short | February 5, 2026 | Feb 5, 2026 | 6 views | https://www.youtube.com/shorts/nVD9IlLSslg |
| 209 | short | February 5, 2026 | Feb 5, 2026 | 12 views | https://www.youtube.com/shorts/tOZTsMk04Io |
| 210 | short | February 4, 2026 | Feb 4, 2026 | 11 views | https://www.youtube.com/shorts/nS-ChKfTgMs |
| 211 | short | February 3, 2026 | Feb 3, 2026 | 13 views | https://www.youtube.com/shorts/bJtWLZT5yAo |
| 212 | short | February 3, 2026 | Feb 3, 2026 | 18 views | https://www.youtube.com/shorts/p5zGndGRrKs |
| 213 | short | February 3, 2026 | Feb 3, 2026 | 12 views | https://www.youtube.com/shorts/HUHnD2euLiQ |
| 214 | short | February 3, 2026 | Feb 3, 2026 | 15 views | https://www.youtube.com/shorts/Z2wfq_BZk-s |
| 215 | short | February 3, 2026 | Feb 3, 2026 | 14 views | https://www.youtube.com/shorts/fha2EcOyNog |
| 216 | short | February 3, 2026 | Feb 3, 2026 | 12 views | https://www.youtube.com/shorts/Xqpa6CEgP5A |
| 217 | short | February 3, 2026 | Feb 3, 2026 | 11 views | https://www.youtube.com/shorts/gv23aKHRff0 |
| 218 | short | February 3, 2026 | Feb 3, 2026 | 10 views | https://www.youtube.com/shorts/QDnu6zwhYvw |
| 219 | short | February 3, 2026 | Feb 3, 2026 | 1,232 views | https://www.youtube.com/shorts/qHWp26hhGzw |
| 220 | short | January 31, 2026 | Jan 31, 2026 | 14 views | https://www.youtube.com/shorts/yaU1XKBqfX4 |
| 221 | short | January 31, 2026 | Jan 31, 2026 | 10 views | https://www.youtube.com/shorts/S4lF2UY8tD4 |
| 222 | short | January 31, 2026 | Jan 31, 2026 | 16 views | https://www.youtube.com/shorts/itp5HWO0c5c |
| 223 | short | January 31, 2026 | Jan 31, 2026 | 292 views | https://www.youtube.com/shorts/qzTh6Evn7fk |
| 224 | short | January 30, 2026 | Jan 30, 2026 | 11 views | https://www.youtube.com/shorts/9x99Di4W9is |
| 225 | short | January 30, 2026 | Jan 30, 2026 | 5 views | https://www.youtube.com/shorts/GtPQIpBVzCU |
| 226 | short | January 30, 2026 | Jan 30, 2026 | 3 views | https://www.youtube.com/shorts/pG1OQNk9HT0 |
| 227 | short | January 30, 2026 | Jan 30, 2026 | 6 views | https://www.youtube.com/shorts/se5nz1o1B90 |
| 228 | short | January 30, 2026 | Jan 30, 2026 | 5 views | https://www.youtube.com/shorts/rMiHc4lQ-GI |
| 229 | short | January 29, 2026 | Jan 29, 2026 | No views | https://www.youtube.com/shorts/RALbPoFCAmM |
| 230 | short | January 29, 2026 | Jan 29, 2026 | 3 views | https://www.youtube.com/shorts/INS7jKLc9Vk |
| 231 | short | January 29, 2026 | Jan 29, 2026 | 1 view | https://www.youtube.com/shorts/L3pMErvKVuw |
| 232 | short | January 29, 2026 | Jan 29, 2026 | 2 views | https://www.youtube.com/shorts/Ey1zh6USmbg |
| 233 | short | January 27, 2026 | Jan 27, 2026 | 1 view | https://www.youtube.com/shorts/FX_RfmMv3WE |
| 234 | short | January 25, 2026 | Jan 25, 2026 | 2 views | https://www.youtube.com/shorts/YTNJpUweHAQ |
| 235 | short | January 24, 2026 | Jan 24, 2026 | 4 views | https://www.youtube.com/shorts/m67-MJm640A |
| 236 | short | January 24, 2026 | Jan 24, 2026 | 6 views | https://www.youtube.com/shorts/TmPmaSEPdwA |
| 237 | short | January 24, 2026 | Jan 24, 2026 | 6 views | https://www.youtube.com/shorts/6oQHHfoV4M8 |
| 238 | short | January 24, 2026 | Jan 24, 2026 | 11 views | https://www.youtube.com/shorts/6mDXczxCvgQ |
| 239 | short | January 24, 2026 | Jan 24, 2026 | 10 views | https://www.youtube.com/shorts/AU5US68GoSk |
| 240 | short | January 24, 2026 | Jan 24, 2026 | 7 views | https://www.youtube.com/shorts/FiVrhRCksEk |
| 241 | short | January 24, 2026 | Jan 24, 2026 | 12 views | https://www.youtube.com/shorts/PP1YHs8c4v0 |
| 242 | short | January 24, 2026 | Jan 24, 2026 | 7 views | https://www.youtube.com/shorts/4-qVPPgUbOk |
| 243 | short | January 24, 2026 | Jan 24, 2026 | 17 views | https://www.youtube.com/shorts/slE0b2rb8tw |
| 244 | short | January 24, 2026 | Jan 24, 2026 | 12 views | https://www.youtube.com/shorts/p60DSstgzHo |
| 245 | short | January 23, 2026 | Jan 23, 2026 | 11 views | https://www.youtube.com/shorts/lnSNsTtD09A |
| 246 | short | January 23, 2026 | Jan 23, 2026 | 639 views | https://www.youtube.com/shorts/PPMOChj_THw |
| 247 | short | January 22, 2026 | Jan 22, 2026 | 275 views | https://www.youtube.com/shorts/1SUcda5EBkQ |
| 248 | short | January 21, 2026 | Jan 21, 2026 | 11 views | https://www.youtube.com/shorts/0sr5tyCP2C8 |
| 249 | short | January 21, 2026 | Jan 21, 2026 | 215 views | https://www.youtube.com/shorts/1BECGx2Gnb4 |
| 250 | short | January 21, 2026 | Jan 21, 2026 | 931 views | https://www.youtube.com/shorts/Iuxz09PL1xA |
| 251 | short | January 21, 2026 | Jan 21, 2026 | 71 views | https://www.youtube.com/shorts/H8km2f6XInk |
| 252 | short | January 21, 2026 | Jan 21, 2026 | 12 views | https://www.youtube.com/shorts/BKBloWOb2rU |
| 253 | short | January 20, 2026 | Jan 20, 2026 | 11 views | https://www.youtube.com/shorts/I6FalbNvnDU |
| 254 | short | January 20, 2026 | Jan 20, 2026 | 2,375 views | https://www.youtube.com/shorts/ObWmxGXhyDQ |
| 255 | short | January 20, 2026 | Jan 20, 2026 | 267 views | https://www.youtube.com/shorts/wg5QUxTjAxI |
| 256 | short | January 20, 2026 | Jan 20, 2026 | 8 views | https://www.youtube.com/shorts/kzAzhxWSbsw |
| 257 | short | January 18, 2026 | Jan 18, 2026 | 4 views | https://www.youtube.com/shorts/ekkSwgJery0 |
| 258 | short | January 13, 2026 | Jan 13, 2026 | 26 views | https://www.youtube.com/shorts/n2_KYk4Yk64 |
| 259 | short | January 13, 2026 | Jan 13, 2026 | 6 views | https://www.youtube.com/shorts/pYwDObZWTLM |
| 260 | short | January 13, 2026 | Jan 13, 2026 | 6 views | https://www.youtube.com/shorts/gB3n7sadaTE |
| 261 | short | December 15, 2025 | Dec 15, 2025 | 153 views | https://www.youtube.com/shorts/u-MZO3i5AsE |
| 262 | short | December 15, 2025 | Dec 15, 2025 | 11 views | https://www.youtube.com/shorts/30ERepUdHS4 |
| 263 | short | December 13, 2025 | Dec 13, 2025 | 4 views | https://www.youtube.com/shorts/wNnC_7gBNAM |
| 264 | short | December 13, 2025 | Dec 13, 2025 | 5 views | https://www.youtube.com/shorts/zfY56jpNAtg |
| 265 | short | December 11, 2025 | Dec 11, 2025 | 482 views | https://www.youtube.com/shorts/gaZbNriud24 |
| 266 | short | December 11, 2025 | Dec 11, 2025 | 5 views | https://www.youtube.com/shorts/63UEvxI4XFI |
| 267 | short | December 11, 2025 | Dec 11, 2025 | 3 views | https://www.youtube.com/shorts/S3xl3nW84ss |
| 268 | short | December 11, 2025 | Dec 11, 2025 | 8 views | https://www.youtube.com/shorts/M-_6HgD6Vbk |
| 269 | short | December 11, 2025 | Dec 11, 2025 | 5 views | https://www.youtube.com/shorts/_T0Ys58BpCE |
| 270 | short | December 11, 2025 | Dec 11, 2025 | 6 views | https://www.youtube.com/shorts/DixTmILaRB4 |
| 271 | short | #speechtosong reverse | Dec 10, 2025 | 86 views | https://www.youtube.com/shorts/g4C3VWvUWF0 |
| 272 | short | December 7, 2025 | Dec 7, 2025 | 10 views | https://www.youtube.com/shorts/Z4N6A1paDiE |
| 273 | short | December 7, 2025 | Dec 7, 2025 | 8 views | https://www.youtube.com/shorts/5w4KO7wQDZk |
| 274 | short | December 7, 2025 | Dec 7, 2025 | 8 views | https://www.youtube.com/shorts/hBYX-VMhaqs |
| 275 | short | December 7, 2025 | Dec 7, 2025 | 7 views | https://www.youtube.com/shorts/OY1w9inniNI |
| 276 | short | December 6, 2025 | Dec 6, 2025 | 8 views | https://www.youtube.com/shorts/ZiDIyTtjD0M |
| 277 | short | December 6, 2025 | Dec 6, 2025 | 20 views | https://www.youtube.com/shorts/d7ptgwtlEws |
| 278 | short | December 6, 2025 | Dec 6, 2025 | 7 views | https://www.youtube.com/shorts/oU5HzVlvdWI |
| 279 | short | December 6, 2025 | Dec 6, 2025 | 8 views | https://www.youtube.com/shorts/LKmXgkjsWR4 |
| 280 | short | December 6, 2025 | Dec 6, 2025 | 2 views | https://www.youtube.com/shorts/Nrye9aUTjZY |
| 281 | short | December 6, 2025 | Dec 6, 2025 | 3 views | https://www.youtube.com/shorts/-9RfU0YANWM |
| 282 | short | December 6, 2025 | Dec 6, 2025 | 5 views | https://www.youtube.com/shorts/D9BuEzvpxzI |
| 283 | short | December 6, 2025 | Dec 6, 2025 | 12 views | https://www.youtube.com/shorts/br1U_RLsbKY |
| 284 | short | December 2, 2025 | Dec 2, 2025 | 7 views | https://www.youtube.com/shorts/0wN73VY-dUM |
| 285 | short | December 2, 2025 | Dec 2, 2025 | 4 views | https://www.youtube.com/shorts/-pSswzFQDiA |
| 286 | short | December 2, 2025 | Dec 2, 2025 | 7 views | https://www.youtube.com/shorts/vIsQooVj5gI |
| 287 | short | December 2, 2025 | Dec 2, 2025 | 3 views | https://www.youtube.com/shorts/6l26eJB8AY4 |
| 288 | short | December 2, 2025 | Dec 2, 2025 | 5 views | https://www.youtube.com/shorts/-HEzzOZw9L8 |
| 289 | short | December 2, 2025 | Dec 2, 2025 | 6 views | https://www.youtube.com/shorts/rTMzCpxZhB8 |
| 290 | short | December 2, 2025 | Dec 2, 2025 | 6 views | https://www.youtube.com/shorts/meNUzOvTvsI |
| 291 | short | December 2, 2025 | n/a | 1300 (list view) | https://www.youtube.com/shorts/EpYqXnvQmTA |
| 292 | short | December 2, 2025 | Dec 2, 2025 | 12 views | https://www.youtube.com/shorts/WnJX5tSvk_Q |
| 293 | short | December 2, 2025 | Dec 2, 2025 | 13 views | https://www.youtube.com/shorts/DOcUIf0c2WE |
| 294 | short | December 2, 2025 | Dec 2, 2025 | 6 views | https://www.youtube.com/shorts/qPPWdtV3ggU |
| 295 | short | December 2, 2025 | Dec 2, 2025 | 9 views | https://www.youtube.com/shorts/qdqwxBCXAgM |
| 296 | short | #DreamScreenAI | Dec 2, 2025 | 5 views | https://www.youtube.com/shorts/73fFblYQhoo |
| 297 | short | December 2, 2025 | Dec 2, 2025 | 6 views | https://www.youtube.com/shorts/hxQyyuVMkos |
| 298 | short | December 1, 2025 | Dec 1, 2025 | 1,324 views | https://www.youtube.com/shorts/CZu0aXjVfbY |
| 299 | short | November 30, 2025 | Nov 30, 2025 | 9 views | https://www.youtube.com/shorts/3S0Up4zM9pY |
| 300 | short | November 30, 2025 | Nov 30, 2025 | 8 views | https://www.youtube.com/shorts/1QMBEWxhsx4 |
| 301 | short | November 30, 2025 | Nov 30, 2025 | 1,645 views | https://www.youtube.com/shorts/4ovpGcD_fqY |
| 302 | short | November 27, 2025 | Nov 27, 2025 | 12 views | https://www.youtube.com/shorts/1ZMdyGoTP-M |
| 303 | short | November 27, 2025 | Nov 27, 2025 | 9 views | https://www.youtube.com/shorts/mWiorD11_m0 |
| 304 | short | November 27, 2025 | Nov 27, 2025 | 12 views | https://www.youtube.com/shorts/dhNVbUdhDRk |
| 305 | short | November 27, 2025 | Nov 27, 2025 | 6 views | https://www.youtube.com/shorts/nLGlaEPyWKA |
| 306 | short | November 27, 2025 | Nov 27, 2025 | 241 views | https://www.youtube.com/shorts/yztlv2VUAgQ |
| 307 | short | November 27, 2025 | Nov 27, 2025 | 9 views | https://www.youtube.com/shorts/SNPfO4L5dAs |
| 308 | short | November 25, 2025 | Nov 26, 2025 | 5 views | https://www.youtube.com/shorts/BHstXMpOcI4 |
| 309 | short | November 25, 2025 | Nov 25, 2025 | 6 views | https://www.youtube.com/shorts/2SL6_DgjMvE |
| 310 | short | November 25, 2025 | Nov 25, 2025 | 7 views | https://www.youtube.com/shorts/gj70MsgWq-4 |
| 311 | short | November 25, 2025 | Nov 25, 2025 | 6 views | https://www.youtube.com/shorts/KuNTT6lIinQ |
| 312 | short | November 25, 2025 | Nov 25, 2025 | 6 views | https://www.youtube.com/shorts/PPc3sfD8gHs |
| 313 | short | November 25, 2025 | Nov 25, 2025 | 6 views | https://www.youtube.com/shorts/-4tLMje4uNE |
| 314 | short | November 25, 2025 | Nov 25, 2025 | 7 views | https://www.youtube.com/shorts/g8TtSEaMHvI |
| 315 | short | November 25, 2025 | Nov 25, 2025 | 20 views | https://www.youtube.com/shorts/hpNN1Dd4W1Y |
| 316 | short | November 25, 2025 | Nov 25, 2025 | 8 views | https://www.youtube.com/shorts/du1HPV1OpVc |
| 317 | short | November 22, 2025 | Nov 22, 2025 | 7 views | https://www.youtube.com/shorts/7cZFkZhgj7g |
| 318 | short | November 22, 2025 | Nov 22, 2025 | 6 views | https://www.youtube.com/shorts/hRn1QTVMJuc |
| 319 | short | November 22, 2025 | Nov 22, 2025 | 8 views | https://www.youtube.com/shorts/aifXAZFNuRY |
| 320 | short | November 22, 2025 | Nov 22, 2025 | 12 views | https://www.youtube.com/shorts/8IrGoOxEgjM |
| 321 | short | November 22, 2025 | Nov 22, 2025 | 31 views | https://www.youtube.com/shorts/goicgO_lylA |
| 322 | short | November 22, 2025 | Nov 22, 2025 | 84 views | https://www.youtube.com/shorts/yZIfgtyBGYI |
| 323 | short | November 18, 2025 | Nov 18, 2025 | 31 views | https://www.youtube.com/shorts/EIvYYnHct7s |
| 324 | short | November 17, 2025 | Nov 17, 2025 | 24 views | https://www.youtube.com/shorts/EXGNHH3eQJA |
| 325 | short | November 17, 2025 | Nov 17, 2025 | 19 views | https://www.youtube.com/shorts/THoC02EhSXI |
| 326 | short | November 17, 2025 | Nov 17, 2025 | 1,673 views | https://www.youtube.com/shorts/84KPEc8q7_Q |
| 327 | short | November 17, 2025 | Nov 17, 2025 | 16 views | https://www.youtube.com/shorts/SNFtNWCmMLg |
| 328 | short | November 17, 2025 | Nov 17, 2025 | 17 views | https://www.youtube.com/shorts/ZAG8o9zQZww |
| 329 | short | November 17, 2025 | Nov 17, 2025 | 18 views | https://www.youtube.com/shorts/Afmoxbl-zlA |
| 330 | short | November 17, 2025 | Nov 17, 2025 | 29 views | https://www.youtube.com/shorts/4paUQ9lZw9c |
| 331 | short | November 16, 2025 | Nov 16, 2025 | 21 views | https://www.youtube.com/shorts/NvDJiPvwYTY |
| 332 | short | November 16, 2025 | Nov 16, 2025 | 14 views | https://www.youtube.com/shorts/G_0A0UUW6fU |
| 333 | short | November 16, 2025 | Nov 16, 2025 | 11 views | https://www.youtube.com/shorts/zDaxPWNBbs8 |
| 334 | short | November 16, 2025 | Nov 16, 2025 | 19 views | https://www.youtube.com/shorts/Mbbpj-CSuPQ |
| 335 | short | November 16, 2025 | Nov 16, 2025 | 27 views | https://www.youtube.com/shorts/lGPPvuoaUKw |
| 336 | short | November 16, 2025 | Nov 16, 2025 | 21 views | https://www.youtube.com/shorts/oEsOdJ7t86I |
| 337 | short | November 16, 2025 | Nov 16, 2025 | 211 views | https://www.youtube.com/shorts/rgoyT9Sa7ZQ |
| 338 | short | November 15, 2025 | Nov 15, 2025 | 26 views | https://www.youtube.com/shorts/rATcvPi4nTo |
| 339 | short | November 15, 2025 | Nov 15, 2025 | 21 views | https://www.youtube.com/shorts/BTvnlCP9WUk |
| 340 | short | November 15, 2025 | Nov 15, 2025 | 261 views | https://www.youtube.com/shorts/hEiieXkHBtk |
| 341 | short | November 14, 2025 | Nov 14, 2025 | 386 views | https://www.youtube.com/shorts/TrK_D_jtqB8 |
| 342 | short | November 14, 2025 | Nov 14, 2025 | 186 views | https://www.youtube.com/shorts/mfa1FVcT138 |
| 343 | short | November 13, 2025 | Nov 13, 2025 | 17 views | https://www.youtube.com/shorts/K6wkgCWyRbU |
| 344 | short | November 13, 2025 | Nov 13, 2025 | 17 views | https://www.youtube.com/shorts/YIYpQVWeOlI |
| 345 | short | November 12, 2025 | Nov 12, 2025 | 26 views | https://www.youtube.com/shorts/DXRpLsLyuXI |
| 346 | short | November 12, 2025 | Nov 12, 2025 | 23 views | https://www.youtube.com/shorts/jVS7dUZjq50 |
| 347 | short | November 11, 2025 | Nov 11, 2025 | 18 views | https://www.youtube.com/shorts/X7GeIBmLy7U |
| 348 | short | November 11, 2025 | Nov 11, 2025 | 17 views | https://www.youtube.com/shorts/vaPj7ZvDIf8 |
| 349 | short | November 11, 2025 | Nov 11, 2025 | 36 views | https://www.youtube.com/shorts/RC7OIGxBFRQ |
| 350 | short | November 10, 2025 | Nov 10, 2025 | 1,583 views | https://www.youtube.com/shorts/0xhlrSAUm5Y |
| 351 | short | Nothing like diving into Alligator Reef and coming face-to-face with a nurse shark. | Oct 4, 2025 | 33 views | https://www.youtube.com/shorts/YvMU4a8SCBQ |
