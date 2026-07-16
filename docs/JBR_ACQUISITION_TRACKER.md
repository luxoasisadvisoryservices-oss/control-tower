# JBR Acquisition Tracker

Last updated: 14 July 2026, 15:08 Dubai time

## 14 Jul reply sweep, 15:08 Dubai

Fresh Gmail/OAuth sweep across the June 19-20 outreach set and the 3 Jul forwarded-alert batch found no new human replies. The only candidate thread remained the already-known `prioritydubbaiuae@gmail.com` mailer-daemon bounce, which stays excluded from lead notifications.

No new actionable lead emerged, so no reply draft or external send is needed on this pass.

## 14 Jul public-source refresh

Fresh public-source refresh keeps the current JBR comparison lanes alive:

- Bahar 6 remains the strongest 1BR JBR lane: fully furnished Marina-view stock is still live and fits holiday-home inventory.
- Murjan 2 remains the best backup 1BR lane: furnished, sea/marina-view, beach-close routes are still live.
- Jumeirah Gate Tower 1 remains a premium exception only: still live with fully furnished Marina-view 1BR routes.
- Sadaf 7 remains the active 2BR comparison lane: upgraded, fully furnished, sea/palm or marina-view routes are still live.
- Rimal 1 stays a secondary live comparison lane.
- Murjan 3 / Murjan 4 surfaced as backup JBR 2BR routes, but stay secondary to the main lanes above.
- Quality filter stays strict: prioritise proper holiday-home inventory with good furnishing, clean presentation, balcony/view, and strong guest appeal; downgrade weakly furnished or poor-layout units unless economics are exceptional.

## 11 Jul outbound engine blocker, 17:10 Dubai

Fresh Gmail/Spam/All Mail checks at the 17:10 Dubai outbound pass surfaced only portal-style Property Finder forwards and already-sent JBR outreach threads. The new portal noise did not expose any fresh clean direct-email route, and the configured worker queue was already exhausted, so no live send was made on this pass.

No Damiano notification was sent because there was no sendable direct-email lead. Current JBR outbound remains focused on fresh public-agent email routes only, not portal-only, owner-direct, WhatsApp-only, phone-only, contact-form-only, bounced, or weak-economics leads.

Last updated: 11 July 2026, 17:10 Dubai time

## 10 Jul reply sweep and public-source refresh

Live Gmail/OAuth sweep across the 19-20 Jun outreach set and the 3 Jul forwarded-alert batch found no new external acquisition replies from the tracked contact list or subject filters. The only new matches were internal Lux Oasis ops, Hostaway, DHCM, and Airbnb/Superhost traffic, which stays out of the acquisition reply queue.

Public-source JBR checks still show the same live comparison lanes:

| Building | Public signal | Fit |
|---|---|---|
| Bahar 6 | Fresh Property Finder routes remain active, including fully furnished 1BRs around AED 85k-90k with Marina-view / fully furnished presentation | Strongest current 1BR lane |
| Murjan 1 | Fresh Property Finder routes remain active, including a fully furnished 1BR around AED 230k and a lower-rent fully furnished route around AED 115k in the live search set | Premium 1BR comparison lane |
| Murjan 2 | Fresh Property Finder routes remain active, including fully furnished / vacant 1BR stock around AED 100k-105k | Strong backup 1BR lane |
| Rimal 1 | Fresh Property Finder and Bayut routes remain active for furnished 2BR stock around AED 150k-165k | Strong 2BR comparison lane |
| Sadaf 7 | Fresh Property Finder routes remain active for furnished 2BR stock around AED 120k-145k, with upgraded and sea-view presentation | Main 2BR comparison lane |
| Jumeirah Gate Tower 1 / Address JBR | Fresh Property Finder routes remain active for premium furnished 1BR stock with Marina view / high-floor presentation | Premium exception lane only |

No notification was sent to Damiano because there was no new reply and no newly qualified lead requiring immediate action.

## 9 Jul outbound recovery, 17:13 Dubai

Live Gmail sweep at 17:10 found two new Property Finder alert forwards in Spam, both portal-only:

- `FW: 39 new properties you'll love` for JBR 1-bed search
- `FW: 6 new properties you'll love` for Sparkle Towers, which remains parked

No new direct-email lead came from the alerts themselves, so the outbound worker used the refreshed public-route lane instead. Two clean approved-pattern direct emails were sent:

| Building | Lead | Email | Gmail message ID | Thread ID | Status |
|---|---|---|---|---|---|
| Bahar 6 | Furnished 1BR, AED 95,000/year, Royal Home Real Estate public route | info@royalhome.ae | 19f4702b0a45073f | 19f4702b0a45073f | Sent 9 Jul 2026 17:13 Dubai |
| Murjan 1 | Furnished 1BR, AED 120,000/year, Allsopp & Allsopp public route | info.uae@allsoppandallsopp.com | 19f4702b36879e81 | 19f4702b36879e81 | Sent 9 Jul 2026 17:13 Dubai |

Worker state updated in `memory/jbr-agent-outbound-state.json`. Control Tower refresh queued after this write.

## 9 Jul recovery / outbound engine restored

Damiano correctly flagged that no property-agent email had been sent since 3 July and that the task had drifted into passive reply-watch. Recovery action: created a dedicated outbound Gmail worker at `scripts/jbr_outbound_agent_email_worker.mjs`, sent one clean approved-pattern JBR agent email, and created recurring outbound cron `9ff8ca01-3791-4ee3-b477-7decb922a508` for 09:10, 13:10 and 17:10 Dubai.

Live send completed:

| Building | Lead | Email | Gmail message ID | Thread ID | Status |
|---|---|---|---|---|---|
| Amwaj 4 | Furnished 1BR, marina view, near beach, 1,170 sqft, AED 100,000/year, Property Finder/Bayut public route via Natalia Rogovaya / Prive Real Estate | info@prive-re.com | 19f46d98c8b07e04 | 19f46d98c8b07e04 | Sent 9 Jul 2026 16:28 Dubai |

## 9 Jul Gmail/public-source sweep

No new human replies were found in the JBR acquisition inbox scan for the 19-20 Jun outreach set or the 3 Jul forwarded-alert batch. The only in-scope mail remained the existing `prioritydubbaiuae@gmail.com` bounce, which stays excluded from lead notifications.

| Building | Public route | Signal | Next action |
|---|---|---|---|
| Bahar 6 | Live Property Finder / Bayut / Dubizzle routes remain active, including a current furnished 1BR around AED 90k with a clean Marina-and-water-view angle | Still the strongest JBR 1BR lane on the current public sweep | Keep as the top JBR 1BR comparison lane and prefer the clean furnished / Marina-view options |
| Murjan 2 | Live Property Finder / Bayut / Dubizzle routes remain active, including current furnished / upgraded / sea-view variations | Strong 1BR backup lane; the current search shows the route is still breathing | Hold as a strong current Murjan 2 comparison lane and keep public-agent route only |
| Rimal 1 | Live Property Finder and Bayut routes remain active for furnished 2BR units | Solid JBR 2BR route with balcony / marina / canal-view upside | Keep as the stronger JBR 2BR comparison lane behind the best JBR 1BR routes |
| Sadaf 7 | Live Property Finder and Bayut routes remain active for furnished 2BR units | Still the main 2BR comparison lane with good furnished presentation | Keep as the primary Sadaf 7 comparison lane |
| Jumeirah Gate Tower 1 | Live Property Finder routes remain active for furnished premium 1BR inventory | Premium exception lane with strong furnishing and prestige signal | Use only if the economics justify a premium JBR exception |

13:02 Dubai public-source check reconfirmed the same live JBR comparison lanes with no priority change: Bahar 6 and Murjan 2 remain the best 1BR routes, Rimal 1 and Sadaf 7 remain the main 2BR routes, and Jumeirah Gate Tower 1 stays a premium exception only.

## 8 Jul Gmail/public-source sweep

No new human replies were found in the JBR acquisition inbox scan for the 19-20 Jun outreach set or the 3 Jul forwarded-alert batch. The scan only surfaced the existing `prioritydubbaiuae@gmail.com` bounce, which stays excluded from lead notifications.

| Building | Public route | Signal | Next action |
|---|---|---|---|
| Bahar 6 | Live Property Finder / Bayut / Dubizzle routes remain active, including fully furnished Marina-view examples | Still the strongest JBR 1BR lane on the current public sweep | Keep as the top JBR 1BR comparison lane and prefer the clean furnished / Marina-view options |
| Murjan 2 | Live Property Finder / Bayut / Dubizzle routes remain active, including furnished / upgraded / sea-view variations | Strong 1BR backup lane; the current search shows the route is still breathing | Hold as a strong current Murjan 2 comparison lane and keep public-agent route only |
| Rimal 1 | Live Property Finder and Bayut routes remain active for furnished 2BR units | Solid 2BR route with balcony / marina / canal view upside | Keep as the stronger JBR 2BR comparison lane behind the best JBR 1BR routes |
| Sadaf 7 | Live Property Finder and Bayut routes remain active for furnished 2BR units | Still the main 2BR comparison lane with good furnished presentation | Keep as the primary Sadaf 7 comparison lane |
| Jumeirah Gate Tower 1 | Live Property Finder routes remain active for an elegant furnished 1BR at Address JBR | Premium exception lane with strong furnishing and prestige signal | Use only if the economics justify a premium JBR exception |

