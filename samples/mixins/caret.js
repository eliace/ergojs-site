

var w = $.ergo({
	etype: 'box',
	defaultItem: {
		mixins: ['caret']
	},
	items: [
		{state: 'up'},
		{state: 'down'},
		{state: 'left'},
		{state: 'right'},
		{state: 'nw'},
		{state: 'ne'},
		{state: 'se'},
		{state: 'sw'},
	]
});

w.render('#sample');
