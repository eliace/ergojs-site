


w = $.ergo({
	etype: 'box',
	layout: 'bar',
	cls: 'region',
	defaultItem: {
		cls: 'box'
	},
	items: [{
		cls: 'box-large',
		text: 'box-large'
	}, {
		cls: 'box-medium',
		text: 'box-medium'
	}, {
		cls: 'box-small',
		text: 'box-small'
	}, {
		cls: 'box-tiny',
		text: 'box-tiny'
	}]
});

w.render('#sample');


