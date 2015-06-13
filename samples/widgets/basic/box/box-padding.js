



$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'indent bordered',
	defaultItem: {
		etype: 'box',
		layout: 'hbox',
		cls: 'indent bordered',
		defaultItem: {
			etype: 'text',
			text: 'TEXT',
			cls: 'bordered'
		},
		items: [ 'Item1', 'Item2', 'Item3' ]
	},
	items: [ {}, {}, {} ]
});

w.render('#sample');

