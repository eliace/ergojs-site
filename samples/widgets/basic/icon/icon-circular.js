
var w = $.ergo({
	etype: 'box',
	as: 'block items __gap',
	defaultItem: {
		etype: 'icon',
		as: 'circular'
	},
	items: ICONS
});

w.render('#sample');
