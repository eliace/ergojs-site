

var colored_icons = [];

COLORS.forEach(function(c, i) {
	colored_icons.push({icon: ICONS[i], as: COLORS[i]});
});



var box1 = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'icon',
		as: 'label'
	},
	items: colored_icons
});


box1.render('#sample');
