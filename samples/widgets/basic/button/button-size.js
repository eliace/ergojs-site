
var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'
	},
	items: [{
		text: 'Giant',
		size: 'giant'
	}, {
		text: 'Huge',
		size: 'huge'
	}, {
		text: 'Large',
		size: 'large'
	}, {
		text: 'Default',
		size: 'medium'
	}, {
		text: 'Small',
		size: 'small'
	}, {
		text: 'Tiny',
		size: 'tiny'
	}]
});

