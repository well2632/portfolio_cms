"use strict";

/**
 * projeto controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::projeto.projeto", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::projeto.projeto").findOne({
      where: { slug },
      populate: true,
    });

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx.query);

    return this.transformResponse(sanitizedEntity);
  },
}));
