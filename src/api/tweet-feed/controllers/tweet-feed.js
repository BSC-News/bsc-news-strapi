'use strict';

/**
 * tweet-feed controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tweet-feed.tweet-feed');
