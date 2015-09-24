



var menu = $.ergo({
	etype: 'menu',
	as: 'menu box secondary',
	defaultItem: {
		include: 'dropdown:sub',
		onClick: function(e) {
			this.states.toggle('opened');
			e.stop();
		},
		$content: {
			include: 'caret',
			$caret: {
				autoRender: false // не рендерим каретку
			}
		},
		$sub: {
			etype: 'nested-menu',
			as: 'menu __hover',
			autoRender: 'non-empty',
			effects: {
				hide: {delay: 0}
			},
			nestedItem: {
				include: 'dropdown:sub',
 				as: 'drop-right to-down',
				$content: {
					include: 'caret:at-right',
					$caret: {
						as: 'point-right',
						autoRender: false // не рендерим каретку
					}
				},
				$sub: {
					as: 'menu __hover',
					autoRender: 'non-empty',
					popup: {
						exclusive: false
					},
					effects: {
						hide: {delay: 0}
					}
				},
				set: {
					'submenu': function(v) {
						this.$content.$caret.options.autoRender = true;
					}
				},
				events: {
					'jquery:mouseenter': function(e) {

						var menu_item = this;//.parent;

						menu_item.parent.items.each(function(item){
							if( item != menu_item )
								item.states.unset('opened');
						});

						if(/*menu_item.states.is('has-dropdown') &&*/ !menu_item.states.is('opened')) {
							menu_item.states.set('opened');
						}

						e.stopPropagation();
					}
				}
			}
		},
		set: {
			'submenu': function(v) {
				this.$content.$caret.options.autoRender = true;
			}
		}
	},
	items: [
		'Dashboard',
		{
			text: 'Почта',
			submenu: true,
			$sub_items: ['Входящие', 'Отправленные', 'Черновики']
		}, {
			text: 'Задачи',
			submenu: true,
			$sub_items: [{
					text: 'Мои',
					submenu: true,
					$sub_items: [{
						text: 'Новые',
						submenu: true,
						$sub_items: ['test@gmail.com', 'foo@gmail.com', 'me@mail.ru', 'test@yandex.ru']
					}, {
						text: 'В работе',
						submenu: true,
						$sub_items: ['boss@business.com']
					}, 'Решенные']
				},
				'Назначенные мне'
			]
		}
	]
});


menu.render('#sample');

menu.opt('index', 0);
