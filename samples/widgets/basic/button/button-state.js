
var w = $.ergo({
	etype: 'box',
	cls: 'indented',
	renderTo: '#sample',
	items: [{
		etype: 'button',
		text: 'Selected',
		state: 'primary selected'
	}, {
		etype: 'button',
		text: 'Disabled',
		state: 'primary disabled'
	}]
});

