# Party Games

Mobile-first party games. A host signs in once (Google), sets up a game and shares a link;
guests play from that link with no account.

| Page | Who | What |
|---|---|---|
| `index.html` | Everyone | Party Games home: list of games |
| `admin.html` | Host | the one sign-in page (Google, or email + password for testing), then pick a game to set up |
| `games.js` | — | list of games shown on both pages |

## Games

### 🎃 Halloween Costume Awards (`halloween/`)
| Page | Who | What |
|---|---|---|
| `halloween/admin.html` | Host | create parties, awards, guests + costumes, open/close voting, unlock names |
| `halloween/index.html?p=CODE` | Guests | tap your name, vote once per award |
| `halloween/results.html?p=CODE` | Everyone | live leaderboard |

Old links (`index.html?p=CODE`, `results.html?p=CODE` at the top level) redirect into `halloween/`.

**One vote per guest:** each guest name gets one ballot, enforced in the database.
The phone that submitted it can edit it until voting closes. Clearing cache or using
another phone shows the name as "Already voted". The host can unlock a name.

## Adding a game
1. Make a folder (e.g. `trivia/`) with its own `admin.html`, `index.html` and `results.html`,
   loading `../config.js`, `../db.js` and `../styles.css`.
2. In its `admin.html`, if `DB.session()` is empty, send the host to `../admin.html?next=<game id>`.
   They come straight back after signing in.
3. Add the game to `games.js`.

## Setup
1. Create a free Supabase project → SQL Editor → run `supabase/schema.sql`, then `supabase/002_party_owners.sql`.
2. Authentication → Users → Add user (host email + password), and set up the Google provider.
3. Project Settings → API → paste the URL and anon key into `config.js`.

Without keys the site runs in **demo mode** (one browser, sample "demo" party).

Run locally: `python3 -m http.server 8080` → http://localhost:8080/admin.html
