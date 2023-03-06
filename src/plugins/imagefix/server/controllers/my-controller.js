'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('imagefix')
      .service('myService')
      .getWelcomeMessage();
  },
});
