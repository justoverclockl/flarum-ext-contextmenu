import { extend } from 'flarum/common/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('justoverclock/flarum-ext-contextmenu', () => {
  extend(IndexPage.prototype, 'view', function (vdom) {
    if (vdom.children && vdom.children.splice) {
      const link1 = app.forum.attribute('Link1');
      const link2 = app.forum.attribute('Link2');
      const insert = m('ul', { className: 'menu', id: 'ctxmenu' }, [
        m(
          'li',
          { className: 'menu-item' },
          m(
            'button',
            { className: 'menu-btn', type: 'button' },
            m('a', { href: app.forum.attribute('Link1url') }, [m('i', { className: 'fa fa-file' }),
              m('span', { className: 'menu-text' }, link1)])
          )
        ),
        m('li', { className: 'menu-separator' }),
        m(
          'li',
          { className: 'menu-item' },
          m(
            'a',
            { href: 'https://www.facebook.com/flarumitaliaofficial' },
            m('button', { className: 'menu-btn', type: 'button' }, [
              m('i', { className: 'fab fa-facebook-f' }),
              m('span', { className: 'menu-text' }, 'Facebook'),
            ])
          )
        ),
        m(
          'li',
          { className: 'menu-item' },
          m(
            'a',
            { href: 'https://twitter.com/flarumitalia' },
            m('button', { className: 'menu-btn', type: 'button' }, [
              m('i', { className: 'fab fa-twitter' }),
              m('span', { className: 'menu-text' }, 'Twitter'),
            ])
          )
        ),
        m(
          'li',
          { className: 'menu-item' },
          m(
            'a',
            { href: 'https://github.com/justoverclockl' },
            m('button', { className: 'menu-btn', type: 'button' }, [
              m('i', { className: 'fab fa-github-alt' }),
              m('span', { className: 'menu-text' }, 'Github'),
            ])
          )
        ),
        m('li', { className: 'menu-separator' }),
        m(
          'li',
          { className: 'menu-item' },
          m(
            'button',
            { className: 'menu-btn', type: 'button' },
            m('a', { href: app.forum.attribute('Link2url') }, [m('i', { className: 'fa fa-envelope' }),
              m('span', { className: 'menu-text' }, link2)])
          )
        ),
      ]);
      vdom.children.splice(1, 0, insert);
    }
  });
});
extend(IndexPage.prototype, 'oncreate', function () {
  const menu = document.querySelector('.menu');

  function showMenu(x, y) {
    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.classList.add('menu-show');
  }

  function hideMenu() {
    menu.classList.remove('menu-show');
  }

  function onContextMenu(e) {
    e.preventDefault();
    showMenu(e.pageX, e.pageY);
    document.addEventListener('mouseup', onMouseUp, false);
  }

  function onMouseUp(e) {
    hideMenu();
    document.removeEventListener('mouseup', onMouseUp);
  }

  document.addEventListener('contextmenu', onContextMenu, false);
});