2026-07-08 08:02 Dubai property outreach run: fresh Gmail/Spam property alerts were checked before the approved send window, but no new direct-email holiday-home lead was exposed for autonomous outreach. The new alert set remained portal-only or manual-route only, so no outbound property email was sent.

2026-07-08 13:03 Dubai Gmail sweep: no new JBR acquisition replies were found for the 19-20 Jun outreach set or the 3 Jul forwarded-alert batch. The only in-scope hits were operational Airbnb / Hostaway / DHCM notifications, so no Damiano alert was sent and no tracker lead row changed.

2026-07-08 17:04 Dubai Gmail/public-source sweep: no new JBR acquisition replies were found for the 19-20 Jun outreach set or the 3 Jul forwarded-alert batch. Fresh public search still shows Bahar 6, Murjan 2, Rimal 1, Sadaf 7 and Jumeirah Gate Tower 1 as the live comparison lanes, so no lead-row change was needed.

## 7 Jul evening Gmail/Junk recovery pass

Damiano asked to check property emails landing in Junk and make sure useful acquisition opportunities are not missed. The scan found no new direct agent-email Property Finder/Bayut/Dubizzle alert ready for autonomous email send, but it did surface two Betterhomes follow-up threads and opened a new Downtown / Old Town expansion lane.

| Lead | Evidence | Contact route | Recommendation | Next action |
|---|---|---|---|---|
| Bahar 6, JBR, furnished 1BR, approx. 761 sqft, around AED 93,000/year | Betterhomes customer-care thread `19f036597380159c`, subject `Fwd: Fwd: Bahar 6 1BR - owner interest in holiday-home management`; prior Betterhomes routes `bh-r-231098` and `bh-r-230165` | WhatsApp Sumayla Ishrat Ali `+971 52 511 8669` or Linda Naman `+971 52 229 6131` from the 26 Jun Betterhomes reply note | Send outreach / follow-up | Ask whether the owner is open to Lux Oasis holiday-home management or revenue-share |
| Sadaf 7, JBR, furnished 2BR, around AED 125,000/year | Betterhomes customer-care thread `19f03662d1f07e75`, subject `Fwd: Fwd: Sadaf 7 2BR - owner interest in holiday-home management`; prior Betterhomes route `bh-r-228006` | WhatsApp Isobel Maria Donovan `+971 58 530 0409` from the 26 Jun Betterhomes reply note | Draft only / lower priority than Bahar 6 | Use as 2BR comparison and follow up if Bahar 6 stalls or Damiano approves the broader Betterhomes WhatsApp pass |
| Downtown / Old Town expansion | Junk/Spam Property Finder alerts from 17 Jun, 18 Jun and 6 Jul surfaced Burj Views C, Burj Crown, South Ridge 5, Zaafaran 4, The Residences 5 and Forte 2 candidates | Direct emails not exposed in the alert; use Property Finder / WhatsApp / public agent route when visible | Draft only until contact route/approval | See `DOWNTOWN_OLD_TOWN_ACQUISITION_TRACKER_2026-07-07.md` |

## Active outreach

| Agent | Property | Public contact | Sent | Status | Next action |
|---|---|---|---|---|---|
| Ahmed Hassan, Stone Bridge Real Estate | Murjan 2, 1BR, AED 90,000 | ahmedh@stonebridgere.ae | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Tereza Hlubinakova, Tereza Estates | Furnished Murjan 2, 1BR, AED 100,000 | hello@terezaestates.com | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Luiza Spiridonova, Top Priority Real Estate | Sadaf 7, 1BR, AED 100,000 | prioritydubbaiuae@gmail.com | 19 Jun 2026 | Bounced / invalid email | Do not retry by email; use public route only if reopened |
| Isobel Donovan, Betterhomes | Murjan 6, 2BR, AED 110,000 | isobel.donovan@bhomes.com | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Joseph Rochester, Dacha Real Estate | Rimal 1, 1BR, AED 95,000 | joseph.r@dacha.ae | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Kristel Ann Sinohin, Elysian Real Estate | Shams 1, 2BR, AED 110,000 | info@elysian.com | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Fatima Dunn, Atomic Properties | Rimal 1, 2BR, AED 120,000 | fatimadunn@live.com | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Urvashi Sidhapara, Betterhomes | Sadaf 7, 2BR, AED 120,000 | urvashi.s@bhomes.com | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Maximilian Hoffmann, Engel & Völkers | Murjan 2, 1BR, AED 120,000 | maximilian.hoffmann@engelvoelkers.com | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Talin Nizam, Luxbridge International Realty | Bahar 6, 1BR, AED 105,000 | talin@luxbridgerealty.com | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Shahid Basha Laat, Your Homes Real Estate | Bahar 6, 1BR, AED 107,000 | shahidyourhomes@gmail.com | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Illia Bilyk, Sumy Real Estate | Bahar, 2BR, AED 124,997 | illia@sumyre.com | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Olga Rusu, OBG Real Estate | Shams 1, 2BR, AED 130,000 | olga@obg.ae | 19 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| ARB Real Estate | Bahar 6, 1BR, lower annual-rental range | info@arbrealtors.com | 20 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Elina Ceban / McCone Properties | Bahar 6, 1BR, AED 90,000 | info@mcconeproperties.com | 20 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Spica Real Estate | Bahar 6 / JBR 1BR owner route | welcome@spica.realestate | 20 Jun 2026 | Awaiting reply | Ask for suitable Bahar/JBR owners open to revenue-share management |
| LMA Elite Properties | Sadaf 7, 2BR, approx. AED 105,000 | Info@lmaeliteproperties.com | 20 Jun 2026 | Bounced / invalid email | Do not retry by email; use public platform contact route only if reopened |
| La Capitale Real Estate | Sadaf 7, 2BR, approx. AED 110,000 | info@lcdubai.com | 20 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Dacha Real Estate | Sadaf 7, 2BR public rental route | info@dacha.ae | 20 Jun 2026 | Awaiting reply | Confirm availability and owner interest |
| Carmen Davis, Exclusive Links Real Estate Brokers - Marina Branch | Murjan 2, 1BR, 1,100 sqft, AED 100,000/year, available now / 1 month free | carmen@exclusive-links.com | 3 Jul 2026 | Sent | Confirm availability and owner revenue-share interest |
| Dina Uvasheva, fam Properties - Branch 13 | Rimal 3, 1BR, 928 sqft, AED 114,000/year, Dubai Ain view / central location | dina.u@famproperties.com | 3 Jul 2026 | Sent | Confirm availability and owner revenue-share interest |
| Mozhgan Moradimehreh, Driven Properties | Jumeirah Gate Tower 1, furnished 1BR, 624 sqft, AED 125,000/year, marina view / high floor | mozhgan@drivenproperties.com | 3 Jul 2026 | Sent | Confirm availability and owner revenue-share interest |
| Cagri Ulucenk / VayK Vacation Homes | La Vie, JBR, 1BR, 912 sqft, AED 139,000/year | operations@vayk.ae | 3 Jul 2026 | Sent | Confirm availability and whether owner would consider revenue-share despite high rent |

## Live public-source sweep, 6 Jul 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Furnished 1BR, 761-780 sqft, AED 85,000-95,000/year, Marina / canal / sea-view angles | Property Finder and Bayut live routes via Huspy / Saif, Thrivestate Square Real Estate, Wakhan Properties and Alhad Real Estate | Still the strongest JBR 1BR lane and the best balance of furnishing, layout and guest appeal | Keep as the top JBR route and prefer the clean Marina-view options |
| Murjan 2 | Furnished 1BR, 1,074-1,106 sqft, AED 90,000-105,000/year, sea / marina / vacant / upgraded angles | Property Finder and Bayut live routes via Property Concierge Real Estate, fäm Properties, Dacha, Exclusive Links and Wakhan Properties | Strong backup Murjan route and still well aligned with the holiday-home inventory filter | Keep as comparison lane, using public agent routes only |
| Murjan 1 | Fully furnished / upgraded 1BR, AED 89,999-119,000/year | Property Finder and Bayut live routes | Premium comparison route with stronger size and location proof than weaker JBR stock | Hold as the higher-rent Murjan comparison lane |
| Sadaf 7 | Furnished 2BR, marina / sea / community-view angles, AED 109,999-170,000/year | Property Finder and Bayut live routes via Betterhomes, Driven Properties, Your Homes, La Capitale, E&S and Haus & Haus | Active 2BR comparison lane with strong presentation only when furnishing is genuinely good | Hold as 2BR comparison lane; do not reopen Sparkle Tower |

