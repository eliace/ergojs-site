

var input1 = $.ergo({
	etype: 'input',
	as: 'group',
	$label: {
		etype: 'label',
		text: '.com',
		as: 'basic'
	}
});


var input2 = $.ergo({
	etype: 'input',
	as: 'group',
	placeholder: '(___) _______',
	$label: {
		etype: 'label',
		text: '+7',
		as: 'basic',
		weight: -10
	}
});





$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'rows',
	as: '__gap',
	// layout: {
	// 	etype: 'vbox',
	// 	wrapper: function(item) {
	// 		return $('<div/>').append(item.el);
	// 	}
	// },
	items: [ input1, input2 ]
});
