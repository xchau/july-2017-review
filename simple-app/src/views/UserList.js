'use strict';

const m = require("mithril");
const User = require('../models/User');

module.exports = {
  oninit: User.loadList,
  view: () => {
    return m('.user-list', User.list.map(user => {
      return m('a.user-list-item', {
        href: `/edit/${user.id}`,
        oncreate: m.route.link
      }, `${user.firstName} ${user.lastName}`);
    })); // div default
  }
};
