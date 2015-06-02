

var box1 = $.ergo({
	etype: 'box',
	cls: 'box tiny bordered indented',
	include: 'label',
	label: 'Tiny',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box2 = $.ergo({
	etype: 'box',
	cls: 'box small bordered indented',
	include: 'label',
	label: 'Small',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box3 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Default',
	cls: 'box bordered indented',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box4 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Large',
	cls: 'box large bordered indented',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box5 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Huge',
	cls: 'box huge bordered indented',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});





var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'indented',
	items: [ box1, box2, box3, box4, box5 ]
});


w.render('#sample');
