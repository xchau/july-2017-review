'use strict';

const m = require('mithril');
const BoxOne = require('../components/BoxOne');

const boxModules = [BoxOne];

module.exports = {
  view() {
    return m('div#pageContainer', boxModules.map(boxMod => {
      return m(boxMod);
    }));
  }
};
