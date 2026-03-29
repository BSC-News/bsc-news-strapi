'use strict';

/**
 * tweet-feed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tweet-feed.tweet-feed');
