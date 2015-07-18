

var input1 = $.ergo({
	etype: 'input',
	cls: 'has-icon at-right',
	text: 'Search...',
//	width: 180,
	$icon: {
		etype: 'icon',
		cls: 'fa-search right'
	}
});



var input2 = $.ergo({
	etype: 'input',
	include: 'icon',
	cls: 'has-icon at-right',
	icon: 'fa-search',
	$icon: {
		weight: 10,
		cls: 'right'
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
	cls: '__gap',
	renderTo: '#sample',
	items: [ input1, input2, input3 ]
});