## Fresh public-source research, 6 Jul 2026 afternoon sweep

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Furnished 1BR routes visible today around AED 90,000-100,000/year, including Marina View / vacant / fully furnished angles | Property Finder live routes via Pamela Taubert, Talin Nizam, Charlie Simmonds and Maher Mahmoud | Strongest current JBR 1BR lane and the best refreshed route set from this scan | Keep as the top JBR 1BR comparison lane and prefer the clean Marina-view options |
| Murjan 1 | Fully furnished / upgraded 1BR routes visible today, including full sea-view / spacious / vacant angles | Property Finder live routes via Figo Fernandes and Jamie Leach | Strong current Murjan 1 route set and still a good guest-appeal comparison lane | Hold as the current Murjan 1 comparison route and stay on public agent routes only |
| Rimal 1 | Furnished 1BR and 2BR routes visible today with upgraded / sea-view / spacious presentation | Property Finder live routes via Jamie Leach plus current Bayut search results | Fresh secondary JBR route with better presentation than weak stock | Keep as a backup comparison lane behind Bahar 6 and Murjan 1 |
| Jumeirah Gate Tower 1 / Address JBR | Fully furnished 2BR premium routes visible today with vacant / high-floor / beach-access angles | Property Finder live routes via Anastasiia Khan and Amanullah Anwar | Premium exception route, but still valid for high-end JBR comparison | Use only if the economics justify a premium JBR exception |
| Sadaf 7 | Fully furnished 2BR routes visible today with vacant / beach-access / marina-view angles | Property Finder live route via Sebastian Maamari plus current Bayut search results | Active 2BR comparison lane and still relevant for the current campaign | Keep as the main 2BR comparison lane, but do not reopen Sparkle Tower |

## Fresh public-source research, 7 Jul 2026 morning sweep

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Newly furnished 1BR, near JBR Beach / Marina-view angles | Property Finder live routes remain active | Still the strongest JBR 1BR lane and the cleanest holiday-home fit | Keep as the top JBR 1BR comparison lane and prefer the Marina-view / newly furnished stock |
| Murjan 1 | Luxury upgrades, furnished / vacant 1BR | Property Finder live routes remain active | Strong comparison lane and still a good guest-appeal route | Hold as the premium Murjan 1 comparison route |
| Rimal 1 | Furnished 2BR, marina-view / beach-access angles | Property Finder live routes remain active | Good secondary JBR route with strong layout and guest appeal | Keep as the main Rimal 1 comparison lane behind Bahar 6 / Murjan 1 |
| Sadaf 7 | Fully furnished 2BR, ready-to-move-in / premium presentation | Property Finder and Bayut live routes remain active | Current 2BR comparison lane and still relevant for the campaign | Hold as the main Sadaf 7 comparison lane |
| Jumeirah Gate Tower 1 / Address JBR | Fully furnished premium 1BR routes with marina / beach-access angles | Property Finder live routes remain active | Premium exception route, worth keeping as a comparison lane only when economics justify it | Use only if a premium JBR exception is warranted |

## Forwarded property-alert scan, 3 Jul 2026 evening

Damiano approval note, 3 Jul 2026 22:06 Dubai: the concise La Vie-style revenue-share opener is approved for comparable JBR holiday-home acquisition listings too. Use it for future relevant JBR rental/management leads where the agent email is available. Do not use it for Greens sale/renovation watchlist leads; those need acquisition notes instead.

| Lead | Source | Contact found | Score / decision | Action |
|---|---|---|---|---|
| Murjan 2, JBR, 1BR, 1,100 sqft, AED 100,000/year, Property Finder `110958313`, ref `CDSJBR-R-064715` | Forwarded Property Finder alert received 3 Jul 2026 13:39 Dubai | Carmen Davis, `carmen@exclusive-links.com`, `+971521742947`; broker Exclusive Links `louise@exclusive-links.com` | Strong fit: JBR/Murjan priority, 1BR, reasonable rent band, available now | Revenue-share opener sent by Gmail ID `19f29128b2fedf21`, thread `19f29128b2fedf21` |
| Rimal 3, JBR, 1BR, 928 sqft, AED 114,000/year, Property Finder `110961876`, ref `PF-CtQm-AR-175189` | Forwarded Property Finder alert received 3 Jul 2026 13:39 Dubai | Dina Uvasheva, `dina.u@famproperties.com`, `+971524523443`; broker fam Properties `fateh@famproperties.com` | Good fit: JBR, furnished-style lead with view/location upside, rent higher but still worth owner-interest check | Revenue-share opener sent by Gmail ID `19f29128c1018409`, thread `19f29128c1018409` |
| Jumeirah Gate Tower 1 / Address JBR, furnished 1BR, 624 sqft, AED 125,000/year, Property Finder `110533458`, ref `DPF-R-44832` | Forwarded Property Finder alert received 3 Jul 2026 13:39 Dubai | Mozhgan Moradimehreh, `mozhgan@drivenproperties.com`, `+971559405703`; broker Driven Properties `abdullah@driven-properties.com` | Premium JBR exception: high rent but strong building/view/guest appeal, worth asking if owner is open | Revenue-share opener sent by Gmail ID `19f29128f696f15f`, thread `19f29128f696f15f` |
| La Vie, JBR, 1BR, 912 sqft, AED 139,000/year, Property Finder `110953096` | Forwarded Property Finder alert received 3 Jul 2026 13:39 Dubai | Cagri Ulucenk / VayK Vacation Homes, `operations@vayk.ae`, `+971522401156` | High-rent stretch lead and listed by vacation-home operator, but Damiano asked to send anyway | Revenue-share opener sent by Gmail ID `19f291ab6d5c4c21`, thread `19f291ab6d5c4c21` |
| The Greens sale alert: Al Arta / Al Dhafra / Al Thayyal 1BRs | Forwarded Property Finder alert received 3 Jul 2026 16:16 Dubai | Property Finder listing routes visible | Parked for Greens flip box: visible 1BRs are AED 1.35m-1.56m, above current AED 1.0m-1.05m watch range | No send |

## The Greens renovation / flip watchlist check, 3 Jul 2026

| Check | Evidence | Decision |
|---|---|---|
| Target buy-box | 1BR sale in The Greens around AED 1.0m-AED 1.05m | Keep watching; do not contact unless a real 1BR appears close to this range |
| Forwarded alert | Latest visible 1BR sale routes in Al Arta / Al Dhafra / Al Thayyal were AED 1.35m-AED 1.56m | No fit |
| Public Property Finder check | Current 1BR Greens examples visible from public search start around AED 1.25m-AED 1.35m for the lowest relevant 1BRs, with many 1BRs at AED 1.4m+ and average 1BR area prices around AED 1.3m-AED 1.57m depending on subcommunity | Still above buy-box |
| Public Bayut / Dubizzle check | Sub-AED 1.05m Greens options visible publicly were studios or non-Greens / other-Greens-community matches, not target The Greens 1BR flip units | Do not treat as match |

## Fresh public-source research, 1 Jul 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Furnished 1BR, 761 sqft, AED 90,000/year, luxury specs / sea view | Property Finder live page via Catalin Trifan | Strongest refreshed Bahar 6 1BR lane, not contacted | Keep as the top current JBR 1BR route |
| Bahar 6 | Furnished 1BR, 761 sqft, AED 99,000/year, vacant / marina view | Property Finder live page via Talin Nizam | Strong refreshed Bahar 6 1BR lane, not contacted | Use as the alternate current route if the AED 90k lane stalls |
| Sadaf 7 | Furnished 2BR, 1,432 sqft, AED 145,000/year, luxury renovation, premium furniture, partial marina/courtyard views | Property Finder live page via Thrivestate Square Real Estate | Fresh premium JBR 2BR lane, not contacted | Keep as the current higher-spec Sadaf 7 route; compare against the lower June anchor before outreach |

## Fresh public-source research, 2 Jul 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Furnished 1BR, 761-780 sqft, AED 84,000-99,000/year, including a refreshed AED 90,000 route and a fresh Marina View / 20 Jul availability route | Property Finder live results via Royal Home Real Estate, Luxbridge International Realty, Exclusive Links, Top House, and betterhomes | Strongest current JBR 1BR lane, not contacted | Keep as the top Bahar 6 route set and prefer the clean furnished / Marina-view options |
| Murjan 1 | Furnished 1BR, 1,105 sqft, AED 89,000/year, vacant / furnished / upgraded | Property Finder live route via Allsopp & Allsopp / Georgia Ward | Fresh Murjan 1 1BR route, not contacted | Add this as the strongest new Murjan 1 annual-rent lane for the next approved touchpoint |
| Sadaf 7 | Furnished 2BR, 1,418-1,448 sqft, AED 110,000-130,000/year, marina / sea view | Property Finder and Bayut live routes via LACASA Signature, Dacha, Your Homes, and other public agents | Fresh Sadaf 7 2BR support lane, not contacted | Keep as a viable 2BR comparison lane, but stay behind Bahar 6 and Murjan 1 for priority |

