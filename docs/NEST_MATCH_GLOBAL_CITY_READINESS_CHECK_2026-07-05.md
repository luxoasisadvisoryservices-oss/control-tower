# Nest Match Global City Readiness Check

Created: 2026-07-05 22:00 Dubai  
Owner: Damiano + COO agent  
Status: live-site/bundle check

## Verdict

Damiano is right: Nest Match is already partly built for multiple cities, not only Dubai.

The current live app bundle includes a city list and area lists for 26 markets, including Dubai, Abu Dhabi, London, Paris, New York, Miami, Los Angeles, San Francisco, San Diego, Austin, Chicago, Mexico City, Barcelona, Madrid, Rome, Milan, Lisbon, Berlin, Amsterdam, Singapore, Bangkok, Bali, Istanbul, Marrakech, Tokyo, Hong Kong and Sydney.

## What Is Already Built

- Public homepage metadata says: `Launching in Dubai, built to scale worldwide`.
- Inventory Board posting flow has a `City` selector.
- The default city is Dubai.
- Selecting a city changes the available areas/neighbourhoods.
- Tokyo exists in the city list with Shibuya, Shinjuku, Roppongi, Ginza, Asakusa and Daikanyama.
- Non-Dubai city posts are stored by appending the city to the area text, for example `Shibuya, Tokyo`.
- The product routes already include Inventory Board, post flow, my postings, messages, notifications, role dashboards, service providers, landlords, contracts and admin routes.

## What Is Not Fully Built Yet

- Sitemap and SEO routes are still Dubai-only. There are no public `/tokyo`, `/new-york`, `/london` or city landing routes.
- City is not clearly stored as its own clean database field in the inspected posting insert logic. The app appears to store non-Dubai city context inside `area` / `area_preferences`.
- Matching logic compares areas directly, so city separation may work only if the city suffix is consistently stored everywhere.
- Browse/public supply still appears unseeded.
- Other cities should not be shown as active marketplaces until supply/users are seeded.
- There is no visible city-launch status system such as `Dubai active`, `Tokyo waitlist`, `New York coming soon`.
- City-level admin/moderation and city-level verification still need to be proven.

## Lovable Prompt Add-On

```text
Nest Match already has multi-city architecture in the Inventory Board. Keep it. Do not remove global city readiness. Dubai must be the default active launch market, but Tokyo, New York, London, Paris, Miami and other STR cities should remain prepared for future city-by-city rollout.

Fix the global-city layer properly:
1. Keep Dubai as the default city and first active market.
2. Add a clean city / market field to inventory posts, profiles, service-provider profiles, verification and admin filters. Do not rely only on area text like Shibuya, Tokyo.
3. Keep city-specific areas/neighbourhoods.
4. Add city-level launch status: Active, Waitlist, Coming Soon.
5. Public marketing should say: Launching first in Dubai, built for STR cities worldwide.
6. Do not make Tokyo/New York/London look live until they have seeded supply and active users.
7. Inventory Board should filter by city first, then area, role, opportunity type, dates and commercial model.
8. Admin should be able to approve users/posts by city.
9. Add empty-state copy for non-Dubai cities: This city is preparing for launch. Join the waitlist or request early access.
10. Keep the app/mobile direction: city feed, saved alerts, messages, notifications, verification and moderation.

Acceptance test:
- User can post a Dubai opportunity and it appears only in Dubai filters.
- User can post a Tokyo test opportunity and it appears only in Tokyo filters.
- A New York user with no supply sees a waitlist/coming-soon state, not a fake empty marketplace.
- Admin can filter users and posts by city.
- Homepage and SEO copy stay Dubai-first without hiding the global app vision.
```

## COO View

The architecture is in better shape than the earlier conservative read. The right instruction is:

**Keep it global-capable now, but make Dubai the first active market and make other cities waitlist-ready rather than fake-live.**
