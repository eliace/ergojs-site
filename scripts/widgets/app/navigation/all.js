
$context.section('Заголовок');
$context.section_begin('navigation-title');
$context.section_end('navigation-title');


var nav = $.ergo({
	etype: 'html:nav',
	layout: 'float',
	as: 'navigation underlined',
  $header: {
    etype: 'html:h3',
    as: 'title box',
    $icon: {
      etype: 'icon',
      as: 'fa-cogs'
    },
    $content: {
      etype: 'text',
      text: 'Приложение',
      $content: {
        etype: '.',
      },
      $subheader: {
        etype: 'text',
        as: 'sub title',
        text: 'Демонстрационное приложение ErgoJS'
      }
    }
  },
  $tools: {
  	etype: 'box',
  	layout: 'hbox',
  	as: 'align-right tools __gap',
    style: {'padding': '0.5714rem 0'},
  	items: [{
  		etype: 'html:img',
  		as: 'circular',
			src: 'img/Lil_cr.png',
  		width: 32
  	}, {
  		etype: 'text',
  		include: 'dropdown',
  		as: 'text action +to-left',
//      state: 'to-left',
      style: {'padding': '11px 0'},
  		$content: {
  			etype: '.',
  			text: 'User'
  		},
  		$caret: {
  			etype: 'icon',
  			as: 'caret'
  		},
  		$dropdown: {
        etype: 'dropdown-menu',
  			as: '__hover',
  			items: ['Профиль', 'Выход']
  		},
  		onClick: function(e) {
  			this.states.toggle('opened');
  			e.stop();
  		}
  	}]
  }
});


nav.render('#sample');

$context.section('Панель навигации');
$context.section_begin('navigation-1');
$context.section_end('navigation-1');

var w = $.ergo({
	etype: 'html:nav',
	layout: 'float',
	as: 'navigation box',

	$header: {
		etype: 'html:h4',
		text: 'Заголовок',
		style: {'padding': '14px 1rem', 'margin-right': 10, 'color': '#bbb'}
	},

//	$content: {
//		etype: 'box',

//		cls: 'float-left',

	$menu: {
		etype: 'menu',
		as: 'box',
		include: 'selectable',
		defaultItem: {
			onClick: 'action:select'
		},
		items: ['Главная', 'Товары', 'Организации'],
		set: {
			'index': function(v) {
				this.selection.set(v);
			}
		}
	},


	$tools: {
		etype: 'box',
		layout: 'hbox',
		as: 'align-right',
  	items: [{
  		style: {'padding': '7px 1rem'},
  		$content: {
	  		etype: 'input',
	  		placeholder: 'Поиск...',
	  		as: 'icon right',
	  		$icon: {
	  			etype: 'icon',
	  			as: 'fa-search'
	  		}
	  	}
  	}/*{
  		etype: 'link',
  		cls: 'item',
  		style: {'padding': '8px 1rem'},
  		$image: {
	  		etype: 'html:img',
	  		cls: 'circular before',
				src: 'img/Lil_cr.png',
	  		width: 32
	  	},
	  	$content: {
	  		etype: '.',
	  		text: 'Пользователь'
	  	}
  	}*/]
	}


/*
		components: {
			menu: {
				etype: 'menu-bar',
				items: [
					'Mailboxes',
					'Domains',
				{
					etype: 'dropdown-box',
					text: 'Dropdown',
					$dropdown: {
						etype: 'dropdown-menu',
						items: ['Page 1', 'Page 2']
					}
				}, {
					etype: 'dropdown-box',
					text: 'Menu',
					$dropdown: {
						etype: 'dropdown-menu',
	//							closeOn: 'mouseleave',
						items: [{
							text: 'Page 1'
						}, {
							text: 'Page 2',
							state: 'has-submenu',
							$content: {
								$content: {
									etype: '&text'
								},
								$caret: {
									etype: 'caret',
									cls: 'right'
								}
							},
							$submenu: {
								etype: 'dropdown-menu',
								cls: 'submenu right',
	//									closeOn: 'mouseleave',
								popup: {
									at: 'right top'
								},
								items: ['Action 1', 'Action 2']
							},
							events: {
								'jquery:mouseenter': function(e, w) {
									w.submenu.show();
								},
								'jquery:mouseleave': function(e, w) {
									w.submenu.hide();
									w.rise('closeMenu');
								}
							}
						}],
						onCloseMenu: function(e) {
							this.close();
						}
					}
				}]
			},
			user: {
				etype: 'menu-bar',
				cls: 'user',
				state: 'right',
				items: [{
					$content: {
						etype: 'html:img',
						src: 'img/Lil_cr.png'
					}
				}, {
					cls: 'username',
					text: 'Username',
					etype: 'dropdown-box',
					$dropdown: {
						etype: 'dropdown-menu',
						popup: {
							at: 'right bottom',
							my: 'right top'
						},
						items: ['Профиль', '|', 'Выход']
					}
				}]
			}
		}
*/
//	}
});


