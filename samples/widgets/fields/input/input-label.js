

var input1 = $.ergo({
	etype: 'input',
	cls: 'group',
	$label: {
		etype: 'label',
		text: '.com',
		cls: 'basic'
	}
});


var input2 = $.ergo({
	etype: 'input',
	cls: 'group',
	placeholder: '(___) _______',
	$label: {
		etype: 'label',
		text: '+7',
		cls: 'basic',
		weight: -10
	}
});





$.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'rows',
	cls: 'indented',
	// layout: {
	// 	etype: 'vbox',
	// 	wrapper: function(item) {
	// 		return $('<div/>').append(item.el);
	// 	}
	// },
	items: [ input1, input2 ]
});