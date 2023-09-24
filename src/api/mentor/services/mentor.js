'use strict';

/**
 * mentor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mentor.mentor');
