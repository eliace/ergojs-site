

var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'
	},
	items: [{
		text: 'Orange',
		as: 'orange'
	}, {
		text: 'Green',
		as: 'green'
	}, {
		text: 'Red',
		as: 'red'
	}, {
		text: 'Yellow',
		as: 'yellow'
	}, {
		text: 'Black',
		as: 'black'
	}, {
		text: 'Teal',
		as: 'teal'
	}, {
		text: 'Indigo',
		as: 'indigo'
	}, {
		text: 'Pink',
		as: 'pink'
	}, {
		text: 'Purple',
		as: 'purple'
	}]
});
