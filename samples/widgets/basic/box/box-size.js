

var box1 = $.ergo({
	etype: 'box',
	as: 'items border __gap box',
	include: 'label',
	label: 'No',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box2 = $.ergo({
	etype: 'box',
	as: 'items border __gap box padding lite',
	include: 'label',
	label: 'Lite',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box3 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Normal',
	as: 'items border __gap box padding normal',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box4 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Heavy',
	as: 'items border __gap box padding heavy',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box5 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Massive',
	as: 'items border __gap box padding massive',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});





var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: '__gap',
	items: [ box1, box2, box3, box4, box5 ]
});


w.render('#sample');
