

var input1 = $.ergo({
	etype: 'input',
	as: 'has-icon at-right',
	text: 'Search...',
//	width: 180,
	$icon: {
		etype: 'icon',
		as: 'fa-search right'
	}
});



var input2 = $.ergo({
	etype: 'input',
	include: 'icon',
	as: 'has-icon at-right',
	icon: 'fa-search',
	$icon: {
		weight: 10,
		as: 'right'
	},
	text: 'Search...',
//	width: 180
});


var input3 = $.ergo({
	etype: 'input',
	include: 'icon:at-left',
//	cls: 'icon left',
	icon: 'fa-folder-open',
	text: 'Search...',
//	width: 180
});




$.ergo({
	etype: 'box',
	layout: 'rows',
	as: '__gap',
	renderTo: '#sample',
	items: [ input1, input2, input3 ]
});