## Fresh public-source research, 3 Jul 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Furnished 1BR, live routes with beach-access / marina-view / sea-view angles | Property Finder routes via Royal Home Real Estate, DDA Real Estate, Sygma Real Estate, Sumayla Ishrat Ali, Thrivestate Square Real Estate, Huspy / Saif, and Wakhan Properties | Strongest refreshed JBR 1BR lane, not contacted | Keep as the top current JBR route and prefer the clean furnished / Marina-view options |
| Murjan 2 | Furnished 1BR, live routes with sea-view / vacant / upgraded angles | Property Finder routes via Wakhan Properties, Spica Real Estate, Ahmed Hassan, and other live Murjan 2 listing agents | Strong refreshed Murjan 2 lane, not contacted | Keep as the strongest Murjan 2 public route and compare against Bahar 6 before any approved outreach |
| Sadaf 7 | Furnished 2BR, live routes with vacant / high-floor / sea-view angles | Property Finder routes via A L H Properties, Aaronz & Co Real Estate, Lacasa Signature Properties, DNH Real Estate, LUXFolio, and other live JBR agents | Strong refreshed Sadaf 7 2BR lane, not contacted | Hold as the main 2BR comparison lane for a later approved touchpoint |
| Rimal 1 | Furnished 2BR, live routes with marina-view / upgraded / open-views angles | Property Finder routes via White & Co Real Estate, AMR Square Real Estate, Fidu Properties, Afandi Real Estate, Unlock Properties, and others | Fresh support lane, not contacted | Keep as a secondary 2BR comparison lane behind Sadaf 7 unless economics improve |

## Fresh public-source research, 4 Jul 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Furnished 1BR, 761 sqft, AED 100,000/year, Marina view / vacant soon | Property Finder live route via Thrivestate Square Real Estate; fresh search result also shows a current Marina View | Fully furnished JBR 1BR route, not contacted | Keep as a current Bahar 6 route and compare against the older AED 90k anchor before any approved touchpoint |
| Murjan 1 | Fully furnished/upgraded 1BR, AED 115,000/year, prime location | Property Finder live route via Morgans International Realty 2 | Fresh Murjan 1 route, not contacted | Add as the current top Murjan 1 public comparison route |
| Sadaf 7 | Spacious furnished 2BR, vacant, walk to beach, AED 104,900/year | Property Finder live route via ALH Properties | Fresh Sadaf 7 route, not contacted | Keep as the strongest fresh Sadaf 7 annual-rent route for a later approved touchpoint |

## Fresh public-source research, 5 Jul 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Fully furnished 1BR, 779.74-780 sqft, current live routes around AED 85,000-90,000/year | Property Finder live routes via Betterhomes and DDA Real Estate; Bayut rent page also shows an AED 85,000 fully furnished Marina-view route via Sekenkoum Real Estate | Strong current JBR 1BR lane, not contacted | Keep as the top Bahar 6 lane and prefer the clean furnished / Marina-view options |
| Murjan 1 | Fully furnished 1BR, current live route around AED 115,000/year | Property Finder live route via Dacha Real Estate | Strong Murjan 1 comparison lane, not contacted | Keep as the current Murjan 1 annual-rent route for future approved touchpoints |
| Sadaf 7 | Fully furnished 2BR, current live routes from mid-AED 170k/year | Property Finder live routes via RE/MAX Ultima and WHIM Real Estate | Premium Sadaf 7 comparison lane, not contacted | Hold as a higher-rent comparison lane and stay below Bahar 6 / Murjan 1 for priority |

## Fresh public-source research, 5 Jul 2026 afternoon sweep

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Rimal 1 | Furnished 2BR, 1,405 sqft, AED 154,999-165,000/year, marina-view / high-floor / upgraded routes | Property Finder live route via Ferand Abrahim / Trojan Real Estate; Bayut live route via Ramy Abdelkader / Trustkey Real Estate | Strong JBR 2BR route, not contacted | Keep as the best fresh Rimal 1 comparison lane for the next approved touchpoint |
| Rimal 3 | Fully furnished 2BR + maid, 1,444 sqft, AED 189,995/year, sea / water / landmark view with luxury upgrades | Property Finder live route via Cornel Edward Cohen and McCone Properties / Saman Chaudhry | Strong premium JBR 2BR route, not contacted | Hold as a higher-spec JBR comparison lane; better fit than weakly furnished stock |
| Bahar 4 | Furnished 2BR, 1,269 sqft, sea view / balcony / high floor routes | Property Finder live route via Move In Real Estate / Ella Madu | Solid JBR 2BR route, not contacted | Keep as a backup Bahar route with better presentation than older weak stock |

## Live public-source sweep, 5 Jul 2026 evening

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Murjan 2 | Fully furnished 1BR, available now, one month free, marina / Palm partial views | Property Finder live route via Georgia Ward / Exclusive Links Real Estate | Live route still active and aligned with the current JBR 1BR lane | Keep as the current Murjan 2 confirmation route and compare against Bahar 6 before any approved touchpoint |
| Sadaf 7 | Furnished 2BR, current live routes in the AED 125k-175k band | Bayut live routes via Your Homes Real Estate, fäm Properties, and others | Premium 2BR route still active | Hold as the main 2BR comparison lane; no need to reopen Sparkle Tower |
| Jumeirah Gate Tower 1 / 2 | Premium JBR 1BR and 2BR inventory with sea-view / balcony / beach-access angles | Property Finder live routes via Oak Street Real Estate and area-insight listings | Premium exception route still present | Use only if the economics justify a premium JBR exception; otherwise stay on Bahar / Murjan / Sadaf |

## Betterhomes customer-care replies, 26 Jun 2026

| Route | Property | Reply received | Contact / next step |
|---|---|---|---|
| Betterhomes public route | Bahar 6, furnished 1BR | Customer care first asked for the listing details, then shared agent contacts for the public routes | WhatsApp Sumayla Ishrat Ali on `+971 52 511 8669` or Linda Naman on `+971 52 229 6131`; ask whether the owner is open to holiday-home management or revenue-share under Lux Oasis |
| Betterhomes public route | Sadaf 7, furnished 2BR | Customer care first asked for the listing details, then shared the agent contact for the public route | WhatsApp Isobel Maria Donovan on `+971 58 530 0409`; ask whether the owner is open to holiday-home management or revenue-share under Lux Oasis |

## New public-source leads for review

| Source | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bayut / Property Finder, fetched 21 Jun 2026 | Bahar 6, furnished 1BR, 761-780 sqft, AED 85,000-105,000/year | Public routes surfaced via A R B Real Estate and Luxbridge International Realty | Qualified rental lead, not contacted | Verify direct email/WhatsApp via public listing or agency route, then prepare standard JBR agent outreach |
| Property Finder, fetched 21 Jun 2026 | Murjan 1, upgraded furnished 1BR, 1,106 sqft, AED 93,990/year, vacant, marina view | McCone Properties / Viktoriia Chukan, Property Finder search result | Qualified rental lead, not contacted | Verify direct email/WhatsApp via public listing or agency route, then prepare standard JBR agent outreach |
| Property Finder, fetched 19 Jun 2026 | Bahar 6, furnished 1BR, 761 sqft, AED 90,000/year, available from 29 Apr 2026 | Ebad Ghani, Sygma Real Estate, Property Finder listing `82810406` | Qualified rental lead, not contacted | Verify direct email/WhatsApp via public listing or agency route, then prepare standard JBR agent outreach |
| Property Finder, fetched 19 Jun 2026 | Bahar 6, upgraded furnished 1BR, 780 sqft, AED 90,000/year, available from 29 Apr 2026 | Elina Ceban, McCone Properties, Property Finder listing `104120441` | Qualified rental lead, not contacted | Verify direct email/WhatsApp via public listing or agency route, then prepare standard JBR agent outreach |

## Fresh public-source leads, 21 Jun 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Furnished 1BR, 780 sqft, AED 85,000/year | Bayut public route via Sekenkoum Real Estate | Qualified JBR rental lead, not contacted | Verify direct email/WhatsApp from the listing page or agency route, then prepare standard JBR agent outreach |
| Rimal 1 | Furnished 2BR, 1,405 sqft, AED 159,999/year | Bayut public route via McCone Properties / Arsen Gasparyan | Qualified JBR rental lead, not contacted | Verify direct email/WhatsApp from the listing page or agency route, then prepare standard JBR agent outreach |
| Shams 2 | Fully furnished 2BR, partial sea view, AED 160,000/year | Bayut public route via AX Capital / Zahra Valiollah Bayat | Qualified JBR rental lead, not contacted | Verify direct email/WhatsApp from the listing page or agency route, then prepare standard JBR agent outreach |

## Fresh public-source leads, 22 Jun 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 1 | Furnished 2BR, AED 120,000/year | Bayut public route via 18 Bricks Real Estate | Qualified JBR rental lead, not contacted | Verify direct email/WhatsApp from the listing page or agency route, then prepare standard JBR agent outreach |

## Fresh public-source leads, 23 Jun 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Fully furnished 1BR, 859 sqft, AED 85,000-105,000/year, available 30 Jun 2026 | Property Finder public route via Betterhomes | Strongest fresh JBR rental lead, not contacted | Keep as priority rental lane; verify direct agent route if needed before drafting any new outreach |
| Murjan 1 | Fully furnished 1BR, 1,105 sqft, vacant and ready to move in | Property Finder public route; listing copy references Naresh on 0585710209 | Fresh JBR rental lead, not contacted | Use as a backup Murjan route if Bahar 6 stalls; stay with public listing route only |
| Sadaf 7 | Fully furnished 2BR, AED 119,995/year, ready to move in | Bayut public route via Rush Hour Real Estate | Fresh JBR rental lead, not contacted | Keep in the Sadaf 7 watchlist because the price sits in the approved annual-rent band |

