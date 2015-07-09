

var input1 = $.ergo({
	etype: 'input',
	cls: 'icon right',
	placeholder: 'Search...',
//	width: 180,
	$icon: {
		etype: 'icon',
		cls: 'fa-search'
	}
});



var input2 = $.ergo({
	etype: 'input',
	include: 'xicon',
	cls: 'icon right',
	xicon: 'fa-search',
	placeholder: 'Search...',
//	width: 180
});


var input3 = $.ergo({
	etype: 'input',
	include: 'icon',
	cls: 'icon left',
	icon: 'fa-folder-open',
	placeholder: 'Search...',
//	width: 180
});




$.ergo({
	etype: 'box',
	layout: 'rows',
	cls: '__gap',
	renderTo: '#sample',
	items: [ input1, input2, input3 ]
});