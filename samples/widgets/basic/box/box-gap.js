


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: 'border __gap',
	defaultItem: {
		etype: 'box',
		layout: 'hbox',
		as: 'border __gap',
		defaultItem: {
			etype: 'text',
			text: 'TEXT',
			as: 'border'
		},
		items: [ 'Item1', 'Item2', 'Item3' ]
	},
	items: [ {}, {}, {} ]
});

w.render('#sample');