## Fresh public-source leads, 23 Jun 2026 late scan

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Fully furnished 1BR, 780 sqft, AED 90,000/year, listed hours ago | Property Finder public route via Royal Home Real Estate | Strongest new public lead, not contacted | Prioritise this over older Bahar 6 routes for the next approved agent touchpoint |
| Bahar 6 | Fully furnished 1BR, 761-780 sqft, AED 93,000-100,000/year | Property Finder public routes via Luxbridge International Realty, Distinct Real Estate, Homes 4 Life, and others | Fresh supporting rental lane, not contacted | Keep as fallback Bahar 6 inventory if the newest AED 90k route does not move |
| Murjan 2 | Fully furnished 1BR, 1,101 sqft, AED 100,000-105,000/year | Bayut public routes via Spica Real Estate, fäm Properties, White & Co, K U N Real Estate, and ENGEL & VÖLKERS Dubai | Fresh Murjan route, not contacted | Use as the strongest current Murjan 2 public-route lane for later approval-based outreach |
| Sadaf 7 | Fully furnished 2BR, AED 140,000/year | Bayut public route via E & S Real Estate | Fresh Sadaf 7 route, not contacted | Keep as a secondary 2BR route and compare against lower annual-rent JBR options before outreach |

## Fresh public-source leads, 24 Jun 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Sadaf 7 | Spacious furnished 2BR, vacant, walk to beach, AED 104,900/year | Property Finder public route surfaced in the current live results | Strong current 2BR route, not contacted | Keep as a priority Sadaf 7 route because it sits in the approved JBR annual-rent band |
| Murjan 2 | Upgraded 1BR, large layout, full sea view, AED 90,000/year | Bayut public route surfaced in the current live results | Strong current Murjan route, not contacted | Use as a backup Murjan 2 route and keep it in the approval queue |
| Bahar 6 | Fully furnished 1BR, 780 sqft, AED 95,000/year | Current live Property Finder and Bayut routes surfaced in the latest public scan | Strongest refreshed 1BR route, not contacted | Keep this as the top live Bahar 6 rental lane for the next approved agent touchpoint |
| Murjan 2 | Fully furnished 1BR, AED 100,000/year | Current live Bayut route via fäm Properties | Fresh backup Murjan 2 route, not contacted | Hold as the strongest alternative if Bahar 6 slows or duplicates out |

## Fresh public-source leads, 25 Jun 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Stunning 1BR apartment, 761 sqft, AED 75,998/year, available 21 May 2026 | Property Finder public route via Muhammad Danyal Khan / Royal Home Real Estate | Fresh live JBR 1BR route, not contacted | Keep as a current Bahar 6 annual-rent anchor and use the public agent route only |
| Sadaf 7 | Spacious furnished 2BR, 1,291 sqft, AED 104,900/year, available 16 Jun 2026 | Property Finder public route via Andrew White / ALH Properties | Fresh live JBR 2BR route, not contacted | Use as the current top Sadaf 7 annual-rent route for approval-based outreach later |

## Fresh public-source research, 25 Jun 2026 midday

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Furnished 1BR, 761 sqft, AED 90,000/year | Property Finder public route via Maksim Titov | Fresh public JBR 1BR route, not contacted | Treat as a strong Bahar 6 rental anchor for the next approved agent touchpoint |
| Murjan 2 | Furnished 1BR, 1,074 sqft, AED 100,000/year | Property Finder public route via Tereza Hlubinakova / Tereza Estates | Fresh public Murjan route, not contacted | Keep as a competitive Murjan 2 route alongside the existing Murjan shortlist |
| Shams 1 | Furnished 2BR, 1,375 sqft, AED 140,000/year | Property Finder public route via Maximilian Hoffmann / ENGEL & VÖLKERS Dubai | Fresh public Shams route, not contacted | Hold as a higher-rent comparison lane if the JBR 2BR search widens further |

## Fresh public-source research, 25 Jun 2026 evening

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Furnished 1BR, 761 sqft, AED 93,000/year | Property Finder public route via Betterhomes | Betterhomes asked for listing link again on 26 Jun 2026 after clarification; sent approved Betterhomes links `https://www.bhomes.com/en/property/bh-r-231098` and `https://www.bhomes.com/en/property/bh-r-230165` via Gmail ID `19f039eb5b952575` | Await listing-agent contact / owner-interest confirmation |
| Murjan 2 | Furnished 1BR, 1,074 sqft, vacant | Property Finder public route via Reds Real Estate Broker L.L.C. | Sent 26 Jun 2026 via `info@reds.ae` | Monitor Gmail thread `19f027eb00c588c3` for reply |
| Sadaf 7 | Furnished 2BR, AED 125,000/year | Property Finder public route via Betterhomes | Betterhomes asked for listing link again on 26 Jun 2026 after clarification; sent approved Betterhomes link `https://www.bhomes.com/en/property/bh-r-228006` via Gmail ID `19f039eb7cc27e9d` | Await listing-agent contact / owner-interest confirmation |
| Sadaf 7 | Fully furnished 2BR, 1,419 sqft, AED 119,995/year | Bayut public route with agent last visited on 22 June | Fresh live Sadaf 7 route, not contacted | Treat as the best price anchor if the Sadaf 7 lane is reopened for approval-based outreach |

## Public-source refresh, 24 Jun 2026 late scan

| Operator clue | Property clue | Public route | Status | Next action |
|---|---|---|---|---|
| Vacationer Holiday Homes | Bahar 6, premium 1BR steps to JBR Beach | Current Booking.com page `bahar-6-vacationer` remains live | Live operator clue, not contacted | Keep as the anchor switch example for any approved management-comparison outreach |
| Frank Porter | Murjan 1, 1BR short-stay listing | Current Booking.com page `frank-porter-murjan-1-dubai` remains live | Live operator clue, not contacted | Keep as the Murjan comparison anchor and pair only with public agent routes |
| Happy Season Holiday Homes | Royal Oceanic in JBR | Current Booking.com page `royal-oceanic-in-jbr-by-happy-season-holiday-homes` remains live | Fresh JBR operator clue, not contacted | Add to the management-switch research lane as a public JBR operator reference |
| Deluxe Holiday Homes | Sadaf 7 / Sadaf 6 / Shams 1 / Shams 2 | Current Booking.com pages for Sadaf and Shams remain live | Live operator cluster, not contacted | Keep as supporting evidence for the approved switch/comparison draft |

## Management-switch refresh, 25 Jun 2026

| Operator | Property clue | Public route | Status | Next action |
|---|---|---|---|---|
| Deluxe Holiday Homes | The Address JBR / Jumeirah Gate / Address Beach Resort, furnished 1BR and 2BR | Booking.com pages show active Deluxe inventory at The Address JBR and La Vie JBR | Fresh switch lane, not contacted | Treat as the strongest premium switch lane for approved comparison outreach |
| Deluxe Holiday Homes | La Vie, JBR, furnished 2BR | Booking.com listing `elegant-2br-apartment-in-la-vie-jbr-by-deluxe-holiday-homes.html` remains live | Fresh switch lane, not contacted | Use as a premium 2BR evidence point when comparing operator performance |
| GUESTA | Address Beach Resort / Address JBR | Booking.com listing `apartments-at-address-beach-resort-jbr.html` remains live | Fresh switch lane, not contacted | Keep as a smaller-op footprint clue for JBR owner comparison only |
| Frank Porter | JBR wide footprint across Sadaf, Rimal, The One JBR and The Address JBR | Public Booking.com / Frank Porter pages show active JBR inventory | Fresh switch lane, not contacted | Use as a scale benchmark, not a direct outreach target |
| Vacationer Holiday Homes | Bahar 6, premium 1BR steps to JBR Beach | Booking.com listing `bahar-6-vacationer.html` remains live | Fresh operator clue, not contacted | Keep as the strongest current Bahar switch anchor |
| Vacationer Holiday Homes | Bahar 1, JBR 2BR/3BR cluster clue | Booking.com listing `bahar-1-vacationer.html` remains live | Fresh operator clue, not contacted | Hold as supporting JBR cluster evidence only |
| Frank Porter | Murjan 1, 1BR short-stay listing | Booking.com listing `frank-porter-murjan-1-dubai.html` remains live | Fresh operator clue, not contacted | Pair only with public Murjan 1 listing-agent routes |
| Deluxe Holiday Homes | Sadaf 7, 2BR/3BR short-stay listings | Booking.com listings `outstanding-3br-at-sadaf-7-jbr-by-deluxe-holiday-homes.html` and `decorous-2br-at-sadaf-7-jbr-by-deluxe-holiday-homes-dubai.html` remain live | Fresh operator clue, not contacted | Use as switch proof for approved comparison outreach later |
| Happy Season Holiday Homes | Shams 1 / Shams 2 and JBR cluster pages | Booking.com pages `shams-2-bedrooms-apartment-on-jbr-by-happy-season-holiday-homes.html` and `beach-front-jbr-apartments-by-happy-season-holiday-homes.html` remain live | Fresh operator clue, not contacted | Keep as supporting JBR switch evidence; do not direct-contact owners before approval |

