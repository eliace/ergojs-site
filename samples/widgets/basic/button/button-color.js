

var w = $.ergo({
	etype: 'box',
	cls: 'indented',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'		
	},
	items: [{
		text: 'Orange',
		cls: 'orange'
	}, {
		text: 'Green',
		cls: 'green'
	}, {
		text: 'Red',
		cls: 'red'
	}, {
		text: 'Yellow',
		cls: 'yellow'
	}, {
		text: 'Black',
		type: 'black'
	}, {
		text: 'Teal',
		type: 'teal'
	}, {
		text: 'Indigo',
		type: 'indigo'
	}, {
		text: 'Pink',
		type: 'pink'
	}, {
		text: 'Purple',
		type: 'purple'
	}]
});


