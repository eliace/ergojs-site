
$context.scopes.scope('feed', function($scope, $params) {

  $context.widget('main@page').component('content').item('menu').fire('menu', {name: 'feed'});


  var posts = [{
		title: 'Снятся ли андроидам электрические овцы?',
		author: 'Филип Дик',
		created_at: '5 минут назад',
		comments: 12,
		text: LOREMIPSUM
	}, {
		title: 'Звездный зверь',
		author: 'Роберт Э. Хайнлайн',
		created_at: 'Вчера',
		comments: 4,
		text: LOREMIPSUM_2
	}, {
		image: 'img/destiny_europa-wallpaper-960x540.jpg',
		author: 'Генри Пайпер',
		title: 'Четырехдневная планета',
		created_at: '24.11.2014',
		comments: 31,
		text: LOREMIPSUM_3
	}, {
		image: 'img/asteroids_hitting_other_planets-wallpaper-960x540.jpg',
		author: 'Джордж Мартин',
		title: 'Путешествия Тафа. Чумная Звезда',
		created_at: '16.09.2014',
		comments: 11,
		text: LOREMIPSUM_4
	}, {
		title: 'Путь на Амальтею',
		author: 'Аркадий и Борис Стругацкие',
		created_at: '28.09.2014',
		comments: 7,
		text: LOREMIPSUM_5
	}];


  var comments = [{
    author: 'Jean Lawson',
    avatar: 'img/avatars/001.jpg',
    created_at: 'сегодня, 10:48',
    comment: LOREMIPSUM
  }, {
    author: 'Earl Grant',
    avatar: 'img/avatars/002.jpg',
    created_at: 'сегодня, 9:15',
    comment: LOREMIPSUM_2
  }, {
    author: 'Michael Carr',
    avatar: 'img/avatars/006.jpg',
    created_at: 'вчера 20:55',
    comment: LOREMIPSUM_3
  }, {
    author: 'Frank Williams',
    avatar: 'img/avatars/004.jpg',
    created_at: 'вчера, 19:30',
    comment: LOREMIPSUM_4
  }]




  var Sidebar = $ergo({
    etype: 'html:aside',
    as: 'blog-sidebar',
    $tags: {
      etype: 'panel',
      title: 'Теги',
      $header: {
        as: 'padding-bottom',
        $title: {
          as: 'small strong muted'
        }
      },
      $content: {
        layout: 'float',
        defaultItem: {
          etype: 'label',
          as: 'warning tag',
          style: {
            'padding': 6,
            'margin': 6,
            'font-size': 13
          }
        },
        items: ['SF', 'Р. Асприн', 'космос', 'сингулярность', 'Star Trek', 'Star Wars', 'Р. Хайнлайн', 'Ф. Дик']
      }
    },
    $recentComments: {
      etype: 'panel',
      title: 'Последние комментарии',
      $header: {
        as: 'padding-bottom',
        $title: {
          as: 'small strong muted'
        }
      },
      $content: {
        dynamic: true,
        layout: 'stack',

        data: comments,

        defaultItem: {
          etype: 'media',
          as: 'recent-comment',
          $before: {
            $content: {
              dataId: 'avatar',
              as: 'circular',
              binding: 'src',
              width: 48
            }
          },
          $content: {
            $author: {
              etype: 'link',
              dataId: 'author'
            },
            $date: {
              as: 'comment-date',
              dataId: 'created_at',
              binding: 'text'
            },
            $comment: {
              dataId: 'comment',
              binding: function(v) {
                this.opt('text', v.substr(0, 100) + '...' );
              }
            }
          }
        }
      }
    }
  });


  var Feed = $ergo({
    etype: 'box',
    as: 'feed',

    dynamic: true,

    defaultItem: {
      etype: 'feed-item'
    },

    data: posts,

    $pagination: {
      etype: 'html:ul',
      as: 'pager',
      layout: 'float',
      weight: 10,
      $prev: {
        etype: 'html:li',
        hidden: true,
        as: 'left',
        $content: {
          etype: 'html:a',
          text: '← Новые записи',
        }
      },
      $next: {
        etype: 'html:li',
        as: 'right',
        $content: {
          etype: 'html:a',
          text: 'Старые записи →',
        }
      }
    }
  });



  var Page = $ergo({
    etype: 'box',
    sid: 'page',
    $banner: {
      as: 'blog-banner',
      $image: {
        etype: 'html:img',
        src: 'img/rising_force-wallpaper-1600x900.jpg',//build_2-wallpaper-1920x1080.jpg'
        tooltip: 'http://wallpaperswide.com'
      }
    },
    $content: {
      layout: 'grid',
			pattern: [9, 3],
      items: [ Feed, Sidebar ]
    }
  });




});
