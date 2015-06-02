
$.ergo({
	etype: 'box',
	renderTo: '#sample',
	defaultItem: {
//		layout: 'bar',
		cls: 'box indented',
		defaultItem: {
			etype: 'icon',
			cls: 'contextual'
		},
		items: icons
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

