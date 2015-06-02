
var w = $.ergo({
	etype: 'box',
	cls: 'indented',
	layout: 'hbox',
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
	cls: 'indented',
	layout: 'vbox',
	defaultItem: {
		etype: 'button'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});

w.render('#sample');



var w = $.ergo({
	etype: 'list',
	cls: 'indented',
	defaultItem: {
		etype: 'box'
		cls: 'indented',
		defaultItem: {
			etype: 'button'
		},
		items: [ 'Item1', 'Item2', 'Item3' ]
	},
	items: [ {}, {}, {} ]
});

w.render('#sample');