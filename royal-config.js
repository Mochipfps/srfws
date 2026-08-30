/* Royal Mechanica — single configuration point (Phase 1).
   Edit values here only. No secrets belong in this file. */
window.RM_CONFIG = {
  collection: {
    name: "Royal Mechanica",
    supply: "6,666",
    domain: "royalmechanica.xyz",
    xHandle: "@RoyalMechanica",
    xProfileUrl: "https://x.com/RoyalMechanica",
    // Campaign post used for like / repost / comment tasks:
    xPostUrl: "https://x.com/RoyalMechanica",
    shareText: "Just joined the Royal Mechanica whitelist. 6,666 mechanical tickers. @RoyalMechanica royalmechanica.xyz"
  },

  // Server side. Deploy apps-script.gs inside your Google Sheet (Extensions > Apps Script),
  // then paste the Web App URL below. Leave empty and the UI stays functional in
  // PENDING REVIEW mode without writing to a Sheet.
  endpoints: {
    whitelist: "https://script.google.com/macros/s/AKfycbx-V_OCcupzAHZ73XRHmjgMtghD9pyT_o_mxAA_e0dmt0qfIUGPJ5vYTxN9WFIZbCSsHg/exec", // GOOGLE_SCRIPT_URL
    verification: ""       // optional X-verification service; empty => pending-review mode
  },

  tickers: ["$NVDA", "$MSFT", "$GOOGL", "$AAPL", "$AMZN", "$META", "$TSLA", "$NFLX", "$AMD", "$INTC", "$ORCL", "$ADBE", "$CRM", "$AVGO", "$QCOM", "$UBER", "$COIN", "$SHOP", "$PLTR", "$COST", "$PEP", "$KO", "$DIS"],

  // Gallery is data-driven: add entries, nothing else changes.
  gallery: [
    { id: "0417", ticker: "$NVDA",  image: "assets/nft-04.png", ground: "#00D6B4", rarity: "Index Class" },
    { id: "1102", ticker: "$MSFT",  image: "assets/nft-05.png", ground: "#FF7A1A", rarity: "Blue Chip" },
    { id: "2288", ticker: "$AAPL",  image: "assets/nft-03.png", ground: "#FFD400", rarity: "Blue Chip" },
    { id: "3051", ticker: "$GOOGL", image: "assets/nft-02.png", ground: "#C6FF1E", rarity: "Index Class" },
    { id: "4630", ticker: "$AMZN",  image: "assets/nft-01.png", ground: "#FF6F61", rarity: "Floor Trader" }
  ],

  roadmap: [
    { phase: "I",   title: "The Machine Room",    status: "COMPLETE", body: "Collection design locked. 6,666 machines, each struck with a single market ticker. Whitelist registration opens." },
    { phase: "II",  title: "Whitelist & Ledger",  status: "LIVE",     body: "Social tasks verified, registrations numbered in sequence and recorded. Allocation reviewed manually before mint." },
    { phase: "III", title: "Mint",                status: "NEXT",     body: "Public mint of the remaining supply. Ticker identity is written on-chain with the token." },
    { phase: "IV",  title: "Holder Verification", status: "PLANNED",  body: "Holders verify ownership to bind their machine's ticker identity to their wallet. Details announced on X." },
    { phase: "V",   title: "Ticker Rewards",      status: "PLANNED",  body: "A reward system tied to each NFT's ticker identity. Not live. Mechanics, timing and eligibility will be published before launch." }
  ]
};
