
$context.scopes.scope('main', function($scope, $params) {


  var Header = $.ergo({
    etype: 'box',
    as: 'blog-header clearfix',
    $title: {
      as: 'float-left blog-title',
//					$content: {
//						etype: 'text',
      $content: {
        etype: '.',
        text: 'Блог о '
      },
      $sf: {
        etype: 'html:a',
        text: '[Science Fiction]'
//						}
      },
      $subtitle: {
        text: 'Демонстрационное приложение ErgoJS'
      }
    },
    $search: {
      etype: 'input',
      include: 'icon:at-right',
      placeholder: 'Поиск',
      width: 180,
      as: 'float-right',
      icon: 'fa fa-search'
      // $after: {
      //   etype: 'icon',
      //   as: 'addon',
      //   state: 'fa fa-search'
      // }
    }
  });


  var Menu = $.ergo({
    etype: 'html:nav',

    name: 'menu',

    as: 'clearfix',

    include: ['selectable'],

    $content: {
      etype: 'menu',
      as: 'box float-right',
      defaultItem: {
        $content: {
          etype: 'html:a'
        },
        events: {
          'jquery:mousedown': function(e) {
            if(e.button == 0) {
              $context.join('main.'+this.name);
//              $context.states.set( this.name );
            }
          }
        }
      },
      items: [
        {text: 'Главная', name: 'feed'},
        {text: 'Галерея', name: 'gallery'},
        {text: 'Профиль', name: 'profile'}
      ]
    },

    selection: {
      lookup: function(key) {
        return this.$content.item(key);
      }
    },

    // set: {
    //   'index': function(v) {
    //     this.selection.set(v);
    //   }
    // },

    onMenu: function(e) {
      this.selection.set(e.name);
    }

  });


  var Content = $.ergo({
    etype: 'box'
  });




  $.ergo({
    etype: 'box',
    sid: 'page',
    $content: {
      as: 'app-content paper',
      items: [Header, Menu, Content]
    },
    $footer: {
      as: 'app-footer',
      items: [{
        $text: {
          etype: '.',
          text: '©Copyright'
        },
        $link: {
          etype: 'link',
          as: 'after',
          text: 'ErgoJS',
          href: 'http:/ergojs.com'
        }
      }, {
        $text: {
          etype: '.',
          text: 'Изображения взяты с'
        },
        $link: {
          etype: 'link',
          as: 'after',
          text: 'wallpaperswide.com',
          href: 'http://wallpaperswide.com'
        }
      }]
    }
  });



  // дальнейший код должен пойти на исправление

  $scope._widget = Content;

  $scope._promise.then(function() {
    $context.join('main.feed');
  });

});
