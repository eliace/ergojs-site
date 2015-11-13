
var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	items: [{
		etype: 'button',
		text: 'Selected',
		as: 'primary +selected'
	}, {
		etype: 'button',
		text: 'Disabled',
		as: 'primary +disabled'
	}]
});
