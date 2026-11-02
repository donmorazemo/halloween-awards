// Party Games: the list of games. Add a new game here, then give it its own folder
// with index.html (guests), results.html and admin.html (host), like halloween/.
window.PARTY_GAMES = [
  {
    id: "halloween",
    name: "Halloween Costume Awards",
    emoji: "🎃",
    blurb: "Guests vote for each other's costumes in award categories. Live leaderboard.",
    path: "halloween/",
    // How many games this host has set up (shown on the host page)
    count: async me => (await DB.parties.list(me && me.id ? { owner_id: me.id } : undefined)).length,
    unit: ["party", "parties"],
  },
];
