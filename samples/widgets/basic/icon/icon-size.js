


var box1 = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'icon',
		as: 'fa-book'
	},
	items: [
		{as: 'tiny'},
		{as: 'small'},
		{as: 'medium'},
		{as: 'large'},
		{as: 'huge'},
		{as: 'giant'}
	]
});


box1.render('#sample');
