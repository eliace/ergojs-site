

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		include: 'icon',
		// $icon: {
		// 	etype: 'icon'
		// },
		$content: {
			etype: '.'
		},
		// set: {
		// 	'icon': function(v) { this.icon.opt('icon', v); }
		// }
	},
	items: [{
		icon: 'fa-arrow-left',
		text: 'Назад',
		$icon: {
			weight: -10,
			as: 'before'
		}
	}, {
		icon: 'fa-arrow-right',
		text: 'Вперед',
		$icon: {
			weight: 10,
			as: 'after'
		}
	}]
});
