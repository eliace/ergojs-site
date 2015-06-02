

var input1 = $.ergo({
	etype: 'input',
	include: 'xicon',
	cls: 'icon',
	xicon: 'spinner',
	placeholder: 'Search...',
	width: 180
});


var input2 = $.ergo({
	etype: 'input',
	include: 'icon',
	cls: 'icon left',
	icon: 'spinner',
	placeholder: 'Search...',
	width: 180
});





$.ergo({
	etype: 'box',
	layout: 'stack',
	renderTo: '#sample',
	items: [ input1, input2 ]
});