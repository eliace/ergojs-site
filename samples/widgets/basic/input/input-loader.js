

var input1 = $.ergo({
	etype: 'input',
	include: 'xicon',
	as: 'icon right',
	xicon: 'spinner',
	placeholder: 'Search...',
//	width: 180
});


var input2 = $.ergo({
	etype: 'input',
	include: 'icon',
	as: 'icon left',
	icon: 'spinner',
	placeholder: 'Search...',
//	width: 180
});





$.ergo({
	etype: 'box',
	layout: 'rows',
	as: '__gap',
	renderTo: '#sample',
	items: [ input1, input2 ]
});
