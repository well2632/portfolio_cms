"use strict";

module.exports = ({ strapi }) => {
  // bootstrap phase
  strapi.db.lifecycles.subscribe({
    models: ["plugin::upload.file"],

    // your lifecycle hooks

    //
    async beforeCreate(event) {
      const { params } = event;
      //console.log('new file created!', event)
      if (!!strapi.config.get("plugin.upload.providerOptions.baseUrl")) {
        params.data.url =
          "https://" +
          strapi.config.get("plugin.upload.providerOptions.baseUrl") +
          "/" +
          params.data.hash +
          params.data.ext;
      }
    },
  });
};
