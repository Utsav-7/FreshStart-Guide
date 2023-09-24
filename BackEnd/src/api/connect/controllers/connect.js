'use strict';

/**
 * connect controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::connect.connect');
