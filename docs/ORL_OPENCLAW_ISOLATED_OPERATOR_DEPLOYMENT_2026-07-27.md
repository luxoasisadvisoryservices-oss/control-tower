# ORL OpenClaw Isolated Operator Deployment - 2026-07-27

## Decision

Install OpenClaw for Oasis Revenue Lab on the existing Hetzner box only as a fully isolated service.

A separate box or Mac is materially safer only if the current Hetzner host cannot enforce Linux user isolation, file permissions, reverse-proxy boundaries and tenant-scoped API credentials, or if ORL is moved from Lux Oasis internal pilot to external client production with raw client data. For the current internal operator channel, isolated Hetzner is the right recommendation because it keeps ORL close to the existing runtime while avoiding access to `/root/oasis-agents`, client `.env` files, databases and engine code.

## Target Shape

```text
Hetzner host
  /root/oasis-agents/                 # existing ORL bot/source, no OpenClaw access
  /srv/orl-dev/                       # existing clean ORL dev runtime
  /srv/openclaw-orl/                  # new OpenClaw ORL operator home
    workspace/
      AGENTS.md
      SOUL.md
      USER.md
      HEARTBEAT.md
      skills/
    state/
    logs/
    env/
      openclaw.env                    # OpenClaw runtime secrets only
      orl-api.env                     # ORL operator API credentials only
```

Service user:

```text
openclaw-orl
```

Hard boundary:

- `openclaw-orl` must not be a member of `root`, ORL engine, Docker, database, nginx or deployment groups unless a specific read-only need is approved.
- `openclaw-orl` owns only `/srv/openclaw-orl`.
- `/root/oasis-agents`, `/srv/orl-dev`, `/srv/orl-production`, client `.env` files and database sockets must not be readable by `openclaw-orl`.
- OpenClaw skills call only HTTPS ORL operator endpoints.
- OpenClaw receives ORL numbers only: metric grids, P&L/report artefact links or generated files, brief payloads, task/approval states, tenant list/switch result and funded research summaries.
- OpenClaw never imports ORL Python modules, reads DBs, reads raw exports, reads PriceLabs/Hostaway credentials, edits engine code or shells into the ORL app as part of normal operation.

## System Setup Commands

Run as root on Hetzner after inspecting current state:

```bash
id openclaw-orl || useradd --system --create-home --home-dir /srv/openclaw-orl --shell /usr/sbin/nologin openclaw-orl
install -d -o openclaw-orl -g openclaw-orl -m 0750 /srv/openclaw-orl
install -d -o openclaw-orl -g openclaw-orl -m 0750 /srv/openclaw-orl/workspace
install -d -o openclaw-orl -g openclaw-orl -m 0750 /srv/openclaw-orl/state
install -d -o openclaw-orl -g openclaw-orl -m 0750 /srv/openclaw-orl/logs
install -d -o openclaw-orl -g openclaw-orl -m 0700 /srv/openclaw-orl/env
```

Verify isolation before installing anything:

```bash
sudo -u openclaw-orl test ! -r /root/oasis-agents/.env
sudo -u openclaw-orl test ! -r /root/oasis-agents/clients.json
sudo -u openclaw-orl test ! -x /root
sudo -u openclaw-orl test -w /srv/openclaw-orl/workspace
```

Install OpenClaw under the isolated user using the normal OpenClaw installer for Linux, with state redirected:

```bash
cat >/srv/openclaw-orl/env/openclaw.env <<'EOF'
OPENCLAW_STATE_DIR=/srv/openclaw-orl/state
OPENCLAW_WORKSPACE=/srv/openclaw-orl/workspace
OPENCLAW_LOAD_SHELL_ENV=0
OPENCLAW_PROFILE=orl
EOF
chown openclaw-orl:openclaw-orl /srv/openclaw-orl/env/openclaw.env
chmod 0600 /srv/openclaw-orl/env/openclaw.env
```

