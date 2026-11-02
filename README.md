# Halloween Costume Awards

One of the [Party Games](https://donmorazemo.github.io/party-games/) (repo: donmorazemo/party-games).
Hosts sign in on Party Games; this repo holds the game itself.

| Page | What |
|---|---|
| `index.html`, `admin.html` | forward to Party Games (old links keep working) |
| `privacy.html` | privacy page (linked from the Google sign-in screen) |

## The game (`halloween/`)
| Page | Who | What |
|---|---|---|
| `halloween/admin.html` | Host | create parties, awards, guests + costumes, open/close voting, unlock names |
| `halloween/index.html?p=CODE` | Guests | tap your name, vote once per award |
| `halloween/results.html?p=CODE` | Everyone | live leaderboard |

Old links (`index.html?p=CODE`, `results.html?p=CODE` at the top level) redirect into `halloween/`.

**One vote per guest:** each guest name gets one ballot, enforced in the database.
The phone that submitted it can edit it until voting closes. Clearing cache or using
another phone shows the name as "Already voted". The host can unlock a name.

## Setup
1. Create a free Supabase project → SQL Editor → run `supabase/schema.sql`, then `supabase/002_party_owners.sql`.
2. Authentication → Users → Add user (host email + password), and set up the Google provider.
3. Project Settings → API → paste the URL and anon key into `config.js`.

Without keys the site runs in **demo mode** (one browser, sample "demo" party).

Run locally: `python3 -m http.server 8080` → http://localhost:8080/admin.html
