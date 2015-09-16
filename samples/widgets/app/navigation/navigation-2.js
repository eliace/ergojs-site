
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
