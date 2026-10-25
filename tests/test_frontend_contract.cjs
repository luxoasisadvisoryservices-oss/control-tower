const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('data freshness distinguishes source update time from check time', () => {
  const html = read('index.html');
  const js = read('assets/app.js');
  const data = read('assets/data.js');
  for (const id of ['refreshData', 'lastDataUpdate', 'lastDataCheck', 'dataFreshnessWarning']) {
    assert.match(html, new RegExp(`id=["']${id}["']`));
  }
  assert.match(js, /cache:\s*["']no-store["']/);
  assert.match(js, /60\s*\*\s*60\s*\*\s*1000/);
  assert.match(js, /dataUpdatedAt/);
  assert.match(js, /capturedAt/);
  assert.match(data, /dataVersion:\s*["']2026-10-25-nest-match-public-brief-1["']/);
  assert.doesNotMatch(js, /lastDataUpdate[^\n]*(new Date|Date\.now)/);
});

test('service worker bypasses refresh probes and caches only existing public assets', () => {
  const sw = read('sw.js');
  assert.match(sw, /searchParams\.has\(["']check["']\)/);
  assert.doesNotMatch(sw, /task-manager\.(js|css)/);
  for (const asset of ['assets/styles.css', 'assets/runtime-snapshot.js', 'assets/data.js', 'assets/curated-videos.js', 'assets/app.js']) {
    assert.match(sw, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.ok(fs.existsSync(path.join(root, asset)), `${asset} must exist`);
  }
});

test('Event Radar is an authenticated-private placeholder with no public feed', () => {
  const html = read('index.html');
  const js = read('assets/app.js');
  assert.match(html, /data-view-target=["']event-radar["']/);
  assert.match(html, /data-view=["']event-radar["']/);
  assert.match(html, /PRIVATE ACCESS REQUIRED/);
  assert.match(html, /authenticated private access/i);
  assert.match(html, /must remain private/i);
  assert.doesNotMatch(`${html}\n${js}`, /public-safe event fields|public event feed|supabaseUrl|supabaseKey|createClient\(/i);
});

test('Nest Match brief is current, claim-limited, and uses explicit AED plan limits', () => {
  const data = read('assets/data.js');
  const start = data.indexOf('nestMatchBrief:');
  const end = data.indexOf('\n  projects:', start);
  assert.ok(start >= 0 && end > start, 'Nest Match brief must be standalone before projects');
  const brief = data.slice(start, end);
  assert.match(brief, /2026-10-25/);
  assert.match(brief, /user-reported/i);
  assert.match(brief, /not independently verified/i);
  assert.match(brief, /permanent Free/i);
  for (const price of ['AED 29 monthly', 'AED 59 monthly', 'AED 290 annual', 'AED 590 annual', 'AED 39 monthly', 'AED 79 monthly', 'AED 390 annual', 'AED 790 annual']) {
    assert.match(brief, new RegExp(price));
  }
  assert.match(brief, /Pro includes 3 managed responses per month/i);
  assert.match(brief, /Premium includes 6 managed responses per month/i);
  assert.match(brief, /30-day free Pro trial; paid subscription afterwards/i);
  assert.doesNotMatch(brief, /paid Pro trial/i);
  assert.match(brief, /No automated outreach/i);
  assert.match(brief, /professional.*service.*area/i);
  assert.doesNotMatch(brief, /90-day|guaranteed leads|guaranteed jobs|native app is live|AI request help is live/i);
});

test('publishing patch contains no private task manager, roadmap, or old private task records', () => {
  const combined = ['index.html', 'assets/app.js', 'assets/data.js', 'assets/styles.css', 'sw.js'].map(read).join('\n');
  assert.doesNotMatch(combined, /task-manager|taskManager|sharedWorkspace|businessPlan|roadmapBoard|publication is not authorized/i);
  assert.doesNotMatch(combined, /NM-0[1-9]|O-0[1-9]|AI OS M1|25 September Luca plan/i);
});
