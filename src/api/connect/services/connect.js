'use strict';

/**
 * connect service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::connect.connect');
