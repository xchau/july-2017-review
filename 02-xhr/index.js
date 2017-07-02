(() => {
  'use strict';

  const root = document.getElementById('root');

  const SplashPage = {
    view() {
      return m('a[href=/hello]', {
        oncreate: m.route.link
      }, 'Enter');
    }
  }

  let count = 0;

  const increment = () => {
    m.request({
      method: 'PUT',
      url: 'https://rem-rest-api.herokuapp.com/api/tutorial/1',
      data: { count: count + 1 },
      withCredentials: true
    })
    .then((res) => {
      count = parseInt(res.count);
    })
    .catch((err) => console.error(err));
  };

  const HelloWorld = {
    view() {
      return m('main', [
         m('h1.fancy.coral', count + ' clicks'),
         m('button', {
           onclick: increment
         }, '+1'),
       ]);
    }
  };

  // const path = m.route.get();
  // console.log(path);

  m.route(root, '/', {
    '/': SplashPage,
    '/hello': HelloWorld
  })
  .prefix(m.route.get());
})();
