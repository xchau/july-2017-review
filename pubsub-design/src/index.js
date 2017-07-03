'use strict';

const m = require('mithril');
const pubsub = require('./pubsub/pubsub');

const PageContainer = require('./views/PageContainer');

// const modules = [];
//
// const composedPage = {
//   view() {
//     return m(PageContainer, [])
//   }
// };


m.mount(document.body, PageContainer);
