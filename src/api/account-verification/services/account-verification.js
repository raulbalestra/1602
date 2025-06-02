'use strict';

/**
 * account-verification service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::account-verification.account-verification');