## Management-switch research

| Operator | Property clue | Public route | Status | Next action |
|---|---|---|---|---|
| Vacationer Holiday Homes | Bahar 1, 2BR, close to JBR Beach and JBR Walk | Booking.com listing `bahar-1-vacationer`; no owner route identified | Draft-only management-switch lead | Map public agent routes for Bahar 1 owners/listings; offer free performance comparison only after Damiano approves outreach |
| Vacationer Holiday Homes | Shams 1, 2BR, Marina View / steps from JBR Beach | Skyscanner/booking route references Al Sayorah Street, Shams 1 | Draft-only management-switch lead | Map public Shams 1 sale/rental agent routes; do not contact owner/landlord directly without approval |
| Happy Season Holiday Homes | Shams 2BR apartment on JBR | Booking.com listing for SHAMS 2 bedrooms apartment on JBR by HAPPY SEASON | Draft-only management-switch lead | Map public Shams building agent routes; prepare free performance comparison draft for approval |
| Happy Season Holiday Homes | Murjan JBR apartments, likely Murjan cluster, short-stay operator page | Booking.com listing `jbr-apartments-by-happy-season`; matching public rental route: Property Finder Murjan 1 and Murjan 2 rental pages | Draft-only management-switch lead | Identify public sales/rental agents already handling Murjan 1-2 owners; prepare free performance comparison plus approved referral bonus draft for agent route |
| Frank Porter | Sadaf 7, 2BR, sea/marina-view short-stay listing | Booking.com listing `comfortable-2br-amazing-sea-views-in-jbr`; matching public route: Property Finder/Bayut Sadaf 7 rental pages show furnished 2BR listings, including low-market and vacant units | Draft-only management-switch lead | Approach only public listing agents, not owner-direct, with free performance comparison and AED 2,000 referral bonus after Damiano approves |
| Frank Porter | Murjan 1, 1BR short-stay listing | Booking.com listing `frank-porter-murjan-1-dubai`; matching public route: Property Finder Murjan 1 1BR rental page shows furnished/vacant/upgraded 1BR listings and Betterhomes/Dacha routes | Draft-only management-switch lead | Match with public Murjan 1 rental agents and draft referral-led switch outreach; do not contact owners directly |
| Frank Porter | Sadaf 6, 2BR JBR short-stay listing | Booking.com listing `upscale-2br-w-mesmerizing-sea-views-in-jbr`; matching public route: search Sadaf 6/Sadaf cluster annual-rental and sale agents | New public operator clue, not contacted | Map current public Sadaf 6 rental/sale agents and prepare owner-interest route through agents |
| Vacationer Holiday Homes | Bahar 6, premium 1BR steps to JBR Beach | Booking.com listing `bahar-6-vacationer`; matching public route: Property Finder/Bayut Bahar 6 rental pages show 1BR rents around AED 90k-126k/year | New public operator clue, not contacted | Prioritise Bahar 6 because pricing fits existing campaign; use public listing agents only |
| Deluxe Holiday Homes | Bahar 2, 2BR short-stay listing | Booking.com listing `pristine-2br-at-bahar-2-jbr-by-deluxe-holiday-homes`; matching public route: Bahar 2/Bahar cluster rental and sale agents | New public operator clue, not contacted | Map active Bahar 2 rental/sale agents; prepare switch/comparison outreach only after approval |
| Deluxe Holiday Homes | Shams 1 and Shams 2, 2BR short-stay listings | Booking.com listings for `exquisite-2br-at-shams-1`, `stylish-2br-at-shams-1`, and `vogue-2br-at-shams-2`; matching public route: Property Finder/Bayut Shams pages list active agents and furnished/vacant units | New public operator clue, not contacted | Prioritise Shams 1 if annual rent is close to AED 120k-140k and furnished |
| Happy Season Holiday Homes | Rimal 2 / JBR apartments short-stay listing | Booking.com listing `rimal-2`; matching public route: Rimal cluster rental/sale agents | New public operator clue, not contacted | Map Rimal 1-2 public agents and match to current rental units |
| Happy Season Holiday Homes | Amwaj 4 / Al Bateen / La Vie / Bahar short-stay listings | Booking.com public listings show multiple JBR buildings operated by Happy Season | Public operator cluster, not contacted | Keep as second priority unless a strong furnished annual-rental route appears; JBR core clusters still preferred |
| Vacationer Holiday Homes | Bahar 6, premium 1BR steps to JBR Beach | Booking.com listing `bahar-6-vacationer` remains live | Draft-only management-switch lead | Use Bahar 6 as the strongest operator-comparison anchor for any future approved outreach |
| Frank Porter | Murjan 1, 1BR short-stay listing | Booking.com listing `frank-porter-murjan-1-dubai` remains live | Draft-only management-switch lead | Keep Murjan 1 in the comparison lane and match it to public Murjan listing agents only |
| Deluxe Holiday Homes | Sadaf 7 and Shams 1/2 2BR listings | Booking.com pages remain live for Sadaf 7, Sadaf 6, Shams 1 and Shams 2 operator clues | Draft-only management-switch lead | Hold for later approved switch outreach with the free performance comparison offer |
| Happy Season Holiday Homes | Shams 2 and Bahar/JBR cluster pages | Booking.com pages remain live for Shams 2, Bahar JBR and other JBR operator clues | Draft-only management-switch lead | Keep as secondary switch evidence; do not contact owners directly before approval |

## Public landlord-route research leads

| Building | Why it matters | Public route found | Current status | Next action |
|---|---|---|---|---|
| Bahar 6 | Vacationer operates a public short-stay 1BR clue; annual rents appear within campaign range | Property Finder/Bayut Bahar 6 rental pages; existing uncontacted Ebad Ghani/Sygma and Elina Ceban/McCone leads | High priority, not contacted | Verify email/WhatsApp from public listing pages and send refined listing-agent outreach |
| Murjan 2 | Public renewed listing copy still shows a furnished 1BR, beach/Marina fit and a live annual-rent anchor around the approved range | Property Finder Murjan 2 listing via Tereza Estates / current live Bayut and Property Finder routes | High priority, not contacted through the newest route | Keep Murjan 2 in the approval queue and use the public agent route only if the next outreach batch is opened |
| Sadaf 7 | Frank Porter and Deluxe have public Sadaf 7 short-stay clues; Sadaf 7 has low-market annual rental listings | Bayut Sadaf 7 page shows House and Hedges, La Capitale, Wakhan and other public routes; Property Finder Sadaf 7 rent page | High priority, not contacted through new route | Identify the strongest current public agent and prepare owner-interest/referral message |
| Shams 1 | Deluxe has multiple public Shams 1 short-stay clues; Shams 1 has furnished annual-rental listings | Property Finder Shams page shows Espace, Aurantius, AX Capital, Nadia and other public routes; Bayut Shams 1 has 66 rentals | Medium-high priority | Pick furnished 1-2BR around AED 120k-140k and contact listing agents if approved under JBR agent campaign |
| Palm Jumeirah / Tiara Residences | Furnished 1BR routes now visible around AED 170k-230k/year, useful as a premium benchmark for the next exceptional-stock search | Property Finder Tiara Residences public rental routes via White & Co, Engel & Völkers, Savills, Sure Real Estate and others | Medium priority, premium benchmark | Use only for exceptional Palm stock or when Damiano reopens premium Palm outreach |
| Murjan 1 | Frank Porter and Happy Season have Murjan short-stay clues; Murjan cluster is strategically strong for Lux Oasis | Property Finder Murjan 1 monthly page shows public operator/agency routes including HMJ Equity, OCLEY, Dream Inn and Vacay Lettings | Medium priority | Use only public agent/agency routes; avoid competitor guest/customer-service channels |
| Murjan 1 | Fresh public 1BR annual-rent routes now show vacant/furnished/upgraded stock below AED 90k | Property Finder live route via Allsopp & Allsopp / Georgia Ward, plus Bayut public routes via White & Co and Luxbridge | High priority | Add Murjan 1 to the next approved JBR agent touchpoint set, keeping the public route only |
| Bahar 2 | Deluxe operates a public 2BR Bahar 2 short-stay clue | Booking.com operator clue plus public Bahar cluster rent/sale routes | Medium priority | Map current public Bahar 2 listing agents; owner-direct only if publicly advertised and approved |
| Rimal 2 | Happy Season has a public Rimal 2/JBR apartments clue; Rimal already produced one contacted agent route | Booking.com operator clue plus public Rimal cluster rental/sale agents | Medium priority | Find active Rimal public listing routes and compare with already-contacted Rimal leads |

## Tonight landlord-route research, 19 Jun 2026

Full report: `JBR_LANDLORD_ROUTE_REPORT_2026-06-19.md`

