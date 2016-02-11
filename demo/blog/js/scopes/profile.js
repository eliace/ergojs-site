
$context.scopes.scope('profile', function($scope, $params) {

  $context.widget('main@page').component('content').item('menu').fire('menu', {name: 'profile'});



  var data = {


		activity: [{
			avatar: '010.jpg',
			author: 'Ralph Romero',
			created_at: 'сегодня 12:48',
			comment: LOREMIPSUM
		}, {
			avatar: '011.jpg',
			author: 'Janet Crawford',
			created_at: 'сегодня 11:06',
			comment: LOREMIPSUM_2
		}, {
			avatar: '012.jpg',
			author: 'Carl Campbell',
			created_at: 'сегодня 9:22',
			comment: LOREMIPSUM_3,
			replies: [{
				avatar: '016.jpg',
				author: 'Steven Rivera',
				created_at: 'сегодня 10:03',
				comment: LOREMIPSUM,
				replies: [{
					avatar: '017.jpg',
					author: 'Roger Rice',
					created_at: 'сегодня 10:08',
					comment: LOREMIPSUM_5,
				}]
			}]
		}, {
			avatar: '013.jpg',
			author: 'Jeffrey Medina',
			created_at: 'вчера 19:10',
			comment: LOREMIPSUM_4
		}, {
			avatar: '014.jpg',
			author: 'Stephen Riley',
			created_at: 'вчера 03:54',
			comment: LOREMIPSUM_3
		}, {
			avatar: '015.jpg',
			author: 'Daniel Cooper',
			created_at: '2013-11-30 14:27',
			comment: LOREMIPSUM_4
		}]

	};




  var Profile = $ergo({
    etype: 'panel',
    title: 'Профиль',

    as: 'profile',

    autoBind: false,

    $header: {
      $title: {
        as: 'muted'
      }
    },

    $content: {

      as: 'padding',

      $private: {

        as: 'text-center',

        $photo: {
          etype: 'html:img',
          as: 'circular',
          src: 'img/avatars/005.jpg',
          width: 128,
          wrapper: {
            as: 'image-wrap circular',
            autoRender: true
          }
        },

        $myname: {
          text: 'Jonathan Castillo',
          as: 'user-name'
        }

      },

      $aboutme: {
        $title: {
          etype: 'html:h3',
          text: 'О себе',
          as: 'block-title'
        },
        $content: {
          text: LOREMIPSUM.substr(0, 200)
        }
      },

      $statistics: {

        $title: {
          etype: 'html:h3',
          text: 'Статистика',
          as: 'block-title'
        },
        $content: {

          as: 'list __gap',

          defaultItem: {
            $badge: {
              etype: 'label',
              as: 'circular default before',
              weight: -10,
            },
            $content: {
              etype: '.'
            },
            binding: function(v) {
              this.$badge.prop('text', v);
            }
          },
          items: [{
            text: 'записей',
            value: 43
          }, {
            text: 'комментариев',
            value: 124
          }, {
            text: 'читателей',
            value: 211
          }]

        }
      },

      $actions: {
        cls: 'profile-actions',
        $mailtome: {
          etype: 'button',
          as: 'primary tiny',
          text: 'Написать мне',
          $before: {
            etype: 'icon',
            as: 'fa fa-envelope before',
            weight: -10
          },
          $content: {
            etype: '.'
          }
        }
      }

    }

  });


  var Activity = $ergo({
    etype: 'panel',
    title: 'Активность',

    as: 'profile-activity',

    dataId: 'activity',

    $header: {
      $title: {
        as: 'muted'
      }
    },

    $content: {

      dynamic: true,

      defaultItem: {
        etype: 'feed-comment'
      }
    }

  });


  var Page = $ergo({
    etype: 'box',
    sid: 'page',
		layout: 'grid',
		pattern: [4, 8],
		data: data,
    items: [ Profile, Activity ]
  });




});
