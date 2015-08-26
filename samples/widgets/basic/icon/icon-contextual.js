
$.ergo({
	etype: 'box',
	renderTo: '#sample',
	defaultItem: {
//		layout: 'bar',
		cls: 'box items __gap padding',
		defaultItem: {
			etype: 'icon',
			cls: 'contextual'
		},
		items: ICONS
	},
	items: [
		{cls: 'basic'},
		{cls: 'primary'},
		{cls: 'info'},
		{cls: 'success'},
		{cls: 'warning'},
		{cls: 'danger'}
	]

});

