


var input1 = $.ergo({
	etype: 'input',
	include: 'xicon',
	cls: 'icon right block',
	xicon: 'fa-search',
	placeholder: 'Search...'
});


var input2 = $.ergo({
	etype: 'input',
	cls: 'group block',
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
	cls: 'indented',
	layout: 'rows',
	items: [ input1, input2 ]
});