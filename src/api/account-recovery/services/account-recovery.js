'use strict';

/**
 * account-recovery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::account-recovery.account-recovery');
