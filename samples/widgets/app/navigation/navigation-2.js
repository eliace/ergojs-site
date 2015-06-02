
w = $.ergo({
	etype: 'html:nav',
	style: {'margin-top': 32, 'width': '100%', 'border-bottom': '1px solid #e7e7e7'},
	layout: 'column',
	$header: {
		etype: 'box',
		wrapper: {
			width: '1%'
		},
		$content: {
			etype: 'link',
			text: 'Система контроля',
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