Use whichever OpenClaw Linux install method is current on the host, but run setup as `openclaw-orl`, not root. Do not reuse Damiano's main workspace or credentials.

## Systemd Unit

Create `/etc/systemd/system/openclaw-orl.service`:

```ini
[Unit]
Description=OpenClaw ORL Operator Gateway
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=openclaw-orl
Group=openclaw-orl
WorkingDirectory=/srv/openclaw-orl/workspace
EnvironmentFile=/srv/openclaw-orl/env/openclaw.env
ExecStart=/usr/local/bin/openclaw gateway run --bind loopback --port 18889 --auth token
Restart=on-failure
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=/srv/openclaw-orl
ReadOnlyPaths=
InaccessiblePaths=/root /srv/orl-dev /srv/orl-production /root/oasis-agents

[Install]
WantedBy=multi-user.target
```

If the OpenClaw binary path differs, use `command -v openclaw` as `openclaw-orl` and update `ExecStart`.

Enable only after config is complete:

```bash
systemctl daemon-reload
systemctl enable openclaw-orl
systemctl start openclaw-orl
systemctl status openclaw-orl --no-pager
```

## Telegram Channel

Recommendation: use a dedicated Telegram bot for `Oasis Revenue Operator`, not Damiano's main chat. Reason: it cleanly separates ORL operator memory and routing from the existing COO agent, avoids accidental cross-business context, and makes product behaviour testable. Damiano can still be the only allowed Telegram user at first.

Configure as `openclaw-orl`:

```bash
openclaw channels add --channel telegram --token "$ORL_TELEGRAM_BOT_TOKEN"
openclaw agents add orl-operator \
  --workspace /srv/openclaw-orl/workspace \
  --agent-dir /srv/openclaw-orl/state/agents/orl-operator \
  --model openai/gpt-5.5 \
  --bind telegram:default \
  --non-interactive
openclaw system heartbeat enable
```

Allow only Damiano's Telegram user ID initially. Do not connect Slack, Gmail, Drive or broad tools to this runtime.

## ORL Operator API Env

Create `/srv/openclaw-orl/env/orl-api.env`:

```bash
ORL_OPERATOR_API_BASE_URL=https://api.oasisrevenuelab.com/operator
ORL_OPERATOR_API_TOKEN=secret-ref-or-env-only
ORL_OPERATOR_DEFAULT_TENANT_ID=lux-oasis
ORL_OPERATOR_SCOPE=orl_numbers_only
ORL_OPERATOR_ALLOW_RESEARCH=false
```

The token must be scoped server-side to operator endpoints only:

- no DB access;
- no raw export access;
- no connector credential access;
- no live price writes;
- no owner/client sends;
- tenant scope required on every request;
- audit log on every request.

## Skill Contracts

Create OpenClaw skills that wrap these endpoints. Each skill must say: "ORL numbers only. Use tenant-scoped ORL operator API. Never read engine code, DBs, raw data or secrets."

### `orl-metric-grids`

Purpose: answer occupancy, ADR, RevPAR, pricing floor, pace, ranking and source freshness questions from validated ORL metric grids.

Endpoint:

```http
GET /operator/tenants/{tenant_id}/metric-grids?listing_id=&window=
```

Required response fields:

- `tenant_id`
- `listing_id`
- `window`
- `metrics[]`
- `source_traces[]`
- `freshness`
- `warnings[]`
- `revenue_state_version`

### `orl-pnl-artefacts`

Purpose: create or fetch P&L, action sheets and post-fix report artefacts. This directly fixes the screenshot problem where the bot said it could not make Excel files.

Endpoint:

```http
POST /operator/tenants/{tenant_id}/artefacts/pnl
GET /operator/tenants/{tenant_id}/artefacts/{artefact_id}
```

Allowed outputs:

- CSV;
- XLSX;
- PDF;
- structured ledger summary.

The ORL API generates the file. OpenClaw only requests the artefact and sends the returned file/link.

