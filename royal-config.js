window.RM_CONFIG = {
  collection: {
    name: "Royal Mechanica",
    supply: "6,666",
    domain: "royalmechanica.xyz",
    xHandle: "@RoyalMechanica",
    xProfileUrl: "https://x.com/RoyalMechanica",

    xPostUrl: "https://x.com/RoyalMechanica/status/2094094750840504535",
    shareText: "Just joined the Royal Mechanica whitelist. 6,666 mechanical tickers. @RoyalMechanica royalmechanica.xyz"
  },

  urls: {
    home: "https://royalmechanica.xyz/",
    whitelist: "https://royalmechanica.xyz/whitelist/",
    gtdaccess: "https://royalmechanica.xyz/GtdAccess/",
    ledger: "https://royalmechanica.xyz/Ledger/",
    collabs: "https://royalmechanica.xyz/collabs/"
  },

  endpoints: {
    whitelist: "https://script.google.com/macros/s/AKfycbyeKUIDYsRyjFlW7qUXhW48lD3bO3rJPqtaq-NkYTG0Ub9Di4aNhxP7Yb6fv2sDokxeBw/exec",
    collabs: "https://script.google.com/macros/s/AKfycbzCtlFjYFKYFpWqkuMYuBBJvjPs0Oj2iti0eNc28FRZpLzdsjezPAwUzlUpIWmTP4oq4A/exec",
    gtd: "https://script.google.com/macros/s/AKfycbztd1Kk7wOKnMtXwOdqhxLxypYrYSUKWCeYkUtE0GjanPUyTz4VSp1hZMXroAeCgd1Flw/exec",

    ledger: "https://script.google.com/macros/s/AKfycbzsI_B5wOZpqIWoeKVbkTsf_IZkktF3hIgDAZ86d67Hp8QkBtrpLG3bzF1wqApJyyP6bA/exec",
     
    collabAdmin: "https://script.google.com/macros/s/AKfycbxxoPDANqGKpzU9sDB-8ayAjRzyue9NcPxKQ6bRtXNPod8xDztXiM5fvGkSLXg6KjjYOA/exec",
    verification: "" 
  },


  gtd: {
    totalSpots: 500
  },

  tickers: ["$NVDA", "$MSFT", "$GOOGL", "$AAPL", "$AMZN", "$META", "$TSLA", "$NFLX", "$AMD", "$INTC", "$ORCL", "$ADBE", "$CRM", "$AVGO", "$QCOM", "$UBER", "$COIN", "$SHOP", "$PLTR", "$COST", "$PEP", "$KO", "$DIS"],


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
