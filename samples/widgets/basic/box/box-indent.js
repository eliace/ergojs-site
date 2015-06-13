
var w = $.ergo({
	etype: 'box',
	layout: 'hbox',
	cls: 'gap',
	defaultItem: {
		etype: 'button'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});

w.render('#sample');


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'gap',
	defaultItem: {
		etype: 'button'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});

w.render('#sample');



$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'list',
	cls: 'gap bordered',
	defaultItem: {
		etype: 'box',
		cls: 'box gap bordered',
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



