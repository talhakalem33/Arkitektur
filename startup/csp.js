module.exports = {
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: [
      "'self'",
      "https://code.jquery.com",
      "https://cdn.jsdelivr.net",
      "https://cdnjs.cloudflare.com",
      "https://use.fontawesome.com",
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      "https://fonts.googleapis.com",
      "https://cdn.jsdelivr.net",
      "https://cdnjs.cloudflare.com",
    ],
    fontSrc: [
      "'self'",
      "https://fonts.gstatic.com",
      "https://cdn.jsdelivr.net",
      "https://cdnjs.cloudflare.com",
      "https://use.fontawesome.com",
    ],
    imgSrc: [
      "'self'",
      "data:",
      "https://cdn.jsdelivr.net",
      "https://cdnjs.cloudflare.com",
    ],
    connectSrc: ["'self'"],
    objectSrc: ["'none'"],
    prefetchSrc: ["'self'"],
    frameSrc: ["'self'"],
    upgradeInsecureRequests: [],
  },
};
