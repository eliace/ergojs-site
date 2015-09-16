


var w = $.ergo({
	etype: 'box',
	include: 'selectable item-click-selection',
	as: 'group buttons',
	defaultItem: {
		as: 'inactive rised'
	},
	items: [{
		etype: 'button',
		as: 'blue',
		text: 'ON'
	}, {
		etype: 'button',
		as: 'green',
		text: 'OFF'
	}],
	index: 0
});


w.render('#sample');
