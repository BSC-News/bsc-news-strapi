'use strict';

/**
 * tweet-feed router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tweet-feed.tweet-feed');
