
var w = $.ergo({
	etype: 'box',
	components: {
		icon: {
			etype: 'icon',
			as: 'fa fa-home'
		},
		content: {
			etype: '.',
			text: ' Главная '
		},
		xicon: {
			etype: 'icon',
			as: 'fa fa-angle-double-right'			
		}
	}
});

w.render('#sample');
