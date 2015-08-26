


var w = $.ergo({
	etype: 'box',
	include: 'selectable item-click-selection',
	cls: 'group buttons',
	defaultItem: {
		cls: 'inactive rised'
	},
	items: [{
		etype: 'button',
		cls: 'blue',
		text: 'ON'
	}, {
		etype: 'button',
		cls: 'green',
		text: 'OFF'
	}],
	index: 0
});


w.render('#sample');