'use strict';

const m = require('mithril');
const User = require('../models/User');

module.exports = {
  oninit: (vnode) => {
    User.load(vnode.attrs.id);
  },
  view: () => {
    return m('form', {
      onsubmit: (event) => {
        event.preventDefault();
        User.save();
      }
    }, [
      m('label.label', 'First Name'),
      m('input.input[type=text][placeholder=First Name]', {
        oninput: m.withAttr('value', (value) => {
          User.current.firstName = value;
        }),
        value: User.current.firstName
      }),
      m('label.label', 'Last Name'),
      m('input.input[type=text][placeholder=Last Name]', {
        oninput: m.withAttr('value', (value) => {
          User.current.lastName = value;
        }),
        value: User.current.lastName
      }),
      m('button.button[type=submit]', 'Save')
    ]);
  }
};
