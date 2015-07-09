
var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'
	},
	items: [{
		text: 'Large',
		size: 'large'
	}, {
		text: 'Default',
	}, {
		text: 'Small',
		size: 'small'
	}, {
		text: 'Tiny',
		size: 'tiny'
	}]
});

