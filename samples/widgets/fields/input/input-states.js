


var input1 = $.ergo({
	etype: 'input',
	width: 200,
	placeholder: 'Search...',
	state: 'focus'
});

var input2 = $.ergo({
	etype: 'input',
	width: 200,
	placeholder: 'Search...',
	state: 'disabled'
});

var input3 = $.ergo({
	etype: 'input',
	width: 200,
	placeholder: 'Search...',
	state: 'danger'
});




$.ergo({
	etype: 'box',
	layout: 'stack',
	renderTo: '#sample',
	items: [ input1, input2, input3 ]
});


