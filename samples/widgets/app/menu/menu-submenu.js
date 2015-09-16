



var menu = $.ergo({
	etype: 'menu',
	as: 'menu box secondary',
	defaultItem: {
		include: 'dropdown',
		onClick: function(e) {
			this.states.toggle('opened');
			e.stop();
		},
		$content: {
			$content: {
				etype: '.'
			},
			$caret: {
				etype: 'icon',
				as: 'caret',
				autoRender: false
			}
		},
		$dropdown: {
			etype: 'nested-menu',
			include: 'popup',
			as: 'dropdown menu __hover',
			autoRender: 'non-empty',
			// popup: {
			// 	exclusive: false
			// },
			nestedItem: {
				state: 'right to-down',
 				as: 'has-icon at-right',
				$caret: {
					etype: 'icon',
					icon: 'caret right',
					autoRender: false
				},
				$submenu: {
					include: 'popup',
					as: 'dropdown menu __hover',
					popup: {
						exclusive: false
					},
					onClosed: function() {
						this.parent.states.unset('opened');
					}
				},
// 				include: 'dropdown',
				$content: {

				},
				states: {
					'up:drop': 'drop-up',
					'down:drop': '',
					'left:drop': 'drop-left',
					'right:drop': 'drop-right',
					'opened': function(on) {
						on ? this.$submenu.open() : this.$submenu.close();
					}
				},
				set: {
					'hasSubmenu': function(v) {
						this.states.toggle('has-dropdown', v);
						this.$caret.options.autoRender = true;
//						this.$caret.render();
					}
				},
				events: {
					'jquery:mouseenter': function(e) {

						var menu_item = this;//.parent;

						// menu_item.parent.items.each(function(item){
						// 	if( item != menu_item && item.states.is('opened') ) {
						// 		item.submenu.close();
						// 		item.states.unset('opened');
						// 	}
						// });

						if(menu_item.states.is('has-dropdown') & !menu_item.states.is('opened')) {
//								menu_item.submenu.open();
							menu_item.states.set('opened');
						}

						e.stopPropagation();							
					}
				}
			}
		},
		set: {
			'hasSubmenu': function(v) {
//				this.states.toggle('has-submenu', v);
				this.$content.$caret.options.autoRender = true;
			}
		}
	},
	items: [
		'Dashboard',
		{
			text: 'Почта',
			hasSubmenu: true,
			$dropdown_items: ['Входящие', 'Отправленные', 'Черновики']
		}, {
			text: 'Задачи',
			hasSubmenu: true,
			$dropdown_items: [{
					text: 'Мои',
					hasSubmenu: true,
					$submenu_items: ['Новые', 'В работе', 'Решенные']
				},
				'Назначенные мне'
			]
		}
	]
});


menu.render('#sample');

menu.opt('index', 0);
