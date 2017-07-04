'use strict';

const m = require('mithril');
const pubsub = require('../pubsub/pubsub');
const data = require('../../data/data');

pubsub.subscribe('/add/person', (obj) => {
  const tbody = document.getElementById('tbody');
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdSSN = document.createElement('td');

  tdName.textContent = obj.name;
  tdSSN.textContent = obj.ssn;

  tr.append(tdName);
  tr.append(tdSSN);
  tbody.append(tr);
});

module.exports = {
  view() {
    return m("div.moduleBox", [
      m("table.table", [
        m("thead", [
          m("th", [m("td", "Name")]),
          m("th", [m("td", "SSN")])
        ]),
        m("tbody#tbody", data.map(person => {
          return m("tr", [
            m("td", person.name),
            m("td", person.ssn)
          ]);
        }))
      ]),
      m("form.form", {
        onsubmit(event) {
          event.preventDefault();

          const name = document.getElementById('name').value;
          const ssn = document.getElementById('ssn').value;

          pubsub.publish('/add/person', { name, ssn });
        }
      }, [
        m("label.label", "Name"),
        m("input.input#name[placeholder=Add name][type=text]"),
        m("label.label", "SSN"),
        m("input.input#ssn[placeholder=Add SSN][type=text]"),
        m("button.button[type=submit]", "Add Person")
      ])
    ]);
  }
};
