

$context.section('Basic');
$context.section_begin('menu-basic');
$context.section_end('menu-basic');


var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'box',
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		}
	},
	items: ['Главная', 'Товары', 'Организации', 'Личный кабинет'],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 0);
$context.section('Underlined');
$context.section_begin('menu-underlined');
$context.section_end('menu-underlined');


var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'box underlined divided',
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		}
	},
	items: ['Главная', 'Товары', 'Организации', 'Личный кабинет'],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 0);
$context.section('Tabular');
$context.section_begin('menu-tabs');
$context.section_end('menu-tabs');


var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'box tabular divided',
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		}
	},
	items: ['Главная', 'Товары', 'Организации', 'Личный кабинет'],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 0);
$context.section('Secondary');
$context.section_begin('menu-secondary');
$context.section_end('menu-secondary');


var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'box secondary',
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		}
	},
	items: ['Главная', 'Товары', 'Организации', 'Личный кабинет'],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 0);
$context.section('Dropdown');
$context.section_begin('menu-dropdown');
$context.section_end('menu-dropdown');



var box = $.ergo({
	etype: 'box',
	include: 'dropdown',
	cls: 'text action',
	$content: {
		etype: '.',
		text: 'Dropdown'
	},
	$caret: {
		etype: 'icon',
		cls:' caret'
	},
	$dropdown: {
		etype: 'dropdown-menu',
		cls: '__hover',
		items: ['Главная', 'Товары', 'Организации', 'Личный кабинет']
	},
	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	}
});


box.render('#sample');
$context.section('Submenu');
$context.section_begin('menu-submenu');
$context.section_end('menu-submenu');




var menu = $.ergo({
	etype: 'menu',
	cls: 'menu box secondary',
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
				icon: 'caret',
				autoRender: false
			}
		},
		$dropdown: {
			etype: 'nested-menu',
			include: 'popup',
			cls: 'dropdown menu __hover',
			autoRender: 'non-empty',
			// popup: {
			// 	exclusive: false
			// },
			nestedItem: {
				state: 'right to-down',
 				cls: 'has-icon at-right',
				$caret: {
					etype: 'icon',
					icon: 'caret right',
					autoRender: false
				},
				$submenu: {
					include: 'popup',
					cls: 'dropdown menu __hover',
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
$context.section('Context');
$context.section_begin('menu-context');
$context.section_end('menu-context');


var context_menu = $.ergo({
	etype: 'dropdown-menu',
	renderTo: 'body',
	cls: 'dropdown context __hover',
	popup: {
		behaviour: 'contextmenu',
		offset: [-2, -2]
	},
	effects: {
		'hide': {type: 'hide', delay: 0}
	},
	defaultItem: {
		include: 'icon',
 		$icon: {
 			cls: 'before'
 		}
	},
	items: [
		{icon: 'fa-copy', text: 'Копировать'}, 
		{icon: 'fa-cut', text: 'Вырезать'},
		{icon: 'fa-ban', text: 'Удалить'}
	]
//		'|',
//		{$icon: {autoRender: false}, $check: {etype: 'html:input', style: {'margin-right': 10}, weight: -10, type: 'checkbox'}, text: 'Вариант 1'}]
});




var w = $.ergo({
	etype: 'box',
	height: 400,
	style: {'background-color': '#eee'},

	events: {
		'jquery:contextmenu': function(e) {
	
			var x = e.pageX;
			var y = e.pageY;
				
			context_menu.open(x, y);
			
			e.preventDefault();
		}
	}

});

w.render('#sample');



$context.section('Vertical');
$context.section_begin('menu-vertical');
$context.section_end('menu-vertical');


var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'vertical left underlined divided',
	width: 240,
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		},
		$content: {
			$label: {
				etype: 'label',
				cls: 'float-right small red',
				hidden: true
			},
			set: {
				'label': function(v) {
					this.$label.opt('hidden', !v);
					this.$label.opt('text', v);
				}
			}
		}
	},
	items: [
		{
			text: 'Dashboard'
		}, {
			text: 'Mail',
			$content_label: '5'
		}, {
			text: 'Tasks'
		}
	],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 0);




$context.split();




var menu2 = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'vertical left',
	width: 240,
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		},
		$content: {
			$label: {
				etype: 'label',
				cls: 'float-right small teal',
				hidden: true
			},
			set: {
				'label': function(v) {
					this.$label.opt('hidden', !v);
					this.$label.opt('text', v);
				}
			}			
		},
	},
	items: [
		{
			text: 'Dashboard'
		}, {
			text: 'Mail',
			$content_label: '124'
		}, {
			text: 'Tasks'
		}
	],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu2.render('#sample');

