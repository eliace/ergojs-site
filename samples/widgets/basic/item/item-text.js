
var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'chip'
	},
	items: ITEMS
});

w.render('#sample');
