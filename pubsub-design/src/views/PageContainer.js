'use strict';

const m = require('mithril');
const BoxOne = require('../components/BoxOne');
const BoxTwo = require('../components/BoxTwo');

const boxModules = [BoxOne, BoxTwo];

module.exports = {
  view() {
    return m('div#pageContainer', boxModules.map(boxMod => {
      return m(boxMod);
    }));
  }
};
