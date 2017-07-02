'use strict';

const m = require('mithril');

module.exports = {
  view: (vnode) => {
    return m('main.layout', [
      m('nav.menu', [
        m("a[href='/list']", {
          oncreate: m.route.link
        }, 'Users')
      ]),
      m('section', vnode.children)
    ]);
  }
};
