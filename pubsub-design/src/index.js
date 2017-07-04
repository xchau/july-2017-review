'use strict';

const m = require('mithril');
const pubsub = require('./pubsub/pubsub');

const PageContainer = require('./views/PageContainer');

m.mount(document.body, PageContainer);
