


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
		state: 'default'
	}
});





$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: {
		etype: 'stack',
		wrapper: function(item) {
			return $('<div/>').append(item.el);
		}
	},
	items: [ input1, input2 ]
});