| Priority | Operator clue | Public landlord/agent route | Economics note | Referral | Status | Next action |
|---|---|---|---|---|---|---|
| 92 | Vacationer and GUESTA both show public Bahar 6 clues; Vacationer has a public 1BR Bahar 6 listing and GUESTA has a public Bahar 6 listing | Bayut Bahar 6 has multiple 1BR public agent routes from AED 85,000-105,000/year, including A R B Real Estate, Top House, Betterhomes, Spica, Luxbridge, Sygma and other public listing agents | 1BR, 761-780 sqft. Strongest revenue-share logic because annual rent is in the low JBR band while short-stay demand is beach/Walk-led; Lux Oasis fee opportunity roughly AED 30k-45k/year if gross revenue lands near AED 150k-180k | AED 1,500 | Research-only, not contacted | Approve listing-agent outreach to the best current Bahar 6 public routes, starting with the AED 85k-95k furnished/vacant-style listings |
| 88 | Frank Porter has public Sadaf 7 2BR; Sadaf 7 also appears in the wider operator cluster | Bayut Sadaf 7 has 2BR public agent routes from AED 105,000-135,000/year, including L M A Elite, La Capitale, Dacha, Sand & Sea, E & S, Betterhomes and Luxbridge | 2BR, usually 1,291-1,440 sqft. Good switch/acquisition target because some rents are below the building average and public operator presence proves short-stay viability | AED 2,000 | Research-only, not contacted through new routes | Approve focused public-agent outreach for AED 105k-120k Sadaf 7 2BR routes, avoiding any competitor booking/customer-service channel |
| 84 | GUESTA has a public Murjan 2 JBR listing; Murjan is a Lux Oasis priority cluster | Bayut Murjan 2 has 1BR public agent routes around AED 100,000-105,000/year, including fäm Properties and White & Co; existing Murjan 2 agents are already in active outreach | 1BR, approx. 1,101 sqft. Strong local fit because Lux Oasis already knows Murjan/JBR operations; revenue-share may work if owner wants upside rather than a fixed cheque | AED 1,500 | Partly active via earlier Murjan outreach; new GUESTA clue added | Use the operator clue as support in follow-up/comparison positioning, but do not contact owners directly without approval |
| 78 | Deluxe Holiday Homes has public Bahar 2 2BR listings | Bayut Bahar 2 has a small rental pool, AED 125,000-150,000/year, with 2BR average around AED 145,206 and DLD 2BR average around AED 161,250 | 2BR. Plausible but less urgent because rent is higher and public inventory is thin; revenue-share needs a specific forecast before owner claims | AED 2,000 | Research-only, not contacted | Keep as second wave unless a furnished/vacant public listing appears under AED 140k or an agent has multiple Bahar owner relationships |
| 77 | GUESTA has public Rimal 6 listings; Booking.com also has JBR/Rimal 6 public apartment clues | Bayut Rimal 6 has public 2BR and 3BR routes: 2BR around AED 125,000-165,000 and 3BR around AED 145,000-160,000 for some furnished/vacant routes; agents include Harbor, Huspy, Malik, Property Concierge, Luxbridge and others | 2BR/3BR. Potential gross revenue is higher, but furnishing/launch workload and owner expectations are also higher; strongest if agent can introduce owner to management rather than rent | AED 2,000 for 2BR+ | Research-only, not contacted | Approach only if Damiano wants a larger-unit lane; start with the AED 145k-160k furnished/vacant 3BR routes |
| 74 | GuestReady and Happy Season both show public Rimal 2/JBR apartment clues | Bayut Rimal 2 has 37-39 current rentals, 1BR average around AED 108,500 and 2BR average around AED 170,150; public routes exist but the strongest individual listing needs another pass | 1BR/2BR. Good operator proof, weaker immediate route because 2BR rents skew high | AED 1,500 for 1BR, AED 2,000 for 2BR+ | Research-only, not contacted | Re-run a listing-level pass before outreach; prioritise any furnished 1BR near AED 105k-115k |
| 72 | Deluxe Holiday Homes has public Shams 1/Shams 2 2BR clues; Vacationer and Happy Season also have Shams/JBR clues | Bayut Shams 1 has 2BR public routes including a furnished 2BR at AED 140,000/year through Equity Real Estates and other furnished/upgraded 2BR options | 2BR. Works only if forecast supports the higher rent band; good switch story because multiple operators are already in Shams | AED 2,000 | Research-only, not contacted | Keep as medium-high priority, but after Bahar 6 and Sadaf 7 |
| 69 | Tiara Residences/Palm Jumeirah public routes show furnished 1BR stock with beach access and premium annual rents | Property Finder public routes for Ruby, Aquamarine, Emerald, Diamond and Sapphire in Tiara Residences via White & Co, Savills, Engel & Völkers, Sure Real Estate and others | Premium 1BR benchmark, not in the current JBR-first send list | AED 2,000 | Research-only, not contacted | Keep as a premium exception lane only if Damiano wants Palm Jumeirah stock beyond the JBR core campaign |

## Draft management-switch outreach

Hi [Agent Name],

I’m reaching out from Damiano’s office at Lux Oasis Holiday Homes. We are a boutique DTCM-licensed holiday-home operator active in JBR, and we are looking at a small number of furnished apartments in [building] where the owner may be open to holiday-home management or a revenue-share model.

Do you know if the owner of [specific apartment/building clue] would consider a short conversation about this? If there is interest, Damiano can step in directly and we can also explain the agent referral bonus.

Best,
Lux Oasis Founder’s Office
for Damiano Pesciaioli
Lux Oasis Holiday Homes LLC
www.luxoasisholidayhomes.com
WhatsApp: +971 56 390 3074

## Refined direct listing-agent outreach

Hi [Agent Name],

I’m reaching out from Damiano’s office at Lux Oasis Holiday Homes. We are a boutique DTCM-licensed holiday-home operator active in JBR, and we are looking at a small number of furnished apartments that may fit our management model.

I saw the [bedroom count] apartment in [building] listed at [price]. It looks like a strong fit for holiday-home management. Is it still available, and do you think the owner may be open to a revenue-share management discussion instead of a standard long-term rental?

If there is interest, Damiano can step in directly and we can also explain the agent referral bonus.

Best,
Lux Oasis Founder’s Office
for Damiano Pesciaioli
Lux Oasis Holiday Homes LLC
www.luxoasisholidayhomes.com
WhatsApp: +971 56 390 3074

## Campaign rules

- JBR apartments only for the current campaign.
- Prioritise furnished 1 and 2-bedroom units.
- Run two acquisition lanes:
  - Direct rental-listing lane: public agents/owners with JBR apartments listed for annual rent.
  - Management-switch lane: JBR apartments currently operated by large holiday-home companies such as Vacationer, Frank Porter, Deluxe Holiday Homes, GUESTA and Happy Season, using only legitimate public owner/agent contact routes.
- Revenue-share management first.
- Use the approved referral bonus: AED 1,000 studio, AED 1,500 1BR, AED 2,000 2BR+.
- Referral payable after signing, DTCM permit and live listing, in the end-of-month payout cycle.
- Do not promise higher owner profit before a property-specific forecast.
- Use public contact routes only. Do not seek private owner data.
- Do not message landlords or owners directly before Damiano approves that specific outreach. Owner-direct/landlord contacts are research-only until approved.
- Do not contact competitor booking/customer-service numbers pretending to be a guest.
- Sparkle Tower and other Dubai Marina properties remain parked.
- For new property-acquisition outreach emails only, use Damiano's UAE WhatsApp in the signature: +971 56 390 3074. Do not include the Italian WhatsApp number. Do not send correction emails only to change the number on already-sent outreach.
- When sending from the Lux Oasis COO Gmail, do not pretend the sender is Damiano personally and avoid corporate-sounding identities such as `COO Team` or `Acquisition Team`. Use a boutique, personal identity: `Lux Oasis Founder’s Office, for Damiano Pesciaioli`. Write the body as `I’m reaching out from Damiano’s office at Lux Oasis Holiday Homes`, positioning Lux Oasis as a boutique DTCM-licensed JBR holiday-home operator. This lets the agent screen no-interest replies and escalate interested agents/owners to Damiano. If sending directly from `damiano@luxoasisholidayhomes.com`, a direct Damiano signature is acceptable only with Damiano's approval.
- For direct rental-listing agents, keep the email close to the successful 19 June style: specific listing, specific building, simple availability question, owner-interest question, revenue-share discussion, and short agent-referral mention only after interest. Do not over-rewrite into a generic corporate landlord template.

## Gmail send log

| Date | Route | Email | Gmail message ID | Thread ID |
|---|---|---|---|---|
| 20 Jun 2026 | ARB Real Estate - Bahar 6 1BR | info@arbrealtors.com | 19ee43bc245704ff | 19ee43bc245704ff |
| 20 Jun 2026 | McCone Properties / Elina Ceban - Bahar 6 1BR | info@mcconeproperties.com | 19ee43bc40a5cb59 | 19ee43bc40a5cb59 |
| 20 Jun 2026 | Spica Real Estate - Bahar 6/JBR route | welcome@spica.realestate | 19ee43bc6aacd113 | 19ee43bc6aacd113 |
| 20 Jun 2026 | LMA Elite Properties - Sadaf 7 2BR | Info@lmaeliteproperties.com | 19ee43bc85a78af3 | 19ee43bc85a78af3 |
| 20 Jun 2026 | La Capitale Real Estate - Sadaf 7 2BR | info@lcdubai.com | 19ee43bcbbfa4fb0 | 19ee43bcbbfa4fb0 |
| 20 Jun 2026 | Dacha Real Estate - Sadaf 7 2BR | info@dacha.ae | 19ee43bccaf7d237 | 19ee43bccaf7d237 |
| 26 Jun 2026 | Betterhomes - Bahar 6 1BR | customercare@bhomes.com | 19f027eaf7aa1843 | 19f027eaf7aa1843 |
| 26 Jun 2026 | Reds Real Estate - Murjan 2 1BR | info@reds.ae | 19f027eb00c588c3 | 19f027eb00c588c3 |
| 26 Jun 2026 | Betterhomes - Sadaf 7 2BR | customercare@bhomes.com | 19f027eb2a7c6b40 | 19f027eb2a7c6b40 |
| 9 Jul 2026 | Prive Real Estate - Amwaj 4 1BR | info@prive-re.com | 19f46d98c8b07e04 | 19f46d98c8b07e04 |

