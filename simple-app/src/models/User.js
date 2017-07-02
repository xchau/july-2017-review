'use strict';

const m = require("mithril");

const User = {
  list: [],
  loadList: () => {
    return m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users',
      withCredentials: true
    })
    .then((res) => {
      User.list = res.data
    });
  },

  current: {},
  load: (id) => {
    return m.request({
      method: 'GET',
      url: 'https://rem-rest-api.herokuapp.com/api/users/:id',
      data: { id },
      withCredentials: true
    })
    .then((res) => {
      User.current = res;
    });
  },

  save: () => {
    return m.request({
      method: 'PUT',
      url: 'https://rem-rest-api.herokuapp.com/api/users/:id',
      data: User.current,
      withCredentials: true
    })
    .then((res) => {
      console.log(res);
    });
  }
};

module.exports = User;
