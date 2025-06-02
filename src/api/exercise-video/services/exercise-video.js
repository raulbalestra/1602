'use strict';

/**
 * exercise-video service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exercise-video.exercise-video');