## Fresh public-source research, 26 Jun 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Fully furnished 1BR, 761-780 sqft, AED 80,000-99,888/year, including a fresh 90,000 AED/year route | Property Finder live results surfaced multiple active routes, including Wakhan Properties and a 6-hour-old 90,000 AED/year listing | Fresh live JBR 1BR anchor, not contacted | Keep as the top Bahar 6 annual-rent lane for the next approved agent touchpoint |
| Murjan 2 | Furnished 1BR, 1,100-1,101 sqft, AED 100,000-105,000/year | Property Finder live route via Royal Manor Real Estate LLC | Fresh live JBR 1BR route, not contacted | Hold as the strongest Murjan 2 alternative if Bahar 6 slows or duplicates out |
| Sadaf 7 | Fully furnished 2BR, vacant, walk-to-beach route | Property Finder live route via ALH Properties; Bayut still shows active public routes including Betterhomes, Atomic Properties, Espace and others | Fresh live JBR 2BR route, not contacted | Keep as the current Sadaf 7 2BR comparison lane |
| Rimal 1 | Fully furnished 2BR, marina-view route | Property Finder live route via La Capitale; AX Capital also surfaced a fresh Rimal 1 route | Backup JBR 2BR route, not contacted | Use only if the current Bahar and Sadaf lanes lose momentum |

## Fresh public-source research, 28 Jun 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Luxury furnished 1BR, 761.22 sqft, beach/walk fit | Property Finder via Royal Home Real Estate | Strongest live Bahar 6 1BR anchor, not contacted | Keep as the top current annual-rent lane |
| Bahar 6 | Furnished 1BR, marina view, ready to move | Property Finder via Raine and Horne | Strong backup Bahar 6 route, not contacted | Hold as the next Bahar 6 fallback route |

## Fresh public-source research, 1 Jul 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Bahar 6 | Fully furnished 1BR, beach/marina fit, live annual-rent anchor still visible around AED 85,000/year | Property Finder and Bayut live results continue to surface Bahar 6 as the strongest JBR 1BR lane | Fresh live public signal, not contacted | Keep Bahar 6 as the main 1BR acquisition anchor and use the public listing-agent route only |
| Sadaf 7 | Furnished 1BR and 2BR monthly and yearly inventory remains visible in live public results | Property Finder and Bayut live results continue to surface Sadaf 7 furnished stock | Fresh live public signal, not contacted | Keep Sadaf 7 in the watchlist as the main 2BR comparison lane |
| Bahar 6 | Fully furnished 1BR, 779 sqft, prime JBR | Property Finder via DDA Real Estate | Strong backup Bahar 6 route, not contacted | Keep in the Bahar 6 shortlist |
| Bahar 6 | Furnished 1BR, full marina view, vacant soon | Property Finder via Thrivestate Square Real Estate | Strong backup Bahar 6 route, not contacted | Keep in the Bahar 6 shortlist |
| Murjan 2 | Furnished/vacant 1BR routes with sea and marina-view language | Bayut public route snippets | Backup Murjan 2 route, contact route needs page open | Re-open the public listing page if agent details are needed |
| Sadaf 7 | Furnished 2BR, vacant, sea view, JBR comparison lane | Bayut public route snippets | Strong current 2BR comparison lane, not contacted | Keep in the Sadaf 7 watchlist |
| Rimal 1 | Furnished 2BR, full Marina view, AED 119,999 | Bayut public route | Strong secondary JBR 2BR route, not contacted | Hold as a backup 2BR lane |
| Shams 1 | Furnished 2BR, sea view, AED 130,000 | Bayut via Betterhomes - Dubai Marina | Strong premium 2BR route, not contacted | Keep as a premium comparison lane |
| Rimal 3 | Furnished 1BR, marina view, AED 110,000 | [Property Finder listing](https://www.propertyfinder.ae/en/rent/dubai/apartments-for-rent-jumeirah-beach-residence-rimal-rimal-3.html) | New qualified public route, not contacted | Verify the direct agent route before any approval-based outreach |
| Murjan 2 | Converted 2BR, sea view, fully furnished, AED 109,990 | [Property Finder listing](https://www.propertyfinder.ae/en/ltp/high-floor-apartments-for-rent-in-jumeirah-beach-residence) | New complementary public route, not contacted | Compare against the existing Murjan shortlist before contact |

## Fresh public-source research, 30 Jun 2026

| Building | Property | Public route | Status | Next action |
|---|---|---|---|---|
| Amwaj 4 | Furnished 1BR, marina view, near beach, 1,170 sqft, AED 100,000/year | Property Finder agent page for Natalia Rogovaya; Bayut live route also surfaced a matching furnished marina-view 1BR | Sent 9 Jul 2026 via `info@prive-re.com`, Gmail `19f46d98c8b07e04` | Monitor reply and move to availability / owner-interest gate if positive |
| Rimal 4 | Fully furnished 1BR, sea view, 1,296 sqft, AED 154,000/year | Property Finder agent page for Figo Fernandes; Bayut live route also surfaced a matching furnished sea-view 1BR | Fresh premium JBR 1BR route, not contacted | Keep as a premium fallback route if the owner wants higher-end stock and the economics still work |
# JBR Acquisition Tracker

Last updated: 16 July 2026, 11:06 Dubai time

## 16 Jul reply sweep, 11:06 Dubai

Fresh Gmail/OAuth sweep across the 19-20 Jun outreach set and the 3 Jul forwarded-alert batch found no new human replies after the current watermark. The only in-scope thread was the already-known `prioritydubbaiuae@gmail.com` mailer-daemon bounce on the Luiza / Sadaf 7 thread, which stays excluded from lead notifications. `memory/jbr-acquisition-replies.json` lastScan refreshed to `2026-07-16T07:06:11Z`.

No reply draft or external send is needed on this pass.

## 16 Jul public-source refresh

Fresh public search keeps the current JBR comparison lanes live:

- Bahar 6 remains the strongest 1BR JBR lane: Property Finder now shows `Marina View 1BR | Fully Furnished | Bahar 6 JBR` via DDA Real Estate, plus a Dubizzle `Marina View 1BR | Amazing Views | Unfurnished` fallback. The live signal still favours the clean furnished Marina-view route.
- Murjan 2 remains the best backup 1BR lane: current public search shows `Open Marina Views | Huge Layout | Fully Furnished` via Exclusive Links Real Estate, plus a Murjan 2 furnished renovated Marina-view route on Dubizzle and a live Property Finder monthly search with ARBAB / Deluxe / Elite LUX holiday-home routes.
- Murjan 1 remains a strong premium 1BR comparison lane: current live results show `Sea View | Fully Furnished | Spacious 1BR` on Property Finder and a fäm properties route at AED 95,000 for a 1,105 sqft sea-and-marina-view unit.
- Sadaf 7 remains the active 2BR comparison lane: current live search shows furnished, vacant and sea-view routes, including `Fully Furnished | Marina View | JBR Beach Access` and `Furnished | Full Sea Views | Vacant Now`, plus a Dubizzle 2BR at AED 110,000.
- Jumeirah Gate Tower 1 remains a premium exception only: current Property Finder search shows `1BR | Marina View | High Floor | The Address JBR` with Agent Manuel Bitar, and the broader 1BR sale page still shows EQT Real Estate on a high-floor marina-view route.
- Rimal 1 remains a secondary comparison lane: current live search shows `High Floor | Full Marina View | Fully Furnished` on Property Finder.
- Sparkle Tower stays parked and non-JBR routes stay excluded unless clearly relevant.

## 15 Jul outbound lane pass, 15:20 Dubai

Fresh Gmail/OAuth sweep across Inbox, Spam and All Mail surfaced a new forwarded Property Finder alert `FW: 31 new properties you'll love` with JBR 1BR options in Bahar 6, Murjan 2, Sadaf 7 and Rimal 2, plus a separate Sparkle Towers alert that stays parked. The public Property Finder listing pages were still CloudFront-blocked on fetch and browser fallback, so no clean public-agent direct email or phone route was recoverable for any of the fresh JBR cards. No outbound email was sent.

The exact blocker reason on this pass is: the new JBR listing alert was real and relevant, but it did not expose a fresh sendable direct route, and the only live JBR routes already tracked remained either previously sent or not newly recoverable from the blocked pages.
