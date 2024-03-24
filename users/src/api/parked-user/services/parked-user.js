'use strict';

/**
 * parked-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::parked-user.parked-user');
