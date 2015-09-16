



$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: 'border __indent',
	defaultItem: {
		etype: 'box',
		layout: 'hbox',
		as: 'border __indent',
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
