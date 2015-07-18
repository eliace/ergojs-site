

var box1 = $.ergo({
	etype: 'box',
	cls: 'items border __gap box',
	include: 'label',
	label: 'No',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box2 = $.ergo({
	etype: 'box',
	cls: 'items border __gap box padding lite',
	include: 'label',
	label: 'Lite',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box3 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Normal',
	cls: 'items border __gap box padding normal',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box4 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Heavy',
	cls: 'items border __gap box padding heavy',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box5 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Massive',
	cls: 'items border __gap box padding massive',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});





var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: '__gap',
	items: [ box1, box2, box3, box4, box5 ]
});


w.render('#sample');

