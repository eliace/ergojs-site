
w = $.ergo({
	etype: 'html:nav',
	cls: 'navigation underlined',
//	style: {'margin-top': 32, 'width': '100%'},
	layout: 'columns',
	$header: {
		etype: 'html:h4',
		text: 'Система контроля',
		cls: 'nav-title',
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
		cls: 'user',
		state: 'right',
		width: 100,
		wrapper: {
			width: '1%'
		},
		items: [{
			etype: 'text',
			cls: 'username text action',
			include: 'dropdown',
			text: 'Username',
      state: 'to-left',
			onClick: function(e) {
				this.states.set('opened');
				e.stop();
			},
			$dropdown: {
				etype: 'dropdown-menu',
				cls: '__hover',
				// popup: {
				// 	at: 'right bottom',
				// 	my: 'right top'
				// },
				items: ['Профиль', 'Выход']							
			},
			$caret: {
				etype: 'icon',
				cls: 'caret after'
			}
		}]
	}						
});

w.render('#sample');

