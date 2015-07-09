



$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'border __indent',
	defaultItem: {
		etype: 'box',
		layout: 'hbox',
		cls: 'border __indent',
		defaultItem: {
			etype: 'text',
			text: 'TEXT',
			cls: 'border'
		},
		items: [ 'Item1', 'Item2', 'Item3' ]
	},
	items: [ {}, {}, {} ]
});

w.render('#sample');

