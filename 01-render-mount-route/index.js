(() => {
  'use strict';

  const root = document.getElementById('root');

  // m.render(root, m('div', [
  //   m('h1.fancy.coral', 'hello world'),
  //   m('p', 'testing testing testing')
  // ]));

  const SplashPage = {
    view() {
      return m('a', {
        href: '#!/hello'
      }, 'Enter');
    }
  }


  let count = 0;

  const HelloWorld = {
    view() {
      return m('main', [
           m('h1.fancy.coral', count + ' clicks'),
           m('button', {
             onclick() {
               count++;
             }
           }, '+1'),
       ]);
    }
  };

  // m.mount(root, HelloWorld);
  m.route(root, '/splash', {
    '/splash': SplashPage,
    '/hello': HelloWorld
  });
})();
