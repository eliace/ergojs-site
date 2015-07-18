
$.ergo({
	etype: 'box',
	renderTo: '#sample',
	defaultItem: {
//		layout: 'bar',
		cls: 'items __gap padding',
		defaultItem: {
			etype: 'icon',
			cls: 'contextual'
		},
		items: ICONS
	},
	items: [
		{cls: 'bg-basic'},
		{cls: 'bg-primary'},
		{cls: 'bg-info'},
		{cls: 'bg-success'},
		{cls: 'bg-warning'},
		{cls: 'bg-danger'}
	]

});

