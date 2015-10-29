
$.ergo({
	etype: 'box',
	renderTo: '#sample',
	defaultItem: {
//		layout: 'bar',
		as: 'box filled items __gap padding',
		defaultItem: {
			etype: 'icon',
			as: 'contextual'
		},
		items: ICONS
	},
	items: [
		{as: 'basic'},
		{as: 'primary'},
		{as: 'info'},
		{as: 'success'},
		{as: 'warning'},
		{as: 'danger'}
	]

});
