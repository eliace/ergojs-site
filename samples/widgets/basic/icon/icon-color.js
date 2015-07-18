
var colored_icons = [];

COLORS.forEach(function(c, i) {
	colored_icons.push({icon: ICONS[i], cls: COLORS[i]});
});



var box1 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon'
	},
	items: colored_icons
});


var box2 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon',
		cls: 'circular'
	},
	items: colored_icons
});


var box3 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon',
		cls: 'circular inverted'
	},
	items: colored_icons
});



var w = $.ergo({
	etype: 'box',
//	layout: 'vbox',
	cls: 'box vertical __gap',
	items: [ box1, box2, box3 ]
});


w.render('#sample');