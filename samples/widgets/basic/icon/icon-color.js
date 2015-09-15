
var colored_icons = [];

COLORS.forEach(function(c, i) {
	colored_icons.push({icon: ICONS[i], cls: COLORS[i]});
});



var box1 = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'icon'
	},
	items: colored_icons
});


var box2 = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'icon',
		as: 'circular'
	},
	items: colored_icons
});


var box3 = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'icon',
		as: 'circular inverted'
	},
	items: colored_icons
});



var w = $.ergo({
	etype: 'box',
//	layout: 'vbox',
	as: 'box vertical __gap',
	items: [ box1, box2, box3 ]
});


w.render('#sample');
