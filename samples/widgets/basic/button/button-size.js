
var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'
	},
	items: [{
		text: 'Giant',
		as: 'giant'
	}, {
		text: 'Huge',
		as: 'huge'
	}, {
		text: 'Large',
		as: 'large'
	}, {
		text: 'Default',
		as: 'medium'
	}, {
		text: 'Small',
		as: 'small'
	}, {
		text: 'Tiny',
		as: 'tiny'
	}]
});
