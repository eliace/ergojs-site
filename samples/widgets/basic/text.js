
var w = $.ergo({
	etype: 'box',
	components: {
		icon: {
			etype: 'icon',
			cls: 'fa fa-home'
		},
		content: {
			etype: 'text',
			text: ' Главная '
		},
		xicon: {
			etype: 'icon',
			cls: 'fa fa-angle-double-right'			
		}
	}
});

w.$render('#sample');
