


var input1 = $.ergo({
	etype: 'input',
	include: 'xicon',
	cls: 'icon right fluid',
	xicon: 'fa-search',
	placeholder: 'Search...'
});


var input2 = $.ergo({
	etype: 'input',
	cls: 'group fluid',
	$action: {
		etype: 'label',
		cls: 'button action',
		text: 'Search',
		state: 'basic'
	}
});





$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'rows',
	cls: '__gap',
	items: [ input1, input2 ]
});