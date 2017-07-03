'use strict';

const m = require('mithril');
const pubsub = require('../pubsub/pubsub');

pubsub.subscribe('fillRed', (color) => {
  console.log('Published Event A: fill with ' + color);

  const colorBox = document.getElementById('colorBox');

  colorBox.style.backgroundColor = color;
});

pubsub.subscribe('fillBlue', (color) => {
  console.log('Published Event B: fill with ' + color);

  const colorBox = document.getElementById('colorBox');

  colorBox.style.backgroundColor = color;
});

pubsub.subscribe('fillGreen', (color) => {
  console.log('Published Event C: fill with ' + color);

  const colorBox = document.getElementById('colorBox');

  colorBox.style.backgroundColor = color;
});

module.exports = {
  view(vnode) {
    return m('div.moduleBox', [
      m('div.buttonRow', [
        m('button.button.butA', {
          onclick() {
            pubsub.publish('fillRed', 'lightcoral');
          }
        }, 'Event A'),
        m('button.button.butB', {
          onclick() {
            pubsub.publish('fillBlue', 'lightblue');
          }
        }, 'Event B'),
        m('button.button.butC', {
          onclick() {
            pubsub.publish('fillERROR', 'lightgreen');
          }
        }, 'Event C')
      ]),
      m('div#colorBox')
    ]);
  }
};
