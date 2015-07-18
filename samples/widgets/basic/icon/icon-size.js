


var box1 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon',
		cls: 'fa-book'
	},
	items: [
		{cls: 'tiny'},
		{cls: 'small'},
		{cls: 'medium'},
		{cls: 'large'},
		{cls: 'huge'},
		{cls: 'giant'}
	]
});


box1.render('#sample');