menu2.opt('index', 1);





$context.split();




var menu3 = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'vertical left tabular divided',
	width: 240,
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		},
		$content: {
			$label: {
				etype: 'label',
				cls: 'float-right small primary circular',
				hidden: true
			},
			set: {
				'label': function(v) {
					this.$label.opt('hidden', !v);
					this.$label.opt('text', v);
				}
			}			
		},
	},
	items: [
		{	text: 'Dashboard'	}, 
		{	text: 'Mail' }, 
		{	text: 'Tasks',	$content_label: '12' }
	],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu3.render('#sample');

menu3.opt('index', 0);







$context.section('Vertical icons');
$context.section_begin('menu-vertical-icons');
$context.section_end('menu-vertical-icons');


var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'vertical',
	width: 240,
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		},
		$content: {
			include: 'after-icon',
			$icon: {
				cls: 'float-right'
			}
		},
		set: {
			'icon': function(v) {
				this.$content.opt('icon', v);
			}
		}			
	},
	items: [
		{
			text: 'Dashboard',
			icon: 'fa-dashboard'
		}, {
			text: 'Mail',
			icon: 'fa-envelope'
		}, {
			text: 'Tasks',
			icon: 'fa-tasks'
		}
	],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 1);


$context.section('Group');
$context.section_begin('menu-groups');
$context.section_end('menu-groups');


var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'vertical left',
	width: 240,
	defaultItem: {
		etype: 'menu',
		layout: 'inherited',

		$header: {
			etype: 'html:li',
			cls: 'header'
		},

		defaultItem: {
			etype: 'menu-item',
			onClick: function() {
				this.events.rise('select');
			},
			$content: {
				$label: {
					etype: 'label',
					cls: 'float-right small teal',
					hidden: true
				},
				set: {
					'label': function(v) {
						this.$label.opt('hidden', !v);
						this.$label.opt('text', v);
					}
				}			
			},
			get: {
				'name': function() {
					return this.opt('text');
				}
			}
		}
	},
	items: [{
		$header_text: 'User',
		items: [
			{ text: 'Profile' }
		]
	}, {
		$header_text: 'Actions',
		items: [
			{	text: 'Dashboard'	}, 
			{	text: 'Mail',	$content_label: '24' }, 
			{	text: 'Tasks'	}
		]
	}],
	selection: {
		lookup: function(v) {
			var found = null;
			this.items.each(function(item) {
				var f = item.item(v);
				if(f)
					found = f;
			});
			return found;
		}
	},
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 'Profile');

$context.section('Nested');
$context.section_begin('menu-nested');
$context.section_end('menu-nested');



var menu = $.ergo({
	etype: 'nested-menu',
	include: 'selectable',
	cls: 'vertical left',
	width: 240,
	defaultItem: {
		$content: {
			include: 'icon',
			cls: 'has-icon at-right',
			$icon: {
				cls: 'before'
			},
			$caret: {
				etype: 'icon',
				cls: 'caret right',
				point: 'right',
				autoRender: false,
				states: {
					'down:point': 'point-down',
					'right:point': 'point-right'
				}
			},
			onClick: function() {
				this.events.rise('expand');
			}
		},
		$submenu: {
			etype: 'menu',
			hidden: true,
			cls: 'side left nested',
			defaultItem: {
				onClick: function() {
					this.events.rise('select');
				},
				get: {
					'name': function() { return this.opt('text'); }
				}
			},
//			state: 'hidden',
			include: 'effects',
			effects: {
				'show': {type: 'slideDown', delay: 300},
				'hide': {type: 'slideUp', delay: 300}
			}
		},
		onExpand: function() {
			this.states.toggle('expanded');
		},
		states: {
			'expanded': function(on) {
				on ? this.$submenu.show() : this.$submenu.hide();
				this.$content.$caret.states.toggle('down', on);
			}
		},
		set: {
			'expandable': function(v) {
				if(v) {
					this.$content.$caret.options.autoRender = true;
				}
			}
		}
	},
	items: [
		{	text: 'Dashboard', $content_icon: 'fa-dashboard'	}, 
		{	text: 'Mail', $content_icon: 'fa-envelope',	$submenu_items: ['Inbox', 'Sent', 'Trash'], expandable: true }, 
		{	text: 'Tasks', $content_icon: 'fa-tasks'	}
	],
	selection: {
		lookup: function(v) {
			var found = null;
			this.items.each(function(item) {
				var f = item.$submenu.item(v);
				if(f)
					found = f;
			});
			return found;
		}
	},
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 'Sent');


