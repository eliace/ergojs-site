

var colored_icons = [];

COLORS.forEach(function(c, i) {
	colored_icons.push({icon: ICONS[i], cls: COLORS[i]});
});



var box1 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon',
		cls: 'label'
	},
	items: colored_icons
});


box1.render('#sample');