### `orl-briefs`

Purpose: morning command cards, daily report explanations, weekly owner updates and one-screen operator briefs.

Endpoint:

```http
POST /operator/tenants/{tenant_id}/briefs
```

Briefs must include source freshness and never claim unsupported market movement.

### `orl-tasks-approvals`

Purpose: create and update tasks, follow-ups, recommendation ledger items and approval cards.

Endpoints:

```http
GET /operator/tenants/{tenant_id}/tasks
POST /operator/tenants/{tenant_id}/tasks
PATCH /operator/tenants/{tenant_id}/tasks/{task_id}
GET /operator/tenants/{tenant_id}/approvals
POST /operator/tenants/{tenant_id}/approvals
```

Price writes, owner sends and client-facing commitments stay approval-gated.

### `orl-tenants`

Purpose: list tenants Damiano can supervise and switch the active tenant context.

Endpoints:

```http
GET /operator/tenants
POST /operator/context/switch
```

Every call must validate the Telegram user is allowed for the target tenant.

### `orl-funded-research`

Purpose: web/research calls only when the ORL account is funded and policy allows it.

Endpoint:

```http
POST /operator/tenants/{tenant_id}/research
```

Default: disabled. If unfunded, return a clean health warning instead of pretending research ran.

## Workspace Instructions

`AGENTS.md` for `/srv/openclaw-orl/workspace`:

```markdown
# ORL Operator Agent

You are Damiano's Oasis Revenue Lab operator channel.

You do ORL work only:
- revenue Q&A;
- metric explanations;
- source freshness checks;
- P&L/action-sheet artefact requests;
- daily and weekly briefs;
- tasks, approvals and follow-ups;
- tenant list and tenant switching;
- funded research only when the ORL API says it is enabled.

Hard boundaries:
- Use ORL skills only.
- Every ORL skill call must include tenant scope.
- Answer from ORL numbers only.
- Never read ORL engine code, databases, raw exports, `.env` files or connector credentials.
- Never access `/root/oasis-agents`, `/srv/orl-dev`, client secrets or unrelated server files.
- Never change prices, owner messages, client sends, access, billing, legal or security settings without explicit approval.
- If a metric is missing, stale or unverified, say that and create a task or approval instead of guessing.

Morning card:
- Send one Telegram command card around 09:30 Asia/Dubai.
- Keep it one phone screen.
- Include main priority, one Damiano action if any, 2-3 active items, real blockers and approvals.
```

`HEARTBEAT.md`:

```markdown
# ORL Heartbeat

Check 2-4 times per day:
- open approvals;
- stale source warnings;
- failed artefact/report jobs;
- overdue ORL tasks;
- morning card status.

Notify Damiano only for material ORL action, stale/failing data, approval needed, or task blocker.
```

## Acceptance Tests

Before calling this done:

1. `openclaw-orl` cannot read `/root/oasis-agents` secrets.
2. OpenClaw starts under `openclaw-orl` only.
3. Telegram message from Damiano routes to ORL operator agent.
4. Ask: "create P&L sheet for Oasis 2" and OpenClaw calls `orl-pnl-artefacts`, not prose-only response.
5. Ask: "why is Oasis 2 underperforming?" and answer includes ORL metric grid, date window, source freshness and warnings.
6. Ask for another tenant while scoped to Lux Oasis; ambiguous or unauthorised tenant returns a tenant-scope error.
7. Ask to change prices; result is an approval card, not a live write.
8. Morning heartbeat creates a one-screen ORL command card.
9. Audit log shows tenant, Telegram user, endpoint, revenue state version, evidence and policy result.

## Current Blocker

I cannot complete the live Hetzner installation from this session because confirmed SSH/node access to the Hetzner box is not available here. The safe next execution step is to run the setup commands on Hetzner or provide this session a confirmed server route. Until then, this file is the deployment contract and acceptance checklist.
