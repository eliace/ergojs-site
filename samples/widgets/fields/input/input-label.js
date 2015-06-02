

var input1 = $.ergo({
	etype: 'input',
	cls: 'group',
	$label: {
		etype: 'label',
		text: '.com'
	}
});


var input2 = $.ergo({
	etype: 'input',
	cls: 'group',
	placeholder: '(___) _______',
	$label: {
		etype: 'label',
		text: '+7',
		weight: -10
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