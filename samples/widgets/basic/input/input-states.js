


var input1 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	state: 'focus'
});

var input2 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	state: 'disabled'
});

var input3 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	state: 'danger'
});

var input4 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	state: 'underlined'
});

var input5 = $.ergo({
	etype: 'input',
	include: 'icon:at-right',
	icon: 'fa-search',
	text: 'Search...',
	state: 'transparent'
});




$.ergo({
	etype: 'box',
	layout: 'rows',
	cls: '__gap',
	renderTo: '#sample',
	items: [ input1, input2, input3, input4, input5 ]
});


