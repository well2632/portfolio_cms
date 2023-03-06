module.exports = [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
  "strapi::security",
  // {
  //   name: "strapi::security",
  //   config: {
  //     contentSecurityPolicy: {
  //       directives: {
  //         "script-src": ["'self'", "'unsafe-inline'", "cdn.jsdelivr.net"],
  //         "img-src": [
  //           "'self'",
  //           "data:",
  //           "cdn.jsdelivr.net",
  //           "strapi.io",
  //           "dl.airtable.com",
  //           "https://king-prawn-app-2mah9.ondigitalocean.app/",
  //         ],
  //       },
  //     },
  //   },
  // },
];
