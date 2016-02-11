

var w = $.ergo({
	etype: 'navigation',
	title: 'Title',

	$content: {

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
	}
});


w.render('#sample');




// В этой навигационной панели необходимо отцентровать контент

w = $.ergo({
	etype: 'html:nav',
	title: 'Система контроля посещения',
	style: {'margin-top': 32, 'width': '100%', 'border-bottom': '1px solid #e7e7e7'},
	layout: 'column',
	$header: {
		etype: 'box',
		wrapper: {
			width: '1%'
		},
		$content: {
			etype: 'link',
			text: 'Система контроля посещения',
			cls: 'nav-title'
		}
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
		etype: 'menu-bar',
		cls: 'user',
		state: 'right',
		width: 100,
		wrapper: {
			width: '1%'
		},
		items: [{
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
			},
			$content_$caret: {
				cls: 'after'
			}
		}]
	}
});

w.render('#sample');
