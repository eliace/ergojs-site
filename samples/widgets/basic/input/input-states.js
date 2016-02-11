


var input1 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	as: '&focus'
});

var input2 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	as: '&disabled'
});

var input3 = $.ergo({
	etype: 'input',
//	width: 200,
	placeholder: 'Search...',
	as: '&error'
});

// var input4 = $.ergo({
// 	etype: 'input',
// //	width: 200,
// 	placeholder: 'Search...',
// 	state: 'underlined'
// });

var input5 = $.ergo({
	etype: 'input',
	include: 'icon:at-right',
	icon: 'fa-search',
	text: 'Search...',
	as: '&transparent'
});




$.ergo({
	etype: 'box',
	layout: 'rows',
	as: '__gap',
	renderTo: '#sample',
	items: [ input1, input2, input3/*, input4*/, input5 ]
});
