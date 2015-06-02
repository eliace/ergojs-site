
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
									w.events.rise('closeMenu');
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
