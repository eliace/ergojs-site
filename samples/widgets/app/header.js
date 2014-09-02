

var w = $.ergo({
	etype: 'html:nav',
	cls: 'nav-bar',
	components: {
		header: {
			etype: 'box',
			cls: 'header',
			$title: {
				cls: 'title',
				etype: 'link',
				text: 'Title'				
			}
		},
		content: {
			layout: 'fluid',
			etype: 'box',
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
		
	}
});


w.$render('#sample');
