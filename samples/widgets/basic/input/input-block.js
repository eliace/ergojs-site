


var input1 = $.ergo({
	etype: 'input',
	include: 'xicon',
	as: 'icon right fluid',
	xicon: 'fa-search',
	placeholder: 'Search...'
});


var input2 = $.ergo({
	etype: 'input',
	as: 'group fluid',
	$action: {
		etype: 'label',
		as: 'button action basic',
		text: 'Search'
	}
});





$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'rows',
	as: '__gap',
	items: [ input1, input2 ]
});