w.render('#sample');


w.$menu.opt('index', 0);

$context.section('Панель навигации', 'Центрирование контента');
$context.section_begin('navigation-2');
$context.section_end('navigation-2');

w = $.ergo({
	etype: 'html:nav',
	as: 'navigation underlined',
//	style: {'margin-top': 32, 'width': '100%'},
	layout: 'columns',
	$header: {
		etype: 'html:h4',
		text: 'Система контроля',
		as: 'nav-title',
		style: {'white-space': 'nowrap', 'margin': 0, 'padding': '14px 1rem', 'color': '#bbb'},
		wrapper: {
			width: '1%'
		},
	},
	$content: {
		etype: 'box',
		$clock: {
			text: '10:00',
			cls: 'nav-clock'
		},
		wrapper: {
			width: '98%'
		}
	},
	$user: {
		etype: 'menu',
		as: 'user',
		state: 'right',
		width: 100,
		wrapper: {
			width: '1%'
		},
		items: [{
			etype: 'text',
			as: 'username text action +to-left',
			include: 'dropdown',
			text: 'Username',
//      state: 'to-left',
			onClick: function(e) {
				this.states.set('opened');
				e.stop();
			},
			$dropdown: {
				etype: 'dropdown-menu',
				as: '__hover',
				// popup: {
				// 	at: 'right bottom',
				// 	my: 'right top'
				// },
				items: ['Профиль', 'Выход']
			},
			$caret: {
				etype: 'icon',
				as: 'caret after'
			}
		}]
	}
});

w.render('#sample');

$context.section('Панель с иконками');
$context.section_begin('nav-actions');
$context.section_end('nav-actions');

w = $.ergo({
	etype: 'html:nav',
	as: 'navigation underlined has-icon at-left at-right padding medium',
	layout: 'float',
	$icon: {
		etype: 'icon',
		as: 'fa-chevron-left contextual left'
	},
	$xicon: {
		etype: 'icon',
		weight: 100,
		as: 'fa-bars contextual right'
	},
	$content: {
		etype: 'box',
		$clock: {
			text: '10:00',
			as: 'nav-clock'
		},
	}
});

w.render('#sample');

$context.section('Боковая панель');
$context.section_begin('nav-side');
$context.section_end('nav-side');

var box = $.ergo({
	etype: 'box',
	as: 'has-sidebar at-left',
	$sidebar: {
		etype: 'html:aside',
		as: 'sidebar',
		$header: {
			etype: 'html:h3',
			text: 'M',
			as: 'title'
		},
		$menu: {
			etype: 'menu',
			as: 'vertical',
			include: 'selectable',
			defaultItem: {
				onClick: 'action:menuItem',
				$content: {
					include: 'icon:before',
					$label: {
						etype: 'label',
						as: 'small teal float-right',
						hidden: true
					}
				},
				set: {
					'icon': function(v) {
						this.$content.opt('icon', v);
					},
					'label': function(v) {
						this.$content.$label.opt({text: v, hidden: !v});
						// this.$content.$label.opt('text', v);
						// this.$content.$label.opt('hidden', !v);
					}
				}
			},
			items: [
				{text: 'Dashboard', icon: 'fa-dashboard'},
				{text: 'Mail', icon: 'fa-envelope'},
				{text: 'Tasks', icon: 'fa-tasks', label: '3'},
				{text: 'Reports', icon: 'fa-pie-chart'}
			],
			// set: {
			// 	'index': function(v) {
			// 		this.selection.set(v);
			// 	}
			// },
		}
	},
	$content: {
		include: 'pageable',
		as: 'content box padding',
		items: [LOREMIPSUM, LOREMIPSUM_2, LOREMIPSUM_3, LOREMIPSUM_4]
	},
	onMenuItem: function(e) {
		var k = e.target.prop('name');
		this.$sidebar.$menu.prop('selected', k);
		this.$content.prop('active', k);
//				this.prop('index', e.target.prop('name'));
	}
});


box.render('#sample');

box.emit('menuItem', {target: box.$sidebar.$menu.items.first()});



