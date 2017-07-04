'use strict';

module.exports = {
  events: {},

  subscribe(eventName, eventFn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(eventFn);
  },

  unsubscribe(eventName, eventFn) {
    const funcs = this.events[eventName];

    if (funcs.length) {
      for (let i = 0; i < funcs.length; i++) {
        if (funcs[i] === eventFn) {
          funcs.splice(i, 1);
          break;
        }
      }
    }
  },

  publish(eventName, data) {
    if (this.events[eventName]) {
      for (const fn of this.events[eventName]) {
        fn(data);
      }
    }
    else {
      console.log(`No subscriptions for EVENT => ${eventName}!`);
    }
  }
};
