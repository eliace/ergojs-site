
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
