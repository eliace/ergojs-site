

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'indented',
	defaultItem: {
		etype: 'button',
//		cls: 'icon-button',
		$icon: {
			etype: 'icon'
		},
		$content: {
			etype: '&text'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		}
	},
	items: [{
		icon: 'fa-arrow-left',
		text: 'Назад',
		$icon: {
			weight: -10,
			cls: 'before'
		}
	}, {
		icon: 'fa-arrow-right',
		text: 'Вперед',
		$icon: {
			weight: 10,
			cls: 'after'
		}
	}]
});

